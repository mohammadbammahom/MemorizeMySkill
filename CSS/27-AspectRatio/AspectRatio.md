# عنوان درس

## این مبحث چیست؟

- `aspect-ratio` برای کنترل نسبت عرض به ارتفاع یک عنصر استفاده می‌شود.
- این ویژگی به‌خصوص برای media، cards، images، video placeholders و hero blocks مهم است.
- برای ثابت نگه داشتن شکل element در layoutهای مختلف بسیار کاربردی است.

## چرا از آن استفاده می‌کنیم؟

- برای جلوگیری از تغییر شکل media
- برای ساخت cardهای منظم
- برای ایجاد layoutهای predictable در responsive designs
- برای presentation بهتر Thumbnailها و preview blocks

## چه زمانی استفاده می‌کنیم؟

- وقتی element باید همیشه نسبت خاصی حفظ کند
- وقتی image یا video preview باید در grid یا card به‌صورت ثابت نمایش داده شود
- وقتی layout باید در responsive حالت بدون distortion نزدیک به design باقی بماند

## چه زمانی نباید استفاده کنیم؟

- وقتی محتوا باید آزادانه کشیده شود و shape ثابت لازم نیست
- وقتی image یا media به‌صورت full width و full height در اختیار است
- وقتی container باید با `height: auto` کاملاً آزاد عمل کند

## تفاوت با روش‌های مشابه

- `width` و `height` برای ابعاد مستقیم هستند.
- `aspect-ratio` نسبت ظاهری را حفظ می‌کند.
- این ویژگی مرز میان fixed layout و resilient layout را نرم می‌کند.

## بهترین روش‌های استفاده

- برای `image`, `video`, `thumbnail`, `banner` از `aspect-ratio` استفاده کن.
- برای crop-safe و balanced layout، `aspect-ratio` را با `overflow: hidden` همراه کن.
- در masonry-like grids آن را برای cards و media blocks به کار ببر.

## اشتباهات رایج

- استفاده از `aspect-ratio` بدون درک نسبت مناسب
- استفاده از آن در containerهایی که content overflow می‌کنند
- نادیده گرفتن `object-fit` برای تصاویر در این نسبت

## نکات بازار کار

- `aspect-ratio` برای component library، media galleries و video layouts در بازارکار بسیار دیده می‌شود.
- طراحی‌های مدرن از این ویژگی برای consistency در layouts استفاده می‌کنند.
- interviewها معمولاً این مفهوم را با `object-fit` و responsive layout ترکیب می‌سازند.

## چک‌لیست یادگیری

- [ ] `aspect-ratio` را می‌شناسم.
- [ ] نسبت‌های رایج 16/9، 4/3، 1/1 را می‌فهمم.
- [ ] `aspect-ratio` را برای media و cards به کار می‌برم.
- [ ] `object-fit` را با آن ترکیب می‌کنم.

## تمرین

اکنون فایل AspectRatio.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک video preview card با `aspect-ratio: 16 / 9` بساز.
2. یک square avatar grid با `aspect-ratio: 1 / 1` بساز.
3. یک portfolio card با image preview و ratio ثابت بساز.
4. یک hero banner با ratio 4/3 و text overlay بساز.
5. یک gallery با mixed media ratios بساز.
6. یک product card با image aspect locked طراحی کن.
7. یک testimonial block با avatar و cover ratio ثابت بساز.
8. یک dashboard tile برای analytics thumbnail بساز.
9. یک media compare section با `aspect-ratio` در دو حالت بساز.
10. یک polished card layout برای marketing page بساز.

## درس بعدی

در درس بعدی، `Object Fit` و `Object Position` بررسی می‌شوند.

## پیش‌نیازها

- ResponsiveDesign
- MediaQueries
