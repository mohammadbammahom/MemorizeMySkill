# عنوان درس

## این مبحث چیست؟

- `display:grid` یک مدل layout دو‌بعدی برای management columns و rows است.
- در پروژه‌های واقعی، Grid برای dashboard، product catalog و page shellها به‌طور رایج استفاده می‌شود.
- `grid-template-columns`، `grid-template-rows` و `gap` در ساختار grid اصلی هستند.

## چرا از آن استفاده می‌کنیم؟

- برای layout‌های multi-row و multi-column
- برای تنظیم دقیق section و cardها
- برای ساخت dashboard و product gridهای سازگار
- برای control بهتر نسبت به float و table

## چه زمانی استفاده می‌کنیم؟

- وقتی باید content در دو یا چند محور organizado شود
- برای portfolio، dashboard و cards grid
- وقتی layout باید بر اساس columns و rows ساختار دارد
- برای `repeat()` و `fr` برای grid sizing flexible

## چه زمانی نباید استفاده کنیم؟

- وقتی layout یک‌بعدی است و Flexbox برای آن بهتر است
- وقتی grid در nested layout های ساده abstraction به‌مراتب بیشتر از نیاز است
- وقتی content order و layout بسیار ساده است

## تفاوت با روش‌های مشابه

- Grid دو‌بعدی است؛ Flexbox یک‌بعدی است.
- `fr` در Grid برای نسبت دادن space استفاده می‌شود.
- `repeat()` برای کاهش کدنویسی در template definitions کاربرد دارد.
- `gap` فاصله‌ی بین cells را کنترل می‌کند.

## بهترین روش‌های استفاده

- برای layout‌های page-wide از Grid استفاده کن.
- برای responsive card Grids، `repeat()` و `fr` را ترکیب کن.
- برای sizing controlled، `grid-template-columns: repeat(2, 1fr)` را به‌کار ببر.
- برای product gridها، gap و repeat system را استاندارد کن.

## اشتباهات رایج

- استفاده از Grid برای همه‌ی layouts
- فراموش کردن `gap` برای visual rhythm
- درک اشتباه از تفاوت `fr` و `px`
- قفل‌شدن grid به یک layout تک‌بعدی

## نکات بازار کار

- Grid در پروژه‌های UI modern واقعاً پایه‌ی اصلی layout است.
- Front-End engineer باید بدانند که Grid برای structure و Flexbox برای alignment/flow بیشتر مناسب است.
- در dashboard و product grids، Grid readability و maintainability را بالا می‌برد.

## چک‌لیست یادگیری

- [ ] `display:grid` و grid container را می‌شناسم.
- [ ] `grid-template-columns` و `grid-template-rows` را استفاده می‌کنم.
- [ ] `gap` و `repeat()` را برای ساختار grid می‌شناسم.
- [ ] `fr` را برای sizing flexible به‌کار می‌برم.

## تمرین

اکنون فایل GridBasics.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک metrics grid با 4 card بساز.
2. یک product grid با 2 ستون و 2 ردیف بساز.
3. یک dashboard با 3 ستون اصلی و 2 ردیف طراحی کن.
4. از `repeat()` برای 4 column استفاده کن.
5. یک landing page hero با `grid-template-rows` مشخص بساز.
6. یک pricing section دو-ستونه با `gap` طراحی کن.
7. یک portfolio grid با images و captions بساز.
8. یک admin dashboard با `1fr` layout طراحی کن.
9. یک panel arrangement with two columns and two rows بساز.
10. یک page با complex grid structure هم برای visual و هم برای data بساز.

## درس بعدی

در درس بعدی، Grid پیشرفته با `grid-area`، `grid-column`، `grid-row` و `minmax()` بررسی می‌شود.

## پیش‌نیازها

- FlexboxAdvanced
- Sizing
