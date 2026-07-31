# عنوان درس

## این مبحث چیست؟

- `overflow` در CSS برای کنترل محتوای بیش از حد container استفاده می‌شود.
- حالت‌های اصلی `visible`, `hidden`, `clip`, `auto` و `scroll` هستند.
- در حالت پیشرفته، `overflow-x` و `overflow-y` به‌صورت مجزا می‌توانند کنترل شوند.

## چرا از آن استفاده می‌کنیم؟

- برای جلوگیری از شکستن layout
- برای اجرای scroll در components با content زیاد
- برای clipping و safe hide در UI های حرفه‌ای

## چه زمانی استفاده می‌کنیم؟

- وقتی content باید در یک wrapper محدود شود
- وقتی list یا feed باید scrollable باشد
- وقتی UI باید overflow را intentionally کنترل کند

## چه زمانی نباید استفاده کنیم؟

- وقتی content باید در کل صفحه خوانده شود
- وقتی scrollbars غیرضروری به UI اضافه می‌شوند
- وقتی overflow hidden برای کنترل بدون نیاز واقعی استفاده می‌شود

## تفاوت با روش‌های مشابه

- `overflow: hidden` محتوای بیرون را پنهان می‌کند.
- `overflow: auto` اگر لازم باشد scrollbar می‌سازد.
- `overflow: scroll` همیشه scrollbar می‌سازد.
- `overflow: clip` محتوای overflow را قطع و بیشتر در کارهاى modern استفاده می‌شود.

## بهترین روش‌های استفاده

- برای panelهای محدود از `overflow: auto` استفاده کن.
- برای safety از `overflow: hidden` در containers با محتواهای decorative استفاده کن.
- برای scrollable tables و lists از `overflow: auto` همراه با height مشخص بهره ببر.

## اشتباهات رایج

- استفاده از `overflow: hidden` برای همه‌ی containerها
- عدم تنظیم height در scrollable containers
- استفاده از `scroll` به‌جای `auto` بدون نیاز

## نکات بازار کار

- Overflow control در table، sidebar، feed، popups و cards مهم است.
- UI engineer باید بین usability و compact layout balance برقرار کند.
- بسیاری از پروژه‌های real-world به overflow control دقیق نیاز دارند.

## چک‌لیست یادگیری

- [ ] `visible`, `hidden`, `auto`, `scroll`, `clip` را می‌شناسم.
- [ ] `overflow-x` و `overflow-y` را می‌توانم به کار ببرم.
- [ ] scrollable panel را درست می‌سازم.
- [ ] overflow behavior را برای هر container deliberate انتخاب می‌کنم.

## تمرین

اکنون فایل OverflowAdvanced.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک scrollable feed با `overflow: auto` بساز.
2. یک sidebar یا panel با `overflow: hidden` و clipped content بساز.
3. یک message list با `overflow-y: auto` و fixed height بساز.
4. یک table wrapper با horizontal scroll بساز.
5. یک product card با text overflow hidden بساز.
6. یک gallery با overflow scroll design بساز.
7. یک message preview area با clip و hidden overlay بساز.
8. یک dashboard matrix با overflow-x scroll بساز.
9. یک modal-like panel با adaptive overflow behavior بساز.
10. یک UI component با overflow pattern حرفه‌ای طراحی کن.

## درس بعدی

در درس بعدی، `Sticky Layouts` در context‌های مختلف بررسی می‌شود.

## پیش‌نیازها

- Position
- Overflow
