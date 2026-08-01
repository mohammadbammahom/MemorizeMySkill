# عنوان درس

## این مبحث چیست؟

- `overscroll-behavior` مشخص می‌کند که هنگام رسیدن به انتهای یک scrolling container چه اتفاقی بیفتد: آیا رفتار پیش‌فرض مرورگر (bounce, pull-to-refresh, navigation) باید رخ دهد یا نه.
- مقادیر رایج: `auto`, `contain`, `none`.

## این مبحث در بازار کار چرا مهم است؟

- برای SPAها و PWAها که نیاز به کنترل کامل بر رفتار اسکرول و جلوگیری از ناخواسته navigation یا refresh دارند، ضروری است.

## نکات مهم

- `overscroll-behavior: none` می‌تواند از pull-to-refresh جلوگیری کند، اما برای UX موبایل باید با دقت استفاده شود.
- `contain` اجازه می‌دهد که اثرات overscroll محدود به همان container بماند.

## مثال واقعی

- در یک modal با محتوای اسکرولی، استفاده از `overscroll-behavior: contain` باعث می‌شود که scroll تا انتها در modal بماند و صفحهٔ پس‌زمینه حرکت نکند.

## اشتباهات رایج

- بلاک‌کردن همهٔ overscroll‌ها بدون در نظر گرفتن UX محلی که کاربران به آن عادت دارند؛ به‌خصوص در iOS.

## چک لیست یادگیری

- [ ] تفاوت `contain` و `none` را می‌دانم.
- [ ] تست در موبایل و دسکتاپ انجام داده‌ام.
- [ ] تاثیر روی gestureها را بررسی کرده‌ام.

## تمرین‌ها

فایل

OverscrollBehavior.Exercises.html

را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک modal با محتوای بلند بساز و با `overscroll-behavior: contain` جلوگیری از scroll background را پیاده کن.
2. در یک PWA تست کن که چگونه `overscroll-behavior` بر pull-to-refresh تاثیر می‌گذارد.
3. تفاوت‌ها را در iOS و Android مستند کن.
4. سناریویی بساز که در آن `overscroll-behavior: none` مناسب نیست و document دلیل را بنویس.
5. یک guideline برای استفادهٔ overscroll در پروژه بنویس.
6. ترکیب overscroll با scroll-snap را بررسی کن.
7. تست accessibility برای keyboard و touch انجام بده.
8. بررسی کن که آیا این property در همه مرورگرها پشتیبانی می‌شود.
9. یک demo که overscroll را در چند container مختلف مدیریت می‌کند بساز.
10. مستندسازی کن که چه trade-offs وجود دارد.
