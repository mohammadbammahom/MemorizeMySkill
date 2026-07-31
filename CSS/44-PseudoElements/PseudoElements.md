# عنوان درس

## این مبحث چیست؟

- `::before` و `::after` عناصر مجازی برای اضافه کردن content یا decoration قبل و بعد از محتوای یک عنصر هستند.
- `::first-letter` اولین حرف یک block-level را هدف می‌گیرد.
- `::first-line` اولین خط متن را هدف می‌گیرد و برای typographic emphasis کاربرد دارد.
- `::selection` بخشی از متن که کاربر انتخاب می‌کند را استایل می‌دهد.
- `::marker` برای استایل دادن به bullet یا شماره‌گذاری لیست‌ها است.
- `::placeholder` متن placeholder فرم را استایل می‌کند.
- Generated content با `content:` در pseudo elements تولید می‌شود.

## چرا از آن استفاده می‌کنیم؟

- اضافه کردن تزیینات بدون تغییر HTML
- تولید icons یا labels کوچک برای componentها
- ایجاد typographic emphasis (drop cap) با `::first-letter`
- کنترل visual selection برای بهبود UX
- بهبود semantics با نگه داشتن HTML تمیز

## چه زمانی استفاده می‌کنیم؟

- وقتی decoration باید با CSS افزوده شود نه HTML
- وقتی نیاز به badge یا label تزئینی در لیست یا کارت داریم
- وقتی placeholder یا selection باید هم‌خوان با theme شود
- وقتی drop caps یا typographic styles می‌خواهیم

## چه زمانی نباید استفاده کنیم؟

- وقتی content تولیدشده باید در DOM قابل‌دسترسی یا selectable باشد
- وقتی تزیینات بیش از حد و بدون purpose اضافه می‌شوند
- وقتی pseudo-element جایگزین semantic content واقعی می‌شود

## تفاوت با روش‌های مشابه

- `::before/::after` برای decoration است؛ `data-` attributes برای semantic data.
- برای آیکون‌های پیچیده، بهتر است `inline SVG` استفاده شود نه content ساده در CSS.
- `::marker` مخصوص لیست‌هاست و محدودیت‌های خودش را دارد.

## بهترین روش‌های استفاده

- از `content` فقط برای تزئین یا small labels استفاده کن.
- به accessibility فکر کن؛ اگر content باید خوانا باشد، اضافه‌اش کن در HTML.
- برای drop-caps از `::first-letter` با restraint استفاده کن.
- placeholder را برای hint نگه دار و استایل آن را کم‌رنگ کن.

## اشتباهات رایج

- قرار دادن مهم content (مثل متن معنی‌دار) در `::before` یا `::after`
- پیچیده کردن generated content به‌جای استفاده از proper HTML/SVG
- استفاده از `::first-line` برای layout changes بزرگ
- فراموش کردن fallback برای مرورگرهای قدیمی

## نکات بازار کار

- استفاده از pseudo elements برای polish در UIهای production رایج است.
- Product developers از این تکنیک برای badges، counters و micro UI استفاده می‌کنند.
- در review کد، generated content باید محدود و مستدل باشد.

## چک‌لیست یادگیری

- [ ] `::before` و `::after` را می‌نویسم.
- [ ] `::first-letter` و `::first-line` را برای typographic effect استفاده می‌کنم.
- [ ] `::selection`, `::marker`, `::placeholder` را می‌شناسم.
- [ ] Generated content را در CSS با احتیاط استفاده می‌کنم.

## تمرین

اکنون فایل

PseudoElements.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک ticket list با `::before` برای نشانگر وضعیت بساز.
2. یک hero paragraph با `::first-letter` برای drop-cap طراحی کن.
3. استایل placeholder برای فرم جستجو بساز.
4. یک bullet list با custom `::marker` طراحی کن.
5. یک card که با `::after` یک ribbon تزئینی دارد بساز.
6. یک blog excerpt که `::first-line` را متفاوت نشان می‌دهد بساز.
7. یک input با استایل selection سفارشی بساز.
8. یک features list با generated counters توسط `::before` بساز.
9. یک pricing table با small badges generated بساز.
10. یک reusable component pattern با pseudo elements به‌صورت حرفه‌ای بساز.

## درس بعدی

در درس بعدی، `Modern CSS Functions` مانند `min()`, `max()`, `clamp()`, `color-mix()` و `attr()` بررسی می‌شوند.

## پیش‌نیازها

- CSS Basics
- Selectors
