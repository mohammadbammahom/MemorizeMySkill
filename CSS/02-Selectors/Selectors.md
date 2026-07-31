# عنوان درس

## این مبحث چیست؟

- Selectorها راهی هستند برای انتخاب عناصر HTML و اعمال ruleهای CSS بر آن‌ها.
- در پروژه‌های واقعی، selectorها پایه‌ی maintainable و scalable styling هستند.
- هر selector نوع targeting مشخصی دارد.

## چرا از آن استفاده می‌کنیم؟

- برای اعمال style روی گروهی از عناصر
- برای کاهش تکرار کد
- برای ساختن سیستم class و component منظم
- برای مدیریت دقیقتر UX و visual hierarchy

## چه زمانی استفاده می‌کنیم؟

- وقتی یک قسمت از UI باید با یک کلاس مشترک استایل بگیرد
- وقتی نیاز به targeting دقیق با `id` یا attribute وجود دارد
- وقتی باید از انتخابگرهای ترکیبی برای بخش‌های خاص استفاده شود

## چه زمانی نباید استفاده کنیم؟

- وقتی selectorها بیش از حد عمومی باشند و کل صفحه را تحت تاثیر قرار دهند
- وقتی برای یک element واحد از selector خیلی broad استفاده می‌شود
- وقتی class naming نامنظم و مبهم باشد

## تفاوت با روش‌های مشابه

- Universal selector `*` برای reset و base styling مناسب است.
- Element selector برای تگ‌های عمومی کاربرد دارد.
- Class selector برای گروه‌بندی semantic و reusable مناسب است.
- ID selector برای هدف‌گیری دقیق و unique استفاده می‌شود.
- Attribute selector برای انتخاب بر اساس attribute و value کاربرد دارد.
- Descendant و Child و Sibling برای ساختار DOM و hierarchy مهم هستند.

## بهترین روش‌های استفاده

- برای componentها از class استفاده کن.
- از `id` فقط برای بخش‌های unique استفاده کن.
- selectorهای طولانی را تا حد ممکن ساده نگه دار.
- برای وابستگی با DOM، از selectorهای chain-heavy خودداری کن.

## اشتباهات رایج

- استفاده‌ی زیاد از `div` و selectorهای مستقیم
- انتخاب همه‌ی عناصر با `*` بدون نیاز
- استفاده‌ی نامناسب از `id` در componentهای تکرارشونده
- پیچیدگی غیرضروری در selector chain

## نکات بازار کار

- در component-based UI، class-based isolation مهم‌تر از selectorهای بلند است.
- selectorهای خوب، readability و maintainability بیشتری به پروژه می‌دهند.
- در CSS clean، selectorها باید predictable باشند.

## چک‌لیست یادگیری

- [ ] Universal، Element، Class و ID را می‌شناسم.
- [ ] Descendant، Child و Sibling را به درستی می‌نویسم.
- [ ] Attribute selector را برای targeting real-world می‌شناسیم.
- [ ] selector chain را بدون over-scoping می‌سازم.

## تمرین

اکنون فایل Selectors.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک nav bar با لینک‌ها بساز.
2. با یک universal selector، box-sizing را تنظیم کن.
3. برای دسته‌بندی cards، کلاس‌های مختلف بساز.
4. یک `id` برای section analytics اختصاص بده.
5. یک selector descendant برای card داخل panel بساز.
6. یک selector child برای list itemها تنظیم کن.
7. با adjacent sibling یک message بعد از heading نمايش بده.
8. یک general sibling برای ویژگی‌ها طراحی کن.
9. یک attribute selector برای `[data-status]` ایجاد کن.
10. یک صفحه‌ی dashboard با ترکیب selectorها بساز.

## درس بعدی

در درس بعدی، Specificity و نحوه‌ی اولویت‌بندی قوانین CSS بررسی می‌شود.

## پیش‌نیازها

- CSSIntroduction
