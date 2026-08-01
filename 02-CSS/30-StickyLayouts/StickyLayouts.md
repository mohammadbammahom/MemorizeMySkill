# عنوان درس

## این مبحث چیست؟

- `position: sticky` یک حالت ترکیبی از `relative` و `fixed` است.
- عنصر sticky تا زمانی که به مرز مشخص انباشتگی برسد، در flow باقی می‌ماند و بعد از آن به حالت fixed-like می‌رود.
- معمولاً برای topbar، sidebar و section headers استفاده می‌شود.

## چرا از آن استفاده می‌کنیم؟

- برای حفظ navigation در حال اسکرول
- برای چسباندن sidebar در layouts طولانی
- برای بهتر شدن UX بین content و UI ثابت

## چه زمانی استفاده می‌کنیم؟

- وقتی top nav باید در طول اسکرول همیشه قابل دسترس باشد
- وقتی side menu باید در حین اسکرول در همان مکان بماند
- وقتی headers یا labels برای section grouping لازم هستند

## چه زمانی نباید استفاده کنیم؟

- وقتی layout نیازمند sticky behavior نیست
- وقتی z-index و stacking context به درستی تنظیم نشده‌اند
- وقتی parent container یا overflow خاص باعث از کار افتادن sticky می‌شود

## تفاوت با روش‌های مشابه

- `position: fixed` همیشه نسبت به viewport ثابت است.
- `position: sticky` نسبت به nearest scrolling ancestor و threshold مشخص پایدار می‌شود.
- `position: relative` فقط در همان flow قرار می‌گیرد.

## بهترین روش‌های استفاده

- sticky را فقط در components با scroll context legitimate به کار ببر.
- `top`, `bottom`, `left`, `right` را با توجه به ساختار layout تنظیم کن.
- برای جلوگیری از overlap، `z-index` را کنترل کن.

## اشتباهات رایج

- sticky را در parent با `overflow: hidden` یا `overflow: auto` بدون درک context استفاده کردن
- از دست دادن alignment در sidebarها
- عدم تنظیم `top` یا `bottom` برای sticky element

## نکات بازار کار

- sticky layouts در dashboards، docs، landing pages و admin panels بسیار رایج هستند.
- استفاده از sticky در UI مربوط به product control و navigation عملکرد بالا را نشان می‌دهد.
- در Interview، این ویژگی معمولاً با `z-index`, `overflow`, و scroll containerها ترکیب می‌شود.

## چک‌لیست یادگیری

- [ ] `sticky` را با `fixed` و `relative` تفاوت می‌دهم.
- [ ] sticky topbar و sidebar را می‌سازم.
- [ ] نحوه‌ی رفتار sticky در scroll container را می‌فهمم.
- [ ] برای sticky از `top` و `z-index` درست استفاده می‌کنم.

## تمرین

اکنون فایل StickyLayouts.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک sticky topbar صفحه بساز.
2. یک sticky sidebar در dashboard بساز.
3. یک sticky table header در table scrollable بساز.
4. یک article page با sticky section title بساز.
5. یک landing page با sticky CTA button بساز.
6. یک docs layout با sticky navigation ساز.
7. یک product page که sidebar در اسکرول ثابت بماند بساز.
8. یک blog page با sticky author card بساز.
9. یک dashboard panel با sticky filter bar بساز.
10. یک real-world sticky layout برای admin panel طراحی کن.

## درس بعدی

این درس پایان بخش اصلی CSS است. اگر خواستی، می‌توانیم بخش بعدی را برای review، پروژه‌های ترکیبی و advanced patterns شروع کنیم.

## پیش‌نیازها

- Position
- OverflowAdvanced
- ZIndex
