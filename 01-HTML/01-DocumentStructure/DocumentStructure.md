# ساختار سند HTML

---

## این مبحث چیست؟

پایه‌ی هر صفحه HTML:

```html
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>عنوان</title>
</head>
<body>
    <!-- محتوا -->
</body>
</html>
```

- `<!DOCTYPE html>`: به مرورگر بگو "من HTML5 هستم"
- `<head>`: اطلاعات مخفی (meta، CSS، title)
- `<body>`: محتوای نمایشی

---

## چرا وجود دارد؟

- **مرورگر رندرکند**: DOCTYPE بدون quirks mode
- **SEO**: Google ساختار صحیح را بررسی می‌کند
- **Responsive**: viewport بدون آن موبایل خراب است
- **Accessibility**: Screen readers به ساختار نیاز دارند
- **استاندارد**: W3C و تمام شرکت‌ها این را انتظار دارند

---

## چه زمانی استفاده کنیم

**همیشه!** برای هر صفحه‌ی HTML.

عملی:
- Landing page → یک `<main>`
- Blog → `<main>` + `<article>`
- Dashboard → `<main>` + `<section>` برای بخش‌ها

---

## چه زمانی نباید استفاده کنیم

❌ DOCTYPE بدون `<!DOCTYPE html>` → quirks mode

❌ `<body>` بدون `<head>` → meta tags گم شوند

❌ محتوای مهم در `<head>` → کاربران نمی‌بینند

❌ `lang="en"` برای سایت فارسی → Screen reader اشتباه صحبت می‌کند

---

## تفاوت با عناصر مشابه

| تگ | مورد | مخفی؟ |
|-----|-------|--------|
| `<head>` | Meta، title، CSS | ✓ بله |
| `<body>` | محتوا | ✗ خیر |
| `<header>` | سرصحافت | ✗ خیر |
| `<main>` | محتوای اصلی | ✗ خیر |

---

## بهترین روش‌ها

✅ DOCTYPE اول در فایل

✅ `<head>` قبل از `<body>`

✅ `lang="fa"` روی `<html>` تگ

✅ `meta charset="UTF-8"` اول `<head>`

✅ `meta viewport` برای موبایل

✅ یک `<main>` در هر صفحه

---

## اشتباهات رایج

❌ بدون DOCTYPE:
```html
<html> <!-- مرورگر نمی‌دانند HTML5 است -->
```

❌ `<title>` بدون `<head>`:
```html
<body>
    <title>نادرست</title>
</body>
```

❌ تکراری `<main>`:
```html
<main>بخش ۱</main>
<main>بخش ۲</main> <!-- فقط یک باید باشد -->
```

---

## نکات بازار کار

- **Linters**: htmlhint DOCTYPE را فوری بررسی می‌کند
- **Code Review**: بدون DOCTYPE approved نمی‌شود
- **Lighthouse**: بررسی می‌کند `<html lang="">` دارد
- **WAVE**: accessibility checker ساختار تحلیل می‌کند

---

## چک‌لیست یادگیری

- [ ] DOCTYPE را می‌دانم و نمی‌فراموش می‌کنم
- [ ] تفاوت head و body را می‌فهمم
- [ ] meta charset و viewport را شامل می‌کنم
- [ ] lang attribute را به `<html>` اضافه می‌کنم
- [ ] یک valid HTML document می‌تواند درست کنم

---

## تمرین

اکنون فایل

DocumentStructure.Exercises.html

را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. صفحه‌ی شخصی با DOCTYPE، `<html lang="fa">`، meta tags، header، nav، main، footer.

2. صفحه‌ی فروشگاه - product page با یک `<main>` و محتوای منطقی.

3. صفحه‌ی داشبورد با header، sidebar و `<main>` - یک لیست.

4. Landing page با hero section، features و CTA.

5. صفحه‌ی وبلاگ - یک مقاله در `<main>`.

6. صفحه‌ی رویداد با تفاصیل رویداد.

7. Portfolio - صفحه‌ی پروژه‌های شخصی.

8. صفحه‌ی FAQ - سوالات در sections.

9. صفحه‌ی تیم - افراد در sections.

10. صفحه‌ای که W3C Validator توسط بدون error validate کند.

---

## درس بعدی

درس بعدی **Meta Tags و Head** است. اکنون می‌دانی HTML structure چیست، اما meta tags برای SEO، شبکه‌های اجتماعی و موبایل یاد می‌گیری.

---

## پیش‌نیازها

- هیچی! این اولین درس است.
