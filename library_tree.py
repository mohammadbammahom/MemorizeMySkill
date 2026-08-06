import os

ROOT = "."

# پوشه‌هایی که نمایش داده نشوند
IGNORE = {
    ".git",
    "node_modules",
    "dist",
    "build",
    "__pycache__",
    ".next",
    ".vscode",
}

# نام پوشه‌ها و Aliasها
FOCUS_MAP = {
    "01-HTML": ["01-html", "html", "htm"],
    "02-CSS": ["02-css", "css"],
    "03-JavaScript": ["03-javascript", "javascript", "js"],
    "03-JavaScript-Package": [
        "04-javascriptpackage",
        "javascript_package",
        "javascript-package",
        "javascriptpackage",
        "js_package",
        "js-package",
        "jspackage",
        "js_pack",
        "js-pack",
        "jspack",
    ],
    "04-TypeScript": ["05-typescript", "typescript", "ts"],
    "05-Git&GitHub": [
        "07-git&github",
        "git&github",
        "git_github",
        "git-github",
        "gitgithub",
    ],
    "06-npm": ["06-npm", "npm"],
    "07-React": ["08-react", "react", "jsx", "tsx"],
    "07-React-Package": [
        "09-react-package",
        "react-package",
        "react_package",
        "reactpackage",
        "react-pack",
        "react_pack",
        "reactpack",
    ],
    "08-TailwindCSS": [
        "10-tailwindcss",
        "tailwind_css",
        "tailwind-css",
        "tailwindcss",
        "tailwind",
    ],
    "09-NextJS": [
        "11-nextjs",
        "next_js",
        "next-js",
        "nextjs",
        "next",
    ],
    "09-NextJS-Package": [
        "12-nextjs-package",
        "nextjs_package",
        "nextjs-package",
        "nextjspackage",
        "nextjs_pack",
        "nextjs-pack",
        "nextjspack",
        "next_package",
        "next-package",
        "nextpackage",
        "next_pack",
        "next-pack",
        "nextpack",
    ],
    "10-NodeJS": [
        "13-nodejs",
        "nodejs",
        "node",
        "node_js",
        "node-js",
    ],
    "10-NodeJS-Package": [
        "14-nodejs-package",
        "nodejs_package",
        "nodejs-package",
        "nodejspackage",
        "node-package",
        "node_package",
        "nodejs-pack",
        "nodejs_pack",
        "nodepackage",
        "nodejspack",
        "node-pack",
        "node_pack",
        "nodepack",
    ],
    "11-DataBases": [
        "15-databases",
        "databases",
        "database",
        "db",
    ],
    "12-Vite": ["16-vite", "vite"],
}


def get_focus():
    text = input(
        "Is Focus Language Or Package? (Press Enter for Full Library): "
    ).strip().lower()

    if not text:
        return None

    for folder, aliases in FOCUS_MAP.items():
        if text in aliases:
            return folder

    return None


FOCUS_FOLDER = get_focus()

output = []


def list_items(path):
    try:
        items = sorted(os.listdir(path))
    except PermissionError:
        return []

    return [i for i in items if i not in IGNORE]


def tree(path, prefix=""):
    items = list_items(path)

    for index, item in enumerate(items):
        full = os.path.join(path, item)

        last = index == len(items) - 1
        branch = "└───" if last else "├───"

        if os.path.isdir(full):
            output.append(prefix + branch + "📁 " + item)

            new_prefix = prefix + ("    " if last else "│   ")

            if (
                FOCUS_FOLDER
                and path == ROOT
                and item != FOCUS_FOLDER
                and item in FOCUS_MAP
            ):
                tree_summary(full, new_prefix)
            else:
                tree(full, new_prefix)

        else:
            output.append(prefix + branch + "📄 " + item)


def tree_summary(path, prefix):
    items = list_items(path)

    folders = [
        i for i in items
        if os.path.isdir(os.path.join(path, i))
    ]

    files = [
        i for i in items
        if os.path.isfile(os.path.join(path, i))
    ]

    if folders:
        first = folders[0]
        last = folders[-1]

        summary = []

        summary.append(first)

        if len(folders) > 2:
            summary.append("...")

        if len(folders) > 1:
            summary.append(last)

        for i, name in enumerate(summary):
            is_last = (
                i == len(summary) - 1
                and len(files) == 0
            )

            branch = "└───" if is_last else "├───"

            if name == "...":
                output.append(prefix + branch + "...")
                continue

            folder_path = os.path.join(path, name)

            output.append(prefix + branch + "📁 " + name)

            sub_prefix = prefix + (
                "    " if is_last else "│   "
            )

            children = list_items(folder_path)

            for j, child in enumerate(children):
                last_child = j == len(children) - 1

                child_branch = (
                    "└───"
                    if last_child
                    else "├───"
                )

                icon = (
                    "📁"
                    if os.path.isdir(os.path.join(folder_path, child))
                    else "📄"
                )

                output.append(
                    sub_prefix
                    + child_branch
                    + icon
                    + " "
                    + child
                )

    for i, file in enumerate(files):
        branch = (
            "└───"
            if i == len(files) - 1
            else "├───"
        )

        output.append(prefix + branch + "📄 " + file)


tree(ROOT)

with open(
    "LibraryTree.jsx",
    "w",
    encoding="utf-8",
) as f:
    f.write("\n".join(output))

print("✅ LibraryTree.txt Created/Updated.")