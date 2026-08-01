# فهرست‌ها

---

## این مبحث چیست؟

سه نوع list در HTML:

- `<ul>` - Unordered list (bullet points)
- `<ol>` - Ordered list (اعداد)
- `<dl>` - Definition list (اصطلاح + توضیح)
- `<li>` - List item
- `<dt>` - Definition term
- `<dd>` - Definition description

---

## چرا وجود دارند؟

- **معنایی**: Screen readers می‌فهمند list است
- **SEO**: Google structure را برای ranking استفاده می‌کند
- **Accessibility**: Navigation بین list items
- **Semantic HTML**: مناسب‌تر از `<div>`

---

## چه زمانی استفاده کنیم

**`<ul>`**: فهرست بدون ترتیب

- مهارت‌ها
- مزایا
- features

**`<ol>`**: فهرست با ترتیب

- مراحل آموزش
- دستورالعمل‌ها
- رتبه‌بندی

**`<dl>`**: مصطلح + توضیح

- فرهنگ‌لغس
- Glossary
- Q&A

---

## چه زمانی نباید استفاده کنیم

❌ `<ul>` برای navigation (استفاده کن `<nav>`):
```html
<ul class="nav">
    <li><a href="#">صفحه</a></li>
</ul> <!-- `<nav>` بهتر -->
```

❌ `<ol>` برای layout:
```html
<ol>
    <li>کارت ۱</li>
    <li>کارت ۲</li> <!-- div استفاده کن -->
</ol>
```

❌ Nested list بیش‌ازحد:
```html
<ul>
    <li>
        <ul>
            <li>
                <ul>...</ul>
            </li>
        </ul>
    </li>
</ul>
```

---

## تفاوت با عناصر مشابه

| تگ | نقش | Bullets | Order |
|----|--------|---------|-------|
| `<ul>` | unordered | • | ✗ |
| `<ol>` | ordered | 1. | ✓ |
| `<dl>` | definitions | - | معنایی |
| `<div>` | grouping | - | - |

---

## بهترین روش‌ها

✅ `<ul>` برای unordered، `<ol>` برای ordered

✅ فقط یک level nesting در اکثر موارد

✅ Semantic HTML (نه div + styled)

✅ `<dl>` برای glossary و Q&A

✅ Proper list structure (الزام است!)

---

## اشتباهات رایج

❌ Nested list بدون `<li>`:
```html
<ul>
    <li>آیتم
        <ul>
            <li>نested</li>
        </ul>
    </li>
</ul>
```

❌ `<ol>` برای غیر-ترتیبی:
```html
<ol>
    <li>کوچ</li>
    <li>گربه</li> <!-- `<ul>` بهتر -->
</ol>
```

❌ بدون `<li>` درون `<ul>`:
```html
<ul>
    متن <span>بدون</span> li <!-- نادرست -->
</ul>
```

---

## نکات بازار کار

- **Accessibility**: Screen readers بر lists تکیه می‌کند
- **SEO**: List structure برای featured snippets مهم است
- **Code Review**: غلط list structure reject می‌شود
- **Performance**: بهتر از `<div>` + JS

---

## چک‌لیست یادگیری

- [ ] `<ul>` و `<ol>` فرق را می‌دانم
- [ ] `<dl>` را برای glossary استفاده می‌کنم
- [ ] Nested lists درست ایجاد می‌کنم
- [ ] بدون semantic div جای lists
- [ ] Screen reader friendly lists

---

## تمرین

اکنون فایل `Lists.Exercises.html` را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. مهارت‌های CV: `<ul>` برای skill list.
2. دستورالعمل‌ها: `<ol>` برای مراحل.
3. درخت فایل: nested `<ul>`.
4. تعرفه‌ها: `<ol>` برای قیمت‌ها.
5. Glossary: `<dl>` برای اصطلاحات.
6. فهرست‌بندی: `<ol>` برای فصل‌ها.
7. شامل‌ات: `<ul>` برای features.
8. Menu: `<ul>` برای navigation (درست).
9. FAQ: `<dl>` یا `<ul>`.
10. صفحه کامل: تمام list types.

---

## درس بعدی

**Links و Navigation**: links و href برای navigation.

---

## پیش‌نیازها

- Lesson 6: Div و Span
