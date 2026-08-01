# عنوان درس

## این مبحث چیست؟

- `overflow` نحوه‌ی برخورد یک container با محتوای مازاد را کنترل می‌کند.
- این ویژگی برای scrolling، clipping و جلوگیری از رشد نامحدود layout کاربرد دارد.
- در UI‌های production، مدیریت overflow به‌طور مستقیم روی UX اثر می‌گذارد.

## چرا از آن استفاده می‌کنیم؟

- برای جلوگیری از شکستن layout
- برای داشتن scrolling مخصوصاً در کانتینرهای محدود
- برای اجرای hidden content و safe UI
- برای کنترل بخش‌های data-heavy

## چه زمانی استفاده می‌کنیم؟

- وقتی content از ارتفاع یا عرض container بیشتر شود، `auto` یا `scroll` مناسب است.
- وقتی بخش‌های اضافی نباید دیده شوند، `hidden` استفاده می‌شود.
- وقتی باید overflow به صورت طبیعی و بدون clipping دیده شود، `visible` مناسب است.
- برای جلوگیری از scrollbars و clipping دقیق، `clip` کاربرد دارد.

## چه زمانی نباید استفاده کنیم؟

- وقتی `overflow: hidden` برای حل تمام مشکلات content استفاده شود.
- وقتی content قابل اسکرول است ولی بدون UX مناسب در view قرار گرفته است.
- وقتی `clip` برای browser compatibility و استفاده‌ی عمومی به جای workflow درست استفاده شود.

## تفاوت با روش‌های مشابه

- `visible` حالت پیش‌فرض است و content بیرون از box دیده می‌شود.
- `hidden` محتوا را پنهان می‌کند.
- `auto` در صورت نیاز scrollbars می‌سازد.
- `scroll` همیشه scrollbars را نشان می‌دهد.
- `clip` همانند hidden به‌صورت hard clipping عمل می‌کند و scroll در آن فعال نمی‌شود.

## بهترین روش‌های استفاده

- برای panels و listهای محدود، `auto` را ترجیح بده.
- برای cards که باید overflow نداشته باشند، `hidden` را به‌صورت intentional استفاده کن.
- از `scroll` فقط وقتی نیاز به scrollbar ثابت دارید استفاده کن.
- با `clip` به‌صورت محدود و در شرایط خاص کار کن.

## اشتباهات رایج

- استفاده‌ی بی‌رویه از `overflow: hidden`
- نداشتن scroll strategy در panels
- استفاده از `scroll` برای همه‌ی کانتینرها
- نادیده گرفتن clipping در layout‌های پیچیده

## نکات بازار کار

- در داشبوردها و panels، overflow management اصلی‌ترین قسمت UX است.
- UI engineer باید بتواند overflow را در context درست کنترل کند.
- یک panel خوب باید scroll و hidden content را با فهم دقیق مدیریت کند.

## چک‌لیست یادگیری

- [ ] تفاوت `visible`، `hidden`، `auto` و `scroll` را می‌دانم.
- [ ] `clip` را در context مناسب می‌شناسم.
- [ ] از overflow برای UX و layout کنترل‌شده استفاده می‌کنم.
- [ ] width/height محدود را برای containerهای dynamic مدیریت می‌کنم.

## تمرین

اکنون فایل Overflow.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک panel با `overflow: auto` بساز.
2. یک feed list با height محدود و scroll ایجاد کن.
3. یک card با `overflow: hidden` و image overflow داشته باش.
4. یک section با `overflow: visible` برای tooltip یا badge طراحی کن.
5. یک nested panel با `overflow: scroll` بساز.
6. یک FAQ panel با content long و scrollable طراحی کن.
7. یک dashboard که listهای عمودی در آن overflow می‌شوند بساز.
8. یک layout برای messages و notifications با height محدود طراحی کن.
9. یک card با clipping و overflow استفاده کن.
10. یک page گالری با panelهای scrollable بساز.

## درس بعدی

در درس بعدی، `position` و حالت‌های مختلف آن از static تا sticky مرور می‌شوند.

## پیش‌نیازها

- Display
- BoxModel
