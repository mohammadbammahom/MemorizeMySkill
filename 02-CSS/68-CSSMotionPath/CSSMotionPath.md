   # CSS Motion Path

---

## معرفی

Motion Path یک ویژگی CSS است که یک element را در مسیری تعریف‌شده حرکت می‌دهد. این ویژگی برای ایجاد انیمیشن‌های پیچیده و مسیرهای غیرخطی استفاده می‌شود.

---

## چرا این ویژگی مهم است؟

- انیمیشن‌های پیچیده
- مسیرهای غیرخطی
- بدون نیاز به JavaScript
- اثرات شیک

---

## پیش‌نیازها

CSS animations، SVG paths، coordinates

---

## سینتکس

```css
.element {
  offset-path: path('M 0 0 L 100 100');
  offset-distance: 0%;
  offset-rotate: auto;
  animation: move 5s linear forwards;
}

@keyframes move {
  to {
    offset-distance: 100%;
  }
}
```

---

## تمام ویژگی‌ها

- `offset-path`: مسیر
- `offset-distance`: فاصله
- `offset-anchor`: نقطه reference
- `offset-rotate`: چرخش
- `offset-position`: شروع

---

## مثال ساده

```css
.dot {
  width: 20px;
  height: 20px;
  offset-path: url(#path);
  animation: move 5s infinite;
}
```

---

## مثال متوسط

```css
.element {
  offset-path: path('M 50 50 L 300 50 L 300 300');
  offset-distance: 0%;
  animation: slide 5s linear infinite;
}
```

---

## نکات مهم

- Experimental feature
- Firefox پشتیبانی محدود
- Animation requirement

---

## بهترین روش‌ها

```css
.element {
  offset-path: path(...);
  offset-rotate: auto;
  animation: move 5s linear forwards;
}
```

---

## سوالات مصاحبه

**سؤال:** Motion Path برای چه استفاده می‌شود؟
پاسخ: برای حرکت دادن elements در مسیر تعریف‌شده.

---

## جمع‌بندی

Motion Path برای انیمیشن‌های پیچیده است.

---

## تمرین

یک انیمیشن مسیر بسازید.
