# عکس‌ها

---

## این مبحث چیست؟

تگ `<img>` و ویژگی‌های آن:

- `src` - مسیر عکس (الزامی)
- `alt` - متن جایگزین (الزامی!)
- `width` و `height` - ابعاد
- `loading` - lazy loading
- `title` - tooltip
- `decoding` - async decoding

---

## چرا وجود دارند؟

- **Accessibility**: alt text برای صفحه‌خوان‌ها
- **SEO**: alt text برای Google Images
- **Performance**: width/height برای layout shift
- **User experience**: title برای اطلاعات اضافی

---

## چه زمانی استفاده کنیم

**عکس محتوایی**: alt text معنی‌دار

```html
<img src="photo.jpg" alt="شاگردان در کلاس">
```

**عکس تزئینی**: alt="" (خالی)

```html
<img src="decoration.jpg" alt="">
```

**عکس محصول**: نام محصول در alt

```html
<img src="product.jpg" alt="لپ تاپ">
```

---

## چه زمانی نباید استفاده کنیم

❌ بدون alt attribute:
```html
<img src="photo.jpg"> <!-- accessibility issue -->
```

❌ alt="image" یا "photo":
```html
<img src="photo.jpg" alt="image"> <!-- بی‌معنی -->
```

❌ عکس‌های بزرگ بدون dimensions:
```html
<img src="large.jpg"> <!-- layout shift -->
```

---

## تفاوت با عناصر مشابه

| ویژگی | نقش | الزامی |
|---------|-------|--------|
| `src` | مسیر عکس | ✓ |
| `alt` | متن جایگزین | ✓ |
| `width` | عرض | ✗ |
| `height` | ارتفاع | ✗ |
| `title` | tooltip | ✗ |

---

## بهترین روش‌ها

✅ الزام `alt` attribute

✅ Meaningful alt text (چه هستش، نه "عکس")

✅ width و height برای Largest Contentful Paint

✅ `loading="lazy"` برای images پایین صفحه

✅ Responsive images (مطالعه‌ی بعدی)

---

## اشتباهات رایج

❌ بدون alt:
```html
<img src="photo.jpg"> <!-- نادرست -->
```

❌ Alt="Image":
```html
<img src="photo.jpg" alt="Image"> <!-- بی‌معنی -->
```

❌ عکس بزرگ بدون dimensions:
```html
<img src="2mb-image.jpg"> <!-- slow loading -->
```

---

## نکات بازار کار

- **Accessibility**: alt text الزامی برای compliance
- **SEO**: alt text برای Google Images ranking
- **Performance**: Lighthouse می‌سنجد width/height
- **Code Review**: بدون alt، rejected می‌شود

---

## چک‌لیست یادگیری

- [ ] الزام `alt` attribute
- [ ] Meaningful alt text
- [ ] width و height برای performance
- [ ] Responsive images (مطالعه بعدی)
- [ ] Lazy loading برای performance

---

## تمرین

اکنون فایل `Images.Exercises.html` را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. Gallery: عکس‌های مختلف با grid.
2. Product page: عکس محصول + description.
3. Team page: عکس‌های افراد.
4. Blog post: عکس‌های در میان متن.
5. Carousel: اسلایدر عکس‌ها.
6. Background image: عکس پس‌زمینه.
7. Icons: عکس‌های کوچک برای icons.
8. Logo: عکس logo در header.
9. Hero section: عکس بزرگ.
10. صفحه کامل: تمام عکس‌ها alt + dimensions.

---

## درس بعدی

**Responsive Images**: srcset و sizes برای devices مختلف.

---

## پیش‌نیازها

- Lesson 8: Links و Navigation
