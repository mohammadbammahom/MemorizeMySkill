# عنوان درس

## این مبحث چیست؟

- `background` در CSS برای ایجاد رنگ، تصویر، pattern و layerهای بصری استفاده می‌شود.
- backgroundها محتوای page را بهتر نشان می‌دهند، mood را تعریف می‌کنند و ساختار visual را تقویت می‌کنند.
- در پروژه‌های واقعی، background‌ها معمولاً در hero، banners، cards و landing sections استفاده می‌شوند.

## چرا از آن استفاده می‌کنیم؟

- برای ایجاد visual depth
- برای بهبود texture و brand atmosphere
- برای افزایش readability در hero sectionها
- برای اعمال multiple layerها بدون اضافه کردن عناصر زیاد

## چه زمانی استفاده می‌کنیم؟

- وقتی بخواهیم یک section با color یا image قابل توجه باشد
- وقتی قسمتی از UI باید branding یا atmosphere را منتقل کند
- وقتی background به جای element اضافی برای texture استفاده می‌شود

## چه زمانی نباید استفاده کنیم؟

- وقتی backgroundها readability text را خراب می‌کنند
- وقتی از background‌های متعدد بدون نظم استفاده می‌شود
- وقتی image loading یا performance به‌خاطر background size مناسب نیست

## تفاوت با روش‌های مشابه

- `background-color` برای رنگ ساده است.
- `background-image` برای تصویر یا pattern است.
- `background-size` اندازه‌ی wallpaper را تنظیم می‌کند.
- `background-repeat` تکرار تصویر را کنترل می‌کند.
- `background-position` جایگاه تصویر را در container مشخص می‌کند.
- `background-attachment` نحوه‌ی رفتار تصویر را در scroll مشخص می‌کند.
- multiple backgrounds امکان ترکیب چند لایه را می‌دهد.

## بهترین روش‌های استفاده

- برای hero section، gradient یا overlay مناسب است.
- `background-size: cover` برای images full-width معمولاً بهترین انتخاب است.
- برای داده‌های گرافیکی، چند layer را با کنترل دقیق استفاده کن.
- برای performance، image size و asset quality را کنترل کن.

## اشتباهات رایج

- background image بدون overlay، باعث unreadable text می‌شود
- تکرار نامناسب image یا cover ناخواسته
- استفاده از `background-attachment: fixed` برای همه‌ی صفحات
- به‌کارگیری multiple backgrounds بدون reason

## نکات بازار کار

- در پروژه‌های landing و marketing، backgroundها جزء اصلی perceived quality هستند.
- Front-End engineer باید از background برای conveying mood و information استفاده کند.
- بهترین backgroundها، بسیار ساده و content-aware هستند.

## چک‌لیست یادگیری

- [ ] `background-color`، `background-image` و `background-size` را می‌شناسم.
- [ ] `background-position` و `background-repeat` را در layout real-world به‌خوبی می‌دانم.
- [ ] `background-attachment` را در شرایط گوناگون می‌شناسم.
- [ ] multiple backgrounds را برای layerهای حرفه‌ای استفاده می‌کنم.

## تمرین

اکنون فایل Backgrounds.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک hero section با background color ساده بساز.
2. یک hero با background image و overlay طراحی کن.
3. یک banner با `background-size: cover` بساز.
4. یک card با زاویه‌ی background position متفاوت طراحی کن.
5. یک section با `background-repeat: no-repeat` و pattern مناسب بساز.
6. یک landing page با چند background layer بساز.
7. یک pricing section با gradient background طراحی کن.
8. یک dark theme hero با fixed attachment بساز.
9. یک portfolio cover با layered background بساز.
10. یک page real-world با ترکیب image و pattern background ایجاد کن.

## درس بعدی

در درس بعدی، `border`، `border-radius`، `outline` و `box-shadow` مرور می‌شوند.

## پیش‌نیازها

- Colors
- BoxModel
