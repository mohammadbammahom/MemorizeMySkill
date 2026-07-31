# عنوان درس

## این مبحث چیست؟

- `display:flex` یک مدل layout یک‌بعدی برای قرار دادن عناصر در یک خط یا چند خط است.
- در پروژه‌های واقعی، Flexbox برای navbars، cards، buttons و stat blocks کاربرد زیادی دارد.
- این مدل روی direction، spacing و alignment کنترل ساده‌ای می‌دهد.

## چرا از آن استفاده می‌کنیم؟

- برای ساخت layoutهای خطی و روان
- برای align و distribute items در یک container
- برای ایجاد spacing متقارن بین components
- برای مدیریت responsive one-dimensional layouts

## چه زمانی استفاده می‌کنیم؟

- وقتی باید items در یک ردیف یا چند ردیف قرار بگیرند
- برای navbars، pricing cards، stats و buttons
- برای `justify-content` و `align-items` کنترل شده
- برای wrap در `flex-wrap`

## چه زمانی نباید استفاده کنیم؟

- وقتی layout به صورت two-dimensional و complex است و بهتر است Grid استفاده شود
- وقتی radial و nested layout باید freestyle شود
- وقتی alignment و distribution نیاز به سیستم پیچیده‌تر از one-dimensional دارد

## تفاوت با روش‌های مشابه

- `display:flex` یک‌بعدی است و در یک محور کار می‌کند.
- `display:grid` دو‌بعدی است و برای layout پیچیده مناسب‌تر است.
- `justify-content` در محور اصلی اعمال می‌شود.
- `align-items` در محور cross اعمال می‌شود.

## بهترین روش‌های استفاده

- برای layout یک‌بعدی، Flexbox را ترجیح بده.
- برای spacing بین items از `gap` استفاده کن.
- برای wrapping responsive از `flex-wrap` بهره ببر.
- برای stat bars و buttons از `justify-content` و `align-items` ترکیبی استفاده کن.

## اشتباهات رایج

- استفاده از Flexbox برای همه‌ی layouts
- فراموش کردن `flex-wrap` برای responsive content
- alignment اشتباه در محور cross
- استفاده از gap بدون درک محور اصلی

## نکات بازار کار

- در Front-End modern، Flexbox جزو پایه‌های daily layout است.
- بسیاری از component layouts در پروژه‌های real-world، به یک تایم فریم خیلی کوتاه با Flexbox نیاز دارند.
- Flexbox فقط layout نیست؛ یک سیستم mental model برای spacing و distribution است.

## چک‌لیست یادگیری

- [ ] `display:flex` و `flex-direction` را می‌شناسم.
- [ ] `justify-content` و `align-items` را در layouts واقعی به‌کار می‌برم.
- [ ] `gap` و `flex-wrap` را برای responsive design می‌دانم.
- [ ] می‌توانم یک layout one-dimensional را با Flexbox طراحی کنم.

## تمرین

اکنون فایل FlexboxBasics.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک navbar با links در یک ردیف Flex طراحی کن.
2. سه card stat با `justify-content: space-between` بساز.
3. یک pricing row با `align-items: center` بساز.
4. یک row با wrapping برای small screens طراحی کن.
5. یک card group برای product listing با `gap` بساز.
6. یک dashboard-topbar با brand و actions طراحی کن.
7. یک section با buttons و badge کنار هم ایجاد کن.
8. یک hero section با CTA و metadata در یک ردیف بساز.
9. یک profile header با avatar و info در یک flex row بساز.
10. یک landing page component bar با layout professional ایجاد کن.

## درس بعدی

در درس بعدی، Flexbox پیشرفته با grow، shrink، basis، order و nested layout بررسی می‌شود.

## پیش‌نیازها

- Sizing
- Display
