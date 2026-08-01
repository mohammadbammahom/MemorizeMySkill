# عنوان درس

## این مبحث چیست؟

- `SVG icons` برای نشان‌های دقیق و scalable محبوب‌اند.
- `Icon Fonts` برای راحتی استفاده و سریع‌ترین راه اجرا در UI کاربرد دارند.
- Heroicons، Font Awesome و Bootstrap Icons نمونه‌های پرکاربرد در بازار کار هستند.
- عملکرد و maintainability در icon strategy اهمیت بالایی دارند.

## چرا از آن استفاده می‌کنیم؟

- برای readability بهتر و navigation سریع‌تر
- برای کاهش نیاز به متن در interface
- برای هماهنگی و consistency UI
- برای افزایش perceived quality در محصولات واقعی

## چه زمانی استفاده می‌کنیم؟

- وقتی action buttons نیاز به symbol دارند
- وقتی sidebar یا dashboard باید icon-first باشد
- وقتی card list یا feature blocks نیاز به leading icon دارند

## چه زمانی نباید استفاده کنیم؟

- وقتی iconها بدون label یا context می‌آیند
- وقتی icon font‌ها به‌صورت غیرضروری به پروژه اضافه می‌شوند
- وقتی SVGهای نامتوازن با اداپت ناپذیری بارگذاری می‌شوند

## تفاوت با روش‌های مشابه

- `SVG` از نظر کیفیت و scalability بهتر است.
- `Icon Font` سریع برای استفاده است، اما loading و performance ممکن است کمتر بهینه باشد.
- برای جدول‌های UI، برای all-purpose icons، `SVG` معمولاً انتخاب بهتر است.
- Heroicons و Bootstrap Icons اکثراً به‌عنوان design system base استفاده می‌شوند.

## بهترین روش‌های استفاده

- برای icon-heavy action UI، `SVG sprite` یا inline SVG را ترجیح بده.
- برای quick prototype یا component library، icon font را با caution استفاده کن.
- برای accessibility، `aria-hidden` یا `title` مناسب را اعمال کن.
- برای icon set، consistency در stroke، size و color حفظ شود.

## اشتباهات رایج

- استفاده از iconهای بسیار پیچیده در سرویس‌های کوچک
- ترکیب چند خانواده‌ی icon متفاوت در یک UI
- نادیده گرفتن color consistency و stroke weight
- در نظر نگرفتن performance در asset bundle

## نکات بازار کار

- در بازارکار، `SVG` به‌خاطر flexibility در reusable components خیلی محبوب است.
- در library و dashboard پروژه‌ها، icon consistency و naming conventions اهمیت دارد.
- Front-End engineer باید بتواند بین `SVG` و icon font انتخاب مناسب بدهد.

## چک‌لیست یادگیری

- [ ] `SVG icons` را می‌شناسم.
- [ ] Heroicons، Font Awesome و Bootstrap Icons را می‌فهمم.
- [ ] تفاوت SVG و icon font را می‌دانم.
- [ ] برای UI تصمیم درست در مورد icon strategy می‌گیرم.

## تمرین

اکنون فایل

Icons.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک dashboard card list با SVG icons و labels بساز.
2. یک pricing section با stroke-based icon set بساز.
3. یک feature page با Heroicons و consistent spacing طراحی کن.
4. یک login page با form actions و icon buttons بساز.
5. یک company website hero با icon group و CTA بساز.
6. یک marketing page با icon list و highlight grid بساز.
7. یک product section با icon label combination بساز.
8. یک portfolio page با skill icons و metadata بساز.
9. یک services page با set of icons در cards بساز.
10. یک reusable component library برای icon-driven navigation بساز.

## درس بعدی

در درس بعدی، `Shadows` و اصول ایجاد elevation، depth و modern card styling بررسی می‌شود.

## پیش‌نیازها

- Typography
- Borders
