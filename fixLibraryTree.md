این library_tree.py رو میخام تغییراتی بدم
این محتویات فعلیش : (import os

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


print("✅ LibraryTree.txt ساخته شد"))
میخام وقتی وارد شد 
py library_tree.py
سوالی پرسیده بشه
is Focus Language Or Package ? 
و دو حالت بیشتر نباید داشته باشه
1. اگر اسمی بغیر از لیست داخل پرانتز زیر وارد شد یا خالی اینتر وارد شد لیست کامل رو مثل قبل بده

2. ولی اگر اسمی که وارد شد در لیست زیر بود باید تمام زبان ها و پکیج ها فقط درس اول و محتوای درس اول و درس اخر و محتوای درس اخر رو نشون بده و بینشون سه نقطه بزاره فقط زبان یا پکیجی که انتخاب شد کامل نشون بده

(
    1. 01-html , html , htm

    2. 02-css , css

    3. 03-javascript , javascript , js

    4. 04-javascriptpackage , javascriptpackage , 
    javascript_package , javascript-package , js-package , js_package ,jspackage , js-pack , js_pack , jspack , 

    5. 05-typescript , typescript , ts

    6. 06-npm , npm

    7. 07-git&github , git&github , gitgithub , git-github , git_github

    8. 08-react , react , jsx , tsx

    9. 09-react-package , react-package , react_package , reactpackage , react-pack , react_pack , reactpack

    10. 10-tailwindcss , tailwindcss , tailwind , tailwind-css , tailwind_css

    11. 11-nextjs , nextjs , next , next_js , next-js

    12. 12-nextjs-package , nextjs-package , nextjs_package , nextjspackage ,nextjs-pack , nextjs_pack , nextjspack , next-package , next_package , nextpackage ,next-pack , next_pack , nextpack

    13. 13-nodejs , nodejs , node , node_js , node-js

    14. 14-nodejs-package , nodejs-package , nodejs_package , nodejspackage ,nodejs-pack , nodejs_pack , nodejspack , node-package , node_package , nodepackage , node-pack , node_pack , nodepack

    15. 15-databases , databases , database , db

    16. 16-vite , vite
)