# عنوان درس

## این مبحث چیست؟

- واحدهای CSS برای اندازه‌گیری ویژگی‌هایی مثل width، height، padding، margin و font-size به کار می‌روند.
- انتخاب درست واحدها روی responsiveness و maintainability اثر مستقیم دارد.
- پروژه‌های واقعی معمولاً از ترکیب `px`، `%`، `rem` و `vw`/`vh` استفاده می‌کنند.

## چرا از آن استفاده می‌کنیم؟

- برای سازگاری در اندازه‌ها
- برای scaleپذیری در اندازه صفحه
- برای ایجاد layout‌های responsive
- برای کاهش نیاز به تغییرات دستی زیاد

## چه زمانی استفاده می‌کنیم؟

- وقتی نیاز به اندازه‌ی ثابت داریم، از `px` استفاده می‌کنیم.
- وقتی باید بر اساس parent اندازه بگیریم، از `%` استفاده می‌کنیم.
- وقتی برای typography و spacing باید از root scaling بهره بگیریم، `rem` مناسب است.
- وقتی viewport پایه برای layout باشد، `vw` و `vh` کاربرد دارند.
- برای grid و flex layout، `fr` و `auto` مهم هستند.

## چه زمانی نباید استفاده کنیم؟

- وقتی layout بر اساس viewport سخت‌کد شده باشد و باید responsive باشد
- وقتی برای spacing کل پروژه از `px` ثابت استفاده می‌شود
- وقتی `calc()` برای یک نیاز ساده و قابل‌حل استفاده می‌شود

## تفاوت با روش‌های مشابه

- `px` یک واحد ثابت است.
- `%` نسبت به parent size است.
- `em` نسبت به font-size خود عنصر یا parent است.
- `rem` نسبت به root font-size است.
- `vw` و `vh` نسبت به viewport هستند.
- `vmin` و `vmax` نسبت به کوچک/بزرگ‌ترین بعد viewport‌اند.
- `ch` بر اساس پهنای صفر در font فعلی است.
- `fr` در grid برای تقسیم مساحت استفاده می‌شود.
- `auto` برای sizing محاسبه‌شده و مدیریت‌کننده‌ی layout است.

## بهترین روش‌های استفاده

- متن و spacing را با `rem` مدیریت کن.
- width و height‌های responsive را با `%` یا `fr` کنترل کن.
- برای calculations پیچیده از `calc()` استفاده کن.
- برای بخش‌های page-level، `vw`/`vh` را با احتیاط به‌کار ببر.

## اشتباهات رایج

- استفاده‌ی بی‌رویه از `px` در همه‌جا
- فراموش کردن `rem` برای typography scale
- ترکیب نادرست `vw` با layout‌های پیچیده
- استفاده از `calc()` بدون نیاز واقعی

## نکات بازار کار

- در طراحی responsive، ترکیب `rem`، `%` و `fr` معمولاً حرفه‌ای‌تر از `px` ساده است.
- Front-End engineer باید از unit مناسب برای هر نیاز استفاده کند.
- unitها مهم‌ترین جزء برای maintainable spacing و sizing هستند.

## چک‌لیست یادگیری

- [ ] واحدهای `px`، `%`، `em` و `rem` را می‌شناسم.
- [ ] `vw`، `vh`، `vmin` و `vmax` را در context درست استفاده می‌کنم.
- [ ] `ch` و `fr` را در typography و grid می‌شناسم.
- [ ] `calc()` و `auto` را برای layouts بهینه به‌کار می‌برم.

## تمرین

اکنون فایل Units.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک card با width 80% بساز.
2. یک button با padding نسبت به `rem` تنظیم کن.
3. یک hero با width `50vw` طراحی کن.
4. یک grid با `repeat(auto-fit, minmax(16rem, 1fr))` بساز.
5. به کمک `calc()` یک width ترکیبی بساز.
6. یک section responsive با `vh` برای ارتفاع بساز.
7. یک typography block با `ch` در width محدود بساز.
8. یک layout با `vmin` و `vmax` آزمایش کن.
9. یک pricing section با اندازه‌های mixed unit بساز.
10. یک page با layout scalable و professional طراحی کن.

## درس بعدی

در درس بعدی، مدل جعبه‌ای CSS یعنی content، padding، border و margin بررسی می‌شود.

## پیش‌نیازها

- CSSIntroduction
- Selectors
- Colors
