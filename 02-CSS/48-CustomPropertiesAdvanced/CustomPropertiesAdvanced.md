# عنوان درس

## این مبحث چیست؟

- advanced `Custom Properties` شامل nested variables، fallback values و dynamic theme swapping است.
- متغیرهای CSS به‌عنوان design tokens عمل می‌کنند و قابل override در scopes مختلف هستند.
- `var()` از fallback value پشتیبانی می‌کند و می‌توان از آن برای resilience استفاده کرد.

## چرا از آن استفاده می‌کنیم؟

- برای نگهداری centralized tokens و تغییر آسان theme
- برای dynamic theme toggles بدون rebuild
- برای ساخت components قابل reuse با nested variables

## چه زمانی استفاده می‌کنیم؟

- وقتی theme switching (dark/light) یا multi-brand support لازم است
- وقتی design tokens باید بر اساس context override شوند
- وقتی variables باید fallback داشته باشند برای استحکام در مرورگرها

## چه زمانی نباید استفاده کنیم؟

- وقتی variableها پراکنده و بدون naming convention تعریف شوند
- وقتی fallbackها به‌صورت inconsistent تنظیم شوند
- وقتی runtime JS heavy logic به جای ساده variable swap باشد

## تفاوت با روش‌های مشابه

- متغیرها نسبت به preprocessor variables runtime-driven هستند.
- nested variables امکان contextual overrides را فراهم می‌کنند که preprocessorها ندارند.

## بهترین روش‌های استفاده

- naming semantic: `--color-primary`, `--surface-card` و غیره.
- برای dark mode از `[data-theme="dark"]` یا `prefers-color-scheme` override استفاده کن.
- از fallback در `var()` استفاده کن: `var(--x, fallback)`.
- از nested variables برای کامپوننت‌های مستقل استفاده کن.

## اشتباهات رایج

- استفاده از نام‌های غیرمعین مانند `--blue-1` بدون semantic
- عدم استفاده از fallback یا مدیریت خطا
- تعریف متغیرها در سطح بسیار محلی یا بسیار global بدون middle ground

## نکات بازار کار

- در design systemها، variables advanced برای themeability ضروری است.
- مهارت در variable scoping و fallback یک مهارت بازارمحور است.
- در پروژه‌های enterprise، dynamic themes بدون reload یک مزیت محسوب می‌شود.

## چک‌لیست یادگیری

- [ ] nested variables و scope override را می‌فهمم.
- [ ] fallback در `var()` را برای resilience استفاده می‌کنم.
- [ ] dynamic theme swapping را با `[data-theme]` اجرا می‌کنم.
- [ ] semantic naming برای tokens دارم.

## تمرین

اکنون فایل

CustomPropertiesAdvanced.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک `:root` token set semantic بساز.
2. dark/light theme با `[data-theme]` toggle بساز.
3. یک component که nested variable برای accent دارد بساز.
4. fallback values برای critical tokens تعریف کن.
5. یک multi-brand example با override در محلی بنویس.
6. یک theme preview page بساز که با variable swap کار کند.
7. یک design token migration plan از hardcoded به variables بنویس.
8. یک component library که variables را local override می‌کند بساز.
9. یک performance-aware variable swap strategy مستند کن.
10. یک accessible theme toggle با focus states بساز.

## درس بعدی

در درس بعدی، `CSS Performance` برای render و animation optimization بررسی می‌شود.

## پیش‌نیازها

- CSS Variables
- CSS Architecture
