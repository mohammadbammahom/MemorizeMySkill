# CSS Anchor Positioning
---
## این مبحث چیست؟
CSS Anchor Positioning یک قابلیت جدید است که به شما اجازه می‌دهد عناصر را نسبت به یک نقطه مشخص (anchor) موقعیت‌دهی کنید. این نقطه می‌تواند روی یک عنصر دیگر قرار گیرد و عنصر هدف، خود را بر اساس آن قرار می‌دهد.
---
## چرا از آن استفاده می‌کنیم؟
- برای ثابت کردن elementها به یک anchor مشخص در صفحه.
- برای طراحی رابط‌های کاربری واکنشگرا با موقعیت‌های متغیر.
- برای ایجاد tooltips، popovers و منوهای شناور دقیق.
- برای جلوگیری از تنظیمات پیچیده `position` و `left/right/top/bottom` در جاهای مختلف.
---
## چه زمانی استفاده می‌کنیم
- وقتی می‌خواهیم یک tooltip دقیقاً نسبت به یک دکمه قرار بگیرد:
```css
.button {
  anchor-name: --button-anchor;
}
.tooltip {
  position: absolute;
  top: anchor(--button-anchor top);
}
```
- وقتی یک منوی شناور باید پایین یک عنصر قرار گیرد:
```css
.menu-anchor {
  anchor-name: --menu-anchor;
}
.dropdown {
  position: absolute;
  top: anchor(--menu-anchor bottom);
}
```
- وقتی می‌خواهیم محتوای پویا روی یک بخش ثابت شود:
```css
.section {
  anchor-name: --section-anchor;
}
.banner {
  position: absolute;
  left: anchor(--section-anchor left);
}
```
---
## چه زمانی نباید استفاده کنیم
- وقتی تنها یک `position: relative` ساده کافی است.
```css
.card { position: relative; }
.tooltip { top: 100%; }
```
- وقتی عنصر مرجع اصلاً تغییر نمی‌کند.
```css
.header { anchor-name: --header-anchor; }
```
- وقتی پشتیبانی مرورگر مهم است بدون fallback.
```css
.popup { position: absolute; top: anchor(--anchor bottom); }
```
---
## تفاوت با ویژگی‌های مشابه
| ویژگی | کاربرد | تفاوت |
|-------|--------|-------|
| `anchor-name` | تعریف نقطه مرجع | نقطه anchor را مشخص می‌کند |
| `position: absolute` | قرار دادن عنصر نسبت به پدر | نیاز به محاسبه دستی دارد |
| `position: sticky` | چسبیدن به یک مکان | به اسکرول وابسته است |
---
## بهترین روش‌های استفاده
- anchorها را با نام‌های واضح و معنادار تعریف کنید.
- برای tooltips و dropdownها از این ویژگی استفاده کنید.
- همیشه بررسی کنید نقطه anchor در DOM موجود باشد.
- از `position: absolute` یا `fixed` برای عنصر هدف استفاده کنید.
- محل anchor را در طراحی responsive تست کنید.
---
## اشتباهات رایج
- ❌ بدون تعریف anchor:
```css
.tooltip { top: anchor(--missing top); }
```
- ❌ نام anchor نامناسب:
```css
.element { anchor-name: --a; }
```
- ❌ استفاده روی عنصرهایی که در DOM نیستند:
```css
.popup { top: anchor(--not-found top); }
```
---
## نکات بازار کار
- Anchor Positioning قابلیت خوبی برای طراحی عناصر شناور و popover است.
- در مصاحبه باید کاربرد آن در UX و position دقیق را توضیح دهید.
- در بازبینی کد باید بررسی کنید anchorها واضح و قابل نگهداری باشند.
- در پروژه‌های بزرگ می‌تواند جایگزین محاسبات موقعیت دستی شود.
- برای مرورگرهای ناپشتیبانی fallback طراحی کنید.
---
## چک‌لیست یادگیری
- [ ] می‌دانم `anchor-name` چیست.
- [ ] می‌توانم یک عنصر را نسبت به anchor دیگری موقعیت‌دهی کنم.
- [ ] می‌توانم مواردی که نباید استفاده شود را توضیح دهم.
- [ ] می‌توانم tooltips و dropdown ها را با anchor position بسازم.
---
## تمرین

در این تمرین یک tooltip بسازید که موقعیت آن با Anchor Positioning تعیین شود.

مراحل انجام تمرین:

1. در HTML یک دکمه و یک عنصر tooltip قرار دهید.
   - دکمه می‌تواند `button` باشد.
   - tooltip یک `div` کوچک با متن راهنما.

2. در CSS به دکمه `anchor-name: --button-anchor;` بدهید.

3. tooltip را با `position: absolute;` قرار دهید و از `top: anchor(--button-anchor bottom);` استفاده کنید.

4. برای tooltip این موارد را اعمال کنید:
   - `background-color` مناسب و خوانا.
   - `border-radius` یا حاشیه نرم.
   - `padding` کافی.
   - رنگ متن مناسب و `box-shadow` ظریف.

5. مطمئن شوید tooltip زیر دکمه قرار می‌گیرد و وقتی اندازه صفحه تغییر می‌کند، هم‌تراز باقی می‌ماند.

نتیجه نهایی:
یک tooltip حرفه‌ای بسازید که با anchor نام‌گذاری‌شده دکمه موقعیت‌دهی می‌شود و استایل‌هایش در صفحه با تغییر اندازه هم‌خوانی دارند.
