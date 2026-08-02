   # CSS Backdrop Filter

---

## معرفی

Backdrop Filter یک ویژگی CSS است که فیلتر‌هایی را به محتوای پشت یک element اعمال می‌کند. این ویژگی برای ایجاد اثرات frosted glass و blur background استفاده می‌شود.

---

## چرا این ویژگی مهم است؟

Backdrop Filter برای اثرات مدرن استفاده می‌شود:
- frosted glass effects
- background blur
- modal overlays
- navigation bars
- modern UI design

---

## پیش‌نیازها

CSS پایه، opacity، filters

---

## سینتکس

```css
.element {
  backdrop-filter: blur(10px);
}
```

---

## تمام ویژگی‌ها

- blur()
- brightness()
- contrast()
- grayscale()
- hue-rotate()
- invert()
- opacity()
- saturate()
- sepia()

---

## مثال ساده

```css
.modal {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
}
```

---

## مثال متوسط

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px) brightness(1.1);
  border-radius: 8px;
}
```

---

## مثال حرفه‌ای

```css
.premium-nav {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

---

## نکات مهم

- backdrop-filter نیاز به background دارد
- بیشتر مرورگرهای مدرن پشتیبانی می‌کنند
- Performance را در نظر بگیرید
- Firefox پشتیبانی محدود دارد

---

## اشتباهات رایج

### اشتباه: بدون background

```css
/* کار نمی‌کند */
.element {
  backdrop-filter: blur(10px);
  /* بدون background */
}
```

---

## بهترین روش‌ها

```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
```

---

## سوالات مصاحبه

**سؤال:** backdrop-filter چه تفاوتی با filter دارد؟
پاسخ: backdrop-filter محتوای پشت را تأثیر می‌دهد، filter خود element را.

---

## جمع‌بندی

Backdrop Filter یک ویژگی مدرن برای اثرات شیک است.

---

## تمرین

یک modal با backdrop filter blur بسازید.
