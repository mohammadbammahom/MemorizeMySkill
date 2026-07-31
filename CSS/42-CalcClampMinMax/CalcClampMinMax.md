# عنوان درس

## این مبحث چیست؟

- `calc()` برای انجام محاسبات ریاضی در valueهای CSS استفاده می‌شود.
- `clamp()` برای محدود کردن مقدار در بازه‌ی مشخص به کار می‌رود.
- `min()` و `max()` برای انتخاب حداقل یا حداکثر مقدار از چند مقدار استفاده می‌شوند.
- این توابع برای responsive typography و spacing در طراحی مدرن ضروری هستند.

## چرا از آن استفاده می‌کنیم؟

- برای ساخت fluid sizing بدون hardcoding
- برای تنظیم responsive typography و spacing به‌صورت سنجیده
- برای کاهش نیاز به breakpointهای بیش از حد

## چه زمانی استفاده می‌کنیم؟

- وقتی `font-size` یا `padding` باید بین دو حد مشخص تغییر کند
- وقتی spacing باید در همه‌ی viewportها بهینه باشد
- وقتی value باید به‌صورت dynamic نسبت به viewport یا container باشد

## چه زمانی نباید استفاده کنیم؟

- وقتی valueها نیاز به breakpointهای کاملاً خاص دارند
- وقتی خود `calc()` و `clamp()` به درستی برای design system پیچیده شده‌اند
- وقتی یک ستون یا container فقط با hardcoded width جواب می‌دهد

## تفاوت با روش‌های مشابه

- `calc()` محاسبه انجام می‌دهد، `clamp()` محدوده را می‌گیرد، `min()` و `max()` حد را انتخاب می‌کنند.
- `clamp()` برای typography و spacing در responsive layouts بسیار مناسب است.
- `min()` و `max()` برای dynamic constraints و class-safe design powerful هستند.

## بهترین روش‌های استفاده

- برای typography، `clamp()` را ترجیح بده.
- برای spacing adaptive و layout-safe از `calc()` استفاده کن.
- برای width، gap و padding، `min()` و `max()` برای bound safety به کار ببر.
- از این توابع برای fluid layouts و anti-overflow planning استفاده کن.

## اشتباهات رایج

- استفاده از `calc()` برای محاسبات ساده بدون benefit
- نادیده گرفتن `clamp()` به‌عنوان ابزار typography اصلی
- استفاده از `max()` و `min()` بدون فهم از نتیجهٔ نهایی

## نکات بازار کار

- این توابع در طراحی responsive modern و UI system اساس بسیاری از patterns هستند.
- Front-End engineer باید با `clamp()` و `calc()` برای fluid sizing و responsive spacing راحت باشد.
- این موضوع در پروژه‌های real-world برای dynamic design token management مهم است.

## چک‌لیست یادگیری

- [ ] `calc()`، `clamp()`، `min()` و `max()` را می‌شناسم.
- [ ] `clamp()` برای responsive typography می‌نویسم.
- [ ] spacing و container sizing را با این توابع adaptive می‌کنم.
- [ ] برای layoutهای fluid از math functions استفاده می‌کنم.

## تمرین

اکنون فایل

CalcClampMinMax.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک hero heading با `clamp()` برای font-size بساز.
2. یک card با `calc()` برای padding و gap بساز.
3. یک hero section با `min()` و `max()` برای width bound بساز.
4. یک pricing grid با responsive spacing به‌کمک `clamp()` بساز.
5. یک section با `calc()` برای max-width و padding بساز.
6. یک headline cluster که در viewportهای مختلف به‌صورت fluid رشد کند بساز.
7. یک dashboard layout با `min()` و `max()` برای column sizing بساز.
8. یک marketing page با responsive typography و spacing، ترکیب‌شده در `clamp()` بساز.
9. یک card group که به‌صورت adaptive در small و large screens است بساز.
10. یک full-page modern marketing layout با fluid spacing و typography طراحی کن.

## درس بعدی

در درس بعدی، `Pseudo Classes` و state-based styling برای interaction و UI logic بررسی می‌شود.

## پیش‌نیازها

- ResponsiveDesign
- CSSVariables
