# عنوان درس

## این مبحث چیست؟

- `object-fit` نحوه‌ی پر شدن تصویر داخل box را تعیین می‌کند.
- `object-position` موقعیت تصویر داخل همان box را کنترل می‌کند.
- این دو خاصیت برای `<img>` و `<video>` کاربرد دارند و برای media composition بسیار مهم‌اند.

## چرا از آن استفاده می‌کنیم؟

- برای حفظ زیبایی تصویر در containerهای ثابت
- برای حذف stretch یا cropping نامناسب
- برای کنترل visual focal point در media blocks

## چه زمانی استفاده می‌کنیم؟

- وقتی image داراى aspect ratio متفاوت از box است
- وقتی hero image باید crop شود اما still meaningful باشد
- وقتی image باید داخل box با alignment مشخص نمایش داده شود

## چه زمانی نباید استفاده کنیم؟

- وقتی image به‌طور کامل و بدون crop باید دیده شود
- وقتی `contain` به جای `cover` در layout مناسب‌تر است
- وقتی `object-position` به صورت random و بی‌هدف تعیین می‌شود

## تفاوت با روش‌های مشابه

- `background-size` روی background image کار می‌کند.
- `object-fit` روی media element قابل استفاده است.
- `object-position` در سطح تصویر به سمت alignment focus می‌رود.

## بهترین روش‌های استفاده

- برای hero images و thumbnails از `cover` استفاده کن.
- برای content-preserving layoutها از `contain` استفاده کن.
- برای alignment دقیق از `object-position` استفاده کن.

## اشتباهات رایج

- `cover` استفاده بیش از حد برای همه‌ی تصاویر
- `contain` بدون تنظیم `width`/`height` مناسب
- `object-position` بدون ارزیابی focal point

## نکات بازار کار

- در UI component‌ها و media-heavy pages، `object-fit` و `object-position` کاربرد حیاتی دارند.
- این مهارت برای design polish و بهبود user experience مهم است.
- معمولاً در portfolio، landing page و dashboardها استفاده می‌شود.

## چک‌لیست یادگیری

- [ ] `cover` و `contain` را می‌شناسم.
- [ ] `object-position` را برای focal point کنترل می‌کنم.
- [ ] برای card و gallery image جدید، این ویژگی را به‌کار می‌برم.
- [ ] media alignment را به صورت intentional انتخاب می‌کنم.

## تمرین

اکنون فایل ObjectFitAndObjectPosition.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک `cover` image gallery بساز.
2. یک `contain` hero image با alignment مشخص بساز.
3. یک product card با `object-position: center top` بساز.
4. یک portfolio page با mixed `cover` و `contain` images بساز.
5. یک `avatar` gallery با `object-fit: cover` طراحی کن.
6. یک `banner` با `object-position` در قسمت راست یا چپ بساز.
7. یک `team card` با mixed image crop strategy بساز.
8. یک `story` section با image focal point کنترل‌شده بساز.
9. یک `library card` با image alignment بر اساس topic بساز.
10. یک responsive media showcase با `object-fit` و `object-position` حرفه‌ای بساز.

## درس بعدی

در درس بعدی، `Overflow Advanced` برای scroll، clipping و hidden content بررسی می‌شود.

## پیش‌نیازها

- AspectRatio
- Overflow
