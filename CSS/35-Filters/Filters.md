# عنوان درس

## این مبحث چیست؟

- `filter` در CSS برای اعمال تغییرات بصری بر روی عناصر استفاده می‌شود.
- توابع رایج شامل `blur()`, `brightness()`, `contrast()`, `grayscale()`, `invert()`, `sepia()` و `drop-shadow()` هستند.
- `backdrop-filter` برای اعمال فیلتر روی پس‌زمینهٔ پشت یک element استفاده می‌شود.

## چرا از آن استفاده می‌کنیم؟

- برای ایجاد treatment ویژه در images و cards
- برای ساخت Hero sections و overlays مدرن
- برای نشان دادن active state و emphasis در UI

## چه زمانی استفاده می‌کنیم؟

- وقتی image باید mood خاصی داشته باشد
- وقتی overlay glassmorphism لازم است
- وقتی card یا image باید در hover state بهتر دیده شود

## چه زمانی نباید استفاده کنیم؟

- وقتی filterها برای همه‌ی عناصر بدون reason استفاده می‌شوند
- وقتی image performance یا accessibility خراب می‌شود
- وقتی filter روی متن یا content اصلی به‌صورت غیرضروری اعمال می‌شود

## تفاوت با روش‌های مشابه

- `box-shadow` depth ایجاد می‌کند، `filter` appearance را تغییر می‌دهد.
- `backdrop-filter` روی فضای پشت element اثر می‌گذارد، نه خود element.
- `drop-shadow()` بیشتر برای SVG یا images استفاده می‌شود.

## بهترین روش‌های استفاده

- از `filter` برای تصاویر و media blocks به‌صورت هدفمند استفاده کن.
- برای glass cards از `backdrop-filter` با background blur ترکیب کن.
- `blur`, `brightness` و `contrast` را برای mood و overlay بهینه استفاده کن.
- برای lightweight UI، فیلترها را با caution و در hoverها استفاده کن.

## اشتباهات رایج

- اعمال `blur` و `brightness` روی کل صفحه
- استفاده از `grayscale()` یا `sepia()` به‌طور دائم بدون purpose
- نادیده گرفتن contrast در `backdrop-filter`
- استفاده از filter برای خوانایی متن اصلی

## نکات بازار کار

- در landing pages و portfolioها این تکنیک‌ها برای polish و storytelling استفاده می‌شوند.
- `backdrop-filter` در glassmorphism pages بسیار محبوب است.
- در interviews، `filter` معمولاً به‌همراه visual polish و UX مطرح می‌شود.

## چک‌لیست یادگیری

- [ ] `filter` و `backdrop-filter` را می‌شناسم.
- [ ] `blur`, `brightness`, `contrast`, `grayscale`, `invert`, `sepia` را می‌نویسم.
- [ ] `drop-shadow()` را برای image یا SVG به کار می‌برم.
- [ ] یک overlay glass UI با filter می‌سازم.

## تمرین

اکنون فایل

Filters.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک Hero hero image با `brightness` و `contrast` تنظیم‌شده بساز.
2. یک gallery card با `grayscale` و hover restore طراحی کن.
3. یک glassmorphism panel با `backdrop-filter` بساز.
4. یک preview card با `sepia` mood مناسب بساز.
5. یک portfolio section با `invert` و text overlay بساز.
6. یک product page که image در hover glow یا shadow داشته باشد بساز.
7. یک reusable image card برای marketing site با `drop-shadow()` و `blur` بساز.
8. یک dashboard media card با `filter` ترکیب‌شده و hover effects بساز.
9. یک announcement banner با blurred background و readable foreground بساز.
10. یک polished image gallery با filter effects و accessibility-aware contrast بساز.

## درس بعدی

در درس بعدی، `Gradients` و انواع gradientهای خطی، شعاعی و مخروطی بررسی می‌شوند.

## پیش‌نیازها

- Backgrounds
- Shadows
