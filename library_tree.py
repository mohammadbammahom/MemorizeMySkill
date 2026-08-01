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
    ".vscode"
}

output = []


def tree(path, prefix=""):
    try:
        items = sorted(os.listdir(path))
    except PermissionError:
        return

    items = [x for x in items if x not in IGNORE]

    for index, item in enumerate(items):
        full_path = os.path.join(path, item)

        last = index == len(items) - 1

        branch = "└───" if last else "├───"

        if os.path.isdir(full_path):
            output.append(prefix + branch + "📁 " + item)

            new_prefix = prefix + ("    " if last else "│   ")

            tree(full_path, new_prefix)

        else:
            output.append(prefix + branch + "📄 " + item)


tree(ROOT)


with open("LibraryTree.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(output))


print("✅ LibraryTree.txt ساخته شد")