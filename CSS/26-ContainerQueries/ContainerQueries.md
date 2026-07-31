# عنوان درس

## این مبحث چیست؟

- `container queries` به یک component اجازه می‌دهد بر اساس عرض container خود، رفتار کند.
- این ویژگی برای طراحی reusable components بسیار مهم است.
- برخلاف media queries که بر اساس viewport عمل می‌کنند، container queries بر اساس parent container کار می‌کنند.

## چرا از آن استفاده می‌کنیم؟

- برای سازگاری component با فضای خودش
- برای جلوگیری از وابستگی به viewport در UI‌های reusable
- برای بهتر کردن layout UI components در design systems

## چه زمانی استفاده می‌کنیم؟

- وقتی یک card، widget یا panel در اندازه‌های مختلف جای خودش تغییر کند
- وقتی UI component باید با container خودش adaptive شود
- وقتی layout reusable در templates متفاوت، باید مستقلاً پاسخ بدهد

## چه زمانی نباید استفاده کنیم؟

- وقتی فقط viewport و صفحه layout مورد نظر است
- وقتی container به‌درستی setup نشده و query برای همه‌جا یکسان اجرا می‌شود
- وقتی component قرار است به‌طور جهانی و نه local adapt شود

## تفاوت با روش‌های مشابه

- media query = based on viewport
- container query = based on container width
- این دو به‌هم کمک می‌کنند، اما در scope و ناحیه اثر متفاوت‌اند

## بهترین روش‌های استفاده

- `container-type: inline-size` را روی parent component فعال کن.
- برای component با size-dependent structure از `@container` استفاده کن.
- component را مستقل از page layout طراحی کن.

## اشتباهات رایج

- استفاده از container query بدون `container-type`
- overuse برای موارد ساده viewport-based
- query کردن container بدون design intent واقعی

## نکات بازار کار

- container queries از ابزارهای مهم در modern Front-End design system هستند.
- در component libraries، این مهارت برای design consistency عالی است.
- در پروژه‌های real-world، container queries همراه با media queries استفاده می‌شوند.

## چک‌لیست یادگیری

- [ ] تفاوت media و container query را می‌فهمم.
- [ ] `container-type` را روی parent می‌گذارم.
- [ ] `@container` را برای تغییر layout component استفاده می‌کنم.
- [ ] یک reusable card یا widget responsive container-based می‌سازم.

## تمرین

اکنون فایل ContainerQueries.Exercises.html را ایجاد کن. سپس تمرین‌های زیر را انجام بده.

1. یک `card` با container query برای mobile و desktop بساز.
2. یک `widget` که در container smaller از layout vertical به horizontal تبدیل شود بساز.
3. یک `dashboard panel` با container-based grid بساز.
4. یک `pricing component` با container width condition برای cards بساز.
5. یک `comment box` که در wide container display بهتر داشته باشد بساز.
6. یک `profile card` با nested container query بساز.
7. `toolbar` و `actions` را بر اساس container width تغییر بده.
8. یک `gallery component` container-based بساز.
9. یک `sidebar card` با spacing adaptive در container بساز.
10. یک reusable component library snippet با container queries طراحی کن.

## درس بعدی

در درس بعدی، `Aspect Ratio` و کاربردهای آن در media و card layouts بررسی می‌شود.

## پیش‌نیازها

- ResponsiveDesign
- MediaQueries
