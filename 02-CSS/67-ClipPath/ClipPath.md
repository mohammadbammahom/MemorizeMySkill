   # CSS Clip Path

---

## معرفی

Clip Path یک ویژگی CSS است که شکل یک element را قطع می‌کند. بر خلاف mask، clip-path محتوای پنهان شده را کاملاً حذف می‌کند.

---

## چرا این ویژگی مهم است؟

- ایجاد اشکال پیچیده
- بدون نیاز به تصاویر
- بهتر از mask برای shapes
- performance بهتر

---

## پیش‌نیازها

CSS پایه، shapes، coordinates

---

## سینتکس

```css
.element {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}
```

---

## تمام ویژگی‌ها

- `polygon()`: نقاط
- `circle()`: دایره
- `ellipse()`: بیضی
- `inset()`: داخلی
- `url()`: SVG reference

---

## مثال ساده

```css
.circle {
  width: 200px;
  height: 200px;
  background: red;
  clip-path: circle(50%);
}
```

---

## مثال متوسط

```css
.diamond {
  background: url('image.jpg');
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
```

---

## مثال حرفه‌ای

```css
.star {
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
```

---

## نکات مهم

- clip-path محتوای پنهان را حذف می‌کند
- Events در پنهان شدهقسمت کار نمی‌کنند
- Animation قابل انجام است
- Responsive نیست

---

## اشتباهات رایج

### اشتباه: نادرست percentages

```css
/* مشکل‌دار */
.element {
  clip-path: polygon(50% 0%, 100% 100%);
  /* نقاط ناکافی */
}
```

---

## بهترین روش‌ها

```css
.shape {
  clip-path: polygon(...);
  transition: clip-path 0.3s ease;
}
```

---

## سوالات مصاحبه

**سؤال:** تفاوت clip-path و mask چیست؟
پاسخ: Clip-path قطع می‌کند، mask opacity را کنترل می‌کند.

---

## جمع‌بندی

Clip Path برای ایجاد shapes استفاده می‌شود.

---

## تمرین

اشکال مختلف بسازید: دایره، ستاره، الماس.
