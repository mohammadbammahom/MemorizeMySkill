# عنوان درس

## این مبحث چیست؟

- Attribute selectors به شما امکان هدف‌گیری عناصر بر اساس وجود یا مقدار attributeهایشان را می‌دهد.
- نمونه‌ها: `[attr]`, `[attr=value]`, `[attr^=value]`, `[attr$=value]`, `[attr*=value]` و `[attr~=value]`.

## چرا از آن استفاده می‌کنیم؟

- برای استایل‌دهی عناصر بدون نیاز به اضافه‌کردن کلاس‌های جدید؛ بسیار مفید برای componentهایی که attributeها را دریافت می‌کنند.

## چه زمانی استفاده می‌کنیم؟

- وقتی DOM توسط سرور یا جاوااسکریپت مقداردهی می‌شود و attributeها منطق وضعیت را حمل می‌کنند.

## چه زمانی نباید استفاده کنیم؟

- هنگامی که attributeها محتوای پویا و طولانی دارند که منجر به selectors سنگین می‌شود.

## تفاوت با روش‌های مشابه

- Attribute selectors وابسته به attributeها هستند؛ برخلاف class که ارادی توسط توسعه‌دهنده اعمال می‌شود.

## بهترین روش‌های استفاده

- از attribute selectors برای progressive enhancement و targeting عناصر بدون کلاس استفاده کن.
- در صورتی که attributeها مقادیر پیچیده دارند، از کلاس یا data-attribute ساده‌تر استفاده کن.

## اشتباهات رایج

- استفادهٔ افراطی از `[attr*=value]` که احتمال false positive بالا می‌برد.
- استفاده از attribute selectors برای استایل‌های بسیار حساس به performance.

## نکات بازار کار

- در پروژه‌های component-based، attribute selectors مخصوصا برای UIs قابل‌پیکربندی مفید هستند.
- توانایی تشخیص trade-off بین attribute-based و class-based styling در مصاحبه‌ها مهم است.

## چک‌لیست یادگیری

- [ ] نحوهٔ کار `[attr=value]` و variationهایش را می‌دانم.
- [ ] می‌توانم موارد استفادهٔ مناسب برای attribute selectors را توضیح دهم.
- [ ] تاثیر performance را می‌سنجم.

## تمرین

فایل

AttributeSelectors.Exercises.html

را خودت بساز و تمرین‌ها را انجام بده.

1. یک component که با داده‌های attribute رندر می‌شود بساز و از attribute selector برای استایل استفاده کن.
2. تفاوت بین `^=`, `$=` و `*=` را نشان بده.
3. از `[attr~=value]` برای استایل‌دهی tagهایی با لیست کلاس‌مانند استفاده کن.
4. سناریویی بساز که attribute selector به‌جای کلاس مفیدتر باشد.
5. performance impact را در یک لیست بزرگ تست کن.
6. attributeهای داده‌شده توسط JS را تغییر بده و رفتار CSS را مشاهده کن.
7. یک guideline برای استفاده از data-attributes بنویس.
8. مثال‌هایی از مشکلات fallback برای attribute selectors ایجاد کن.
9. بررسی کن که آیا attribute selectors توسط همه مرورگرهای مدرن پشتیبانی می‌شوند.
10. یک component library با docs کوتاه برای attribute-based styling مستندسازی کن.

## درس بعدی

در درس بعدی `Nesting` را بررسی می‌کنیم.

## پیش‌نیازها

- selectors پایه
- مفاهیم DOM
