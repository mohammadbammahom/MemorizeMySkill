# Fieldset و Legend

---

## این مبحث چیست؟

عناصر grouping:

- `<fieldset>` - گروه فیلدها
- `<legend>` - نام گروه
- نیستد شامل related inputs
- Nested fieldsets

---

## چرا از آن استفاده می‌کنیم؟

- **Accessibility**: Screen readers grouped fields
- **Organization**: فیلدها منطقی گروپ‌بندی
- **Semantic**: معنی‌دار structure
- **Visual**: border برای grouping
- **Large forms**: چند section‌ها

---

## چه زمانی استفاده می‌کنیم

**اطلاعات شخصی:**

```html
<fieldset>
    <legend>اطلاعات شخصی</legend>
    <input type="text">
    <input type="email">
</fieldset>
```

**Radio groups:**

```html
<fieldset>
    <legend>سطح تجربه</legend>
    <input type="radio" name="level">
</fieldset>
```

**Nested fieldsets:**

```html
<fieldset>
    <legend>درخواست</legend>
    <fieldset>
        <legend>مهارت‌ها</legend>
    </fieldset>
</fieldset>
```

---

## چه زمانی نباید استفاده کنیم

❌ Fieldset برای یک field:
```html
<fieldset>
    <input type="text">
</fieldset>
```

❌ Legend بدون fieldset:
```html
<legend>عنوان</legend>
<input type="text">
```

❌ بیش‌از‌حد nested:
```html
<fieldset>
    <fieldset>
        <fieldset></fieldset>
    </fieldset>
</fieldset>
```

---

## تفاوت با عناصر مشابه

| عنصر | نقش | Semantic | Visual |
|-----|--------|----------|--------|
| fieldset | group | ✓ | border |
| div | container | ✗ | - |
| form | submit | ✓ | - |
| section | content | ✓ | - |

---

## بهترین روش‌های استفاده

✅ Related fields را fieldset کن

✅ Legend meaningful

✅ Nested برای complex forms

✅ Label برای هر input

✅ Proper styling

---

## اشتباهات رایج

❌ Fieldset برای یک input:
```html
<fieldset><legend>نام</legend></fieldset>
```

❌ Legend بدون fieldset:
```html
<legend>عنوان</legend>
```

❌ تمام form در یک fieldset:
```html
<form>
    <fieldset>
        <!-- 50 fields -->
    </fieldset>
</form>
```

---

## نکات بازار کار

- **Large forms**: Fieldsets الزامی
- **Accessibility**: Screen readers fieldsets
- **Mobile**: Visual grouping
- **Code review**: Related fields grouped

---

## چک‌لیست یادگیری

- [ ] Fieldset و legend pairing
- [ ] Related inputs گروپ‌بندی
- [ ] Nested fieldsets
- [ ] Legend meaningful names
- [ ] Accessibility implications

---

## تمرین

اکنون فایل `FieldsetAndLegend.Exercises.html` را بساز و تمرین‌های زیر را انجام بده.

1. فرم شخصی: fieldset برای اطلاعات.
2. آدرس form: nested fieldsets.
3. شغلی fieldset: سطح و تجربه.
4. مهارت‌ها: checkboxes در fieldset.
5. نظر: radio group fieldset.
6. سفارش: multiple fieldsets.
7. عضویت: complex form grouping.
8. سازمانی: organization fieldsets.
9. Wizard form: step fieldsets.
10. صفحه کامل: all fieldset patterns.

---

## درس بعدی

**Datalist**: Predefined options برای inputs.

---

## پیش‌نیازها

- Lesson 17: Labels
