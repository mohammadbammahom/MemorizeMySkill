import os

ROOT = "."

# -----------------------------
# Ignore Folders
# -----------------------------
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

# -----------------------------
# Focus Map
# -----------------------------
FOCUS_MAP = {
    "01-HTML": [
        "01-html",
        "html",
        "htm",
    ],

    "02-CSS": [
        "02-css",
        "css",
    ],

    "03-JavaScript": [
        "03-javascript",
        "javascript",
        "js",
    ],

    "04-JavaScript-Package": [
        "04-javascriptpackage",
        "javascriptpackage",
        "javascript_package",
        "javascript-package",
        "js-package",
        "js_package",
        "jspackage",
        "js-pack",
        "js_pack",
        "jspack",
    ],

    "05-TypeScript": [
        "05-typescript",
        "typescript",
        "ts",
    ],

    "06-npm": [
        "06-npm",
        "npm",
    ],

    "07-Git&GitHub": [
        "07-git&github",
        "git&github",
        "gitgithub",
        "git-github",
        "git_github",
    ],

    "08-React": [
        "08-react",
        "react",
        "jsx",
        "tsx",
    ],

    "09-React-Package": [
        "09-react-package",
        "react-package",
        "react_package",
        "reactpackage",
        "react-pack",
        "react_pack",
        "reactpack",
    ],

    "10-TailwindCSS": [
        "10-tailwindcss",
        "tailwindcss",
        "tailwind",
        "tailwind-css",
        "tailwind_css",
    ],

    "11-NextJS": [
        "11-nextjs",
        "nextjs",
        "next",
        "next_js",
        "next-js",
    ],

    "12-NextJS-Package": [
        "12-nextjs-package",
        "nextjs-package",
        "nextjs_package",
        "nextjspackage",
        "nextjs-pack",
        "nextjs_pack",
        "nextjspack",
        "next-package",
        "next_package",
        "nextpackage",
        "next-pack",
        "next_pack",
        "nextpack",
    ],

    "13-NodeJS": [
        "13-nodejs",
        "nodejs",
        "node",
        "node_js",
        "node-js",
    ],

    "14-NodeJS-Package": [
        "14-nodejs-package",
        "nodejs-package",
        "nodejs_package",
        "nodejspackage",
        "nodejs-pack",
        "nodejs_pack",
        "nodejspack",
        "node-package",
        "node_package",
        "nodepackage",
        "node-pack",
        "node_pack",
        "nodepack",
    ],

    "15-DataBases": [
        "15-databases",
        "databases",
        "database",
        "db",
    ],

    "16-Vite": [
        "16-vite",
        "vite",
    ],
}

output = []

# -----------------------------
# Helpers
# -----------------------------
def list_items(path):
    """
    Return sorted items excluding ignored folders/files.
    """

    try:
        items = sorted(os.listdir(path))
    except PermissionError:
        return []

    result = []

    for item in items:

        if item.lower() in {
            x.lower()
            for x in IGNORE
        }:
            continue

        result.append(item)

    return result

def get_focus():

    text = input(
        "Is Focus Language Or Package? (Press Enter = Full Library): "
    ).strip().lower()

    if text == "":
        return None

    for folder, aliases in FOCUS_MAP.items():

        if text == folder.lower():
            return folder

        if text in aliases:
            return folder

    return None


FOCUS_FOLDER = get_focus()

# ---------------------------------------
# Tree Helpers
# ---------------------------------------

def add_folder(prefix, branch, name, is_root=False):
    """
    Add folder line.
    Root folders start with '#'.
    """

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
    output.append(prefix + branch + "📄 " + name)


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


# ---------------------------------------
# Expand Folder Until Files
# ---------------------------------------

def expand_until_files(path, prefix):
    """
    Open folders recursively until real files
    are found.

    Example:

    01-ES5
        01-var
            var.js
            var.md
    """

    items = list_items(path)

    for index, item in enumerate(items):

        full = os.path.join(path, item)

        last = index == len(items) - 1

        branch = "└───" if last else "├───"

        if os.path.isdir(full):

            add_folder(prefix, branch, item)

            new_prefix = prefix + (
                "    "
                if last
                else "│   "
            )

            child_files = get_child_files(full)
            child_dirs = get_child_folders(full)

            if child_files:
                expand_until_files(full, new_prefix)

            elif child_dirs:
                expand_until_files(full, new_prefix)

        else:

            add_file(
                prefix,
                branch,
                item,
            )


# ---------------------------------------
# Summary Folder
# ---------------------------------------

def tree_summary(path, prefix):

    folders = get_child_folders(path)

    files = get_child_files(path)

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
                file,
            )

        return

    display = []

    display.append(folders[0])

    if len(folders) > 2:
        display.append("...")

    if len(folders) > 1:
        display.append(folders[-1])

    for i, name in enumerate(display):

        is_last = (
            i == len(display) - 1
            and not files
        )

        branch = "└───" if is_last else "├───"

        if name == "...":
            output.append(prefix + branch + "...")
            continue

        folder_path = os.path.join(path, name)

        add_folder(prefix, branch, name)

        new_prefix = prefix + (
            "    " if is_last else "│   "
        )

        # مهم:
        # فقط درس اول و آخر را تا رسیدن به فایل‌ها باز کن
        expand_until_files(folder_path, new_prefix)

    for index, file in enumerate(files):

        branch = (
            "└───"
            if index == len(files) - 1
            else "├───"
        )

        add_file(prefix, branch, file)


# ---------------------------------------
# Main Tree
# ---------------------------------------

def tree(path, prefix=""):

    items = list_items(path)

    for index, item in enumerate(items):

        full = os.path.join(path, item)

        last = index == len(items) - 1

        branch = "└───" if last else "├───"

        if os.path.isdir(full):

            is_root = os.path.abspath(path) == os.path.abspath(ROOT)

            add_folder(
                prefix,
                branch,
                item,
                is_root=is_root,
            )

            if is_root:
                new_prefix = "  "
            else:
                new_prefix = prefix + (
                    "    "
                    if last
                    else "│   "
                )

            # اگر حالت Focus فعال باشد،
            # فقط پوشه انتخاب شده کامل نمایش داده شود
            if (
                FOCUS_FOLDER
                and is_root
                and item in FOCUS_MAP
                and item != FOCUS_FOLDER
            ):

                tree_summary(
                    full,
                    new_prefix,
                )

            else:

                tree(
                    full,
                    new_prefix,
                )

        else:

            add_file(
                prefix,
                branch,
                item,
            )


# ---------------------------------------
# Run
# ---------------------------------------

tree(ROOT)

with open(
    "LibraryTree.txt",
    "w",
    encoding="utf-8",
) as f:
    f.write("\n".join(output))

print("✅ LibraryTree.txt Created/Updated.")