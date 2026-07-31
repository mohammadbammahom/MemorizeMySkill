# عنوان درس

## این مبحث چیست؟

- رنگ‌ها یکی از ابزارهای اصلی در طراحی UI هستند.
- CSS رنگ‌ها را با نام، HEX، RGB، RGBA، HSL و HSLA پشتیبانی می‌کند.
- انتخاب درست رنگ، readability و hierarchy را بهبود می‌دهد.

## چرا از آن استفاده می‌کنیم؟

- برای پیاده‌سازی brand identity
- برای ایجاد levelهای متفاوت در اطلاعات
- برای هدایت توجه کاربر به CTAها و stateها
- برای افزایش خوانایی و consistency

## چه زمانی استفاده می‌کنیم؟

- وقتی باید رنگ برای CTA، alert، success و failure تنظیم شود
- وقتی باید palette یک محصول کنترل شود
- وقتی یک UI باید از نظر visual layered و حرفه‌ای دیده شود

## چه زمانی نباید استفاده کنیم؟

- وقتی رنگ‌ها بدون سیستم یا بدون contrast دقیق انتخاب شده‌اند
- وقتی باید رنگ به جای semantic structure استفاده شود
- وقتی palette تکراری، بی‌ربط یا نامنظم باشد

## تفاوت با روش‌های مشابه

- Named colors ساده‌تر هستند، اما محدودیت دارند.
- HEX برای quick usage و consistency خوب است.
- RGB و RGBA به شدت برای opacity-aware طراحی مورد استفاده‌اند.
- HSL و HSLA برای تنظیم hue، saturation و lightness مناسب هستند.
- `opacity` روی کل element اثر می‌گذارد، در حالی که `RGBA` فقط رنگ را تغییر می‌دهد.
- `currentColor` برای inheritance از رنگ فعلی بسیار مفید است.

## بهترین روش‌های استفاده

- برای هر سیستم رنگ، palette تعریف شده داشته باشید.
- برای text و background، contrast مناسب را حفظ کنید.
- برای رنگ‌های شفاف از RGBA استفاده کنید.
- برای semantic state، رنگ را همراه با text یا icon به‌کار ببرید.

## اشتباهات رایج

- استفاده از رنگ‌های نامتوازن و بدون contrast
- غفلت از `opacity` و `currentColor`
- استفاده‌ی مکرر از رنگ‌های شبیه برای stateهای مختلف
- نداشتن naming استاندارد برای palette

## نکات بازار کار

- در پروژه‌های واقعی، رنگ‌ها بخشی از design system هستند.
- یک Front-End حرفه‌ای باید رنگ‌ها را بر اساس contrast، intent و accessibility انتخاب کند.
- palette خوب باعث افزایش trust و clarity در UI می‌شود.

## چک‌لیست یادگیری

- [ ] Named colors، HEX، RGB و RGBA را می‌شناسم.
- [ ] HSL و HSLA را برای رنگ‌بندی حرفه‌ای می‌دانم.
- [ ] `opacity` و `currentColor` را در کاربرد واقعی می‌شناسم.
- [ ] contrast و semantic استفاده از رنگ را رعایت می‌کنم.

## تمرین

اکنون فایل Colors.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک pricing section با دو CTA رنگی بساز.
2. یک palette از سه رنگ اصلی بساز.
3. یک button با HEX و یک button با RGB ساخته شود.
4. یک alert با RGBA و یک informational block با HSLA بساز.
5. یک card با `currentColor` در border و text استفاده کن.
6. یک hero section با سایه‌ی رنگی و contrast مناسب طراحی کن.
7. یک dashboard با states مختلف color-coded بساز.
8. یک مهم‌ترین CTA را با رنگ‌های semantic طراحی کن.
9. یک light theme و یک dark theme ساده بساز.
10. یک landing page با palette واحد و رنگ‌بندی حرفه‌ای طراحی کن.

## درس بعدی

در درس بعدی، واحدهای اندازه‌گیری در CSS مثل px، %، rem، vw و fr مرور می‌شوند.

## پیش‌نیازها

- CSSIntroduction
- Selectors
