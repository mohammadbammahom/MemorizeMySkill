# عنوان درس

## این مبحث چیست؟

- `border`، `border-radius`، `outline` و `box-shadow` لایه‌های نهایی visual polish یک component را می‌سازند.
- این ویژگی‌ها در UI production برای emphasis، separation و interaction clarity استفاده می‌شوند.
- border و shadow اگر درست استفاده شوند، perceived quality را خیلی بالا می‌برند.

## چرا از آن استفاده می‌کنیم؟

- برای ایجاد separation بین sections و cards
- برای نشان دادن focus و active state
- برای ساخت cardهای polished و professional
- برای تعریف boundaryهای قابل تشخیص در UI

## چه زمانی استفاده می‌کنیم؟

- وقتی یک card یا button باید متمایز شود، `border` مناسب است.
- وقتی radius لازم است برای rounded design، `border-radius` به‌کار می‌رود.
- وقتی باید focus ring یا outline visible باشد، `outline` مناسب است.
- وقتی باید depth یا elevation ایجاد شود، `box-shadow` کاربرد دارد.

## چه زمانی نباید استفاده کنیم؟

- وقتی `outline` به‌جای `border` برای styling اصلی استفاده شود
- وقتی `box-shadow` در هر component بی‌رویه اعمال شود
- وقتی border و shadow برای زیبایی صرف، بدون semantic use case باشد

## تفاوت با روش‌های مشابه

- `border` لبه‌ی واقعی element را نشان می‌دهد.
- `border-radius` گوشه‌ها را گرد می‌کند.
- `outline` بیرون از border قرار می‌گیرد و بیشتر برای focus ring استفاده می‌شود.
- `box-shadow` depth و elevation را ایجاد می‌کند.

## بهترین روش‌های استفاده

- برای cards و inputs، border و radius را با consistency استفاده کن.
- برای focus state، `outline` را به همراه accessible رنگ مناسب استفاده کن.
- `box-shadow` را با مقدار کنترل‌شده برای depth استفاده کن.
- برای design system، یک tokens-based approach برای border و shadow داشته باش.

## اشتباهات رایج

- شدن border خیلی ضخیم یا نامتوازن
- استفاده از outline برای styling اصلی
- shadow زیاد یا بی‌هدف در همه‌ی components
- border-radius نامنظم در project بدون system

## نکات بازار کار

- در UI component libraries، `border` و `shadow` بخش مهم design system هستند.
- یک Front-End engineer باید بداند چه زمانی border semantic است و چه زمانی shadow depth را نشان می‌دهد.
- این دو property در landing page و dashboardها ظاهر polished می‌سازند.

## چک‌لیست یادگیری

- [ ] `border` را برای تعریف boundary به‌درستی می‌شناسم.
- [ ] `border-radius` را برای rounded UI به‌کار می‌برم.
- [ ] `outline` و `box-shadow` را درمناسبت خود استفاده می‌کنم.
- [ ] برای componentهای real-world، polish و depth را با این ویژگی‌ها می‌سازم.

## تمرین

اکنون فایل Borders.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک card با `border` و radius بساز.
2. یک input focus state با outline طراحی کن.
3. یک button با box-shadow و hover elevation بساز.
4. یک notification card با border-left و shadow بساز.
5. یک pricing segment با border radius و high polish بساز.
6. یک dashboard tile با border و shadow حرفه‌ای طراحی کن.
7. یک avatar card با outline و hover state بساز.
8. یک form section با border و rounded corners بساز.
9. یک card گروهی با multiple border styles طراحی کن.
10. یک landing page component library با border و shadow system بساز.

## درس بعدی

در پایان این بخش، دوره‌ی CSS به صورت مرور و checkpoint دنبال می‌شود.

## پیش‌نیازها

- Backgrounds
- BoxModel
