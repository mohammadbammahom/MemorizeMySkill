# ES7ModernJavaScriptReview

---

## مرور کلی ES7

ES7 به عنوان نسخه 2016 JavaScript، مجموعه‌ای کوچک اما مهم از بهبودها را ارائه کرد. این نسخه بیشتر بر روی قابلیت‌های عملی، ساده‌تر و خواناتر کردن کد تمرکز داشت، نه معرفی ویژگی‌های عظیم و پیچیده.

---

## ویژگی‌های اصلی ES7

### 1) Exponentiation Operator

عملگر ** برای محاسبه توان به‌کار می‌رود:

```javascript
console.log(2 ** 3); // 8
```

### 2) Exponentiation Assignment Operator

این نسخه همچنین عملگر **= را اضافه کرد:

```javascript
let value = 2;
value **= 3;
console.log(value); // 8
```

### 3) Array.includes

برای بررسی حضور یک مقدار داخل آرایه، includes کاربرد زیادی دارد:

```javascript
const names = ["Ali", "Aisha", "Khadijah"];
console.log(names.includes("Ali")); // true
```

### 4) Async execution context awareness

در JavaScript غیرهمزمان، فهمیدن اینکه this در callback و setTimeout چه می‌شود، اهمیت زیادی دارد. این موضوع به‌خصوص برای توسعه‌دهندگان Front-End و Node.js بسیار مهم است.

> نکته: async/await به ES8 مربوط می‌شود و در ES7 وجود ندارد.

---

## چرا این ویژگی‌ها مهم‌اند؟

زیرا کدها کوتاه‌تر، خواناتر و قابل‌درک‌تر می‌شوند. به‌ویژه در پروژه‌های واقعی، این تغییرات به شما کمک می‌کنند:

- توان‌های ریاضی را سریع‌تر محاسبه کنید
- وجود عناصر را راحت‌تر بررسی کنید
- با context اجرا آشنا شوید

---

## مثال واقعی

```javascript
const products = ["Laptop", "Phone", "Tablet"];

if (products.includes("Phone")) {
  console.log("Product found");
}

const price = 4;
console.log(price ** 3);
```

---

## اشتباهات رایج

1. تصور اینکه async/await ES7 است
2. استفاده از includes به‌جای بررسی‌های پیچیده
3. نادیده گرفتن context در callbacks

---

## راهنمای تمرین

برای تسلط، این موارد را تمرین کن:

- یک مثال exponentiation بنویس
- یک آرایه با includes را تست کن
- context را در یک callback بررسی کن
- نتیجه‌ها را با console.log نشان بده

---

## چک‌لیست نهایی

- [ ] می‌توانم exponentiation را استفاده کنم
- [ ] می‌توانم Array.includes را اجرا کنم
- [ ] می‌توانم context را در async flow درک کنم
- [ ] می‌توانم ES7 را نسبت به ES8 از هم تشخیص بدهم

---

## اجرای درس

برای اجرای فایل اصلی:

```bash
node ES7ModernJavaScriptReview.js
```

برای فایل تمرین:

```bash
node ES7ModernJavaScriptReview.exercise.js
```

---

## جمع‌بندی

ES7 نسخه‌ای کوچک اما کاربردی بود. تمرکز آن روی ساده‌سازی کد، افزایش خوانایی و رفع نیازهای رایج در برنامه‌نویسی JavaScript بود. درک این مباحث پایه‌ای برای ورود به ES8 و نسخه‌های بالاتر ضروری است.
