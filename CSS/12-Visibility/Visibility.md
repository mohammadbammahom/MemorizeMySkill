# عنوان درس

## این مبحث چیست؟

- `visibility`، `display: none` و `opacity` هرکدام حالت متفاوتی از پنهان کردن یا کاهش دیده‌شدن عنصر را نشان می‌دهند.
- `pointer-events` در UI‌های واقعی برای کنترل interaction روی overlayها یا بخش‌های non-interactive استفاده می‌شود.
- این سه مفهوم در production معمولاً اشتباه گرفته می‌شوند.

## چرا از آن استفاده می‌کنیم؟

- برای hide کردن یک عنصر بدون حذف آن از DOM
- برای جلوگیری از interaction روی overlay یا elementهای غیرقابل کلیک
- برای نمایش آماده‌ی stateهای متنی یا UI transitions
- برای مدیریت بهتر accessibility و UX

## چه زمانی استفاده می‌کنیم؟

- وقتی بخواهیم element از نظر بصری پنهان شود اما space آن حفظ شود، `visibility: hidden` مناسب است.
- وقتی element باید کاملاً از layout حذف شود، `display: none` مناسب است.
- وقتی element هنوز در DOM است اما بصری کم‌رنگ شود، `opacity` مفید است.
- برای elementهایی که باید دیده شوند ولی کلیک نشوند، `pointer-events: none` کاربرد دارد.

## چه زمانی نباید استفاده کنیم؟

- وقتی یک عنصر واقعاً لازم نیست و فقط hidden شده است
- وقتی `opacity` برای hide کردن کامل یک بخش استفاده می‌شود
- وقتی به‌جای `pointer-events: none`، `display: none` به اشتباه استفاده می‌شود

## تفاوت با روش‌های مشابه

- `visibility: hidden` عنصر را غیرقابل دیدن می‌کند اما space آن را حفظ می‌کند.
- `display: none` عنصر را از DOM flow حذف می‌کند.
- `opacity: 0` عنصر را نامرئی می‌کند ولی در Flow قرار می‌گیرد.
- `pointer-events: none` باعث نمی‌شود عنصر از نظر visual حذف شود، بلکه interaction را قطع می‌کند.

## بهترین روش‌های استفاده

- وقتی نیاز به қол‌حق‌داشتن در layout است، `visibility` را به‌کار ببر.
- برای حذف کامل element از صفحه، `display: none` را انتخاب کن.
- `opacity` را برای fade effect یا state soft استفاده کن.
- `pointer-events` را برای overlay و non-clickable سطح‌ها به‌کار ببر.

## اشتباهات رایج

- جایگزینی `display: none` با `visibility: hidden`
- استفاده‌ی اشتباه `opacity` برای مخفی‌کردن real visibility
- نادیده گرفتن نقش `pointer-events` برای UX
- ایجاد stateهای confusing برای کاربر

## نکات بازار کار

- در UI interactionها، تفاوت این ویژگی‌ها برای accessibility و debugging حیاتی است.
- Front-End engineer باید تفاوت视觉 و interaction را تشخیص دهد.
- این موضوع در overlay و modalها به‌خوبی نمود پیدا می‌کند.

## چک‌لیست یادگیری

- [ ] تفاوت `visibility` و `display: none` را می‌دانم.
- [ ] `opacity` را برای transition و soft hide می‌شناسم.
- [ ] `pointer-events` را برای interaction control می‌دانم.
- [ ] می‌توانم هر حالت را در UI واقعی به‌درستی انتخاب کنم.

## تمرین

اکنون فایل Visibility.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک button با `visibility: hidden` بساز.
2. یک button با `display: none` بساز.
3. یک badge با `opacity: 0.4` طراحی کن.
4. یک overlay که از interaction قابل کلیک جلوگیری کند بساز.
5. یک card با hidden state و باقی‌ماندن space طراحی کن.
6. یک modal با buttonهای clickable یا non-clickable بساز.
7. یک dashboard state برای inactive item طراحی کن.
8. یک page simple با buttonهای stateful بساز.
9. یک tooltip که قابل interaction نباشد بساز.
10. یک UI با mixed visibility states طراحی کن.

## درس بعدی

در درس بعدی، `cursor` و نقش آن در UX، access و interaction بررسی می‌شود.

## پیش‌نیازها

- Display
- Position
