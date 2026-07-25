# انواع Input

---

## این مبحث چیست؟

انواع مختلف `<input>`:

- `text` - متن معمولی
- `email` - ایمیل
- `password` - رمز (hidden)
- `number` - عدد
- `date` - تاریخ
- `time` - زمان
- `checkbox` - تیک‌باکس
- `radio` - رادیو
- `select` - dropdown

---

## چرا وجود دارند؟

- **User Experience**: input درست برای data
- **Validation**: email input خودکار validation
- **Mobile**: موبایل keyboard درست (number pad برای numbers)
- **Accessibility**: semantic input types

---

## چه زمانی استفاده کنیم

**Email:** `<input type="email">`

**Number:** `<input type="number">`

**Password:** `<input type="password">`

**Date:** `<input type="date">`

**Checkbox:** چند انتخاب

**Radio:** یک انتخاب

**Select:** dropdown list

---

## چه زمانی نباید استفاده کنیم

❌ `type="text"` برای email:
```html
<input type="text"> <!-- validation نیست -->
```

❌ `type="text"` برای date:
```html
<input type="text"> <!-- date picker نیست -->
```

❌ Radio برای چند انتخاب:
```html
<input type="radio"> <!-- checkbox استفاده کن -->
```

---

## تفاوت با عناصر مشابه

| Type | Usage | Keyboard | Validation |
|------|-------|----------|------------|
| text | متن | عادی | ✗ |
| email | ایمیل | @/.com | ✓ |
| number | عدد | 123 | ✓ |
| password | رمز | hidden | ✗ |
| date | تاریخ | picker | ✓ |
| checkbox | چند | tick | - |
| radio | یک | bullet | - |

---

## بهترین روش‌ها

✅ صحیح input type برای هر داده

✅ `<select>` برای لیست‌های بزرگ

✅ Checkbox برای چند انتخاب

✅ Radio برای یک انتخاب

✅ Label برای تمام inputs

---

## اشتباهات رایج

❌ `type="text"` برای email:
```html
<input type="text" name="email"> <!-- validation نیست -->
```

❌ `type="text"` برای date:
```html
<input type="text" name="date"> <!-- picker نیست -->
```

❌ Radio برای چند انتخاب:
```html
<input type="radio"> <!-- checkbox بهتر -->
```

---

## نکات بازار کار

- **Mobile UX**: صحیح input type keyboard را نشان می‌دهد
- **Validation**: browser validation زمان و منابع صرفه‌جویی می‌کند
- **Accessibility**: semantic input types بهتر
- **Code Review**: از صحیح input types استفاده الزامی

---

## چک‌لیست یادگیری

- [ ] email و password types
- [ ] date و time inputs
- [ ] number input
- [ ] checkbox برای چند انتخاب
- [ ] radio برای یک انتخاب

---

## تمرین

اکنون فایل `InputTypes.Exercises.html` را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. فرم login: email و password.
2. فرم جستجو: number برای سال.
3. فرم ثبت‌نام: email، date of birth.
4. فرم مقررات: checkbox برای تایید.
5. فرم سطح: radio برای skill level.
6. فرم موافقت: multiple checkboxes.
7. فرم انتخاب: select برای کشور.
8. فرم وقت: time input.
9. فرم رزرو: date + time.
10. صفحه کامل: تمام input types.

---

## درس بعدی

**Form Validation**: validation HTML5.

---

## پیش‌نیازها

- Lesson 13: Forms Basics
