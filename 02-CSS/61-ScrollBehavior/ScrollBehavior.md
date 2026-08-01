# عنوان درس

## این مبحث چیست؟

- `scroll-behavior` و دیگر تنظیمات مربوط به اسکرول رفتار مرورگر هنگام پیمایش را کنترل می‌کنند: smooth scrolling، scroll anchoring، و scroll-margin/top برای مدیریت محل نمایش عنصر target.
- هدف این درس یادگیری کنترل تجربهٔ پیمایشی برای صفحات طولانی و SPAها است.

## این مبحث در بازار کار چرا مهم است؟

- تجربهٔ پیمایش روان و قابل‌پیش‌بینی برای کاربران موبایل و دسکتاپ اهمیت بالایی دارد و تاثیر مستقیم بر رضایت کاربر دارد.
- در پروژه‌های SPA و documentation-heavy، scroll behavior قسمتی از UX کلیدی است.

## نکات مهم

- `html { scroll-behavior: smooth; }` راهکار ساده برای smooth scroll است اما همه مرورگرها ممکن است رفتار یکسان نداشته باشند.
- `scroll-margin-top` برای جلوگیری از پوشانده شدن elementهای target توسط headerهای ثابت مفید است.
- `overflow-anchor` و مکانیزم anchor helps جلوگیری از جابجایی غیرمنتظره صفحه در هنگام بارگذاری تصاویر و محتوای دینامیک.

## مثال واقعی

- در یک documentation site که header ثابت دارد از `scroll-margin-top` برای anchor links استفاده کن تا بخش هدف زیر header مخفی نشود.
- برای کاربران با `prefers-reduced-motion` باید smooth scroll را غیرفعال کنیم.

## اشتباهات رایج

- فعال‌کردن smooth scroll بدون درنظر گرفتن `prefers-reduced-motion` که برای کاربران حساس به حرکت مشکل‌ساز است.
- عدم مدیریت anchor offsets که باعث می‌شود لینک‌ها محتوای اشتباه را نشان دهند.

## چک لیست یادگیری

- [ ] `scroll-behavior` را پیاده‌سازی کرده‌ام.
- [ ] از `scroll-margin-top` برای anchorها استفاده کرده‌ام.
- [ ] `prefers-reduced-motion` را برای حرکت‌ها رعایت کرده‌ام.
- [ ] تاثیر `overflow-anchor` را در صفحات با بارگذاری دینامیک بررسی کرده‌ام.

## تمرین‌ها

فایل

ScrollBehavior.Exercises.html

را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک صفحه documentation بساز و anchor links را با `scroll-margin-top` تست کن.
2. فعال‌کردن `scroll-behavior:smooth` و سپس با `prefers-reduced-motion` آن را غیرفعال کن.
3. یک SPA کوچک بساز و بررسی کن که `scrollIntoView({behavior:'smooth'})` چگونه کار می‌کند.
4. تاثیر تصاویر بارگذاری‌شونده را بر scroll anchoring بررسی کن.
5. مقایسه اجرا در مرورگرهای مختلف و ثبت تفاوت‌ها.
6. از `scroll-snap` (درس بعدی) و `scroll-behavior` با هم استفاده کن و رفتار را مقایسه کن.
7. تست accessibility برای کیبورد و screen-reader انجام بده.
8. یک header ثابت اضافه کن و anchor links را اصلاح کن.
9. مستند کن که در کدام شرایط از JavaScript برای scroll استفاده می‌کنی.
10. یک guideline برای تیم دربارهٔ scroll behavior بنویس.
