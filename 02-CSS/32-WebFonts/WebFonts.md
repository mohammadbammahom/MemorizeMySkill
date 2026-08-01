# عنوان درس

## این مبحث چیست؟

- `@font-face` اجازه می‌دهد یک فونت سفارشی از مسیر محلی یا شبکه بارگذاری شود.
- Google Fonts یک سرویس محبوب برای استفاده از تایپ‌فیس‌های آماده است.
- Local Fonts برای کنترل بیشتر و بهینه‌سازی مسیر بارگذاری رعایت می‌شوند.
- Variable Fonts یک نسخه‌ی مدرن از فونت‌ها هستند که وزن و width را با یک فایل واحد پشتیبانی می‌کنند.
- Fallback Fonts برای جلوگیری از شکست در نمایش واقعی و بهبود عملکرد مهم هستند.

## چرا از آن استفاده می‌کنیم؟

- برای brand consistency
- برای افزایش trust و visual polish
- برای ایجاد تجربه‌ی بهتر در headline و marketing sections
- برای بهینه‌سازی خوانایی و distinct style در UI

## چه زمانی استفاده می‌کنیم؟

- وقتی یک brand نیاز به فونت خاص دارد
- وقتی headlineها نیاز به look متفاوت دارند
- وقتی performance و fallback strategy باید کنترل‌شود

## چه زمانی نباید استفاده کنیم؟

- وقتی چند فونت بدون نیاز انتخاب می‌شوند
- وقتی network requestها با font loading بیش از حد بالا می‌روند
- وقتی fallback strategy به درستی برنامه‌ریزی نشده است

## تفاوت با روش‌های مشابه

- Google Fonts سریع‌تر برای شروع است؛ اما request و external dependency دارد.
- Local Fonts نسخه‌ی کنترل‌شده‌تر برای پروژه‌های سازمانی هستند.
- Variable Fonts عملکرد بهتر و library smaller دارند.
- Fallback Fonts برای نگه‌داشتن layout در حین بارگذاری استفاده می‌شوند.

## بهترین روش‌های استفاده

- فقط یک یا دو خانواده‌ی اصلی برای کل پروژه انتخاب کن.
- Google Fonts را برای پروژه‌های frontend ساده به‌کار ببر.
- برای performance، `font-display` و subset استفاده کن.
- برای brands استاندارد، local fonts و variable fonts را مدنظر داشته باش.

## اشتباهات رایج

- بارگذاری بیش از حد فونت
- انتخاب فونت‌های شلوغ برای متن اصلی
- نادیده گرفتن fallback در UI
- استفاده از weight‌های متعدد بدون نیاز

## نکات بازار کار

- در پروژه‌های real-world، Web Fonts بخش مهم visual system هستند.
- Front-End engineer باید هم روی typography و هم روی performance مسلط باشد.
- در interviews، شناخت variable fonts و fallback strategy نشان‌دهنده‌ی مهارت حرفه‌ای است.

## چک‌لیست یادگیری

- [ ] `@font-face` را می‌شناسم.
- [ ] Google Fonts و local fonts را برای پروژه انتخاب می‌کنم.
- [ ] Variable Fonts را می‌شناسم.
- [ ] fallback strategy و performance را دربارۀ font loading می‌دانم.

## تمرین

اکنون فایل

WebFonts.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک landing page با Google Fonts و fallback مناسب بساز.
2. یک company Website با local font strategy بساز.
3. یک typography sample page با variable font weight و spacing بساز.
4. یک hero section با font-display-aware loading بساز.
5. یک marketing page که در کارت‌ها font pairing دارای consistency باشد بساز.
6. یک portfolio page با brand font و fallback بصری بساز.
7. یک SaaS page با headline و paragraph font pair مناسب طراحی کن.
8. یک docs page که برای mobile و desktop font performance را حفظ کند بساز.
9. یک blog page با mixed local and external font loading بساز.
10. یک branded design system snippet با font strategy حرفه‌ای بساز.

## درس بعدی

در درس بعدی، `Icons` و انواع SVG و Icon Fonts با نگاه به performance و usability بررسی می‌شود.

## پیش‌نیازها

- Typography
- Performance basics
