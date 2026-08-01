# عنوان درس

## این مبحث چیست؟

- `width` و `height` اندازه‌ی اصلی عناصر را مشخص می‌کنند.
- `min-width`، `max-width`، `min-height` و `max-height` محدودیت‌های بزرگ و کوچک برای sizing را تنظیم می‌کنند.
- `fit-content`، `max-content` و `min-content` برای sizing محتوامحور در layout‌های حرفه‌ای به کار می‌روند.

## چرا از آن استفاده می‌کنیم؟

- برای کنترل دقیق width و height
- برای جلوگیری از overflow در عناصر با content متغیر
- برای ساخت layoutهای قابل پیش‌بینی
- برای optimized sizing در componentها و cards

## چه زمانی استفاده می‌کنیم؟

- برای cards و form fields، `width` و `max-width` مناسب‌اند.
- برای جلوگیری از width بیش از حد، `max-width` استفاده می‌شود.
- برای محتوای adaptive، `fit-content` و `min-content` کاربرد دارند.
- برای محدود کردن content growth در پیچیدگی‌های UI، `max-height` و `min-height` مهم هستند.

## چه زمانی نباید استفاده کنیم؟

- وقتی width و height بدون reason ثابت شده‌اند.
- وقتی `max-content` در layout بسیار پیچیده باعث overflow می‌شود.
- وقتی `min-width` به شکلی اشتباه مقدار زیادی برای mobile در نظر گرفته می‌شود.

## تفاوت با روش‌های مشابه

- `width` حداقل یا حداکثر ندارد و فقط value مشخص را اعمال می‌کند.
- `min-width` از کوچک‌تر شدن عنصر جلوگیری می‌کند.
- `max-width` از بزرگ‌تر شدن زیاد جلوگیری می‌کند.
- `fit-content` اندازه را بر اساس محتوا با محدودیت خاص تعیین می‌کند.
- `max-content` عنصر را به اندازه‌ی کامل محتوا می‌گیرد.
- `min-content` کم‌ترین اندازه‌ی قابل اجرا برای محتوا را مشخص می‌کند.

## بهترین روش‌های استفاده

- در cards و inputها از `max-width` و `width` ترکیبی استفاده کن.
- در layoutهای responsive، `min-width` و `max-width` را به صورت کنترل‌شده به کار ببر.
- برای content-driven عناصر، `fit-content` مناسب است.
- برای جلوگیری از overflow، از `max-height` و `min-height` هوشمندانه استفاده کن.

## اشتباهات رایج

- استفاده از full-width برای همه‌ی cardها
- نادیده گرفتن `max-width` برای texts و buttons
- محدودیت‌های نادرست `min-width` در mobile design
- استفاده‌ی بی‌رویه از `min-content` یا `max-content`

## نکات بازار کار

- sizing در production به‌طور مستقیم روی UX و maintainability اثر دارد.
- Front-End engineers باید با constraint-based sizing آشنا باشند.
- در layoutهای modern، sizing باید از view و content هر دو آگاه باشد.

## چک‌لیست یادگیری

- [ ] width و height را برای sizing real-world می‌شناسم.
- [ ] min و max variants را در layouts مناسب می‌نویسم.
- [ ] `fit-content`، `max-content` و `min-content` را می‌دانم.
- [ ] sizing کنترل‌شده را برای حذف overflow به‌کار می‌برم.

## تمرین

اکنون فایل Sizing.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک product card با width محدود بساز.
2. یک button با width و max-width تنظیم‌شده طراحی کن.
3. یک form field با min-width و max-width بساز.
4. یک text block با `fit-content` برای narrow container طراحی کن.
5. یک layout که از `min-content` برای text sizing استفاده کند بساز.
6. یک section با `max-height` برای overflow control طراحی کن.
7. یک dashboard tile با height و min-height مناسب بساز.
8. یک card grid با sizing professional از design system بساز.
9. یک hero section که width و height کنترل‌شده دارد بساز.
10. یک portfolio page با sizing constraints طراحی کن.

## درس بعدی

در درس بعدی، `Flexbox` پایه و استفاده از `display:flex` مرور می‌شود.

## پیش‌نیازها

- Padding
- BoxModel
