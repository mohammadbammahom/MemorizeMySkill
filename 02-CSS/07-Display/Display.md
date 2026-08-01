# عنوان درس

## این مبحث چیست؟

- `display` نحوه‌ی نمایش یک عنصر در layout را کنترل می‌کند.
- این ویژگی در CSS برای managing flow، alignment و composition اصلی است.
- در UI‌های حرفه‌ای، انتخاب درست `display` روی impression کلی صفحه اثر دارد.

## چرا از آن استفاده می‌کنیم؟

- برای تنظیم layout structure
- برای کنترل اینکه عنصر در خط، بلوک یا list باشد
- برای پیاده‌سازی nav، cards، sections و tableها
- برای جلوگیری از رفتارهای غیرمنتظره در DOM flow

## چه زمانی استفاده می‌کنیم؟

- وقتی بخواهیم عنصر با full-width row ظاهر شود، از `block` استفاده می‌کنیم.
- وقتی یک عنصر inline و در کنار متن باشد، `inline` مناسب است.
- وقتی نیاز به width و height در کنار متن باشد، `inline-block` کمک‌کننده است.
- وقتی عنصر باید کاملاً حذف شود، `none` بهترین راه است.
- برای layout table-like از `table` استفاده می‌شود.

## چه زمانی نباید استفاده کنیم؟

- وقتی `display: none` برای بخش‌های مهمی مثل navigation یا form استفاده شود.
- وقتی برای ساختار پیچیده، `display` به جای semantic structure استفاده شود.
- وقتی `table` به‌صورت بدیهی برای layout کلی استفاده شود.

## تفاوت با روش‌های مشابه

- `block` از صفر تا آخر سطر را اشغال می‌کند.
- `inline` فقط اندازه‌ی محتوا را می‌گیرد و به خط بعد نمی‌رود.
- `inline-block` هم width/height را قبول می‌کند و هم inline flow را حفظ می‌کند.
- `contents` فقط childها را به flow می‌آورد و خود عنصر حذف می‌شود.
- `list-item` برای عناصر لیست به‌صورت semantic نمایش می‌دهد.
- `table` ساختار tabular را ساختار می‌دهد.

## بهترین روش‌های استفاده

- برای Navigation از `flex` یا `inline-block` با نظم استفاده کن.
- برای block-based sections از `block` استفاده کن.
- برای حذف واقعی یک عنصر از layout، `none` را به‌کار ببر.
- برای layout data-heavy، `table` را با هدف واقعی استفاده کن.

## اشتباهات رایج

- استفاده از `display: inline` برای boxهای width/heightدار
- حذف عناصر مهم با `none` بدون نیاز
- استفاده از `table` برای layout کلی صفحه
- عدم درک تفاوت `inline-block` و `block`

## نکات بازار کار

- در Front-End production، `display` یکی از مهم‌ترین ویژگی‌های layout است.
- انتخاب نوع display باید بر اساس semantic و intent UI باشد.
- طراحی clean و maintainable به درک درست `display` وابسته است.

## چک‌لیست یادگیری

- [ ] تفاوت `block` و `inline` را می‌دانم.
- [ ] `inline-block` و `none` را در layout real-world به‌درستی می‌شناسم.
- [ ] `contents` و `list-item` را در جای مناسب استفاده می‌کنم.
- [ ] `table` را برای داده‌های جدولی به‌کار می‌برم.

## تمرین

اکنون فایل Display.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک topbar با brand و nav بساز.
2. یک card block با full-width layout طراحی کن.
3. دو badge inline-block کنار هم قرار بده.
4. برای nav، `inline-block` یا `flex` استفاده کن.
5. یک ناحیه‌ی hidden از DOM را با `none` پنهان کن.
6. یک list semantic با `list-item` بساز.
7. یک pricing table با `table` تعریف کن.
8. یک dashboard با section و card layout حرفه‌ای بساز.
9. ترکیب `inline` و `block` در یک hero section بساز.
10. یک page که در آن `display`ها به‌صورت explicit نمایش داده شوند طراحی کن.

## درس بعدی

در درس بعدی، `overflow` و کنترل اسکرول و hidden content بررسی می‌شود.

## پیش‌نیازها

- BoxModel
- CSSIntroduction
