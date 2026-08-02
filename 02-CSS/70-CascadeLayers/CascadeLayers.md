   # CSS Cascade Layers

---

## معرفی

Cascade Layers یک ویژگی جدید برای کنترل ترتیب CSS است. این ویژگی مشکل specificity را حل می‌کند.

---

## چرا این ویژگی مهم است؟

- کنترل بهتر cascade
- Specificity wars حل
- بهتر از !important
- بزرگ projects برای

---

## پیش‌نیازها

CSS پایه، specificity

---

## سینتکس

```css
@layer reset, base, theme, utilities;

@layer utilities {
  .margin {
    margin: 1rem;
  }
}
```

---

## مثال ساده

```css
@layer base {
  p {
    color: black;
  }
}

@layer theme {
  p {
    color: blue;
  }
}
```

---

## جمع‌بندی

Cascade Layers برای بهتر CSS management است.
