# Object Rest و Object Spread در ES9

---

## این مبحث چیست؟

Object Rest/Spread Properties یک روش است برای کپی کردن، ترکیب و تغییر objects به‌صورت ایمن و بدون تغییر object اصلی. این قابلیت در ES9 معرفی شد.

---

## چرا از آن استفاده می‌کنیم؟

در برنامه‌های frontend و backend، اغلب باید objects را بدون تغییر اصلی (immutably) تغییر دهیم. Object Spread/Rest این کار را ساده و خوانا می‌کند.

---

## چه زمانی استفاده می‌کنیم؟

- هنگام کپی کردن objects
- هنگام ترکیب configuration objects
- هنگام update کردن user data
- هنگام handling API responses
- هنگام immutable data processing
- هنگام React state updates

---

## چه زمانی نباید استفاده کنیم؟

Object Rest/Spread برای shallow copy است. برای deep copy، باید از روش‌های دیگر استفاده کنی.

---

## تفاوت با مفاهیم مشابه

| مفهوم | کاربرد |
|---|---|
| Object.assign() | ترکیب mutable |
| Object Spread | ترکیب immutable |
| Object Rest | استخراج properties |
| Array Spread | برای arrays (ES6) |
| Destructuring | استخراج values |

---

## مثال‌های واقعی

در React، هنگام update state می‌توانی از Object Spread استفاده کنی. در API responses، می‌توانی Object Rest برای جدا کردن sensitive data استفاده کنی.

---

## بهترین روش‌های استفاده

- Object Spread را برای immutable updates استفاده کن
- Object Rest را برای extracting properties استفاده کن
- Configuration objects را آسانی‌ترین merge کن
- Shallow copy limitations را بدانی
- Consistent naming patterns استفاده کن

---

## اشتباهات رایج

1. فراموش کردن اینکه Shallow copy است
2. Nested objects را mutate کردن
3. نادرست Object Rest syntax
4. Object.assign() را با Object Spread اشتباه کردن

---

## نکات بازار کار

Object Rest/Spread از اساسی‌ترین قابلیت‌های modern JavaScript است. تقریباً هر React developer از آن استفاده می‌کند. در مصاحبه‌ها، سؤالات رایجی درباره shallow vs deep copy است.

---

## چک‌لیست یادگیری

- [ ] می‌توانم Object Spread را استفاده کنم
- [ ] می‌توانم objects را merge کنم
- [ ] می‌توانم Object Rest را استفاده کنم
- [ ] می‌توانم properties را extract کنم
- [ ] می‌توانم immutable updates انجام دهم

---

## اجرای درس

```bash
node ObjectRestSpread.js
```

```bash
node ObjectRestSpread.exercise.js
```

---

## تمرین

یک سیستم برای مدیریت user profiles بساز. Object Spread را برای merge کردن user data و Object Rest را برای جدا کردن private fields استفاده کن. immutable style updates انجام بده.
