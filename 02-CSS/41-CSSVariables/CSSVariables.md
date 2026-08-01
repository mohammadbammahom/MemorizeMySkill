# عنوان درس

## این مبحث چیست؟

- `:root` برای تعریف variables سطح پروژه استفاده می‌شود.
- `Custom Properties` یعنی propertyهای قابل‌استفاده مجدد با نام مشخص.
- `var()` برای خواندن valueها در همه‌ی نقاط CSS استفاده می‌شود.
- Theme colors و reusable variables در design system بسیار مهم‌اند.
- Dark mode preparation با variable swapping امکان‌پذیر می‌شود.

## چرا از آن استفاده می‌کنیم؟

- برای جلوگیری از تکرار valueها
- برای theme consistency در پروژه
- برای ساده‌سازی maintenance و refactor
- برای preparation برای dark mode و brand variants

## چه زمانی استفاده می‌کنیم؟

- وقتی یک پروژه دارای repeated colors، radii و spacing patterns است
- وقتی layout باید با theme new variant or dark mode سازگار شود
- وقتی design tokens در component library مهم هستند

## چه زمانی نباید استفاده کنیم؟

- وقتی variableها برای یک component خاص به‌صورت غیرمنطقی تعریف می‌شوند
- وقتی value‌ها در فایل‌ها dispers و inconsistent هستند
- وقتی theme system به‌جای semantic naming، به نام‌های بی‌معنی نوشته می‌شود

## تفاوت با روش‌های مشابه

- `CSS Variables` برای token-based design هستند.
- static values replacement به جای actual design tokens هستند.
- `var()` در component library و theme system بهتر از hardcoded values است.

## بهترین روش‌های استفاده

- در `:root` variables را برای palette، radius، shadow و font tokens تعریف کن.
- برای `primary`, `surface`, `text`, `radius` از names semantic استفاده کن.
- برای theme switch، variables را در dark mode scope override کن.
- valueها را همیشه با naming مناسب و reusable نگه دار.

## اشتباهات رایج

- تعریف variableها بر اساس static values بدون naming standard
- استفاده از variableها فقط برای یک فایل یا یک component
- حذف dark mode potential از architecture
- hardcoded colors در کانتکست‌های زیاد

## نکات بازار کار

- CSS Variables در design systems، component libraries و enterprise UI‌ها اهمیت بالا دارند.
- Front-End engineer باید به‌صورت token-based روی theme design فکر کند.
- در مصاحبه‌ها، `:root`, `var()` و semantic naming از موضوع‌های ضروری هستند.

## چک‌لیست یادگیری

- [ ] `:root` و `Custom Properties` را می‌شناسم.
- [ ] `var()` را برای colors و spacing استفاده می‌کنم.
- [ ] design tokens و theme colors را structure-aware می‌سازم.
- [ ] dark mode preparation را در CSS Variables می‌فهمم.

## تمرین

اکنون فایل

CSSVariables.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک `:root` palette با primary, background, text و accent متغیر بساز.
2. یک button component با `var()` برای background و color بساز.
3. یک dark mode theme override با همان variable names بساز.
4. یک card system با variable-based radius و shadow بساز.
5. یک hero page با theme colors و surface tokens بساز.
6. یک marketing sections library با reusable variables بساز.
7. یک dashboard با and theme swapping simulation بساز.
8. یک pricing page با color tokens و button variant بساز.
9. یک profile page با semantic design tokens طراحی کن.
10. یک complete design system snippet با `:root` و `var()` بساز.

## درس بعدی

در درس بعدی، `calc()`, `clamp()`, `min()` و `max()` برای responsive typography و spacing بررسی می‌شوند.

## پیش‌نیازها

- ResponsiveDesign
- Typography
