# عنوان درس

## این مبحث چیست؟

- `cursor` شکل نشانگر ماوس را برای یک عنصر مشخص می‌کند.
- این ویژگی برای UX، affordance و بیان intent UI کاربرد دارد.
- در پروژه‌های واقعی، cursor مناسب باعث بهتر شدن interaction و فهم کاربر می‌شود.

## چرا از آن استفاده می‌کنیم؟

- برای نشان دادن امکان drag، click، resize یا wait
- برای افزایش وضوح actionهای قابل انجام
- برای اجرای feedback بصری سریع در UI
- برای برقراری consistency در component library

## چه زمانی استفاده می‌کنیم؟

- وقتی on-hover باید اشاره‌ای به action خاص بدهد، `pointer` یا `grab` مناسب است.
- در عملیات async یا loading از `wait` استفاده می‌شود.
- وقتی باید region Drag & Drop یا Resize داشته باشد، `grab` / `resize` مناسب است.
- برای custom cursor، اگر UX تایید کرده باشد، استفاده کنید.

## چه زمانی نباید استفاده کنیم؟

- وقتی cursor برای کاربران گیج‌کننده است
- وقتی cursor custom از نظر accessibility مشکل‌آفرین می‌شود
- وقتی change cursor بدون context و نیاز واقعی انجام می‌شود

## تفاوت با روش‌های مشابه

- `cursor: pointer` برای کلیک‌پذیر بودن است.
- `cursor: grab` برای drag شروع می‌دهد.
- `cursor: wait` وضعیت loading را نشان می‌دهد.
- custom cursor باید با UX و عملکرد دقیق همراه باشد.

## بهترین روش‌های استفاده

- cursor را برای actionهای real و قابل اجرا استفاده کنید.
- از cursorهای رایج browser استاندارد استفاده کن.
- اگر custom cursor می‌سازید، fallback مناسب و readable داشته باشید.
- cursor را در stateهای interactive و complex به‌صورت intentional به‌کار ببر.

## اشتباهات رایج

- استفاده از cursor نامناسب برای buttonها یا links
- custom cursor بدون fallback
- استفاده‌ی زیاد از cursor برای زیبایی صرف
- نادیده گرفتن UX و accessibility

## نکات بازار کار

- در UI حرفه‌ای، cursor یک tiny interaction signal است که به perceived quality کمک می‌کند.
- Front-End engineer باید cursor را در context و UX ببینید، نه صرفاً به‌عنوان یک property.
- در component libraryها، cursor استاندارد برای consistency مهم است.

## چک‌لیست یادگیری

- [ ] `cursor` property را می‌شناسم.
- [ ] custom cursor را در شرایط مناسب استفاده می‌کنم.
- [ ] UX و signal کلیک در cursor را می‌دانم.
- [ ] cursor را برای interaction real و readable به‌کار می‌برم.

## تمرین

اکنون فایل Cursors.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک button با `pointer` برای CTA بساز.
2. یک card برای drag و drop با `grab` طراحی کن.
3. یک button loading با `wait` بساز.
4. یک custom cursor برای icon button تعریف کن.
5. یک panel برای resize با cursor مناسب بساز.
6. یک table row با cursor `pointer` و hover UX بساز.
7. یک dashboard action bar با cursor consistency طراحی کن.
8. یک card product که با cursor مناسب action را نشان دهد بساز.
9. یک drag area و drop area با حالت cursor متفاوت طراحی کن.
10. یک component library UI با چند cursor state بساز.

## درس بعدی

در درس بعدی، `background` و لایه‌های رنگی و تصویری مرور می‌شود.

## پیش‌نیازها

- Visibility
- Display
