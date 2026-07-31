# جداول

---

## این مبحث چیست؟

جداول برای داده‌های structured:

- `<table>` - جدول
- `<thead>` - سرصفحه
- `<tbody>` - بدنه
- `<tfoot>` - پایان
- `<tr>` - row
- `<th>` - header cell
- `<td>` - data cell

---

## چرا وجود دارند؟

- **Accessibility**: Screen readers جدول را می‌فهمند
- **Semantic**: داده‌های structured
- **SEO**: Google جداول برای data استخراج می‌کند
- **Proper layout**: نه برای positioning

---

## چه زمانی استفاده کنیم

**جداول داده:**

```html
<table>
    <thead>
        <tr><th>نام</th><th>قیمت</th></tr>
    </thead>
    <tbody>
        <tr><td>محصول</td><td>۱۰۰۰</td></tr>
    </tbody>
</table>
```

---

## چه زمانی نباید استفاده کنیم

❌ Table برای layout (نه برای positioning):
```html
<table>
    <tr><td>header</td></tr>
</table> <!-- بد accessibility -->
```

❌ Nested tables:
```html
<table>
    <tr><td>
        <table>...</table>
    </td></tr>
</table>
```

❌ بدون thead/tbody:
```html
<table>
    <tr><td>داده</td></tr>
</table> <!-- بهتر: thead/tbody -->
```

---

## تفاوت با عناصر مشابه

| تگ | نقش | Semantic |
|----|--------|----------|
| `<table>` | جدول داده | ✓ |
| `<thead>` | headers | ✓ |
| `<tbody>` | data | ✓ |
| `<div>` | grouping | ✗ |

---

## بهترین روش‌ها

✅ thead + tbody + tfoot برای structure

✅ `<th>` برای headers (نه `<td>`)

✅ `scope="row"` یا `scope="col"` برای accessibility

✅ Caption برای جدول

✅ جدول ساده و readable

---

## اشتباهات رایج

❌ بدون thead:
```html
<table>
    <tr><td>headers</td></tr>
    <tr><td>data</td></tr>
</table>
```

❌ `<td>` برای headers:
```html
<tr>
    <td>نام</td> <!-- `<th>` استفاده کن -->
    <td>قیمت</td>
</tr>
```

❌ Table برای layout:
```html
<table>
    <tr><td>header</td></tr>
    <tr><td>content</td></tr>
</table> <!-- CSS grid/flex بهتر -->
```

---

## نکات بازار کار

- **Accessibility**: Screen readers بر thead تکیه می‌کند
- **SEO**: جداول داده برای featured snippets
- **Code Review**: بدون thead، reject می‌شود
- **Performance**: جداول کوچک بهتر

---

## چک‌لیست یادگیری

- [ ] `<table>` و `<tr>` و `<td>`
- [ ] `<thead>` و `<tbody>` و `<tfoot>`
- [ ] `<th>` برای headers
- [ ] scope attribute برای accessibility
- [ ] جداول فقط برای data

---

## تمرین

اکنون فایل `Tables.Exercises.html` را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. جدول‌ی ساده: نام و قیمت.
2. جدول دستمزد: نام، شغل، دستمزد.
3. جدول مقایسه: محصول، ویژگی‌ها.
4. جدول هزینه: عنوان، مبلغ، جمع.
5. زمانبندی: ایام و جلسات.
6. گزارش: داده‌های مختلف.
7. آمار: سال و عدد.
8. فهرست قیمت: سرویس و قیمت.
9. نتایج: نام، امتیاز.
10. صفحه کامل: جداول مختلف.

---

## درس بعدی

**Forms Basics**: فرم‌ها و input elements.

---

## پیش‌نیازها

- Lesson 11: Figure و Figcaption
