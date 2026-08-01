# عنوان درس

## این مبحث چیست؟

- CSS Logical Properties مجموعه‌ای از properties است که جایگزین خواص فیزیکی مانند `left`, `right`, `margin-left` و `margin-right` می‌شوند و به جای آن‌ها از `inline`/`block` و `start`/`end` استفاده می‌کنند.
- این خواص نوشتار راست-به‌چپ (RTL) و چپ-به‌راست (LTR) را به‌صورت بومی پشتیبانی می‌کنند.

## چرا در بازار کار مهم است؟

- در پروژه‌های چندزبانه و بین‌المللی، استفاده از logical properties از نوشتن CSS دوگانه برای RTL/LTR جلوگیری می‌کند و نگهداری را آسان‌تر می‌سازد.
- کارفرمایان انتظار دارند که محصول با کمترین تلاش از زبان‌های RTL پشتیبانی کند.

## نکات مهم

- نام‌گذاری جدید شامل `margin-inline-start`, `padding-block-end`, `inset-inline` و غیره است.
- logical properties با `writing-mode` و `direction` تعامل دارند.
- در مرورگرهای قدیمی باید fallback یا polyfill در نظر بگیرید.

## مثال واقعی

- در یک CMS که هم فارسی و هم انگلیسی تولید می‌کند، با استفاده از `padding-inline` و `margin-block` می‌توانید layout را برای هر زبان بدون تغییر CSS اصلی تطبیق دهید.

## اشتباهات رایج

- فراموش کردن تست در حالت RTL بعد از استفاده از logical properties.
- ترکیب بی‌رویه logical و physical properties که ممکن است باعث تعارض شود.

## چک لیست یادگیری

- [ ] می‌توانم از `inline` و `block` به‌جای `left/right/top/bottom` استفاده کنم.
- [ ] رفتار نوشتار RTL را با تغییر `direction` تست کرده‌ام.
- [ ] fallbackهای لازم را برای مرورگرهای قدیمی در نظر گرفته‌ام.

## تمرین‌ها

فایل

CSSLogicalProperties.Exercises.html

را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک layout ساده بساز و سپس `direction: rtl` را اعمال کن تا رفتار logical properties را ببینی.
2. از `padding-inline` و `margin-block` برای spacing استفاده کن.
3. یک badge با `inset-inline` بساز که در RTL به خوبی نمایش یابد.
4. نشان بده چگونه logical properties با `writing-mode: vertical-rl` تعامل می‌کنند.
5. ترکیب logical و physical properties را مقایسه کن و تعارض‌ها را پیدا کن.
6. بررسی کن کدام مرورگرها نیاز به fallback دارند.
7. یک guideline برای تیم دربارهٔ استفاده از logical properties بنویس.
8. یک component library کوچک با logical properties پیاده کن.
9. تست unit برای استایل‌ها بنویس که در RTL هم پاس شوند.
10. مستند کن که چرا logical properties در پروژهٔ شما استفاده شد.
