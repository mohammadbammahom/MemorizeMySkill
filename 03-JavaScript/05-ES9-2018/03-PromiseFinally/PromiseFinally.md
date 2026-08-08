# Promise.finally() در ES9

---

## این مبحث چیست؟

`Promise.finally()` یک method است که بدون توجه به اینکه Promise fulfilled یا rejected شود، همیشه اجرا می‌شود. این برای cleanup operations و guarantee execution بسیار مفید است.

---

## چرا از آن استفاده می‌کنیم؟

اغلب هنگام انجام عملیات ناهمزمان، نیاز داریم کاری را انجام دهیم مثل بستن فایل، قطع کردن اتصال، یا logging. `finally()` تضمین می‌دهد این کار همیشه انجام شود.

---

## چه زمانی استفاده می‌کنیم؟

- هنگام resource cleanup
- هنگام logging metrics
- هنگام disabling loading state
- هنگام closing connections
- هنگام unlocking resources

---

## چه زمانی نباید استفاده کنیم؟

`finally()` باید برای cleanup استفاده شود، نه برای data transformation. برای transform کردن data، از `then()` استفاده کن.

---

## تفاوت با مفاهیم مشابه

| مفهوم | کاربرد |
|---|---|
| .then() | Processing fulfilled value |
| .catch() | Handling rejected error |
| .finally() | Cleanup regardless of outcome |
| async/await try/finally | Similar pattern in async functions |

---

## مثال‌های واقعی

هنگام خواندن داده‌های کاربر از API، می‌توانی loading state را disable کنی در `finally()`. هنگام استفاده از فایل، می‌توانی فایل را در `finally()` ببندی.

---

## بهترین روش‌های استفاده

- `finally()` را تنها برای cleanup استفاده کن
- Error handling را در `catch()` انجام بده
- Data transformation را در `then()` انجام بده
- `finally()` خطاها را propagate می‌کند

---

## اشتباهات رایج

1. استفاده از `finally()` برای data transformation
2. فراموش کردن اینکه errors propagate می‌شوند
3. استفاده کردن `finally()` برای return values
4. نادیده گرفتن cleanup در `finally()`

---

## نکات بازار کار

`Promise.finally()` یک pattern است که در تقریباً تمام web applications استفاده می‌شود. درک این concept برای job interviews بسیار مهم است. در React، برای cleanup logic در effects استفاده می‌شود.

---

## چک‌لیست یادگیری

- [ ] می‌توانم finally() را استفاده کنم
- [ ] می‌دانم که finally() همیشه اجرا می‌شود
- [ ] می‌دانم که errors propagate می‌شوند
- [ ] می‌توانم cleanup logic بنویسم
- [ ] می‌توانم finally() را with try/catch استفاده کنم

---

## اجرای درس

```bash
node PromiseFinally.js
```

```bash
node PromiseFinally.exercise.js
```

---

## تمرین

یک Promise بساز که API data بارگذاری کند. در `then()` data را process کن، در `catch()` error handling انجام بده، و در `finally()` loading state را disable کن.
