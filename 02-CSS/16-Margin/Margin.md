# عنوان درس

## این مبحث چیست؟

- `margin` فاصله‌ی بیرونی میان یک عنصر و عناصر اطراف آن را کنترل می‌کند.
- `margin-top`، `margin-right`، `margin-bottom` و `margin-left` برای کنترل دقیق هر سمت به کار می‌روند.
- shorthand Margin در پروژه‌های واقعی برای سرعت و consistency استفاده می‌شود.

## چرا از آن استفاده می‌کنیم؟

- برای ایجاد space بین cardها و sectionها
- برای alignment بهتر در layout
- برای فاصله‌گذاری بین blockها بدون تغییر اندازه آن‌ها
- برای مدیریت clean spacing در componentها

## چه زمانی استفاده می‌کنیم؟

- وقتی باید یک card از همسایه‌های خود فاصله بگیرد، `margin` مناسب است.
- برای ایجاد گپ بین بخش‌های اصلی صفحه از `margin-bottom` استفاده می‌شود.
- وقتی تعامل layout به `margin: auto` نیاز دارد، برای center کردن block‌ها به کار می‌رود.
- در layout legacy، negative margin برای overlap و alignment خاص استفاده می‌شود.

## چه زمانی نباید استفاده کنیم؟

- وقتی فاصله باید داخل box باشد، به‌جای `margin` از `padding` استفاده شود.
- وقتی `margin` برای ایجاد alignment در placeهای بسیار خاص استفاده می‌شود و layout بهتر می‌شود با flex/grid.
- وقتی negative margin برای رفع خطاهای طراحی بی‌رویه استفاده می‌شود.

## تفاوت با روش‌های مشابه

- `margin` بیرونی و `padding` داخلی است.
- `margin: auto` برای horizontal centering block‌های با width محدود کاربرد دارد.
- negative margin تمایل به overlap دارد و اگر کنترل نشود، layout را خراب می‌کند.
- shorthand `margin: 1rem 2rem 3rem 4rem` ترتیب بالا، راست، پایین، چپ است.

## بهترین روش‌های استفاده

- spacing را به صورت systemized و predictable نگه دارید.
- برای شلوغی در layout از `margin` مناسب‌تر از تکرار padding استفاده کنید.
- برای centering یک container با width محدود، `margin: 0 auto` را به کار ببرید.
- negative margin را فقط برای cases خاص و intentional استفاده کنید.

## اشتباهات رایج

- جایگزینی `padding` با `margin` برای فاصله‌ی داخلی
- استفاده‌ی ناگهانی از negative margin برای رفع همه‌ی مشکلات
- استفاده از margin‌های بی‌نظم برای spacing
- نادیده گرفتن collapse margin در برخی عناصر

## نکات بازار کار

- در پروژه‌های production، spacing system از `margin` و `padding` به خوبی قابل مدیریت است.
- Front-End engineer باید تفاوت بین spacing بیرونی و داخلی را دقیق بداند.
- margin، همراه با layout system، به quality UI کمک می‌کند.

## چک‌لیست یادگیری

- [ ] `margin` و shorthand آن را می‌شناسم.
- [ ] `margin-top` تا `margin-left` را برای layout دقیق می‌نویسم.
- [ ] `margin: auto` را برای centering می‌دانم.
- [ ] negative margin را در شرایط خاص و مدیریت‌شده استفاده می‌کنم.

## تمرین

اکنون فایل Margin.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک card با margin-bottom مناسب بین header و body بساز.
2. یک layout center با `margin: auto` طراحی کن.
3. یک pricing section با marginهای جهتی مختلف بساز.
4. یک dashboard card با margin-top و margin-left متفاوت ساخته شود.
5. یک section شبیه landing page با spacing consistent بساز.
6. یک UI که overlap با negative margin دارد طراحی کن.
7. یک grid card با margins منظم بساز.
8. یک section با multiple cards و spacing product-grade بساز.
9. یک page با component spacing از design system پیروی کند.
10. یک layout real-world برای product showcase با margin logic حرفه‌ای بساز.

## درس بعدی

در درس بعدی، `padding` و تفاوت آن با `margin` بررسی می‌شود.

## پیش‌نیازها

- CSSIntroduction
- BoxModel
