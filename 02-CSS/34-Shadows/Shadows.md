# عنوان درس

## این مبحث چیست؟

- `box-shadow` برای اضافه کردن depth و elevation به عناصر استفاده می‌شود.
- `text-shadow` برای افزایش readability یا emphasis روی متن به کار می‌رود.
- چند shadow همزمان برای effects حرفه‌ای و مدرن استفاده می‌شوند.
- `Neumorphism` یک سبک طراحی با shadows soft و subtle است.

## چرا از آن استفاده می‌کنیم؟

- برای نشان دادن لایه‌بندی UI
- برای افزایش perceived depth در cards و buttons
- برای ساخت components premium در product page و dashboard

## چه زمانی استفاده می‌کنیم؟

- وقتی یک card یا button نیاز به elevation دارد
- وقتی باید highlight و separation بین sections دیده شود
- وقتی دو layer کاملاً جداگانه باید از هم مشخص باشند

## چه زمانی نباید استفاده کنیم؟

- وقتی shadowها به‌اشکال غیرضروری و حالت‌دار استفاده می‌شوند
- وقتی elevation به‌دلیل overuse باعث clutter می‌شود
- وقتی shadow برای text به جای semantic structure استفاده می‌شود

## تفاوت با روش‌های مشابه

- `box-shadow` روی element، `text-shadow` روی متن و `filter: drop-shadow()` روی SVG یا image.
- `box-shadow` در `card`, `panel`, `button` و `modal` رایج است.
- `multiple shadows` به کنترل depth و highlight کمک می‌کنند.

## بهترین روش‌های استفاده

- برای هر elevation، یک shadow strategy consistent داشته باش.
- برای cards modern، shadow نرم و light را ترجیح بده.
- برای neumorphism، از highlight و inner shadow با restraint استفاده کن.
- برای buttons و interactive elements، hover shadow را با transition ترکیب کن.

## اشتباهات رایج

- استفاده از shadow خیلی تیره روی همه‌ی کامپوننت‌ها
- استفاده از blur زیاد بدون هدف
- استفاده از `text-shadow` برای همه‌ی titles
- ضعف در contrast با پس‌زمینه

## نکات بازار کار

- shadows در design system‌های مدرن برای elevation و clear hierarchy بسیار مهم‌اند.
- UI engineers باید shadow usage را با 접근‌پذیری و readability هم‌راستا کنند.
- در interviews، `box-shadow` و `multiple shadow` معمولاً با component design و polish پرسیده می‌شوند.

## چک‌لیست یادگیری

- [ ] `box-shadow` و `text-shadow` را می‌شناسم.
- [ ] چند shadow را با order درست می‌نویسم.
- [ ] `neumorphism` را با caution می‌شناسم.
- [ ] shadow برای modern cards و buttons را می‌سازم.

## تمرین

اکنون فایل

Shadows.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک product card با shadow strong و premium بساز.
2. یک soft panel با shadow muted برای dashboard بساز.
3. یک button group با hover shadow و elevation change طراحی کن.
4. یک testimonial card با multiple shadow بساز.
5. یک navbar یا hero card با text-shadow customization بساز.
6. یک neumorphic button group طراحی کن.
7. یک pricing section با cards layered در shadow بساز.
8. یک company landing page با hero card و shadow depth بساز.
9. یک marketing website section با floating card shadows بساز.
10. یک polished modern dashboard UI با consistent elevation بساز.

## درس بعدی

در درس بعدی، `Filters` برای visual treatment، blur، brightness و contrast بررسی می‌شود.

## پیش‌نیازها

- Backgrounds
- Borders
