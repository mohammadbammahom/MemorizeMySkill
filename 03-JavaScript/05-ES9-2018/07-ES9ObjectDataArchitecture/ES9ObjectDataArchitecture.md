# معماری داده‌های object در ES9

---

## این مبحث چیست؟

در این درس، Object Rest و Object Spread فقط به‌عنوان syntax ساده مطرح نمی‌شوند، بلکه در ساختاردهی داده و طراحی API و state استفاده می‌شوند.

---

## چرا از آن استفاده می‌کنیم؟

در پروژه‌های واقعی، ما باید داده‌ها را به‌صورت ایمن تبدیل، فیلتر و ادغام کنیم. این کار بدون mutation و با ساختار شفاف انجام می‌شود.

---

## چه زمانی استفاده می‌کنیم؟

- هنگام ساخت public profile از user data
- هنگام ساخت configuration object
- هنگام آماده‌سازی state برای React
- هنگام ساخت response object برای API

---

## چه زمانی نباید استفاده کنیم؟

اگر داده‌ها nested و پیچیده باشند، Object Spread تنها shallow copy انجام می‌دهد. برای deep copy باید از روش‌های دیگر استفاده کرد.

---

## تفاوت با مفاهیم مشابه

| مفهوم | کاربرد |
|---|---|
| Object.assign() | merge mutable |
| Object spread | merge immutable |
| Object rest | استخراج و حذف property |

---

## مثال‌های واقعی

در یک سرویس کاربری، داده‌ی حساس مثل password را حذف می‌کنیم و یک نسخه‌ی امن برای UI یا API آماده می‌کنیم.

---

## بهترین روش‌های استفاده

- برای ایجاد نسخه‌ی جدید از object از spread استفاده کن
- برای حذف اطلاعات حساس از rest استفاده کن
- برای merge کردن config از spread استفاده کن

---

## اشتباهات رایج

1. تصور اینکه spread deep copy انجام می‌دهد
2. mutation به‌جای ساخت object جدید
3. عدم جداسازی داده‌های حساس

---

## نکات بازار کار

این مهارت برای React state، API design و Node.js service development بسیار مهم است.

---

## چک‌لیست یادگیری

- [ ] می‌توانم object spread را برای create copy استفاده کنم
- [ ] می‌توانم Object Rest برای حذف property استفاده کنم
- [ ] می‌توانم config را merge کنم
- [ ] می‌دانم که spread shallow copy است

---

## اجرای درس

```bash
node ES9ObjectDataArchitecture.js
```

```bash
node ES9ObjectDataArchitecture.exercise.js
```

---

## تمرین

یک object کاربر بساز و داده‌های حساس را جدا کن. سپس یک object public و یک configuration جدید بساز.
