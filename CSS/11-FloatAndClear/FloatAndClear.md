# عنوان درس

## این مبحث چیست؟

- `float` یک عنصر را از flow اصلی خارج می‌کند و در سمت مشخصی قرار می‌دهد.
- `clear` از کنار هم قرار گرفتن عناصر بعد از float جلوگیری می‌کند.
- این روش در گذشته برای layoutهای چندستونی رایج بود، اما امروزه برای projectهای جدید معمولاً از flex/grid استفاده می‌شود.

## چرا از آن استفاده می‌کنیم؟

- برای ساخت legacy layoutهای دو یا سه ستونه
- برای placement photo و text کنار هم
- برای understanding historical CSS syntax
- برای جلوگیری از مشکلات در codebase قدیمی

## چه زمانی استفاده می‌کنیم؟

- وقتی باید یک sidebar یا image در کنار متن قرار بگیرد
- وقتی codebase قدیمی و legacy را مرور می‌کنید
- وقتی باید به‌صورت intentional با float کار کنید

## چه زمانی نباید استفاده کنیم؟

- برای layoutهای جدید
- برای ساختارهای complex که flex/grid بهتر جواب می‌دهد
- برای component-based UI که باید predictable باشد

## تفاوت با روش‌های مشابه

- `float` element را از flow خارج می‌کند.
- `clear: left/right/both` برای جلوگیری از همپوشانی بعد از float استفاده می‌شود.
- flex/grid در modern UI جایگزین درست‌تری هستند.
- روش float بیشتر به legacy و edge cases مرتبط است.

## بهترین روش‌های استفاده

- در پروژه‌های قدیمی، مطمئن شوید روش float درست اعمال شده است.
- از float فقط برای cases خاص استفاده کن.
- برای layout‌های جدید، از grid/flex استفاده کن.
- اگر از float استفاده می‌کنید، `clear` را به صورت explicit تنظیم کن.

## اشتباهات رایج

- استفاده از float برای full-page layout جدید
- فراموش کردن `clear`
- همپوشانی ناخواسته‌ی عناصر پایین‌تر
- حذف شدن element از flow بدون کنترل

## نکات بازار کار

- در پروژه‌های legacy و maintenance، شناخت float مهم است.
- Front-End engineer باید تفاوت approach modern و legacy را بداند.
- در کلاس‌های interview، این موضوع معمولاً به‌عنوان مرور history مطرح می‌شود.

## چک‌لیست یادگیری

- [ ] مفهوم `float` را می‌دانم.
- [ ] `clear` را برای جلوگیری از overflow می‌شناسم.
- [ ] می‌دانم چرا در پروژه‌های جدید از float کمتر استفاده می‌شود.
- [ ] در legacy codebase می‌توانم float را debug کنم.

## تمرین

اکنون فایل FloatAndClear.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک sidebar در کنار متن با float بساز.
2. یک image float-left و text کنار آن تنظیم کن.
3. یک layout سه‌ستونه با float طراحی کن.
4. یک `clear: both` برای رفع overlap اضافه کن.
5. یک card با `float: right` بساز.
6. یک section با article و sidebar legacy طراحی کن.
7. یک blog-like layout با float بساز.
8. یک page برای نمایش image + caption راه‌اندازی کن.
9. یک layout برای portfolio card با float طراحی کن.
10. یک layout آزمایشی برای مقایسه grid و float بساز.

## درس بعدی

در درس بعدی، `visibility` و تفاوت آن با `display` و `opacity` بررسی می‌شود.

## پیش‌نیازها

- Position
- Display
