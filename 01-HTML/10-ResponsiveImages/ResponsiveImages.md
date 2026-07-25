# عکس‌های Responsive

---

## این مبحث چیست؟

Serve کردن عکس‌های مختلف:

- `srcset` - عکس‌های مختلف resolution
- `sizes` - حجم نمایش
- `<picture>` - عکس‌های مختلف format
- `webp` - format modern
- media queries برای mobile/desktop

---

## چرا وجود دارند؟

- **Performance**: عکس‌های کوچک برای موبایل
- **Bandwidth**: کاربران موبایل داده کم دارند
- **Format**: webp برای سایز کمتر
- **UX**: عکس درست برای screen

---

## چه زمانی استفاده کنیم

**srcset برای resolution** (2x برای Retina):

```html
<img srcset="photo-1x.jpg 1x, photo-2x.jpg 2x">
```

**srcset برای width** (مختلف devices):

```html
<img srcset="photo-300w.jpg 300w, photo-600w.jpg 600w">
```

**Picture برای format**:

```html
<picture>
    <source type="image/webp" srcset="photo.webp">
    <img src="photo.jpg">
</picture>
```

---

## چه زمانی نباید استفاده کنیم

❌ srcset بدون sizes:
```html
<img srcset="..."> <!-- مبهم -->
```

❌ Picture بدون fallback:
```html
<picture>
    <source> <!-- بدون <img> -->
</picture>
```

❌ بزرگ عکس برای mobile:
```html
<img src="desktop-2mb.jpg"> <!-- موبایل کند -->
```

---

## تفاوت با عناصر مشابه

| روش | نقش | Performance |
|-----|--------|-------------|
| عکس ساده | mobile + desktop | ✗ بد |
| srcset | resolution | ✓ خوب |
| picture | format/media | ✓ بهترین |
| CSS bg | styling | ✓ |

---

## بهترین روش‌ها

✅ srcset + sizes برای responsive

✅ picture برای webp fallback

✅ عکس‌های مختلف برای mobile/desktop

✅ Lazy loading + srcset

✅ alt text برای تمام صور

---

## اشتباهات رایج

❌ srcset بدون sizes:
```html
<img srcset="300w.jpg 300w, 600w.jpg 600w"> <!-- مبهم -->
```

❌ بزرگ عکس برای تمام:
```html
<img src="2mb.jpg"> <!-- موبایل آهسته -->
```

❌ Picture بدون fallback:
```html
<picture>
    <source>
</picture> <!-- خطر -->
```

---

## نکات بازار کار

- **Lighthouse**: srcset برای performance نقاط دهد
- **Performance**: Core Web Vitals (LCP)
- **Bandwidth**: responsive images کاهش می‌دهد
- **Modern browsers**: picture و webp پذیرفته‌شده است

---

## چک‌لیست یادگیری

- [ ] srcset و sizes را می‌فهمم
- [ ] Picture element برای format استفاده می‌کنم
- [ ] Mobile/desktop عکس‌های مختلف
- [ ] Webp fallback
- [ ] Performance بهبود

---

## تمرین

اکنون فایل `ResponsiveImages.Exercises.html` را خودت ایجاد کن و تمرین‌های زیر را انجام بده.

1. srcset: عکس برای 1x و 2x.
2. Responsive srcset: mobile و desktop.
3. Picture element: webp و jpg.
4. Device-specific: موبایل، تبلت، دسکتاپ.
5. Hero image: بزرگ responsive.
6. Gallery: تمام responsive.
7. Product images: مختلف sizes.
8. Background: CSS + responsive.
9. Lazy loading: srcset + lazy.
10. صفحه کامل: تمام techniques.

---

## درس بعدی

**Figure و Figcaption**: عکس‌ها با captions.

---

## پیش‌نیازها

- Lesson 9: Images
