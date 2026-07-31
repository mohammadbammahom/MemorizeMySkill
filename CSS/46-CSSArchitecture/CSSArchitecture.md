# عنوان درس

## این مبحث چیست؟

- CSS architecture مجموعهٔ قواعد و الگوهایی است که برای نگهداری و توسعهٔ استایل‌ها در پروژه‌های بزرگ استفاده می‌شود.
- هدف کاهش تضاد، بهبود maintainability و سرعت توسعه است.
- شامل file structure، naming conventions، component boundaries و build pipeline می‌شود.

## چرا از آن استفاده می‌کنیم؟

- برای جلوگیری از CSS bloat و specificity conflicts
- برای تسهیل collaboration بین تیم‌ها
- برای افزایش سرعت refactor و feature delivery

## چه زمانی استفاده می‌کنیم؟

- در پروژه‌های متوسط تا بزرگ با چندین تیم
- در سیستم‌های component-based و design systemها
- وقتی maintenance و scaling در مسیر توسعه حیاتی است

## چه زمانی نباید استفاده کنیم؟

- در پروژه‌های کوچک و یک‌صفحه‌ای که overhead معماری بیش از benefit است
- وقتی تیم کوچک و تغییرات نادر باشد

## تفاوت با روش‌های مشابه

- Architecture بر بستر file and naming patterns است؛ utility-first مثل `Tailwind` یک paradigm متفاوت است.
- BEM و ITCSS و OOCSS نمونه‌هایی از سبک‌های معماری هستند.

## بهترین روش‌های استفاده

- تقسیم به component-level files و global tokens در `:root` نگه دار.
- از naming convention ثابت (BEM یا مشابه) استفاده کن.
- Layered approach: `settings`, `tools`, `generic`, `elements`, `components`, `utilities`.
- از CSS Variables برای tokens و theme استفاده کن.

## اشتباهات رایج

- عدم تعریف clear ownership برای فایل‌ها
- مخلوط کردن global styles با component styles
- استفاده از overly-specific selectors در کامپوننت‌ها
- نداشتن strategy برای third-party CSS

## نکات بازار کار

- پروژه‌های enterprise معمولا یک architecture مشخص دارند.
- مهارت در architecture باعث آسان‌تر شدن onboard نیروی جدید می‌شود.
- در مصاحبه‌ها معمولا سوالاتی درباره structuring و naming پرسیده می‌شود.

## چک‌لیست یادگیری

- [ ] file structure برای project-scale را می‌دانم.
- [ ] layered architecture و responsibilities را می‌فهمم.
- [ ] token و variables را در root مدیریت می‌کنم.
- [ ] strategy برای third-party assets دارم.

## تمرین

اکنون فایل

CSSArchitecture.Exercises.html

را ایجاد کن.

سپس تمرین‌های زیر را انجام بده.

1. یک structure پیشنهادی برای یک SaaS product با `settings`, `components`, `utilities` آماده کن.
2. یک component-based folder layout برای dashboard طراحی کن.
3. یک token file در `:root` برای colors و spacing بساز.
4. یک strategy برای third-party CSS و reset تعریف کن.
5. یک sample naming convention doc برای یک تیم بنویس.
6. یک small design system refactor plan برای legacy CSS بنویس.
7. یک example of file-level ownership و contribution guideline بساز.
8. یک CSS build step suggestion (purge, minify, postcss) مستند کن.
9. یک migration plan از global CSS به component-based CSS بنویس.
10. یک checklist برای code review در CSS architecture بنویس.

## درس بعدی

در درس بعدی، `BEM` با naming conventions و مثال‌های واقعی بررسی می‌شود.

## پیش‌نیازها

- Selectors
- CSSVariables
