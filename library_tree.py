import os
from library_tree_list import FOCUS_MAP, SUB_FOCUS_MAP

ROOT = "."

# ============================================================
# Ignore Folders / Files
# ============================================================

IGNORE = {
    ".git",
    "node_modules",
    "dist",
    "build",
    "__pycache__",
    ".next",
    ".vscode",
    ".venv",
    "venv",
    "env",
    ".env",
    ".idea",
    ".pytest_cache",
    ".mypy_cache",
    ".gitignore",
}

# ============================================================
# Output
# ============================================================

output = []

# ============================================================
# Helpers
# ============================================================

def normalize_name(name):
    """
    Normalize names for comparison.

    Examples:
        JavaScript -> javascript
        JS-Package -> jspackage
        js_package -> jspackage
    """

    return (
        name
        .strip()
        .lower()
        .replace("-", "")
        .replace("_", "")
        .replace(" ", "")
    )


def list_items(path):
    """
    Return sorted files/folders excluding ignored items.
    """

    try:
        items = sorted(os.listdir(path))
    except PermissionError:
        return []

    result = []

    ignored = {x.lower() for x in IGNORE}

    for item in items:

        if item.lower() in ignored:
            continue

        result.append(item)

    return result


def get_child_folders(path):

    folders = []

    for item in list_items(path):

        full = os.path.join(path, item)

        if os.path.isdir(full):
            folders.append(item)

    return folders


def get_child_files(path):

    files = []

    for item in list_items(path):

        full = os.path.join(path, item)

        if os.path.isfile(full):
            files.append(item)

    return files


# ============================================================
# Focus Helpers
# ============================================================

def resolve_focus_name(text):
    """
    Convert a focus alias into the real folder name.

    Example:

        js
        javascript
        03-javascript

    all become:

        03-JavaScript
    """

    normalized = normalize_name(text)

    for folder, aliases in FOCUS_MAP.items():

        if normalize_name(folder) == normalized:
            return folder

        for alias in aliases:

            if normalize_name(alias) == normalized:
                return folder

    return None

def resolve_subfocus_name(parent, text):
    """
    Convert a sub-focus alias into the real folder name.

    Example:

        parent = 03-JavaScript
        text = es10

    returns:

        06-ES10-2019
    """

    normalized = normalize_name(text)

    # ---------------------------------------------
    # Get sub-focus map for parent
    # ---------------------------------------------

    sub_map = SUB_FOCUS_MAP.get(parent, {})

    # ---------------------------------------------
    # Check real folder names
    # ---------------------------------------------

    for folder, aliases in sub_map.items():

        if normalize_name(folder) == normalized:
            return folder

        for alias in aliases:

            if normalize_name(alias) == normalized:
                return folder

    return None

def find_folder(path, name):
    """
    Find a real child folder.

    First tries exact comparison,
    then normalized comparison.
    """

    folders = get_child_folders(path)

    # Exact match
    for folder in folders:

        if folder.lower() == name.lower():
            return folder

    # Normalized match
    normalized = normalize_name(name)

    for folder in folders:

        if normalize_name(folder) == normalized:
            return folder

    return None


def get_focus():

    text = input(
        "Focus Path (example javascript/es5) (Enter = Full Library): "
    ).strip().lower()

    if text == "":
        return None

    parts = [
        part.strip()
        for part in text.replace("\\", "/").split("/")
        if part.strip()
    ]

    if not parts:
        return None

    result = []

    # --------------------------------------------------------
    # First level
    # --------------------------------------------------------

    first = resolve_focus_name(parts[0])

    if first:
        result.append(first)
    else:
        # اگر در Focus Map نبود، همان چیزی که کاربر نوشته
        # به عنوان مسیر واقعی استفاده می‌شود.
        result.append(parts[0])

    # --------------------------------------------------------
    # Remaining levels
    # --------------------------------------------------------

    for part in parts[1:]:
        result.append(part)

    return result


# ============================================================
# Output Helpers
# ============================================================

def add_folder(prefix, branch, name, is_root=False):

    if is_root:

        output.append(
            "# "
            + branch
            + "📁 "
            + name
        )

    else:

        output.append(
            prefix
            + branch
            + "📁 "
            + name
        )


def add_file(prefix, branch, name):

    output.append(
        prefix
        + branch
        + "📄 "
        + name
    )


# ============================================================
# Expand Until Files
# ============================================================

def expand_until_files(path, prefix):
    """
    Recursively expand a folder until files are reached.
    """

    items = list_items(path)

    for index, item in enumerate(items):

        full = os.path.join(path, item)

        last = index == len(items) - 1

        branch = "└───" if last else "├───"

        if os.path.isdir(full):

            add_folder(
                prefix,
                branch,
                item
            )

            new_prefix = prefix + (
                "    "
                if last
                else "│   "
            )

            expand_until_files(
                full,
                new_prefix
            )

        else:

            add_file(
                prefix,
                branch,
                item
            )


# ============================================================
# Summary Folder
# ============================================================

def tree_summary(path, prefix):
    """
    Show only first and last child folders,
    while expanding their contents.

    Example:

    ├───📁 01-ES5
    │   ...
    └───📁 20-ES20
    """

    folders = get_child_folders(path)
    files = get_child_files(path)

    # --------------------------------------------------------
    # Only files
    # --------------------------------------------------------

    if not folders:

        for i, file in enumerate(files):

            branch = (
                "└───"
                if i == len(files) - 1
                else "├───"
            )

            add_file(
                prefix,
                branch,
                file
            )

        return

    # --------------------------------------------------------
    # Select first / ... / last
    # --------------------------------------------------------

    display = []

    display.append(folders[0])

    if len(folders) > 2:
        display.append("...")

    if len(folders) > 1:
        display.append(folders[-1])

    # --------------------------------------------------------
    # Print selected folders
    # --------------------------------------------------------

    for index, name in enumerate(display):

        is_last = (
            index == len(display) - 1
            and not files
        )

        branch = (
            "└───"
            if is_last
            else "├───"
        )

        if name == "...":

            output.append(
                prefix
                + branch
                + "..."
            )

            continue

        folder_path = os.path.join(path, name)

        add_folder(
            prefix,
            branch,
            name
        )

        new_prefix = prefix + (
            "    "
            if is_last
            else "│   "
        )

        expand_until_files(
            folder_path,
            new_prefix
        )

    # --------------------------------------------------------
    # Files directly inside this folder
    # --------------------------------------------------------

    for index, file in enumerate(files):

        branch = (
            "└───"
            if index == len(files) - 1
            else "├───"
        )

        add_file(
            prefix,
            branch,
            file
        )


# ============================================================
# Focus Tree
# ============================================================

def tree_focus(path, prefix, targets, parent_focus=None):
    """
    Follow a specific focus path.

    Example:

        js/es10

    becomes:

        03-JavaScript
            06-ES10-2019

    Only the selected subtree will be shown.
    """

    # ========================================================
    # Focus finished
    # ========================================================

    if not targets:

        tree(
            path,
            prefix
        )

        return

    wanted = targets[0]

    # ========================================================
    # Resolve sub-focus alias
    # ========================================================

    found_folder = None

    if parent_focus:

        found_folder = resolve_subfocus_name(
            parent_focus,
            wanted
        )

    # ========================================================
    # Fallback: try normal folder search
    # ========================================================

    if found_folder is None:

        found_folder = find_folder(
            path,
            wanted
        )

    # ========================================================
    # Folder not found
    # ========================================================

    if found_folder is None:

        output.append(
            prefix
            + "└───❌ Focus not found: "
            + wanted
        )

        return

    # ========================================================
    # Full path
    # ========================================================

    full = os.path.join(
        path,
        found_folder
    )

    child_targets = targets[1:]

    # ========================================================
    # Focus finished
    # ========================================================

    if not child_targets:

        add_folder(
            prefix,
            "└───",
            found_folder
        )

        tree(
            full,
            prefix + "    "
        )

        return

    # ========================================================
    # More targets
    # ========================================================

    add_folder(
        prefix,
        "└───",
        found_folder
    )

    tree_focus(
        full,
        prefix + "    ",
        child_targets,
        parent_focus=found_folder
    )

# ============================================================
# Main Tree
# ============================================================

def tree(path, prefix=""):

    items = list_items(path)

    for index, item in enumerate(items):

        full = os.path.join(
            path,
            item
        )

        last = index == len(items) - 1

        branch = (
            "└───"
            if last
            else "├───"
        )

        # ====================================================
        # Folder
        # ====================================================

        if os.path.isdir(full):

            is_root = (
                os.path.abspath(path)
                == os.path.abspath(ROOT)
            )

            add_folder(
                prefix,
                branch,
                item,
                is_root=is_root
            )

            # ------------------------------------------------
            # ROOT PREFIX
            # ------------------------------------------------

            if is_root:

                # خیلی مهم:
                #
                # اگر root آخرین پوشه نیست:
                #
                #   # ├───📁 09-React-Package
                #     │   ├───📁 ...
                #
                # اگر آخرین root است:
                #
                #   # └───📁 16-Vite
                #
                if last:
                    new_prefix = "    "
                else:
                    new_prefix = "  │   "

            # ------------------------------------------------
            # NORMAL PREFIX
            # ------------------------------------------------

            else:

                new_prefix = prefix + (
                    "    "
                    if last
                    else "│   "
                )

            # =================================================
            # FOCUS MODE
            # =================================================

            if FOCUS_PATH and is_root:

                # ---------------------------------------------
                # This is selected root
                # ---------------------------------------------

                selected_root = (
                    normalize_name(item)
                    == normalize_name(FOCUS_PATH[0])
                )

                if selected_root:

                    # -----------------------------------------
                    # Example:
                    #
                    # html
                    #
                    # فقط HTML
                    # -----------------------------------------

                    if len(FOCUS_PATH) == 1:

                        tree(
                            full,
                            new_prefix
                        )

                    # -----------------------------------------
                    # Example:
                    #
                    # js/es10
                    #
                    # فقط ES10
                    # -----------------------------------------

                    else:

                        tree_focus(
                            full,
                            new_prefix,
                            FOCUS_PATH[1:],
                            parent_focus=item
                        )

                # ---------------------------------------------
                # Other root folders
                # ---------------------------------------------

                else:

                    tree_summary(
                        full,
                        new_prefix
                    )

            # =================================================
            # NORMAL FULL TREE
            # =================================================

            else:

                tree(
                    full,
                    new_prefix
                )

        # ====================================================
        # File
        # ====================================================

        else:

            add_file(
                prefix,
                branch,
                item
            )


# ============================================================
# Run
# ============================================================

FOCUS_PATH = get_focus()

tree(ROOT)

with open(
    "LibraryTree.txt",
    "w",
    encoding="utf-8"
) as f:

    f.write(
        "\n".join(output)
    )

print(
    "✅ LibraryTree.txt Created/Updated."
)