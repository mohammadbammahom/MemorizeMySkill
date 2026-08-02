   # CSS Anchor Positioning

---

## معرفی

Anchor Positioning یک ویژگی جدید برای موضع‌گذاری elements نسبت به یک anchor است.

---

## سینتکس

```css
.anchor {
  anchor-name: --my-anchor;
}

.target {
  position: absolute;
  top: anchor(--my-anchor top);
}
```

---

## جمع‌بندی

Anchor Positioning برای positioning پیشرفته است.
