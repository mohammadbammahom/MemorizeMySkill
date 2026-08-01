# عنوان درس

## این مبحث چیست؟

- `translate()` برای جابه‌جایی عنصر در محور X یا Y استفاده می‌شود.
- `scale()` برای بزرگ‌تر یا کوچک‌تر کردن عنصر به کار می‌رود.
- `rotate()` برای چرخش عنصر در محور مورد نظر استفاده می‌شود.
- `skew()` برای کج کردن element استفاده می‌شود.
- `transform-origin` نقطه‌ی مبدا تغییر شکل را تعیین می‌کند.
- پایه‌های 3D در CSS برای depth و perspective به‌کار می‌رود.

## چرا از آن استفاده می‌کنیم؟

- برای جابه‌جایی دقیق کامپوننت‌ها در UI
- برای motion، depth و emphasis در طراحی
- برای ایجاد interactionهای مدرن بدون نیاز به JavaScript

## چه زمانی استفاده می‌کنیم؟

- وقتی می‌خواهیم hover state برای card یا button جذاب شود
- وقتی برای layout animation یا micro interaction نیاز به transform داریم
- وقتی باید 3D یا tilted effect در UI ساخته شود

## چه زمانی نباید استفاده کنیم؟

- وقتی transform صرفاً برای مکان‌یابی ساده استفاده می‌شود
- وقتی browser support و performance برای transform نیاز নেই
- وقتی element در layout flow باید دقیقاً با spacing طبیعی کنترل شود

## تفاوت با روش‌های مشابه

- `position` layout را در flow تغییر می‌دهد، `transform` visual positioning را تغییر می‌دهد.
- `translate()` از positioning برای motion استفاده می‌کند، نه semantic layout.
- `rotate()` و `skew()` برای visual twist و tilt استفاده می‌شوند.
- 3D transform به `perspective` و depth نیاز دارد.

## بهترین روش‌های استفاده

- برای hover micro-interactions از `translateY()` و `scale()` استفاده کن.
- `transform-origin` را برای rotationهای ظریف دقیق تنظیم کن.
- در 3D پایه‌ها فقط برای کامپوننت‌های هدفمند استفاده کن.
- برای maintainable motion، transform را با `transition` همراه کن.

## اشتباهات رایج

- استفاده از `transform` برای layout، نه برای effect
- نادیده گرفتن `transform-origin`
- استفاده از 3D برای عناصر ساده بدون reason
- اعمال transform بدون `will-change` مناسب

## نکات بازار کار

- این مفهوم در اکثر وب‌اپ‌ها برای interaction و hover effects دیده می‌شود.
- UI engineer باید transform را مانند یک ابزار motion-aware در component design به‌کار بگیرد.
- در مصاحبه‌ها، `transform-origin` و 3D basics معمولاً در کنار animation مطرح می‌شوند.

## چک‌لیست یادگیری

- [ ] `translate()`, `scale()`, `rotate()` و `skew()` را می‌شناسم.
- [ ] `transform-origin` را برای چرخش دقیق تنظیم می‌کنم.
- [ ] در hover و card effects از transform استفاده می‌کنم.
- [ ] 3D basics را برای depth-aware layout می‌فهمم.

## تمرین

اکنون فایل

Transforms.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک card hover با `translateY()` و `scale()` بساز.
2. یک button با `rotate()` در hover بساز.
3. یک image gallery با skewed cards بساز.
4. یک product tile با transform-origin و rotation متفاوت بساز.
5. یک portfolio item با hover scale + translate pattern بساز.
6. یک CTA badge با 3D transform basic بساز.
7. یک testimonial stack با transforms و depth بساز.
8. یک hero banner با translate and scale interaction بساز.
9. یک modal card با rotate and skew در hover بساز.
10. یک component showcase برای motion interaction طراحی کن.

## درس بعدی

در درس بعدی، `Transitions` و کنترل timing، delay و property به صورت حرفه‌ای بررسی می‌شود.

## پیش‌نیازها

- Shadows
- Gradients
