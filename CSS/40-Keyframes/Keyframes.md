# عنوان درس

## این مبحث چیست؟

- `@keyframes` ساختار زمانی animation را تعریف می‌کند.
- keyframes به‌صورت sequence به propertyها وضعیت‌هایی می‌دهند.
- می‌توانیم برای loading، fade، slide، rotate و scale keyframes بسازیم.
- این ابزار برای motion design در UI‌ها امری استاندارد و حرفه‌ای است.

## چرا از آن استفاده می‌کنیم؟

- برای ساخت animationهای قابل‌پیش‌بینی
- برای طراحی micro interactionها و loading states
- برای بارگذاری گرافیک و احساس زنده بودن UI

## چه زمانی استفاده می‌کنیم؟

- وقتی animation باید رفتاری repeatable داشته باشد
- وقتی loading و button hover از یک state sequence پیروی کنند
- وقتی motion should have clear start/mid/end states

## چه زمانی نباید استفاده کنیم؟

- وقتی animation صرفاً جایگزین transition می‌شود
- وقتی keyframes به‌صورت خیلی پیچیده و بی‌هدف نوشته می‌شوند
- وقتی برای elementهای ساده از animation overkill استفاده می‌شود

## تفاوت با روش‌های مشابه

- `transition` یک change ساده را smooth می‌کند.
- `animation` با keyframes sequence را کنترل می‌کند.
- `@keyframes` به animation وابستگی زمان‌بندی و steps را می‌دهد.

## بهترین روش‌های استفاده

- برای `loading`, `fade`, `slide`, `scale` و `rotate` از keyframes استفاده کن.
- `from` و `to` یا multiple keyframes را به‌صورت روشن و دقیق بنویس.
- برای concrete state change، بهتر است keyframes و animation name دقیق باشند.
- برای سرعت، `ease-in-out` یا `linear` مناسب‌اند.

## اشتباهات رایج

- تعریف keyframes بدون clear phase‌ها
- استفاده از loop-based animation برای content-heavy pages
- بروزرسانی animation بدون naming و maintainability
- حرکت‌های شدید و distracting با `rotate` یا `scale`

## نکات بازار کار

- در UI engineer کارها، `@keyframes` مهم‌ترین ابزار برای sequence motion است.
- برای loading، modal open و CTA interaction، keyframes معمولاً دیده می‌شوند.
- این موضوع در ارزیابی‌های کارآموزی و مصاحبه به‌صورت practical مطرح می‌شود.

## چک‌لیست یادگیری

- [ ] `@keyframes` را می‌شناسم.
- [ ] multiple keyframes را می‌نویسم.
- [ ] loading و button animations را می‌سازم.
- [ ] fade، slide، rotate و scale را با keyframes پیاده می‌کنم.

## تمرین

اکنون فایل

Keyframes.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک loading spinner با `@keyframes` بساز.
2. یک fade-in section برای hero page بساز.
3. یک slide-in card برای product marketing بساز.
4. یک rotate-in icon برای CTA بساز.
5. یک scale animation برای badge showcase بساز.
6. یک button animation با multiple keyframes بساز.
7. یک notification panel با fade + slide animation بساز.
8. یک gallery card که to/from `translate` و `opacity` دارد بساز.
9. یک landing section با loading indicator و CTA animation بساز.
10. یک feature article با keyframe-based motion design بساز.

## درس بعدی

در درس بعدی، `CSS Variables` و `:root` برای reusable theme و dark mode preparation بررسی می‌شود.

## پیش‌نیازها

- Animations
- Transitions
