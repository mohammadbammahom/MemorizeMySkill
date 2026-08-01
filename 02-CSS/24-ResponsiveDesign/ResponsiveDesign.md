# عنوان درس

## این مبحث چیست؟

- Responsive Design یعنی طراحی‌ای که در اندازه‌ها و دستگاه‌های مختلف همچنان قابل استفاده و خوانا بماند.
- در پروژه‌های واقعی، responsive design برای mobile، tablet و desktop مطرح می‌شود.
- اصول آن کمک می‌کند UI در عملکرد و readability سخت‌افزاری متفاوت، یکپارچه بماند.

## چرا از آن استفاده می‌کنیم؟

- برای سازگاری با نمایشگرهای مختلف
- برای افزایش usability در دستگاه‌های متنوع
- برای کاهش نیاز به نسخه‌های جداگانه برای هر viewport
- برای maintainable layout در پروژه‌های تولیدی

## چه زمانی استفاده می‌کنیم؟

- وقتی layout باید از phone تا desktop به درستی جواب بدهد
- وقتی typography، spacing و images باید در اندازه‌های مختلف بهینه شوند
- وقتی یک landing page یا dashboard باید در viewport متفاوت، یکپارچه بماند

## چه زمانی نباید استفاده کنیم؟

- وقتی layout در یک viewport خاص hardcoded شده و برای بقیه دستگاه‌ها مناسب نیست
- وقتی typography با `px` ثابت روی همه‌جا اجرا می‌شود
- وقتی images با اندازه ثابت و بی‌دقت برای همه‌ی دستگاه‌ها استفاده می‌شوند

## تفاوت با روش‌های مشابه

- responsive design زبان کلی برای همه‌ی viewportها است.
- fluid layouts به جای سایز ثابت، نسبت‌های قابل تنظیم دارند.
- fluid typography بر اساس viewport یا root size تغییر می‌کند.
- responsive spacing و images با استفاده از clamp، `minmax`, `width: 100%` و `aspect-ratio` بهینه می‌شوند.

## بهترین روش‌های استفاده

- از `minmax()` و `auto-fit` در grid برای layouts fluid استفاده کن.
- برای typography، `clamp()` را در نظر بگیر.
- spacing را در units flexible نگه دار.
- images را به صورت scalable و aspect-safe قرار بده.

## اشتباهات رایج

- استفاده از width ثابت برای همه‌ی screen sizes
- استفاده از images بدون `max-width: 100%`
- typography ثابت در تمام viewportها
- layoutها بدون breakpoint plan

## نکات بازار کار

- در بازارکار، responsive design بخش اصلی Front-End مهارت است.
- پروژه‌های real-world معمولاً از یک mobile-first یا fluid basis شروع و سپس روی desktop تکامل می‌یابند.
- developer باید بتواند design را به layout و spacing قابل استفاده تبدیل کند.

## چک‌لیست یادگیری

- [ ] اصول responsive layout را می‌شناسم.
- [ ] fluid typography و spacing را می‌توانم پیاده کنم.
- [ ] images را برای viewportهای مختلف بهینه می‌کنم.
- [ ] یک page responsive را با layout و gap درست می‌سازم.

## تمرین

اکنون فایل ResponsiveDesign.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک landing page که در mobile و desktop متفاوت layout دارد بساز.
2. یک hero section با typography fluid و spacing responsive بساز.
3. یک product gallery با `minmax()` و `auto-fit` طراحی کن.
4. یک dashboard card grid که در small screen یک ستون و در desktop چند ستون باشد بساز.
5. یک pricing section با cards collapsible در mobile طراحی کن.
6. یک section با image و text در responsive grid بساز.
7. یک profile page با layout fluid و readably adaptive طراحی کن.
8. یک blog page با hero و cards responsive بساز.
9. یک navigation که در mobile به حالت stack دربیاید بساز.
10. یک page real-world برای responsive design با mobile-first approach طراحی کن.

## درس بعدی

در درس بعدی، `Media Queries` و breakpoint strategy ها مرور می‌شوند.

## پیش‌نیازها

- Alignment
- GridBasics
