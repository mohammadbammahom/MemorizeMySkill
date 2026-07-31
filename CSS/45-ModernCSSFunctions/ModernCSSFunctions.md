# عنوان درس

## این مبحث چیست؟

- `min()`, `max()` و `clamp()` برای انتخاب و محدودسازی مقادیر کاربرد دارند.
- `color-mix()` برای ترکیب رنگ‌ها با دقت کنترل‌شده استفاده می‌شود.
- `attr()` مقدار attribute را به‌عنوان value در CSS می‌خواند (با محدودیت‌های فعلی).
- CSS Nesting overview اشاره‌ای به ساختار تو در تو در نگارش selectors دارد.
- این توابع بخشی از Modern CSS هستند و برای responsive و maintainable code ضروری‌اند.

## چرا از آن استفاده می‌کنیم؟

- برای fluid sizing بدون پیچیدگی JavaScript
- برای ترکیب رنگها از پایه‌های theme و derivation
- برای خواندن attributeها و تطبیق استایل بر اساس data
- برای ساده‌تر کردن استایل‌های تو در تو با nesting (هنوز partial support)

## چه زمانی استفاده می‌کنیم؟

- وقتی typography یا spacing باید بین حداقل و حداکثر تغییر کند
- وقتی می‌خواهیم color variants بر اساس primary تولید کنیم
- وقتی componentها نیاز به self-contained responsive sizing دارند

## چه زمانی نباید استفاده کنیم؟

- وقتی مرورگرهای هدف از توابع پشتیبانی نمی‌کنند و fallback نداریم
- وقتی `attr()` اطلاعات حساس یا dynamic باید خوانده شود
- وقتی nesting به‌صورت نامناسب خوانایی را کاهش می‌دهد

## تفاوت با روش‌های مشابه

- `clamp()` ترکیبی از min/max و preferred value را فراهم می‌کند.
- `color-mix()` کار ترکیب دو رنگ را دقیق و قابل کنترل می‌کند، جایگزین هک‌های قدیمی.
- `attr()` محدودتر از JavaScript است اما برای data-driven CSS مفید است.

## بهترین روش‌های استفاده

- برای headline و root spacing از `clamp()` استفاده کن.
- برای theme derivation از `color-mix()` و variables استفاده کن.
- `min()`/`max()` را برای safe bounding در grid و container size به کار ببر.
- قبل از استفاده از `attr()`، fallback strategy را برنامه‌ریزی کن.

## اشتباهات رایج

- استفاده از توابع بدون fallback یا testing در مرورگرهای مختلف
- پیچیده کردن expressions در `calc()` وقتی `clamp()` کافی است
- استفاده از `attr()` برای data-driven heavy logic به‌جای JS

## نکات بازار کار

- Modern functions در design systems و responsive components بسیار کاربردی‌اند.
- در پروژه‌های production، ارزش زیادی دارد که توابع را با token-based variables ترکیب کنی.
- در مصاحبه‌ها، آگاهی از `color-mix()` و practical `clamp()` patterns امتیاز بزرگی است.

## چک‌لیست یادگیری

- [ ] `min()`, `max()`, `clamp()` را می‌نویسم.
- [ ] `color-mix()` را برای derivation رنگ تست می‌کنم.
- [ ] `attr()` را در موارد ساده به‌کار می‌برم.
- [ ] CSS nesting syntax overview را می‌فهمم و محدود استفاده می‌کنم.

## تمرین

اکنون فایل

ModernCSSFunctions.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک hero heading با `clamp()` برای font-size بساز.
2. یک card layout که width با `min()` محدود شده باشد بساز.
3. یک theme token که با `color-mix()` رنگ ثانویه تولید کند بساز.
4. یک responsive grid که gap با `max()` کنترل می‌شود بساز.
5. یک component که attribute-driven style با `attr()` دارد بساز.
6. یک pricing card که font-size با clamp و padding با calc ترکیب شود بساز.
7. یک design token demo که min/max/clamp را نشان می‌دهد بساز.
8. یک reusable component با nesting واضح و maintainable بساز.
9. یک landing section که color-mix برای hover states استفاده کند بساز.
10. یک small component library snippet که modern functions را به‌کار می‌برد بساز.

## درس بعدی

در درس بعدی، `CSS Architecture` برای پروژه‌های بزرگ و قابل نگهداری بررسی می‌شود.

## پیش‌نیازها

- CSSVariables
- CalcClampMinMax
