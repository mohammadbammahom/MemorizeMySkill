# فرم‌های مقدماتی

---

## این مبحث چیست؟

عناصر فرم:

- `<form>` - container فرم
- `<input>` - ورودی متنی
- `<textarea>` - متن چند خطی
- `<label>` - برچسب
- `<button>` - دکمه
- `<fieldset>` - grouping
- `<legend>` - نام group

---

## چرا وجود دارند؟

- **Interaction**: کاربران می‌تواند داده وارد کنند
- **Accessibility**: label + input مرتبط
- **Semantics**: form elements معنایی‌اند
- **Validation**: HTML5 validation

---

## چه زمانی استفاده کنیم

**Text input:**

```html
<input type="text" name="username">
```

**Email input:**

```html
<input type="email" name="email">
```

**Textarea:**

```html
<textarea name="message"></textarea>
```

**Button:**

```html
<button type="submit">ارسال</button>
```

---

## چه زمانی نباید استفاده کنیم

❌ Input بدون label:
```html
<input type="text"> <!-- بد accessibility -->
```

❌ Form بدون action:
```html
<form>
    <input type="text">
</form> <!-- کی ارسال شود؟ -->
```

❌ Button بدون type:
```html
<button>ارسال</button> <!-- submit یا button? -->
```

---

## تفاوت با عناصر مشابه

| عنصر | نقش | مرتبط |
|-----|--------|---------|
| `<input>` | ورودی | label |
| `<label>` | برچسب | input |
| `<textarea>` | متن بلند | label |
| `<button>` | عمل | form |

---

## بهترین روش‌ها

✅ `<label>` برای هر input

✅ `for` attribute روی label

✅ `name` attribute روی input

✅ `<fieldset>` برای grouping

✅ Proper button types (submit، reset، button)

---

## اشتباهات رایج

❌ Input بدون label:
```html
<input type="text"> <!-- نادرست -->
```

❌ Label بدون for:
```html
<label>نام</label>
<input type="text"> <!-- هم‌بندی نیست -->
```

❌ Form بدون action:
```html
<form>
    <input type="text">
</form> <!-- بدون destination -->
```

---

## نکات بازار کار

- **Accessibility**: label الزامی برای compliance
- **UX**: proper label + input بهتر است
- **Code Review**: بدون label، rejected
- **Mobile**: label بزرگ برای touch

---

## چک‌لیست یادگیری

- [ ] Input و label مرتبط
- [ ] Textarea برای متن بلند
- [ ] Button types (submit، reset)
- [ ] Fieldset برای grouping
- [ ] Form action مشخص

---

## تمرین

اکنون فایل `FormsBasics.Exercises.html` را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. فرم تماس: نام، ایمیل، پیام.
2. فرم login: username، password.
3. فرم ثبت‌نام: نام، ایمیل، رمز.
4. فرم نظرسنجی: نام، ایمیل، نظر.
5. فرم جستجو: search input.
6. فرم شخصی: اطلاعات شخصی.
7. فرم سفارش: محصول، تعداد.
8. فرم درخواست: درخواست + توضیح.
9. فرم ثبت: چند field.
10. صفحه کامل: فرم‌های مختلف.

---

## درس بعدی

**Input Types**: انواع مختلف input.

---

## پیش‌نیازها

- Lesson 12: Tables
