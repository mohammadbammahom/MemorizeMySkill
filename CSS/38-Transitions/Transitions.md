# عنوان درس

## این مبحث چیست؟

- `transition` برای ایجاد تغییر نرم بین دو state از CSS استفاده می‌شود.
- `transition-property` خاصیت موردنظر برای animation را مشخص می‌کند.
- `transition-duration` میزان زمان اجرای transition را تعیین می‌کند.
- `transition-delay` زمان تا شروع transition را مشخص می‌کند.
- `transition-timing-function` سرعت تغییر را تعیین می‌کند.

## چرا از آن استفاده می‌کنیم؟

- برای micro interactionهای حرفه‌ای
- برای بهتر شدن UX hover و focus states
- برای ایجاد feeling of control و polish در UI

## چه زمانی استفاده می‌کنیم؟

- وقتی hover state باید smooth باشد
- وقتی card یا button باید به‌صورت elegant تغییر کند
- وقتی state change به‌صورت visually clear لازم است

## چه زمانی نباید استفاده کنیم؟

- وقتی transition به‌صورت بی‌هدف و طولانی اعمال می‌شود
- وقتی motion فقط در اثر animation اضافه شده است
- وقتی property transition، performance یا accessibility را خراب می‌کند

## تفاوت با روش‌های مشابه

- `transition` مستقیم برای state-to-state smoothing است.
- `animation` برای sequence و timing loops به کار می‌رود.
- `transform` معمولاً با `transition` برای motion ترکیب می‌شود.

## بهترین روش‌های استفاده

- `transform`, `opacity`, `background-color` را برای transition بهتر انتخاب کن.
- برای hover interaction، `ease-out` یا `cubic-bezier` مناسب است.
- `duration` را کوتاه و متناسب با UI نگه دار.

## اشتباهات رایج

- استفاده از transition روی تمامی properties بدون reason
- duration خیلی طولانی برای micro interactions
- delay نامتعارف و غیرضروری
- بی‌توجهی به timing function در UI

## نکات بازار کار

- در پروژه‌های real-world، transitionها بخش مهم polish و interaction design هستند.
- Front-End engineers برای components clickable و hoverable باید transition-aware باشند.
- در interviews، `transition-property` و `transition-timing-function` از موضوع‌های پرتکرار هستند.

## چک‌لیست یادگیری

- [ ] `transition` را می‌شناسم.
- [ ] `transition-property`, `duration`, `delay`, `timing-function` را به‌درستی استفاده می‌کنم.
- [ ] hover و click interactions با transition می‌سازم.
- [ ] timing و state change را هدفمند برای UX انتخاب می‌کنم.

## تمرین

اکنون فایل

Transitions.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک CTA button با hover transition بساز.
2. یک pricing card با transform transition در hover بساز.
3. یک navbar item با color و underline transition بساز.
4. یک modal overlay با fade transition بساز.
5. یک gallery thumbnail با lift-up interaction بساز.
6. یک product card با shadow و scale transition بساز.
7. یک settings panel با smooth open and close transition بساز.
8. یک dashboard tile با hover growth motion بساز.
9. یک notification badge با timing و delay حرفه‌ای بساز.
10. یک маркетینگ page با reusable interactive card motion بساز.

## درس بعدی

در درس بعدی، `Animations` برای sequence-driven motion و timing frameworks بررسی می‌شود.

## پیش‌نیازها

- Transforms
- Shadows
