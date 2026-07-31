# عنوان درس

## این مبحث چیست؟

- CSS Performance مربوط به بهینه‌سازی render، repaint و reflow و کاهش هزینه‌های render است.
- تفاوت repaint (رنگ‌آمیزی دوباره) و reflow (layout) اهمیت بالایی دارد.
- Critical CSS، selector optimization و animation performance مباحث کلیدی هستند.

## چرا از آن استفاده می‌کنیم؟

- برای افزایش سرعت بارگذاری و تعامل سریع‌تر
- برای کاهش لگ در انیمیشن‌ها و transitions
- برای بهبود metrics مثل TTFB و Largest Contentful Paint

## چه زمانی استفاده می‌کنیم؟

- وقتی UI پیچیده و dynamic است
- وقتی انیمیشن‌ها یا transitions performance-sensitive هستند
- وقتی می‌خواهیم critical path CSS را بهینه کنیم

## چه زمانی نباید استفاده کنیم؟

- وقتی premature optimization باعث محدودیت در UX می‌شود
- وقتی readability و maintainability قربانی micro-optimization می‌شود

## تفاوت با روش‌های مشابه

- Performance tuning در CSS مستقل از backend optimizations است، اما مکمل آن است.
- Critical CSS تمرکز روی مسیر رندر اولیه است؛ lazy-loading assets مرتبط است.

## بهترین روش‌های استفاده

- برای انیمیشن‌ها از `transform` و `opacity` به‌جای properties که repaint/reflow ایجاد می‌کنند استفاده کن.
- selectors کوتاه و specific بنویس؛ از descendant-heavy selectors پرهیز کن.
- Critical CSS برای above-the-fold inline کن و بقیه را lazy-load کن.
- از will-change با restraint استفاده کن و memory footprint را کنترل کن.

## اشتباهات رایج

- انیمیشن دادن به `width`, `height`, `top`, `left` بدون دلیل
- استفادهٔ بیش از حد از `will-change` که منجر به memory bloat می‌شود
- selectorهای سنگین که pipeline رندر را کند می‌کنند

## نکات بازار کار

- مهارت در بهینه‌سازی CSS برای UX و performance در تیم‌های frontend بسیار ارزشمند است.
- در reviewها، developers باید trade-offs بین readability و micro-optimizations را توضیح دهند.
- ابزارها و metrics مانند Lighthouse برای ارزیابی performance ضروری‌اند.

## چک‌لیست یادگیری

- [ ] تفاوت repaint vs reflow را می‌دانم.
- [ ] برای animations properties مناسب را انتخاب می‌کنم.
- [ ] critical CSS و lazy loading را می‌شناسم.
- [ ] selector optimization و will-change best practices را پیاده می‌کنم.

## تمرین

اکنون فایل

CSSPerformance.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک animation که از `transform` و `opacity` استفاده می‌کند بساز.
2. یک demo که نشان می‌دهد تغییر `width` باعث reflow می‌شود بساز.
3. critical CSS برای یک hero section inline کن و مقایسه کن.
4. selectors را refactor کن تا specificity کاهش یابد.
5. یک page با heavy DOM و بررسی repaint/reflow بساز.
6. یک performance checklist برای component library بنویس.
7. یک animation large list با virtualization یا lazy rendering طراحی کن.
8. یک Lighthouse run با before/after optimization مستند کن.
9. یک recommendations doc برای team درباره will-change و memory بنویس.
10. یک landing page که critical and non-critical CSS را جدا می‌کند بساز.

## درس بعدی

در درس بعدی، `CSS Accessibility` برای contrast، focus states و reduced motion بررسی می‌شود.

## پیش‌نیازها

- Transitions
- Animations
