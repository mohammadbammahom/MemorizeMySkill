# عنوان درس

## این مبحث چیست؟

- Nesting در CSS به شما اجازه می‌دهد تا قواعد مرتبط را به‌صورت درختی و تو در تو بنویسید تا خوانایی و نگهداری بهتر شود.
- چندین syntactic form وجود دارد؛ برخی در preprocessors (Sass) رایج‌اند و نسخهٔ مدرن آن به‌تدریج در CSS native مطرح شده است.

## چرا از آن استفاده می‌کنیم؟

- کاهش تکرا‌ر selectorها و گروه‌بندی استایل‌های مرتبط باعث کد منظم‌تر می‌شود.
- مناسب برای component-based development که کلمات تکراری کم شود.

## چه زمانی استفاده می‌کنیم؟

- وقتی می‌خواهید استایل‌های داخلی یک component را به‌صورت محلی بنویسید.

## چه زمانی نباید استفاده کنیم؟

- وقتی nesting بسیار عمیق می‌شود و منجر به selectors با specificity بالا و پیچیدگی می‌گردد.

## تفاوت با روش‌های مشابه

- Nesting معنای ساختاری مشابه با استفاده از BEM یا utility classes دارد اما از نظر syntax متفاوت است.

## بهترین روش‌های استفاده

- عمق nesting را محدود کن (حداکثر 2-3 سطح) تا از افزایش specificity جلوگیری شود.
- از nesting برای grouping استفاده کن نه برای layer کردن selectorهای بسیار خاص.
- هنگام استفاده از native nesting یا preprocessor، همیشه fallback قابل خواندن تولید کن.

## اشتباهات رایج

- nesting بیش از حد که منجر به سنگین شدن CSS و سختی تست می‌شود.
- استفادهٔ nesting به‌عنوان جایگزین منطقی برای classes واضح.

## نکات بازار کار

- آشنایی با syntax‌های مختلف nesting (SCSS, PostCSS nesting, native) برای همکاری در پروژه‌ها مهم است.
- در code review توصیه می‌شود که قواعد nesting محدود و مستندسازی شود.

## چک‌لیست یادگیری

- [ ] می‌توانم تفاوت nesting در Sass و native CSS را توضیح دهم.
- [ ] محدودیت عمق nesting را رعایت می‌کنم.
- [ ] fallbackهای ساده برای مرورگرهای قدیمی تولید می‌کنم.

## تمرین

فایل

Nesting.Exercises.html

را خودت بساز و تمرین‌ها را انجام بده.

1. یک card component با nesting سطح 2 بساز.
2. مقایسه‌ای بین SCSS nesting و native nesting انجام بده.
3. refactor یک stylesheet با selectors طولانی به حالت nested انجام بده.
4. بررسی کن که nesting چطور روی specificity تأثیر می‌گذارد.
5. یک guideline تیمی برای استفاده از nesting بنویس.
6. fallback ساده‌ای بنویس که بدون nesting هم جواب دهد.
7. حالات edge-case که nesting باعث bug می‌شود را پیدا کن.
8. نمونه‌ای که از ampersand (`&`) استفاده می‌کند بساز.
9. یک component library کوچک با nested rules تولید کن.
10. تست‌هایی برای اطمینان از عدم نشت استایل بنویس.

## درس بعدی

در درس بعدی CSS Functions را بررسی می‌کنیم.

## پیش‌نیازها

- selectors و combinators
- مفاهیم preprocessors
