# عنوان درس

## این مبحث چیست؟

- `BEM` (Block Element Modifier) یک روش نام‌گذاری برای CSS است.
- Block: مستقل‌ترین مولفه (`card`).
- Element: بخشی از block با prefix `__` (`card__title`).
- Modifier: variant یا وضعیت با prefix `--` (`card__btn--primary`).

## چرا از آن استفاده می‌کنیم؟

- برای افزایش خوانایی و predictability selectors
- برای جلوگیری از collision در کلاس‌ها
- برای ساده‌سازی همکاری تیمی و naming conventions

## چه زمانی استفاده می‌کنیم؟

- در پروژه‌های component-based و large-scale
- وقتی می‌خواهیم selectors قابل پیش‌بینی و maintainable باشند
- وقتی می‌خواهیم از specificity conflicts جلوگیری کنیم

## چه زمانی نباید استفاده کنیم؟

- در پروژه‌های بسیار کوچک که overhead نام‌گذاری زیاد است
- وقتی utility-first approach مثل `Tailwind` انتخاب شده است

## تفاوت با روش‌های مشابه

- BEM emphasizes explicit component structure.
- OOCSS و SMACSS رویکردهای متفاوتی برای modularity دارند.
- Tailwind utility-first با BEM کاملاً متفاوت است؛ ترکیب آن‌ها ممکن است مفید باشد.

## بهترین روش‌های استفاده

- هر block یک responsibility مشخص داشته باشد.
- از elementها تنها درون block والد استفاده کن.
- modifierها برای تغییر ظاهر یا رفتار استفاده شوند، نه محتوای معنایی.
- نگهداری naming guide در docs پروژه.

## اشتباهات رایج

- استفاده از element خارج از block والد
- ساختن modifierهای بیش از حد پیچیده
- استفاده از selectors با ترکیب‌های multi-level غیرضروری

## نکات بازار کار

- در شرکت‌ها، BEM یکی از رایج‌ترین naming conventions است.
- تیم‌ها معمولاً یک guideline ساده از BEM را دنبال می‌کنند.
- در مصاحبه‌ها، توانایی توضیح trade-offs بین BEM و utility approaches مهم است.

## چک‌لیست یادگیری

- [ ] Block, Element, Modifier را تمیز نام‌گذاری می‌کنم.
- [ ] examples واقعی با BEM می‌نویسم.
- [ ] guideline برای یک component library با BEM می‌نویسم.
- [ ] اشتباهات رایج BEM را می‌شناسم و اجتناب می‌کنم.

## تمرین

اکنون فایل

BEM.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک product card با BEM naming بنویس.
2. یک navbar با block و elementها بساز.
3. یک modal component با modifierهای visible/hidden بساز.
4. یک form component با elementها و modifierها بنویس.
5. یک pricing grid با blocks مستقل طراحی کن.
6. یک component library index با BEM docs کوچک بساز.
7. یک refactor plan برای legacy CSS به BEM بنویس.
8. یک card با `--primary` و `--outline` modifier بساز.
9. یک settings panel با nested blocks و BEM structure بساز.
10. یک review checklist برای BEM naming draft کن.

## درس بعدی

در درس بعدی، advanced `Custom Properties` و dynamic theme patterns بررسی می‌شود.

## پیش‌نیازها

- CSS Architecture
- CSS Variables
