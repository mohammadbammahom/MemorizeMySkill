# Div و Span

---

## این مبحث چیست؟

بخش‌بندی و grouping:

- `<div>` - بلاک‌ level container (نخط جدید)
- `<span>` - inline container (داخل متن)
- بدون معنای semantics
- فقط برای grouping و styling

---

## چرا وجود دارند؟

- **Layout**: div برای بخش‌بندی و grid/flexbox
- **Styling**: div و span برای CSS styling
- **JavaScript**: grouping برای DOM manipulation
- **Flexibility**: زمانی semantic tag نیست

---

## چه زمانی استفاده کنیم

**`<div>`**: grouping بلاک عناصر

- Container برای flexbox/grid
- Card یا بخش
- Wrapper برای layout

**`<span>`**: grouping inline عناصر

- رنگ کردن یک کلمه
- Badge یا tag
- Highlighting

---

## چه زمانی نباید استفاده کنیم

❌ `<div>` جای `<article>`:
```html
<div class="article">متن</div> <!-- semantic بهتر -->
```

❌ `<div>` برای navigation:
```html
<div class="nav">لینک‌ها</div> <!-- `<nav>` استفاده کن -->
```

❌ `<span>` برای `<strong>`:
```html
<span class="bold">مهم</span> <!-- معنایی نیست -->
```

---

## تفاوت با عناصر مشابه

| تگ | Type | Display | Semantic |
|----|------|---------|----------|
| `<div>` | بلاک | block | ✗ خیر |
| `<article>` | بلاک | block | ✓ مقاله |
| `<section>` | بلاک | block | ✓ بخش |
| `<span>` | inline | inline | ✗ خیر |
| `<strong>` | inline | inline | ✓ مهم |

---

## بهترین روش‌ها

✅ `<div>` برای grouping که semantic tag نباشد

✅ `<span>` برای inline styling بدون معنی‌دار

✅ Class names معنی‌دار (`container`، `card` نه `div1`)

✅ Semantic tags اول (`<article>`، `<section>`)

✅ div/span برای layout و styling خالص

---

## اشتباهات رایج

❌ بیش‌ازحد div nesting:
```html
<div>
    <div>
        <div>محتوا</div>
    </div>
</div>
```

❌ Div جای semantic:
```html
<div id="nav">navigation</div> <!-- `<nav>` بهتر -->
```

❌ Span برای `<strong>`:
```html
<span class="important">متن</span> <!-- معنایی نیست -->
```

---

## نکات بازار کار

- **Code Review**: بدون semantic، reject می‌شود
- **Accessibility**: div/span بر screen readers تاثیری ندارد
- **Performance**: بیش‌ازحد div DOM را بھم‌چنگ می‌کند
- **Maintainability**: بدون معنی‌دار class names، کد confusing است

---

## چک‌لیست یادگیری

- [ ] `<div>` برای block grouping
- [ ] `<span>` برای inline styling
- [ ] Semantic tags اول (nه div)
- [ ] Class names معنی‌دار
- [ ] بدون nesting بیش‌ازحد

---

## تمرین

اکنون فایل `DivAndSpan.Exercises.html` را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. Layout: div + grid برای card layout.
2. Blog: div wrapper برای post.
3. Dashboard: div برای sections.
4. Card: div برای محصول + span برای price.
5. Sidebar: div برای sidebar grouping.
6. Highlights: span برای رنگ‌شده متن‌ها.
7. Forms: div برای form-group.
8. Modal: div برای modal container.
9. Hero: div برای hero section.
10. Responsive: div layout with CSS grid.

---

## درس بعدی

**Lists**: ordered و unordered lists برای داده‌های structured.

---

## پیش‌نیازها

- Lesson 5: Text Formatting
