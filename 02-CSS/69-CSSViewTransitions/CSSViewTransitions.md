   # CSS View Transitions

---

## معرفی

View Transitions یک API جدید برای ایجاد انتقالات صاف بین تغییرات در صفحه است. این ویژگی برای single-page applications بسیار مفید است.

---

## چرا این ویژگی مهم است؟

- انتقالات صاف
- بهتر از fade in/out
- single-page apps
- تجربه کاربری بهتر

---

## پیش‌نیازها

CSS، JavaScript، animations

---

## سینتکس

```css
::view-transition {
  animation-duration: 0.5s;
}

::view-transition-old(root) {
  animation-name: fade-out;
}

::view-transition-new(root) {
  animation-name: fade-in;
}
```

---

## تمام ویژگی‌ها

- ::view-transition
- ::view-transition-group()
- ::view-transition-image-pair()
- ::view-transition-old()
- ::view-transition-new()

---

## مثال ساده

```css
@supports (view-transition-name: auto) {
  ::view-transition-old(root) {
    animation: fade-out 0.3s ease-out;
  }

  ::view-transition-new(root) {
    animation: fade-in 0.3s ease-in;
  }
}
```

---

## نکات مهم

- Experimental feature
- Requires JavaScript
- Desktop browsers فقط
- Animation customization ممکن

---

## جمع‌بندی

View Transitions برای صفحات نقل مکان است.
