# عنوان درس

## این مبحث چیست؟

- `@media` برای تغییر استایل بر اساس viewport، نوع دستگاه یا حالت نمایش استفاده می‌شود.
- `min-width` و `max-width` در media queries برای ساخت breakpointها مهم‌ترین ابزار هستند.
- `orientation` در بعضی پروژه‌ها برای laying out در landscape و portrait به کار می‌رود.

## چرا از آن استفاده می‌کنیم؟

- برای سفارش‌پذیری breakpointها
- برای تولید layoutهای responsive
- برای mobile-first یا desktop-first strategyها
- برای اجرای UX متفاوت بر اساس device condition

## چه زمانی استفاده می‌کنیم؟

- وقتی grid یا flex layout باید در viewportهای مختلف تغییر کند
- وقتی navbar در mobile باید stack شود و در desktop inline باشد
- وقتی spacing و typography در tablet و desktop باید بهتر شوند

## چه زمانی نباید استفاده کنیم؟

- وقتی breakpointها فقط به جدول سطوح width محدود می‌شوند و design intent مناسب نیست
- وقتی breakpointها بسیار زیاد و پراکنده هستند
- وقتی layout به جای design system، به media query تقسیم شده است

## تفاوت با روش‌های مشابه

- `min-width` برای mobile-first design مناسب است.
- `max-width` برای desktop-first approach به کار می‌رود.
- `orientation` برای شرایط خاص device حالت مناسب است.
- breakpointها باید بر اساس content و UI، نه صرفاً شماره‌های تصادفی ساخته شوند.

## بهترین روش‌های استفاده

- mobile-first را برای شروع روی صفحات جدید ترجیح بده.
- breakpointها را بر اساس content collapse و spacing نیاز بساز.
- از `min-width` و `max-width` در یک ساختار کنترل‌شده استفاده کن.
- برای desktop-firstها، اگر project legacy باشد، این روش از پیش تعریف‌شده است.

## اشتباهات رایج

- breakpointهای خیلی زیاد و تکراری
- تغییردادن `width` فقط به‌جای طراحی بهتر
- mobile-first را کاملاً نادیده گرفتن
- درک اشتباه از `orientation` به عنوان یک روش اصلی

## نکات بازار کار

- در بازارکار، media queries پایه‌ی اصلی responsive design هستند.
- Front-End engineer باید breakpoint strategy را بر اساس real content فهم کند.
- کیفیت یک طراحی responsive به‌خوبی در breakpoint decisions دیده می‌شود.

## چک‌لیست یادگیری

- [ ] `min-width` و `max-width` را برای breakpoint می‌شناسم.
- [ ] `orientation` را در situations خاص می‌توانم استفاده کنم.
- [ ] mobile-first و desktop-first را می‌شناسم.
- [ ] breakpoint strategy به‌صورت practical و maintainable می‌سازم.

## تمرین

اکنون فایل MediaQueries.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک dashboard با `min-width` breakpoint ساده بساز.
2. یک landing page mobile-first که در tablet و desktop تغییر کند بساز.
3. یک navbar که در small width stack شود طراحی کن.
4. یک pricing card group که در breakpoint خاص تغییر وضعیت می‌دهد بساز.
5. یک hero page با `max-width` breakpoint بساز.
6. یک profile page با orientation landscape change طراحی کن.
7. یک blog grid که در desktop 3 ستون و در mobile 1 ستون باشد بساز.
8. یک product catalog با breakpoint-specific spacing بساز.
9. یک layout برای mobile-first و adaptive article page بساز.
10. یک responsive real-world page با breakpoint planning حرفه‌ای بساز.

## درس بعدی

در درس بعدی، `Container Queries` و تفاوت آن با Media Queries بررسی می‌شود.

## پیش‌نیازها

- ResponsiveDesign
- GridBasics
