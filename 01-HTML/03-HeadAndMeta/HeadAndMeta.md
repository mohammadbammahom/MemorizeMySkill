# Head و Meta Tags

---

## این مبحث چیست؟

`<head>`: بخش مخفی صفحه که مرورگر و SEO بخواند:

- `<meta charset="UTF-8">` - فارسی درست نمایش‌داده شود
- `<meta name="viewport">` - موبایل responsive شود
- `<meta name="description">` - Google نتایج جستجو
- `<title>` - تب مرورگر + SEO
- `<meta property="og:...">` - شبکه‌های اجتماعی
- `<link rel="icon">` - favicon

---

## چرا وجود دارند؟

- **موبایل**: viewport بدون آن صفحه کوچک/بزرگ نمایش‌داده‌شود
- **SEO**: Google از title و description برای rank استفاده می‌کند
- **شبکه‌های اجتماعی**: اگر URL اشتراک شود، OG tags نمایش می‌دهند
- **Character**: charset بدون آن فارسی بی‌معنی شود

---

## چه زمانی استفاده کنیم

**حتما داشته باش** (تمام صفحات):
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<title>` توصیفی 30-60 کاراکتر
- `<meta name="description" content="...">` 150-160 کاراکتر

**اگر صفحه Social share خورد**:
- `<meta property="og:title" content="...">` (برای Facebook، LinkedIn)
- `<meta property="og:description" content="...">` 
- `<meta property="og:image" content="url">` (1200×630 px)

---

## چه زمانی نباید استفاده کنیم

❌ Description بیش از 160 کاراکتر:
```html
<meta name="description" content="بسیار بسیار طولانی"> <!-- Google قطع کند -->
```

❌ حذف viewport:
```html
<!-- موبایل صفحه کوچک/بزرگ نمایش‌دهد -->
```

❌ Title تکراری برای تمام صفحات (هر صفحه title خاص)

---

## تفاوت با عناصر مشابه

| تگ | نقش | طول | جاگاه |
|-----|---------|---------|--------|
| `<title>` | تب + SEO | 30-60 | head |
| `og:title` | Facebook/LinkedIn | 30-60 | head |
| `description` | Google search | 150-160 | head |
| `og:description` | Social share | 150-160 | head |

---

## بهترین روش‌ها

✅ Charset و Viewport ابتدای `<head>`

✅ Description: واقعی و شامل کلمات کلیدی (150-160 کاراکتر)

✅ `<meta name="robots" content="index, follow">` - برای public صفحات

✅ `<meta name="canonical" content="...">` - برای صفحات مشابه

✅ OG:image ابعاد ۱۲۰۰×۶۳۰ پیکسل

---

## اشتباهات رایج

❌ فراموش charset:
```html
<!-- فارسی به جای: السلام علیکم → ÙØ³Ù„Ø§Ù… â€Ø¹Ù„ÙŠÙƒÙ… -->
```

❌ Title بدون اختصاص:
```html
<title>صفحه</title> <!-- وب‌سایت میلی‌شود، SEO ضعیف -->
```

❌ OG tags بدون اندازه عکس (Social نمایش خراب)

---

## نکات بازار کار

- **Lighthouse**: head score کم اگر viewport/description نباشد
- **SEO Tools**: SEMrush، Google Search Console، Bing Webmaster
- **Pull Request**: reject اگر meta tags standard نباشد
- **Analytics**: GA تابع head صحیح است

---

## چک‌لیست یادگیری

- [ ] `<meta charset="UTF-8">` و viewport شامل
- [ ] Title 30-60 کاراکتر
- [ ] Description 150-160 کاراکتر
- [ ] OG tags برای صفحات Social (title، description، image)
- [ ] OG:image 1200×630 پیکسل

---

## تمرین

اکنون فایل `HeadAndMeta.Exercises.html` را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. صفحه‌ی شرکت: charset + viewport + title + description + favicon.
2. صفحه‌ی محصول: OG tags + image (1200×630) برای Facebook.
3. مقاله‌ی وبلاگ: title + description + canonical URL.
4. درباره‌ما: proper description + social OG tags.
5. تیم: چند `<meta>` برای team members (og:title، og:image).
6. رویدادها: og:type="event" + تاریخ.
7. Portfolio: og:type="website" + image.
8. فروشگاه: og:type="product" + قیمت.
9. Blog list: description برای لیست مقالات.
10. Head check: Lighthouse score 90+ برای head section.

---

## درس بعدی

**Text و Paragraphs**: تاکنون صفحه‌ت ساختار (html) و metadata دارد. اکنون متن واقعی را یاد می‌گیری.

---

## پیش‌نیازها

- Lesson 1: Document Structure
- Lesson 2: Semantic HTML
