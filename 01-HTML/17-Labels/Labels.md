# برچسب‌های فرم

---

## این مبحث چیست؟

عنصر `<label>`:

- `<label>` - برچسب فرم
- `for` attribute - پیوند با input
- Wrapper mode - label wrapping input
- Accessibility - association برای screen readers

---

## چرا از آن استفاده می‌کنیم؟

- **Accessibility**: Screen readers association
- **UX**: بزرگ‌تر click area
- **Mobile**: Touch بهتر
- **Semantic**: معنای واضح
- **Code review**: Label الزامی

---

## چه زمانی استفاده می‌کنیم

**Label با for:**

```html
<label for="name">نام:</label>
<input id="name" type="text">
```

**Label Wrapper:**

```html
<label>
    نام:
    <input type="text">
</label>
```

**Checkbox با label:**

```html
<input type="checkbox" id="agree">
<label for="agree">موافق</label>
```

---

## چه زمانی نباید استفاده کنیم

❌ Input بدون label:
```html
<input type="text"> <!-- بد accessibility -->
```

❌ Label بدون association:
```html
<label>نام</label>
<input type="text"> <!-- not associated -->
```

❌ Label بدون id روی input:
```html
<label for="wrong">نام</label>
<input id="name"> <!-- for نام مختلف -->
```

---

## تفاوت با عناصر مشابه

| روش | نقش | Accessibility | Click Area |
|-----|--------|-----------------|------------|
| `for/id` | explicit | ✓ | ✓ |
| wrapper | implicit | ✓ | ✓ |
| text فقط | - | ✗ | ✗ |

---

## بهترین روش‌های استفاده

✅ `for` و `id` برای صراحت

✅ Label کنار input

✅ Required indicator `*`

✅ Proper cursor pointer

✅ Focus styling برای keyboard

---

## اشتباهات رایج

❌ Label بدون for:
```html
<label>نام</label>
<input type="text">
```

❌ ID مختلف:
```html
<label for="name">نام</label>
<input id="username">
```

❌ Checkbox بدون label:
```html
<input type="checkbox"> موافق
```

---

## نکات بازار کار

- **Compliance**: WCAG الزامی
- **Mobile**: Label click area
- **Code review**: Label الزامی
- **Testing**: Accessibility testing

---

## چک‌لیست یادگیری

- [ ] Label `for` و `id` association
- [ ] Wrapper label pattern
- [ ] Checkbox/radio labels
- [ ] Required indicator styling
- [ ] Accessibility testing

---

## تمرین

اکنون فایل `Labels.Exercises.html` را بساز و تمرین‌های زیر را انجام بده.

1. فرم ساده: label و input pairs.
2. Checkbox با labels: تیک‌باکس‌ها.
3. Radio buttons: گروه انتخاب.
4. Required indicators: `*` markers.
5. Login form: email و password labels.
6. Contact form: multiple fields و labels.
7. Subscription form: checkbox agreements.
8. Survey form: radio groups dengan labels.
9. Registration: full form dengan labels.
10. صفحه کامل: تمام label scenarios.

---

## درس بعدی

**Fieldset و Legend**: Grouping form fields.

---

## پیش‌نیازها

- Lesson 16: Buttons
