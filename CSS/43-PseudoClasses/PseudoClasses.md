# عنوان درس

## این مبحث چیست؟

- `:hover` برای حالت mousover بر روی عنصر استفاده می‌شود.
- `:focus` برای state زمانی که عنصر قابل focus است به کار می‌رود.
- `:active` برای حالت click/press استفاده می‌شود.
- `:visited` برای لینک‌های بازدیدشده به کار می‌رود.
- `:first-child` و `:last-child` برای انتخاب اولین و آخرین فرزند یک parent استفاده می‌شوند.
- `:nth-child()` برای انتخاب فرزندان بر اساس شمارش استفاده می‌شود.
- `:not()` برای حذف انتخاب‌های خاص از نتیجه استفاده می‌شود.
- `:is()` و `:where()` برای group selector و specificity-aware selection استفاده می‌شوند.

## چرا از آن استفاده می‌کنیم؟

- برای reaction stateهای interaction و usability
- برای کنترل list و navigation patterns
- برای ایجاد selector power و concise rules

## چه زمانی استفاده می‌کنیم؟

- وقتی باید hover، focus و pressed states تعریف شوند
- وقتی item list باید `first/last/nth` styling داشته باشد
- وقتی یک گروه از عناصر باید به‌صورت selective styled شوند

## چه زمانی نباید استفاده کنیم؟

- وقتی selectors به‌صورت پیچیده و غیرخوانا می‌شوند
- وقتی dynamic states بدون نیاز کلیه UI را پیچیده می‌کنند
- وقتی `:not()` یا `:is()` برای debug و maintainability مشکل می‌سازند

## تفاوت با روش‌های مشابه

- `:hover` و `:focus` state-based‌اند.
- `:first-child` و `:nth-child()` structural‌اند.
- `:is()` و `:where()` برای grouping و selector simplification هستند.
- `:not()` برای exclusion logic استفاده می‌شود.

## بهترین روش‌های استفاده

- برای navigation، button و links از `:hover` و `:focus` استفاده کن.
- `:nth-child()` را برای list و grid item pattern به‌صورت International استفاده کن.
- `:is()` و `:where()` را برای selector simplification در design systems به کار ببر.
- برای readability، `:not()` را با intent روشن و limited به‌کار ببر.

## اشتباهات رایج

- selectorهای خیلی پیچیده و نامفهوم
- استفاده از `:hover` به‌عنوان جایگزین real state logic
- عدم توجه به accessibility در `:focus`
- استفاده از `:visited` برای ظاهر نامتعادل

## نکات بازار کار

- این selectors در UI engineering و component styling بسیار مهم‌اند.
- در مصاحبه‌ها، انتخاب بین `:is()` و `:where()` و understanding specificity خیلی مهم است.
- یک engineer خوب باید بتواند selectors را هم از جنبهٔ عملکرد و هم maintainability انتخاب کند.

## چک‌لیست یادگیری

- [ ] `:hover`, `:focus`, `:active`, `:visited` را می‌شناسم.
- [ ] `:first-child`, `:last-child`, `:nth-child()` را می‌نویسم.
- [ ] `:not()`, `:is()` و `:where()` را می‌فهمم.
- [ ] state و structure selectors را در component طراحی استفاده می‌کنم.

## تمرین

اکنون فایل

PseudoClasses.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک nav link group با `:hover` و `:focus` state بساز.
2. یک task list با `:first-child` و `:last-child` styling بساز.
3. یک product grid با `:nth-child()` برای alternate row pattern بساز.
4. یک admin table با `:not()` برای excluding specific rows بساز.
5. یک form component با `:active` و `:visited` state مناسب بساز.
6. یک card list با `:is()` برای shared group states بساز.
7. یک widget set با `:where()` برای low-specificity selector بساز.
8. یک left-side menu که `:focus` و `:hover` در همان زمان effect داشته باشد بساز.
9. یک quiz list یا steps list با structural selectors حرفه‌ای بساز.
10. یک complex selector showcase برای reusable UI component بساز.

## درس بعدی

در درس بعدی، `Pseudo Elements` و `::before`, `::after`, `::placeholder`, `::selection` و `::marker` بررسی می‌شوند.

## پیش‌نیازها

- Transitions
- CSSVariables
