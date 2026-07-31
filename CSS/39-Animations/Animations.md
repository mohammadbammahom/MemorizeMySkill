# عنوان درس

## این مبحث چیست؟

- `animation` برای اجرای sequence‌های حرکت و state change به صورت زمان‌بندی‌شده استفاده می‌شود.
- `animation-duration` طول اجرای animation را مشخص می‌کند.
- `animation-delay` زمان تا شروع را تعیین می‌کند.
- `animation-fill-mode` وضعیت نهایی یا ابتدایی animation را کنترل می‌کند.
- `animation-direction` جهت اجرا را تعیین می‌کند.
- `animation-iteration-count` تعداد تکرار را مشخص می‌کند.
- `animation-play-state` وضعیت pause و running را کنترل می‌کند.

## چرا از آن استفاده می‌کنیم؟

- برای motion intent و reaction در UI
- برای heartbeat، pulse، loading و alert states
- برای تعامل بهتر و storytelling در landing pages

## چه زمانی استفاده می‌کنیم؟

- وقتی یک state باید به‌طور مکرر یا مستمر animate شود
- وقتی loading یا status indicator نیاز به motion دارد
- وقتی micro interaction در real UI لازم است

## چه زمانی نباید استفاده کنیم؟

- وقتی motion بی‌هدف و تکراری است
- وقتی animation برای همه‌ی عناصر بدون نیاز استفاده می‌شود
- وقتی performance یا accessibility به خطر می‌افتد

## تفاوت با روش‌های مشابه

- `transition` एक‌به‌یک و smooth state change است.
- `animation` sequence و loop-aware است.
- `@keyframes` به animation structure و timing کمک می‌کند.

## بهترین روش‌های استفاده

- برای motion intent، animation را محدود و به‌صورت small scope استفاده کن.
- `animation-fill-mode` را فقط در صورت نیاز فعال کن.
- برای loading/pulse، `iteration-count` و `play-state` را با فایده استفاده کن.
- برای UX، animation را کوتاه و readable نگه دار.

## اشتباهات رایج

- استفاده از animation برای همه‌ی عناصر
- تکرار بی‌رحمانه برای interactions
- نادیده گرفتن `pause` یا reduced-motion
- استفاده از duration و delay نامتناسب

## نکات بازار کار

- در UI و dashboardها، animation ابزار مهم برای status و activity feedback است.
- در product companies، developers باید animation را user-friendly و watchable طراحی کنند.
- این موضوع در مصاحبه‌های Front-End با motion design و performance مطرح می‌شود.

## چک‌لیست یادگیری

- [ ] `animation` و `animation-duration` را می‌شناسم.
- [ ] `delay`, `fill-mode`, `direction`, `iteration-count` و `play-state` را می‌دانم.
- [ ] `@keyframes` را با animation پیاده می‌کنم.
- [ ] یک loading یا status effect با animation می‌سازم.

## تمرین

اکنون فایل

Animations.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک `pulse` status card بساز.
2. یک loading indicator با `animation-direction` و `iteration-count` بساز.
3. یک CTA button با hover animation و `play-state` مدیریت‌شده بساز.
4. یک badge که در `paused` و `running` حالت‌های مختلف داشته باشد بساز.
5. یک hero section که `animation-fill-mode` برای شروع و پایان حالت را نمایش دهد بساز.
6. یک notification box با delay و direction change بساز.
7. یک accordion header با motion pulse interaction بساز.
8. یک dashboard card که state change را animated کند بساز.
9. یک loading و success state برای form button بساز.
10. یک promotional banner با sequence-driven animation طراحی کن.

## درس بعدی

در درس بعدی، `Keyframes` و ساختار animation sequence‌ها با fade، slide، rotate و scale بررسی می‌شود.

## پیش‌نیازها

- Transitions
- Transforms
