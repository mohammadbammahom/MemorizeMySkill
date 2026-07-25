# Form Validation

---

## این مبحث چیست؟

Validation attributes برای HTML5:

- `required` - الزامی
- `min`, `max` - مرزهای عدد
- `minlength`, `maxlength` - طول متن
- `pattern` - regex pattern
- `type="email"` - email validation
- `:valid`, `:invalid` - CSS states

---

## چرا وجود دارند؟

- **UX**: خطا را زودتر نشان می‌دهد
- **Performance**: server load کم می‌شود
- **Security**: bad data قبل از submit
- **Accessibility**: پیام‌های معنی‌دار

---

## چه زمانی استفاده کنیم

**Required field:**

```html
<input type="text" required>
```

**Number range:**

```html
<input type="number" min="18" max="65">
```

**Text length:**

```html
<input type="text" minlength="6" maxlength="20">
```

**Pattern:**

```html
<input type="text" pattern="[0-9]{10}">
```

---

## چه زمانی نباید استفاده کنیم

❌ فقط client-side validation:
```html
<input type="email"> <!-- server-side الزام است -->
```

❌ Pattern بدون title:
```html
<input type="text" pattern="[0-9]{10}">
```

❌ max بیشتر از معقول:
```html
<input type="number" max="999999999">
```

---

## تفاوت با عناصر مشابه

| Attribute | نقش | Browser |
|----------|--------|---------|
| required | الزامی | ✓ |
| pattern | regex | ✓ |
| minlength | حداقل | ✓ |
| maxlength | حداکثر | ✓ |
| min/max | range | ✓ |

---

## بهترین روش‌ها

✅ `required` برای الزامی fields

✅ `type="email"` برای email validation

✅ `minlength` برای password (۸+)

✅ `pattern` برای فرمت خاص

✅ `:invalid` CSS برای visual feedback

---

## اشتباهات رایج

❌ فقط HTML validation:
```html
<input type="email"> <!-- server validation هم الزام -->
```

❌ Pattern بدون title:
```html
<input type="text" pattern="[0-9]{10}">
```

❌ maxlength بدون معنی:
```html
<input type="text" maxlength="3">
```

---

## نکات بازار کار

- **Security**: client-side validation کافی نیست
- **UX**: validation feedback بلافاصله
- **Accessibility**: aria-invalid برای screen readers
- **Testing**: validation rules باید tested باشند

---

## چک‌لیست یادگیری

- [ ] required attribute
- [ ] min/max برای numbers
- [ ] minlength/maxlength
- [ ] pattern regex
- [ ] CSS :valid و :invalid

---

## تمرین

اکنون فایل `FormValidation.Exercises.html` را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. فرم login: email + password (۸+ chars).
2. فرم سن: age min="18" max="80".
3. فرم تلفن: pattern برای ۱۰ رقم.
4. فرم username: minlength="6" maxlength="20".
5. فرم وب‌سایت: URL validation.
6. فرم سفارش: required fields.
7. فرم عضویت: email + password validation.
8. فرم بازخورد: required message.
9. فرم کد پستی: pattern برای فرمت.
10. صفحه کامل: همه validation types.

---

## درس بعدی

**HTML کامل شد!** بعدی CSS و Layout.

---

## پیش‌نیازها

- Lesson 14: Input Types
