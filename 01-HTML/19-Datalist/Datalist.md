# Datalist

---

## این مبحث چیست؟

عنصر `<datalist>`:

- `<datalist>` - لیست پیشنهادات
- `list` attribute روی input
- `<option>` - مقادیر موجود
- Autocomplete suggestion

---

## چرا از آن استفاده می‌کنیم؟

- **UX**: سریع‌تر input
- **Autocomplete**: پیشنهادات خودکار
- **Mobile**: Keyboard بهتر
- **Alternative to select**: فقط نه dropdown
- **Modern**: HTML5 native

---

## چه زمانی استفاده می‌کنیم

**شهر انتخاب:**

```html
<input list="cities" id="city">
<datalist id="cities">
    <option value="تهران"></option>
    <option value="شیراز"></option>
</datalist>
```

**جستجو:**

```html
<input type="search" list="tags">
<datalist id="tags">
    <option value="HTML"></option>
    <option value="CSS"></option>
</datalist>
```

---

## چه زمانی نباید استفاده کنیم

❌ Datalist برای constraint:
```html
<input list="countries">
<!-- user می‌تواند دیگر مقادیر وارد کند -->
```

❌ Datalist بجای select:
```html
<input list="options">
<!-- select بهتر است برای صرفی انتخاب -->
```

❌ Datalist بدون options:
```html
<datalist id="empty"></datalist>
```

---

## تفاوت با عناصر مشابه

| عنصر | نقش | Input allowed | Constraint |
|-----|--------|---------------|-----------:|
| datalist | suggest | ✓ | ✗ |
| select | choose | ✗ | ✓ |
| input | freeform | ✓ | ✗ |

---

## بهترین روش‌های استفاده

✅ Datalist برای suggestions

✅ Common values

✅ User میتواند دیگر values

✅ Search و filters

✅ Meaningful options

---

## اشتباهات رایج

❌ Datalist بجای select:
```html
<input list="options"> <!-- select میتونه بهتره -->
```

❌ بیش‌از‌حد options:
```html
<datalist>
    <!-- 1000 option -->
</datalist>
```

❌ Datalist بدون list attribute:
```html
<input id="city">
<datalist id="cities"></datalist>
<!-- connection نیست -->
```

---

## نکات بازار کار

- **UX**: Autocomplete بهتر است
- **Mobile**: Keyboard بهتر
- **Search**: Common queries
- **Fallback**: قدیمی browsers

---

## چک‌لیست یادگیری

- [ ] Datalist و list attribute
- [ ] Option elements
- [ ] User input allowed
- [ ] Autocomplete vs select
- [ ] Browser support

---

## تمرین

اکنون فایل `Datalist.Exercises.html` را بساز و تمرین‌های زیر را انجام بده.

1. شهر datalist: شهرهای ایران.
2. زبان datalist: زبان‌های مختلف.
3. رنگ datalist: رنگ‌های محبوب.
4. تعداد datalist: quantity ranges.
5. جستجو: search suggestions.
6. محصول datalist: product names.
7. کشور datalist: countries.
8. سایز datalist: shirt sizes.
9. فیلتر form: multiple datalists.
10. صفحه کامل: all datalist examples.

---

## درس بعدی

**Output**: Display computed values.

---

## پیش‌نیازها

- Lesson 18: Fieldset و Legend
