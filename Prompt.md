# ==================================================
CURRENT PROGRESS

ES5: 01–24 completed.
ES6: 01–15 completed.
ES7: 01–25 completed.
ES9: 01–10 completed.

Now create ONLY:

11-LessonName
12-LessonName
13-LessonName
14-LessonName
15-LessonName

Do not modify any previous lesson.

# ==================================================
NEXT 5 LESSONS

Create exactly:

11-ES9AdvancedObjectInspection
12-ES9AsyncServiceArchitecture
13-ES9SharedMemoryConcepts
14-ES9AtomicsAndConcurrency
15-ES9AdvancedReportingSystem

# ==================================================
LESSON 11

Create a complete practical lesson about:

Advanced Object Inspection with ES9

Focus on:

- Object.getOwnPropertyDescriptors()
- property descriptors
- enumerable
- writable
- configurable
- value
- get
- set
- inspecting objects
- comparing object structures
- debugging object behavior
- validating configuration objects
- protecting important properties

Use realistic Node.js scenarios.

Include comparisons with:

Object.keys()
Object.values()
Object.entries()
Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptors()

Use realistic user, product, configuration,
and permission examples.

Do not use Object.fromEntries().

The lesson must deepen previous knowledge
without simply copying previous lessons.

# ==================================================
LESSON 12

Create a practical lesson about:

ES9 Async Service Architecture

Build on async/await knowledge from previous ES9 lessons.

Teach how to organize asynchronous logic into
small reusable service-style functions.

Include:

- async service functions
- await
- Promise
- Promise.all()
- sequential workflows
- independent data loading
- validation
- error handling
- service composition
- separating data loading from business logic
- API-style architecture
- Node.js application structure

Do not create additional files.

Keep everything inside the single LessonName.js file.

Use realistic examples such as:

- User service
- Product service
- Order service
- Report service

Do not use later Promise features.

# ==================================================
LESSON 13

Create a careful practical lesson about:

SharedArrayBuffer

Teach the actual ES9 concept:

- SharedArrayBuffer
- shared memory
- why shared memory exists
- memory sharing between execution contexts
- relationship with typed arrays
- basic creation and inspection
- security and architectural considerations
- browser versus Node.js considerations
- why shared memory is more advanced than normal arrays
- when it is appropriate
- when it should be avoided

IMPORTANT:

Do not pretend SharedArrayBuffer is a normal beginner
data structure.

Explain that practical usage commonly involves
worker-based execution environments.

Keep examples conservative and educational.

Do not use later JavaScript features.

Do not create unnecessary worker files.

If the Node.js environment differs from browser environments,
clearly explain the difference.

# ==================================================
LESSON 14

Create a practical lesson about:

Atomics and Shared Memory

Teach the ES9 Atomics API conceptually and practically.

Cover:

- Atomics
- shared memory
- atomic operations
- race conditions
- synchronization
- Atomics.add()
- Atomics.sub()
- Atomics.load()
- Atomics.store()
- Atomics.compareExchange()
- Atomics.exchange()
- Atomics.and()
- Atomics.or()
- Atomics.xor()
- why ordinary operations can be unsafe with shared memory

Explain how Atomics relates to:

SharedArrayBuffer

and why both belong to the same concurrency topic.

Use small, understandable examples.

Do not create a fake multi-threading system.

Do not claim that ordinary JavaScript arrays become thread-safe.

Explain limitations clearly.

Keep everything ES9-compatible.

# ==================================================
LESSON 15

Create a realistic ES9 advanced terminal reporting system.

This should be the most practical lesson in this batch.

Build a Node.js terminal application that combines:

- async
- await
- Promise
- Promise.all()
- Object.values()
- Object.entries()
- Object.getOwnPropertyDescriptors()
- padStart()
- padEnd()
- SharedArrayBuffer concepts where appropriate
- Atomics concepts where appropriate

The project should include:

- Users
- Roles
- Permissions
- Products
- Orders
- Sales
- Statistics
- Configuration
- Validation
- Async data loading
- Business logic
- Reports
- Terminal tables

Use many Sunni historical names.

Use English console output.

Use Persian JavaScript comments.

The project must remain understandable.

Do not add complexity only for size.

Every feature must have a learning purpose.

If SharedArrayBuffer or Atomics are demonstrated,
keep the demonstration isolated and clearly explain
why they are advanced features.

Do not force SharedArrayBuffer or Atomics into normal
business logic where they do not naturally belong.

# ==================================================
BATCH GOAL

11 → Advanced object inspection
12 → Async service architecture
13 → Shared memory concepts
14 → Atomics and concurrency
15 → Advanced reporting system

Each lesson must be more practical than the previous one.

Do not copy examples from previous ES9 lessons.

For each lesson create exactly:

LessonFolder/
    LessonName.js
    LessonName.exercise.js
    LessonName.md

Never create:

README.md
lesson.js
exercise.js

Do not create unnecessary files.

# ==================================================
LANGUAGE RULES — STRICT

Everything must be English EXCEPT:

1. JavaScript comments
2. Markdown (.md) files

Persian is forbidden everywhere else.

Folder names → English
File names → English
Variables → English
Functions → English
Objects → English
Arrays → English
Strings → English
Console output → English
JavaScript code → English

JavaScript comments → Persian ONLY
Markdown files → Persian ONLY

There must be ZERO Persian inside JavaScript code,
strings, variable names, function names, console.log output,
folder names, or file names.

ALL comments inside .js files MUST be Persian.

Never write English comments inside JavaScript files.

# ==================================================
SUNNI HISTORICAL NAMES

Whenever examples need people, users, customers, students,
employees, accounts, or other human examples, use Sunni historical names.

Use many different names and rotate them naturally.

Examples:

Muhammad
AbuBakr
Umar
Uthman
Ali
Hasan
Husayn
Hamza
Khadijah
Aisha
Hafsa
Fatimah
Talha
Zubair
Saad
Saeed
AbdurRahman
AbuUbaydah
KhalidBinWalid
Bilal
Salman
Ammar
AbdullahBinUmar
AbdullahBinAbbas
AbdullahBinMasud
AnasBinMalik
AbuHurairah
Jabir
Muadh
Ubayy
ZaydBinThabit
Usamah
Jafar
Abbas
AbuDharr
Miqdad
Hudhayfah
AmrBinAlAs
Muawiyah
UmarBinAbdulAziz

Do NOT use western names such as:

John
Michael
David
James
Robert
Alex
Daniel
William

Do not repeatedly use the same 2–3 names.

# ==================================================
MAIN JAVASCRIPT FILE

LessonName.js must contain:

- Practical examples
- Clean code
- Real programming scenarios
- Actual ES9 features where relevant
- Front-End relevance
- React preparation
- Node.js preparation
- Interview-relevant knowledge
- Real-world examples
- Persian comments only
- English code only
- English console output only

Prefer Node.js terminal execution.

Only use HTML/CSS when a browser environment is genuinely required.

Do not create HTML/CSS files just for demonstration.

# ==================================================
EXERCISE FILE

LessonName.exercise.js is the student's personal work.

NEVER solve the exercise.

Only provide Persian instructions in comments.

Use this format:

/*
تمرین شخصی

در این فایل باید موارد زیر را خودت پیاده‌سازی کنی.

1. ...
2. ...
3. ...
4. ...

بعد از انجام تمرین،
فایل باید بدون خطا اجرا شود:

node LessonName.exercise.js
*/

// کد خودت را از اینجا بنویس.

The exercise must be practical and directly related
to the lesson.

Do not put the solution anywhere.

Do not write solved code below the instructions.

# ==================================================
MARKDOWN RULE

Every .md file must be completely Persian.

Technical terms such as JavaScript, ES9, Node.js,
Array, Object, Promise, API, React, etc. may remain
in English when necessary.

Do NOT generate generic filler.

The Markdown must teach the actual subject.

Use this structure when appropriate:

# عنوان درس

---

## این مبحث چیست؟

---

## چرا از آن استفاده می‌کنیم؟

---

## چه زمانی استفاده می‌کنیم؟

---

## چه زمانی نباید استفاده کنیم؟

---

## تفاوت با مفاهیم مشابه

Use tables when useful.

---

## مثال‌های واقعی

Use realistic scenarios involving:

- Front-End
- React
- Node.js
- APIs
- Data processing
- Permissions
- Statistics
- User data
- Business logic

Only include examples relevant to the lesson.

---

## بهترین روش‌های استفاده

---

## اشتباهات رایج

---

## نکات بازار کار

Include:

- Real-world usage
- Front-End relevance
- React relevance
- Node.js relevance
- Interview points
- Code review points

---

## چک‌لیست یادگیری

---

## اجرای درس

For Node.js:

node LessonName.js

For the exercise:

node LessonName.exercise.js

Only use HTML/CSS when genuinely required.

---

## تمرین

Clearly explain the practical task.

Do NOT provide the solution.

# ==================================================
ES9 ACCURACY RULE — CRITICAL

ES9 means ECMAScript 2017.

The actual ES9 additions relevant to this course include:

- async functions
- await
- Object.values()
- Object.entries()
- Object.getOwnPropertyDescriptors()
- String.prototype.padStart()
- String.prototype.padEnd()
- trailing commas in function parameter lists and calls
- SharedArrayBuffer
- Atomics

Do NOT invent additional ES9 language features.

Do NOT present ES9+ or later features as ES9.

Do NOT use later ECMAScript features inside executable ES9 examples.

In particular, do NOT use:

- Object.fromEntries()
- Promise.prototype.finally()
- Promise.any()
- Promise.allSettled()
- async iteration
- for await...of
- optional chaining
- nullish coalescing
- BigInt
- dynamic import
- private class fields
- logical assignment operators
- Array.prototype.flat()
- Array.prototype.flatMap()
- ES2019+
- ES2020+
- ES2021+
- ES2022+
- ES2023+
- ES2024+
- ES2025+
- ES2026+

If later features are mentioned for comparison,
clearly label them as later ECMAScript features.

# ==================================================
IMPORTANT ES9 DESIGN RULE

Do not artificially use every ES9 feature in every lesson.

Each lesson should focus on its own subject.

Use ES9 features naturally.

Do not create examples that exist only to demonstrate
syntax without a realistic programming purpose.

# ==================================================
NO LATER FEATURES

Do not use:

- Object.fromEntries()
- Promise.prototype.finally()
- Promise.any()
- Promise.allSettled()
- Array.prototype.flat()
- Array.prototype.flatMap()
- async generators
- for await...of
- optional chaining
- nullish coalescing
- BigInt
- dynamic import
- private fields
- logical assignment operators
- ES2019+
- ES2020+
- ES2021+
- ES2022+
- ES2023+
- ES2024+
- ES2025+
- ES2026+

Keep executable code compatible with ES9.

# ==================================================
IMPORTANT PROJECT RULE

Do not add features simply to make the project larger.

Do not use:

- external npm packages
- frameworks
- databases
- browser APIs unless genuinely required
- unnecessary files
- unnecessary abstractions

Keep everything runnable with:

node LessonName.js

# ==================================================
PROGRESSIVE DIFFICULTY

Each batch must follow a logical progression.

Lessons should become progressively more practical
and more advanced.

Do not copy previous lessons.

# ==================================================
NO MODIFICATION RULE

Previously completed lessons must remain untouched.

Do not rename them.
Do not rewrite them.
Do not delete them.
Do not add files to them.

Only create the five new lessons requested in the
current batch.

# ==================================================
FINAL VERIFICATION

Generate EXACTLY 5 complete lessons.

For every lesson create exactly:

1. LessonName.js
2. LessonName.exercise.js
3. LessonName.md

Total:

5 folders
15 new files

Before finishing, verify:

- All five requested lessons exist
- Every folder contains all 3 files
- Previous lessons remain untouched
- No previous lesson was modified
- No duplicate lesson was created
- No unnecessary files were created
- JavaScript comments are Persian
- JavaScript code is English
- JavaScript strings are English
- Console output is English
- Folder names are English
- File names are English
- Markdown files are Persian
- Exercise files contain instructions only
- Exercises are NOT solved
- No HTML/CSS was created unnecessarily
- No ES9+ feature is incorrectly presented as ES9
- Object.fromEntries() is NOT used
- Promise.finally() is NOT used
- Promise.any() is NOT used
- Promise.allSettled() is NOT used
- async iteration is NOT used
- optional chaining is NOT used
- nullish coalescing is NOT used
- BigInt is NOT used
- No later ECMAScript syntax is used
- All Node.js examples can be executed from Terminal
- All five main .js files run successfully

MOST IMPORTANT:

Do not stop after one lesson.
Do not stop after two lessons.
Do not stop after three lessons.
Do not stop after four lessons.

Finish ALL FIVE lessons before ending.

Do not claim that files were created unless they were actually
created in the workspace.

At the end, report the exact five folders and the exact 15 files created.