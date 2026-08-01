# عنوان درس

## این مبحث چیست؟

- CSS Accessibility به‌معنای استفاده از استایل‌ها برای بهبود دسترسی و تجربهٔ کاربران با نیازهای ویژه است.
- شامل focus states، color contrast، reduced motion و skip links می‌شود.

## چرا از آن استفاده می‌کنیم؟

- برای فراهم کردن دسترسی برابر و رعایت استانداردهای WCAG.
- برای اینکه کاربران با صفحه‌خوان و کیبورد نیز بتوانند از رابط استفاده کنند.

## چه زمانی استفاده می‌کنیم؟

- در تمامی رابط‌ها باید دسترسی را مد نظر داشته باشیم، مخصوصاً اپلیکیشن‌های عمومی.

## چه زمانی نباید استفاده کنیم؟

- هیچگاه نباید به‌کل از دسترسی صرف‌نظر کرد؛ اما در MVPهای خیلی سریع می‌توان حداقلی رعایت کرد و سپس بهینه‌سازی را انجام داد.

## تفاوت با روش‌های مشابه

- Accessibility با usability همپوشانی دارد اما focus بر تکنیک‌های خاص برای کاربران کم‌توانتر است.

## بهترین روش‌های استفاده

- skip links را اضافه کن و هنگام فوکوس نمایان شود.
- برای focus از outline مناسب استفاده کن و نه تنها از color change.
- contrast را با ابزارهای WCAG اندازه‌گیری کن.
- `prefers-reduced-motion` را رعایت کن.

## اشتباهات رایج

- حذف outlines به‌صورت global بدون جایگزین مناسب
- رنگ‌های low-contrast برای متن‌های مهم
- relying solely on color to convey meaning

## نکات بازار کار

- بررسی accessibility جزء استانداردهای code review است.
- تجربهٔ کار با axe، Lighthouse و ابزارهای مشابه مفید است.

## چک‌لیست یادگیری

- [ ] skip links را پیاده‌سازی می‌کنم.
- [ ] focus states مناسب طراحی می‌کنم.
- [ ] reduced motion را تست می‌کنم.
- [ ] contrast را برای متن‌ها بررسی می‌کنم.

## تمرین

اکنون فایل

CSSAccessibility.Exercises.html

را ایجاد کن.

1. یک صفحه با skip link بساز.
2. تمام interactive elements را با focus outline مناسب تست کن.
3. contrast را با ابزار بسنج و گزارش کن.
4. prefers-reduced-motion را شبیه‌سازی کن و رفتار را بررسی کن.
5. یک form بساز که با کیبورد قابل دسترسی باشد.
6. aria attributes را برای یک widget ساده اضافه کن.
7. لیست role و aria برای componentهای common بنویس.
8. یک widget custom را برای screen-reader تست کن.
9. keyboard-only navigation برای یک modal پیاده کن.
10. یک checklist برای accessibility review تیم بنویس.

## درس بعدی

در درس بعدی، `Dark Mode` و مدیریت متغیرهای رنگی را بررسی می‌کنیم.

## پیش‌نیازها

- مباحث اولیه CSS
- Transitions & Variables
