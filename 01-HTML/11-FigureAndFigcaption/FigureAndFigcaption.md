# Figure و Figcaption

---

## این مبحث چیست؟

Semantic figure element:

- `<figure>` - مجموعه‌ی عکس + caption
- `<figcaption>` - توضیح figure
- معنایی grouping
- Accessibility برای multimedia

---

## چرا وجود دارند؟

- **Semantic**: Screen readers می‌فهمند شکل است
- **Accessibility**: Caption برای توضیح
- **SEO**: Figure برای image context
- **Grouping**: عکس + caption مرتبط

---

## چه زمانی استفاده کنیم

**عکس با توضیح:**

```html
<figure>
    <img src="photo.jpg" alt="شرح">
    <figcaption>عنوان شکل</figcaption>
</figure>
```

**نمودار:**

```html
<figure>
    <svg>...</svg>
    <figcaption>شکل: نمودار رشد</figcaption>
</figure>
```

**کد snippet:**

```html
<figure>
    <pre><code>...</code></pre>
    <figcaption>کد مثال</figcaption>
</figure>
```

---

## چه زمانی نباید استفاده کنیم

❌ عکس‌های ساده بدون meaning:
```html
<figure><img src="decoration.jpg"></figure>
```

❌ عکس بدون caption:
```html
<figure>
    <img src="photo.jpg">
</figure>
```

❌ Caption بدون figure:
```html
<figcaption>عنوان</figcaption> <!-- بدون عکس -->
```

---

## تفاوت با عناصر مشابه

| تگ | نقش | Semantic | Grouped |
|----|--------|----------|---------|
| `<figure>` | عکس + caption | ✓ | ✓ |
| `<img>` | عکس ساده | ✓ | ✗ |
| `<div>` | grouping | ✗ | ✓ |

---

## بهترین روش‌ها

✅ figure برای عکس‌های مهم

✅ figcaption برای توضیح

✅ Alt text برای `<img>` درون figure

✅ Meaningful captions (نه خالی)

✅ Figure برای نمودار و SVG

---

## اشتباهات رایج

❌ عکس‌های ساده در figure:
```html
<figure>
    <img src="icon.svg">
</figure>
```

❌ بدون figcaption:
```html
<figure>
    <img src="diagram.svg">
</figure>
```

❌ caption خالی:
```html
<figcaption>شکل</figcaption>
```

---

## نکات بازار کار

- **Accessibility**: semantic HTML الزام است
- **SEO**: figure برای image indexing
- **Code Review**: نمودار و عکس در figure باید باشد
- **WAVE**: figure با caption پاس می‌شود

---

## چک‌لیست یادگیری

- [ ] Figure برای grouped content
- [ ] Figcaption برای توضیح
- [ ] Alt text داخل figure
- [ ] Meaningful captions
- [ ] Figure برای نمودار و SVG

---

## تمرین

اکنون فایل `FigureAndFigcaption.Exercises.html` را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. عکس با caption: نام‌گذاری شکل‌ها.
2. نمودار: شکل‌های SVG.
3. کد snippet: مثال‌های code.
4. گالری: چند figure.
5. Diagram: نمودار فرآیند.
6. Chart: نمودار داده‌ها.
7. Screenshots: عکس‌های توضیح‌شده.
8. Infographic: عکس معلوماتی.
9. Photo essay: سری عکس‌ها.
10. صفحه کامل: تمام figure types.

---

## درس بعدی

**Tables**: جداول برای داده‌های structured.

---

## پیش‌نیازها

- Lesson 10: Responsive Images
