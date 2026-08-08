# EnhancedObjectLiterals

---

## این مبحث چیست؟

Enhanced object literals در ES6 روش‌های جدیدی برای تعریف اشیا ارائه می‌دهد. این شامل shorthand properties، shorthand methods و computed property names است.

---

## چرا از آن استفاده می‌کنیم؟

این قابلیت‌ها باعث می‌شوند اشیا کوتاه‌تر و خواناتر نوشته شوند. همچنین از تکرار نام متغیرها و کد اضافه در تعریف اشیا جلوگیری می‌کند.

---

## چه زمانی استفاده می‌کنیم

وقتی بخواهیم:

- اشیاء با ویژگی‌های هم‌نام بسازیم
- متدهای کوتاه تعریف کنیم
- کلیدهای داینامیک بسازیم

مثال:

```javascript
const user = { name, role, greet() { return `Hello, ${this.name}`; } };
```

---

## چه زمانی نباید استفاده کنیم

اگر شیء خیلی پیچیده یا مقادیر داینامیک نیاز به محاسبه سنگین دارد، ممکن است کد خوانایی خود را از دست بدهد. در این موارد بهتر است از تعریف نرمال استفاده کنیم.

---

## تفاوت با مفاهیم مشابه

| مفهوم | کاربرد |
|---|---|
| shorthand property | حذف تکرار نام متغیر |
| shorthand method | تعریف متد کوتاه |
| computed property | کلید داینامیک |
| standard object | تعریف کلاسیک اشیا |

---

## بهترین روش‌های استفاده

- برای ویژگی‌هایی که نام متغیر و کلید مشابه است، shorthand property استفاده کن.
- متدهای کوتاه را برای عملکردهای ساده به کار ببر.
- computed property را برای کلیدهای داینامیک استفاده کن.

---

## اشتباهات رایج

1. استفاده از shorthand در شرایط نامناسب
2. فراموش کردن کلید داینامیک برای computed property
3. تعریف متدهای پیچیده با shorthand

---

## نکات بازار کار

در React و Node.js، enhanced object literals برای کد تمیزتر و تعریف بهتر data models بسیار کاربرد دارد. در مصاحبه‌ها ممکن است از شما بخواهند یک شیء با shorthand تعریف کنید.

---

## چک‌لیست یادگیری

- [ ] می‌توانم shorthand properties بنویسم
- [ ] می‌توانم shorthand methods بنویسم
- [ ] می‌توانم computed property بسازم
- [ ] می‌توانم اشیاء را کوتاه‌تر تعریف کنم

---

## اجرای درس

برای اجرای این درس، دستور زیر را اجرا کن:

```bash
node EnhancedObjectLiterals.js
```

تمرین:

```bash
node EnhancedObjectLiterals.exercise.js
```

---

## تمرین

اکنون فایل

EnhancedObjectLiterals.exercise.js

را باز کن و اشیائی با shorthand و computed property ایجاد کن.
