# لینک‌ها و Navigation

---

## این مبحث چیست؟

تگ `<a>` و انواع لینک‌ها:

- `<a href="url">` - لینک خارجی
- `<a href="#id">` - anchor/internal link
- `<a href="file.pdf" download>` - download
- `<a href="mailto:email">` - ایمیل
- `<a href="tel:number">` - تلفن
- `rel` - رابطه‌ی لینک

---

## چرا وجود دارند؟

- **Navigation**: لینک‌ها صفحات را اتصال می‌دهند
- **SEO**: Google لینک‌ها را برای crawling استفاده می‌کند
- **UX**: روشن navigation بهتر experience است
- **Accessibility**: proper links برای assistive tech

---

## چه زمانی استفاده کنیم

**Absolute URL**: سایت‌های خارجی
```html
<a href="https://example.com">سایت</a>
```

**Relative URL**: صفحات داخلی
```html
<a href="about.html">درباره</a>
```

**Anchor**: بخش‌های همان صفحه
```html
<a href="#section">رفتن به بخش</a>
```

**mailto و tel**: email و تلفن
```html
<a href="mailto:info@example.com">ایمیل</a>
<a href="tel:+989999999999">تلفن</a>
```

---

## چه زمانی نباید استفاده کنیم

❌ `<a>` جای `<button>`:
```html
<a href="#" class="btn">دکمه</a> <!-- `<button>` استفاده کن -->
```

❌ `href="#"` بدون destination:
```html
<a href="#">link</a> <!-- معنایی نیست -->
```

❌ لینک بر روی شکل تقسیم‌شده:
```html
<a href="link">
    <img src="...">text
</a>
```

---

## تفاوت با عناصر مشابه

| تگ | نقش | Keyboard | Styling |
|----|--------|-----------|------------|
| `<a>` | لینک | Enter | link |
| `<button>` | عمل | Enter/Space | button |
| `<div>` | grouping | ✗ | none |
| `<span>` | inline | ✗ | none |

---

## بهترین روش‌ها

✅ صحیح href (absolute یا relative)

✅ معنی‌دار link text (نه "کلیک اینجا")

✅ `target="_blank"` + `rel="noopener"` برای tab جدید

✅ Proper anchor IDs برای در-صفحه links

✅ Keyboard accessible (tab support)

---

## اشتباهات رایج

❌ معنی‌ناپذیر link text:
```html
<a href="page.html">اینجا</a> <!-- معنی نیست -->
```

❌ `target="_blank"` بدون `rel="noopener"`:
```html
<a href="https://..." target="_blank">site</a> <!-- security risk -->
```

❌ JavaScript-only links:
```html
<a href="javascript:void(0)" onclick="...">نادرست</a>
```

---

## نکات بازار کار

- **Accessibility**: links برای keyboard navigation ضروری
- **SEO**: link text برای ranking مهم است
- **Security**: `rel="noopener"` برای external links
- **UX**: clear visual states (hover, active, visited)

---

## چک‌لیست یادگیری

- [ ] Absolute و relative URLs
- [ ] Anchor links برای در-صفحه navigation
- [ ] mailto و tel links
- [ ] معنی‌دار link text
- [ ] keyboard accessible links

---

## تمرین

اکنون فایل `LinksAndNavigation.Exercises.html` را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. Navigation menu: طول `<ul>` با لینک‌ها.
2. Breadcrumb: دنباله‌ی links.
3. Sidebar: link list.
4. Footer: links به سایت‌های خارجی.
5. Anchor links: درون-صفحه navigation.
6. Download link: PDF یا فایل.
7. Email contact: `<a href="mailto:">`.
8. Phone link: `<a href="tel:">`.
9. External links: با `target="_blank"` و `rel`.
10. صفحه کامل: navigation + proper links.

---

## درس بعدی

**Images**: عکس‌ها و alt text برای accessibility.

---

## پیش‌نیازها

- Lesson 7: Lists
