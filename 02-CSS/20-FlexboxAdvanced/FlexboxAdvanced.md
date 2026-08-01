# عنوان درس

## این مبحث چیست؟

- Flexbox پیشرفته به کنترل دقیق `flex-grow`، `flex-shrink`، `flex-basis` و `order` می‌پردازد.
- این ویژگی‌ها در layout‌های real-world برای balancing، alignment و hierarchy خیلی مهم هستند.
- `align-self` و nested flex برای component-level customization استفاده می‌شوند.

## چرا از آن استفاده می‌کنیم؟

- برای توزیع فضای اضافی بین items
- برای جلوگیری از shrink ناخواسته در mobile layouts
- برای orderبندی logical و visual عناصر
- برای ساخت nested layoutهای حرفه‌ای

## چه زمانی استفاده می‌کنیم؟

- وقتی یک کارت باید بیشتر از بقیه فضای رایگان بگیرد، `flex-grow` مناسب است.
- وقتی elementها در container کوچک می‌شوند، `flex-shrink` باید به صورت کنترل‌شده تنظیم شود.
- وقتی width اولیه برای item مشخص باشد، `flex-basis` کاربرد دارد.
- برای reordering logic در mobile، `order` مفید است.

## چه زمانی نباید استفاده کنیم؟

- وقتی layout باید به صورت two-dimensional و structured باشد و Grid بهتر جواب می‌دهد.
- وقتی nested flex به صورت بی‌رویه برای همۀ صفحه استفاده شود.
- وقتی `order` برای تغییر semantics استفاده می‌شود و UX آن را مخدوش می‌کند.

## تفاوت با روش‌های مشابه

- `flex-grow` فضای اضافی را به item اختصاص می‌دهد.
- `flex-shrink` اجازه shrink کردن item را در صورت کمبود space می‌دهد.
- `flex-basis` پایه‌ی initial sizing را مشخص می‌کند.
- `order` ترتیب بصری را تغییر می‌دهد، نه semantic DOM.
- `align-self` alignment یک item را در محور cross override می‌کند.

## بهترین روش‌های استفاده

- برای adaptive cards، `flex-grow` و `flex-basis` را ترکیب کن.
- برای mobile و narrow width، `flex-shrink` را با احتیاط تنظیم کن.
- برای nested layout، container parent و childها را به صورت readable design کن.
- `order` را فقط برای UX و visual precedence استفاده کن.

## اشتباهات رایج

- استفاده‌ی بی‌رویه از `flex-grow: 1` برای همه‌ی عناصر
- عدم درک تفاوت `flex-basis` و `width`
- orderگذاری برای semantic ambiguity
- nested flex بدون درک axis و flex container

## نکات بازار کار

- در component libraries، advanced Flexbox در layout‌های real-world بسیار مهم است.
- Front-End engineer باید باشد که در containerهای dynamic، distributed sizing را کنترل کند.
- برای UI‌های adaptive، flex advanced به‌طور مستقیم روی maintainability اثر می‌گذارد.

## چک‌لیست یادگیری

- [ ] `flex-grow`، `flex-shrink` و `flex-basis` را می‌شناسم.
- [ ] `order` و `align-self` را در component‌های real-world به‌کار می‌برم.
- [ ] nested flex را برای ساختارهای ترکیبی می‌شناسم.
- [ ] انتخاب flex advanced را برای layout واقعی متناسب می‌کنم.

## تمرین

اکنون فایل FlexboxAdvanced.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک sidebar و content-area با `flex` پایه بساز.
2. دو کارت با `flex-grow` متفاوت طراحی کن.
3. یک row که `flex-basis` برای هر card مشخص دارد بساز.
4. یک layout با `order` برای mobile-first reordering طراحی کن.
5. یک nested flex container برای card header و actions بساز.
6. یک dashboard layout با sidebar و main area ایجاد کن.
7. یک pricing section با cards با growth متفاوت بساز.
8. یک profile page با avatar و stats row طراح‌سازی کن.
9. یک nav + content area با `align-self` مطمئن بساز.
10. یک complex real-world layout با nested flex بساز.

## درس بعدی

در درس بعدی، Grid پایه با `display:grid` و template columns/rows مرور می‌شود.

## پیش‌نیازها

- FlexboxBasics
- Sizing
