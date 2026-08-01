# عنوان درس

## این مبحث چیست؟

- `padding` فاصله‌ی داخلی یک عنصر را از border تا content کنترل می‌کند.
- padding direction-based برای سایز و spacing دقیق داخل container استفاده می‌شود.
- `padding` و `margin` در UI‌های real-world به‌صورت تقریبا همزمان در کنار هم کار می‌کنند.

## چرا از آن استفاده می‌کنیم؟

- برای فاصله‌گذاری بین content و border
- برای ساخت card، button و inputهای خوانا
- برای راحتی در alignment و visual rhythm
- برای جلوگیری از چسبیدن متن به حاشیه‌ها

## چه زمانی استفاده می‌کنیم؟

- وقتی باید فضای لازم داخل card یا button داشته باشیم، `padding` مناسب است.
- برای spacing در sidebar و panels، `padding` بهتر از `margin` برای داخلی بودن است.
- برای تنظیم `padding-top`/`padding-right`/`padding-bottom`/`padding-left` استفاده می‌کنیم.

## چه زمانی نباید استفاده کنیم؟

- وقتی هدف فاصله‌گذاری بیرونی است و باید از `margin` استفاده شود.
- وقتی با `padding` به‌صورت غیرضروری اندازه‌ی box را افزایش می‌دهیم.
- وقتی layout باید با box-sizing و sizing دقیق مدیریت شود.

## تفاوت با روش‌های مشابه

- `margin` فضای بیرون از border ارائه می‌دهد.
- `padding` فضای داخل border را کنترل می‌کند.
- shorthand `padding: 1rem 2rem` در order top-bottom / left-right است.
- برای `padding` و `margin` با directionها، به ترتیب اطراف، values مجزا می‌توانند در هر سمت اعمال شوند.

## بهترین روش‌های استفاده

- برای cardها، product tiles و buttons، `padding` را به‌صورت systemized استفاده کن.
- برای spacing بین محتوا و حاشیه، از padding استفاده کن.
- برای component nesting، از paddingهای منظم و قابل پیش‌بینی استفاده کن.
- در buttonها و inputs، padding به readable UX کمک می‌کند.

## اشتباهات رایج

- استفاده‌ی اشتباه از `margin` برای فاصله داخل component
- padding نامتوازن و خوانا نبودن button و input
- افزایش size غیرضروری در container
- نادیده گرفتن `box-sizing` در کنار padding

## نکات بازار کار

- در component libraryها، padding به‌عنوان part of design token استفاده می‌شود.
- Front-End مهارت دارد که در یک glance تفاوت padding و margin را تشخیص دهد.
- spacing داخلی و بیرونی باید در design system کاملاً واضح باشند.

## چک‌لیست یادگیری

- [ ] `padding` و shorthand آن را می‌شناسم.
- [ ] padding directions را برای componentهای واقعی تنظیم می‌کنم.
- [ ] تفاوت padding و margin را می‌دانم.
- [ ] برای cardها و buttonها padding کاملاً به‌موقع استفاده می‌کنم.

## تمرین

اکنون فایل Padding.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک card با padding داخلی بالا بساز.
2. یک button با padding متفاوت در هر سمت طراحی کن.
3. یک sidebar با padding مناسب برای contents بساز.
4. یک pricing card که padding داخلی و spacing بیرونی متفاوت باشد بساز.
5. یک notification panel با padding top/bottom و left/right طراحی کن.
6. یک form با input و button padding حرفه‌ای بساز.
7. یک dashboard card با padding مناسب برای content و header بساز.
8. یک hero section با padding real-world و maintainable بساز.
9. یک navbar با padding قابل قبول و consistency بساز.
10. یک layout product card با spacing داخلی جذاب طراحی کن.

## درس بعدی

در درس بعدی، `sizing` و کنترل width، height و محدودیت‌های آن‌ها بررسی می‌شود.

## پیش‌نیازها

- Margin
- BoxModel
