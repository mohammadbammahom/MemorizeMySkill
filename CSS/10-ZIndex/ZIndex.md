# عنوان درس

## این مبحث چیست؟

- `z-index` ترتیب قرارگیری عناصر در فضای عمودی یا stacking layer را کنترل می‌کند.
- این ویژگی در UI‌های واقعی برای modal، dropdown، sticky overlay و tooltipها کاربرد دارد.
- بدون درک stacking context، نتیجه‌ی CSS ممکن است غیرمنتظره باشد.

## چرا از آن استفاده می‌کنیم؟

- برای نمایش بالا یا پایین‌تری یک layer
- برای کنترل overlay و popups
- برای مدیریت interaction بین عناصر positionدار
- برای جلوگیری از مخفی شدنِ ناخواسته‌ی components

## چه زمانی استفاده می‌کنیم؟

- وقتی یک modal باید از background جلوتر باشد
- وقتی dropdown باید بر روی سایر بخش‌ها بالا بیاید
- وقتی tooltip یا badge باید به صورت layer قابل توجه دیده شود
- وقتی یک sticky overlay نیاز به `z-index` بیش‌تر دارد

## چه زمانی نباید استفاده کنیم؟

- وقتی `z-index` برای همه‌ی عناصر یک صفحه به صورت arbitrary استفاده می‌شود
- وقتی stacking context به‌درستی فهمیده نشده است
- وقتی منطق UI به جای layering بر CSS order تعریف شده است

## تفاوت با روش‌های مشابه

- `z-index` به ترتیب stacking اشاره می‌کند.
- stacking context یک container یا عنصر با محتوای مستقل می‌سازد.
- order در DOM به‌تنهایی همیشه layer را تعیین نمی‌کند.
- بعضی عناصر مثل `position: fixed` یا `position: sticky` به صورت فراتر از flow ظاهر می‌شوند.

## بهترین روش‌های استفاده

- برای overlayها، یک layer system و naming clear داشته باش.
- از `z-index` فقط برای عناصر positionدار و overlay-aware استفاده کن.
- در پروژه‌های بزرگ، layer scale را استاندارد نگه دار.
- قبل از اضافه کردن عدد بالا، یک stacking plan بساز.

## اشتباهات رایج

- دادن `z-index: 9999` بدون نیاز
- نادیده گرفتن stacking context parent
- استفاده از `z-index` برای elementهایی که position ندارند
- انتخاب لایه‌های اشتباه برای modal و dropdown

## نکات بازار کار

- در UI‌های مدرن، z-index یک ابزار کنترل layer مهم است.
- یک Front-End حرفه‌ای باید بدانند که overlay و stacking context چه تاثیری روی UX دارند.
- misuse در z-index معمولاً به مشکل دیداری و interaction تبدیل می‌شود.

## چک‌لیست یادگیری

- [ ] مفهوم stacking context را می‌دانم.
- [ ] `z-index` را برای overlay و modal به‌درستی استفاده می‌کنم.
- [ ] layer order در UI را می‌توانم تحلیل کنم.
- [ ] از مقدارهای arbitrary برای z-index اجتناب می‌کنم.

## تمرین

اکنون فایل ZIndex.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک modal و یک background card بساز.
2. یک dropdown روی navbar و یک section زیر آن ایجاد کن.
3. یک tooltip بر روی card با `z-index` بالاتر قرار بده.
4. یک sticky notification در بالای صفحه بساز.
5. یک layer order نقشهٔ سه لایه طراحی کن.
6. یک floating badge روی hero section قرار بده.
7. یک chart overlay و popup روی آن بساز.
8. یک dashboard با sidebar و overlay modal طراحی کن.
9. یک with-stacking-context UI امتحان کن.
10. یک page با multiple overlay levels بساز.

## درس بعدی

در درس بعدی، `float` و `clear` و کاربردهای legacy layout مرور می‌شوند.

## پیش‌نیازها

- Position
- Overflow
