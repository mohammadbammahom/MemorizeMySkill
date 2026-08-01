# عنوان درس

## این مبحث چیست؟

- Specificity یعنی میزان اهمیت یک selector برای اعمال style.
- CSS هنگام برخورد با multiple rules، اولویت را بر اساس specificity حل می‌کند.
- در پروژه‌های واقعی، فهم specificity از بسیاری از خطاهای visual جلوگیری می‌کند.

## چرا از آن استفاده می‌کنیم؟

- برای فهم اینکه کدام rule اعمال می‌شود
- برای جلوگیری از override‌های غیرمنتظره
- برای مدیریت زمانی که یک کلاس در چند place استفاده می‌شود
- برای debug سریع UI

## چه زمانی استفاده می‌کنیم؟

- وقتی در پروژه چند layer style وجود دارد
- وقتی یک component از CSS base و utility همزمان استفاده می‌کند
- وقتی باید `!important` یا inline style به‌دقت کنترل شود

## چه زمانی نباید استفاده کنیم؟

- وقتی برای حل یک مشکل، فقط `!important` اضافه می‌کنیم
- وقتی selectorها با specificity خیلی بالا ساخته شده‌اند
- وقتی یک rule به صورت global بیش از حد override می‌شود

## تفاوت با روش‌های مشابه

- Inline style بالاترین priority بین CSS rules است.
- `!important` override در شرایط خاص به کار می‌رود.
- class و id نسبت به element selector از specificity بیشتری برخوردارند.
- specificity به جای order برای تصمیم‌گیری استفاده می‌شود.

## بهترین روش‌های استفاده

- برای override، structure را بهتر کنید نه `!important` را زیاد.
- برای component، از classها با specificity predictable استفاده کنید.
- در استایل‌های global، از id و `!important` کم استفاده کنید.
- در team collaboration، naming و layering را استاندارد نگه دارید.

## اشتباهات رایج

- استفاده‌ی مکرر از `!important`
- فهم اشتباه از اینکه order همیشه winner است
- نداشتن شناخت از inline > class > element
- نادیده گرفتن cascade و scope

## نکات بازار کار

- در CSS production، debug specificity معمولاً مهم‌ترین بخش بررسی UI است.
- Front-End engineer باید بتواند در یک نگاه علت override را تشخیص دهد.
- clean architecture باعث کاهش مشکلات specificity می‌شود.

## چک‌لیست یادگیری

- [ ] نحوه‌ی محاسبه specificity را می‌دانم.
- [ ] اولویت inline، `!important` و class را بازشناسی می‌کنم.
- [ ] می‌توانم در پروژه ruleهایی که override می‌شوند را تشخیص بدهم.
- [ ] از `!important` در حالت‌های exception استفاده می‌کنم.

## تمرین

اکنون فایل Specificity.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک pricing card با `plan` و `plan--featured` بساز.
2. یک rule برای `.plan` و یک rule برای `.plan--featured` بنویس.
3. یک `id` برای یک card اختصاص بده.
4. یک button با class و inline style بساز.
5. یک rule `!important` برای demo اضافه کن.
6. یک override chain برای `color` بساز.
7. با order و specificity تفاوت را نشان بده.
8. یک صفحه‌ی pricing با سه tier طراحی کن.
9. ترتیب priority را در یک جدول ذهنی نمایش بده.
10. یک component complex با چند layer override بساز.

## درس بعدی

در درس بعدی، رنگ‌ها، حالت‌های آن‌ها و کاربردهای real-world در UI بررسی می‌شود.

## پیش‌نیازها

- Selectors
