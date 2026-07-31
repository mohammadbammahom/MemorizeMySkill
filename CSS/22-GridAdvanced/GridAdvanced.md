# عنوان درس

## این مبحث چیست؟

- `grid-area`، `grid-column` و `grid-row` برای placement دقیق عناصر داخل grid استفاده می‌شوند.
- `auto-fit` و `auto-fill` برای ایجاد columns responsive و dynamic کاربرد دارند.
- `minmax()` برای تعیین min و max اندازه‌ی ستون‌ها و ردیف‌ها بسیار مهم است.

## چرا از آن استفاده می‌کنیم؟

- برای placement دقیق در dashboards و shell layouts
- برای ساخت layout‌های multi-area بدون hardcoded structure
- برای اینکه grid در viewportهای مختلف adaptive باشد
- برای مدیریت complex layouts حرفه‌ای

## چه زمانی استفاده می‌کنیم؟

- وقتی یک dashboard یا landing page باید مناطق خاصی داشته باشد
- وقتی `grid-template-columns: repeat(auto-fit, minmax(...))` لازم باشد
- وقتی sectionها باید در همان grid در positions مشخص قرار گیرند

## چه زمانی نباید استفاده کنیم؟

- وقتی layout خیلی ساده است و grid static بهتر است
- وقتی placement با hardcoded areaها برای یک component complex لازم نباشد
- وقتی `auto-fit` یا `auto-fill` بدون درک sizing استفاده می‌شود

## تفاوت با روش‌های مشابه

- `grid-area` راه سریع برای naming area است.
- `grid-column` و `grid-row` مستقیم placement را مشخص می‌کنند.
- `auto-fit` تعداد ستون‌ها را به اندازه‌ی available space تنظیم می‌کند.
- `auto-fill` ستون‌های خالی هم ایجاد می‌کند و برای repeat patterns بهتر است.
- `minmax()` برای ترکیب حداقل و حداکثر اندازه در grid استفاده می‌شود.

## بهترین روش‌های استفاده

- برای dashboard shellها از named areas یا explicit placement استفاده کن.
- برای gridهای responsive، `repeat(auto-fit, minmax(240px, 1fr))` مناسب است.
- `minmax()` را برای تطبیق با content و viewport به‌کار ببر.
- placement را readable و maintainable نگه دار.

## اشتباهات رایج

- استفاده از `grid-area` بدون نام‌گذاری قابل فهم
- `auto-fit` و `auto-fill` را اشتباه فهمیدن
- `minmax()` در ترکیب اشتباه با `auto-fit`
- قرار دادن همه‌ی مناطق در یک grid بدون plan

## نکات بازار کار

- در layout‌های complex، Grid advanced به‌صورت real-world daily مورد نیاز است.
- Front-End engineer باید placement، repetition و minmax را به‌صورت ذهنی در سطح پروژه کنترل کند.
- این مهارت برای interview و project architecture بسیار مهم است.

## چک‌لیست یادگیری

- [ ] `grid-area`، `grid-column` و `grid-row` را می‌شناسم.
- [ ] `auto-fit` و `auto-fill` را در layout responsive می‌شناسم.
- [ ] `minmax()` را برای sizing dynamic به‌کار می‌برم.
- [ ] layout complex grid را به‌صورت readable می‌سازم。

## تمرین

اکنون فایل GridAdvanced.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک dashboard shell با sidebar، topbar و main area بساز.
2. یک grid با `grid-column` و `grid-row` for two sections design کن.
3. یک Tiles layout با `grid-area` names بساز.
4. یک collection card grid با `auto-fit` بساز.
5. یک adaptive products grid با `auto-fill` طراحی کن.
6. یک nested dashboard layout با `minmax()` بساز.
7. یک portfolio layout complex با grid placement طراحی کن.
8. یک landing page با hero، metrics و sidebar template بساز.
9. یک admin panel با named grid areas بساز.
10. یک project {{page}} با multiple grid regions حرفه‌ای بساز.

## درس بعدی

در درس بعدی، Alignment و تفاوت آن در Flexbox و Grid مرور می‌شود.

## پیش‌نیازها

- GridBasics
- FlexboxAdvanced
