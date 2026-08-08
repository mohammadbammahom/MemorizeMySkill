# Object.getOwnPropertyDescriptors()

---

## این مبحث چیست؟

Object.getOwnPropertyDescriptors() در ES8 به ما کمک می‌کند تا تمام توصیف‌کننده‌های یک object را به‌صورت کامل بررسی کنیم. این توصیف‌کننده‌ها شامل مقدار، writable، enumerable، configurable و در برخی موارد getter/setter هستند.

---

## چرا از آن استفاده می‌کنیم؟

در پروژه‌های واقعی، هنگام بررسی ساختار داده‌ها، مدیریت تنظیمات و اینکه آیا یک ویژگی قابل‌تغییر یا قابل‌حذف است، باید بدانیم راه‌حل ما دقیقاً چیست. این روش به ما امکان می‌دهد ساختار واقعی هر ویژگی را ببینیم.

---

## چه زمانی استفاده می‌کنیم؟

- هنگام بررسی تنظیمات و کالیبراسیون object
- هنگام ساختن داده‌هایی که نباید تغییر کنند
- هنگام دیباگ و بازبینی کد
- هنگام تولید ابزارهای تحلیل object

---

## چه زمانی نباید استفاده کنیم؟

اگر فقط باید مقادیر را بخوانیم، Object.values() یا Object.entries() ساده‌تر هستند. اگر قصد داریم فقط نام ویژگی‌ها را ببینیم، Object.keys() مناسب‌تر است. Object.getOwnPropertyDescriptors() بیشتر برای تحلیل عمیق ساختار objekts مناسب است.

---

## تفاوت با مفاهیم مشابه

| روش | خروجی | کاربرد |
|---|---|---|
| Object.getOwnPropertyDescriptor() | توصیف یک ویژگی | بررسی یک ویژگی خاص |
| Object.getOwnPropertyDescriptors() | توصیف کل ویژگی‌ها | بررسی کامل object |
| Object.keys() | نام ویژگی‌ها | فهرست کلیدها |
| Object.values() | مقادیر | پردازش داده‌ها |
| Object.entries() | جفت key/value | تحلیل داده‌ها |

---

## مثال‌های واقعی

در یک سیستم تنظیمات، برخی ویژگی‌ها باید فقط خواندنی باشند. API key یا تنظیمات مهم برنامه باید از تغییرات ناخواسته محافظت شوند. با Object.getOwnPropertyDescriptors() می‌توان ساختار دقیق این ویژگی‌ها را بررسی کرد و آن‌ها را به‌صورت ایمن تنظیم نمود.

---

## بهترین روش‌های استفاده

- برای بررسی ساختار داده‌ها از Object.getOwnPropertyDescriptors() استفاده کنید
- با Object.defineProperty ویژگی‌های محافظت‌شده بسازید
- برای گزارش‌گیری، Object.entries() را با توصیف‌کننده‌ها ترکیب کنید

---

## اشتباهات رایج

1. اشتباه گرفتن Object.getOwnPropertyDescriptors() با Object.values()
2. فراموش کردن تفاوت writable و configurable
3. استفاده از descriptors بدون درک اهمیت enumerable

---

## نکات بازار کار

این مفهوم در بررسی و بازبینی کدهای حرفه‌ای و ساخت ابزارهای داخلی بسیار مهم است. در مصاحبه‌های JavaScript، داشتن درک درست از object structure و property-level control موضوعی مهم است.

---

## چک‌لیست یادگیری

- [ ] می‌توانم توصیف‌کننده یک ویژگی را ببینم
- [ ] می‌توانم Object.getOwnPropertyDescriptors() را اجرا کنم
- [ ] تفاوت writable و configurable را می‌دانم
- [ ] می‌توانم یک ویژگی محافظت‌شده بسازم

---

## اجرای درس

```bash
node ObjectPropertyDescriptors.js
```

```bash
node ObjectPropertyDescriptors.exercise.js
```

---

## تمرین

یک object از تنظیمات یا کاربر بساز که یکی از ویژگی‌ها فقط خواندنی باشد. با Object.getOwnPropertyDescriptors() ساختار آن را بررسی کن و نتیجه را در قالب گزارش متنی نمایش بده.
