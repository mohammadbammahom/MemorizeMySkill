# عنوان درس

## این مبحث چیست؟

- Alignment در Flexbox و Grid با ابزارهای مختلف به‌صورت محوری انجام می‌شود.
- `justify-content` و `align-items` در Flexbox پایه‌ی spacing و positioning عناصر هستند.
- `align-content`، `place-items`، `place-content` و `place-self` در Grid برای control alignment در حالت‌های پیچیده‌تر استفاده می‌شوند.

## چرا از آن استفاده می‌کنیم؟

- برای قرار دادن items به صورت clean و readably
- برای کنترل vertical و horizontal positioning
- برای کاهش خطاهای visual در layout
- برای ساخت UI‌های متوازن و professional

## چه زمانی استفاده می‌کنیم؟

- وقتی یک navigation یا stat bar نیاز به space-between دارد، `justify-content` مناسب است.
- وقتی یک container با items در محور cross نیاز به centering دارد، `align-items` کاربرد دارد.
- در Grid، `place-items` و `place-content` برای quick alignment سریع استفاده می‌شوند.
- برای override یک item در Grid، `place-self` مفید است.

## چه زمانی نباید استفاده کنیم؟

- وقتی alignment بدون plan و بر اساس تجربه شخصی انجام شود
- وقتی یک layout پیچیده به‌صورت manual alignment در items و sections تنظیم می‌شود
- وقتی Flexbox می‌تواند کافی باشد ولی Grid به اشتباه استفاده می‌شود

## تفاوت با روش‌های مشابه

- Flexbox alignment در محور اصلی و cross انجام می‌شود.
- Grid alignment در both axes و همچنین content lines کاری انجام می‌دهد.
- `justify-content` بر distribution items در main axis اثر می‌گذارد.
- `align-content` در Grid برای alignment خطوط multiple-row استفاده می‌شود.
- `place-items` و `place-content` shorthands هستند.
- `place-self` برای یک item خاص اعمال می‌شود.

## بهترین روش‌های استفاده

- برای one-dimensional layouts، Flexbox alignment را ترجیح بده.
- برای multi-dimensional layouts، Grid alignment را انتخاب کن.
- از shorthandها برای سرعت و خوانایی استفاده کن.
- `place-self` را فقط برای exception itemها به کار ببر.

## اشتباهات رایج

- استفاده از `justify-content` برای همه‌ی نیازهای vertical alignment
- درک اشتباه `align-content` و `align-items`
- استفاده از `place-items` بدون نیاز به shorthand
- عدم فهم تفاوت بین Flexbox و Grid alignment

## نکات بازار کار

- در product-grade UI، alignment در واقع usability و polish را بالا می‌برد.
- Front-End engineer باید بداند کدام نوع alignment در کدام مدل layout مناسب‌تر است.
- این مهارت مرز بین UI draft و UI حرفه‌ای است.

## چک‌لیست یادگیری

- [ ] `justify-content` و `align-items` را در Flexbox می‌شناسم.
- [ ] `align-content` و `place-items` را در Grid می‌دانم.
- [ ] `place-content` و `place-self` را در component‌های واقعی به‌کار می‌برم.
- [ ] تفاوت alignment در Flexbox و Grid را می‌توانم توضیح بدهم.

## تمرین

اکنون فایل Alignment.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک toolbar با `justify-content: space-between` بساز.
2. یک card row با `align-items: center` طراحی کن.
3. یک grid با `place-items: center` بساز.
4. یک container با `place-content: center` در grid طراحی کن.
5. یک grid item با `place-self: end` بساز.
6. یک Hero section که با Grid alignment professional باشد بساز.
7. یک dashboard با header و metrics row و alignment متوازن طراحی کن.
8. یک landing page با alignments mixed و professional بساز.
9. یک profile card با alignment grid و flex مقایسه‌ای طراحی کن.
10. یک complex layout برای product page که alignment در هر دو axis کنترل‌شده باشد بساز.

## درس بعدی

در درس بعدی، اصول responsive design و layoutهای fluid مرور می‌شوند.

## پیش‌نیازها

- FlexboxAdvanced
- GridAdvanced
