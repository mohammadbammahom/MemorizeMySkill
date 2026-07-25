# HTML معنایی

---

## این مبحث چیست؟

تگ‌های HTML معنایی:

- `<article>` - محتوای مستقل (مقاله، پست، محصول)
- `<section>` - بخش منطقی از صفحه
- `<nav>` - navigation و منو‌ها
- `<figure>` + `<figcaption>` - تصویر + توضیح
- `<time datetime="...">` - تاریخ/زمان
- `<aside>` - محتوای فرعی (sidebar، رویدادهای مرتبط)

---

## چرا وجود دارند؟

- **SEO**: Google می‌فهمد مقاله کجا است، sidebar کجا است
- **Accessibility**: Screen Reader می‌تواند صفحه‌ی ناشنوایان را توضیح دهد
- **کد منطقی**: دیگر developers درک می‌کند هر قسمت برای چه است
- **بازار کار**: الزام است، بدون آن pull request reject می‌شود

---

## چه زمانی استفاده کنیم

**`<article>`**: محتوایی که می‌تواند مستقل (RSS، شبکه‌های اجتماعی) استفاده شود

- مقاله‌ی وبلاگ
- محصول
- نظر کاربر

**`<section>`**: بخش منطقی صفحه (شامل heading)

- "درباره ما"
- "خدمات"

**`<nav>`**: فقط navigation اصلی

**`<time>`**: تاریخ‌های مهم (datetime الزامی)

**`<aside>`**: محتوای فرعی (sidebar)

---

## چه زمانی نباید استفاده کنیم

❌ `<section>` بدون heading:
```html
<section>محتوا</section> <!-- کی section شروع می‌شود؟ -->
```

❌ `<article>` برای محتوای غیرمستقل:
```html
<article>
    فقط بخش از صفحه (نمی‌تواند جدا استفاده شود)
</article>
```

❌ `<figure>` برای هر عکس:
```html
<figure><img src="logo.jpg"></figure> <!-- نیاز به figcaption ندارد -->
```

---

## تفاوت با عناصر مشابه

| تگ | نقش | مستقل؟ |
|----|--------|--------|
| `<div>` | کانتینر (بدون معنا) | - |
| `<article>` | محتوای مستقل | ✓ بله |
| `<section>` | بخش منطقی | ✗ نیاز به context |
| `<figure>` | عکس + توضیح | ✓ بله |

---

## بهترین روش‌ها

✅ `<article>` برای هر محصول/مقاله/نظر جداگانه

✅ `<section>` + `<h2>` همیشه برای بخش‌های بزرگ

✅ `<time datetime="2025-07-25">۲۵ جولای</time>` - datetime الزامی

✅ `<figure>` فقط برای عکس/نمودار مهم که توضیح دارد

✅ `<nav>` برای navigation اصلی (یک بار)

---

## اشتباهات رایج

❌ `<time>` بدون datetime:
```html
<time>۲۵ جولای</time> <!-- کامپیوتر نمی‌فهمد -->
```

✅ درست:
```html
<time datetime="2025-07-25">۲۵ جولای</time>
```

❌ تکراری `<nav>`:
```html
<nav>فوتر لینک‌ها</nav> <!-- nav فقط برای navigation اصلی -->
```

---

## نکات بازار کار

- **W3C Validator**: semantic errors فوری نشان می‌دهد
- **WAVE Tool**: Accessibility audit می‌کند
- **Code Review**: reject می‌کند بدون semantic HTML
- **Google Search Console**: semantic HTML برای بهتری indexing

---

## چک‌لیست یادگیری

- [ ] `<article>` را برای محتوای مستقل استفاده می‌کنم
- [ ] `<section>` را برای بخش‌های منطقی + heading استفاده می‌کنم
- [ ] `<time datetime="...">` را به درست می‌نویسم
- [ ] `<figure>` و `<figcaption>` را می‌دانم
- [ ] `<nav>` فقط برای navigation اصلی

---

## تمرین

اکنون فایل `SemanticHTML.Exercises.html` را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. صفحه‌ی وبلاگ: یک `<article>` اصلی + `<aside>` برای مقالات مرتبط.
2. صفحه‌ی خبرگزاری: `<article>` برای خبر برتر + `<section>` برای فهرست.
3. Portfolio: چند `<section>` برای دسته‌ها + `<article>` برای پروژه‌ها.
4. صفحه‌ی محصول: `<article>` + `<time>` + `<aside>` محصولات مرتبط.
5. صفحه‌ی تیم: `<section>` برای دسته‌های شغلی + `<article>` برای افراد.
6. صفحه‌ی رویداد: `<article>` + `<time>` + `<figure>` برای عکس.
7. فهرست محصولات: `<section>` دسته‌بندی + `<article>` محصولات.
8. صفحه‌ی FAQ: `<section>` دسته‌ها + `<article>` سوالات.
9. Landing page: چند `<section>` برای features + `<article>` testimonial‌ها.
10. صفحه‌ای کامل: تمام تگ‌های semantic صحیح + W3C Validator approve.

---

## درس بعدی

**Meta Tags و Head** چیست و چرا مهم است. درس قبلی ساختار HTML‌ت را آموختی، اما meta tags برای SEO، موبایل و شبکه‌های اجتماعی ضروری‌اند.

---

## پیش‌نیازها

- Lesson 1: Document Structure (HTML structure را می‌دانی)
