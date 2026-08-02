   # CSS Blend Modes

---

## معرفی

CSS Blend Modes تعریف می‌کند که چگونه رنگ یک element با رنگ پس‌زمینه آن ترکیب شود. این ویژگی اثرات بصری جالبی ایجاد می‌کند و در طراحی گرافیکی بسیار استفاده می‌شود.

---

## چرا این ویژگی مهم است؟

Blend Modes برای ایجاد اثرات شیک استفاده می‌شوند:
- اثرات بصری پیشرفته
- فلتر‌های عکس
- overlays مدرن
- typography effects
- رنگ‌های هماهنگ

---

## پیش‌نیازها

برای یادگیری این درس باید بدانید:
- CSS پایه
- Opacity و transparency
- رنگ‌ها
- Background images

---

## سینتکس

```css
.element {
  mix-blend-mode: multiply;
}

/* برای background */
.element {
  background-blend-mode: screen;
}
```

---

## تمام ویژگی‌ها

### mix-blend-mode
- `normal`: رفتار معمولی
- `multiply`: ضرب رنگ‌ها
- `screen`: روشن‌سازی
- `overlay`: ترکیب multiply و screen
- `darken`: تاریک‌تر
- `lighten`: روشن‌تر
- `color-dodge`: روشن کردن شدید
- `color-burn`: تاریک کردن شدید
- `hard-light`: hard overlay
- `soft-light`: soft overlay
- `difference`: تفاوت رنگ
- `exclusion`: exclusion
- `hue`: جنبه رنگ
- `saturation`: اشباع
- `color`: رنگ
- `luminosity`: روشنایی

### background-blend-mode
- تمام مقادیر multiply مثل mix-blend-mode

---

## مثال ساده

```css
.blend-multiply {
  background: blue;
  mix-blend-mode: multiply;
}
```

---

## مثال متوسط

```css
.blend-overlay {
  background: url('image.jpg');
  mix-blend-mode: overlay;
  background-color: rgba(255, 0, 0, 0.5);
}
```

---

## مثال حرفه‌ای

```css
.blend-text {
  color: white;
  font-size: 3rem;
  mix-blend-mode: lighten;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.blend-image {
  background-image: url('image.jpg');
  background-blend-mode: color-burn;
  background-color: rgba(255, 0, 0, 0.3);
}
```

---

## نکات مهم

- mix-blend-mode برای elements و text
- background-blend-mode برای backgrounds
- استفاده بیش از حد می‌تواند تجربه کاربری را خراب کند
- performance را نظارت کنید
- accessibility را در نظر بگیرید

---

## اشتباهات رایج

### اشتباه 1: استفاده بیش از حد

```css
/* بیش از حد */
* {
  mix-blend-mode: lighten;
}
```

### اشتباه 2: نادیده گرفتن contrast

```css
/* مشکل‌دار */
.text {
  color: yellow;
  mix-blend-mode: screen;
  /* رنگ شاید ناخوانا شود */
}
```

### اشتباه 3: فراموش کردن background

```css
/* بدون نتیجه */
.element {
  mix-blend-mode: multiply;
  /* بدون background */
}
```

---

## بهترین روش‌ها (Best Practices)

1. **برای overlays:**
   ```css
   .overlay {
     background: rgba(0, 0, 0, 0.5);
     mix-blend-mode: overlay;
   }
   ```

2. **برای text:**
   ```css
   .text {
     color: white;
     mix-blend-mode: lighten;
   }
   ```

3. **Performance:**
   ```css
   .element {
     mix-blend-mode: multiply;
     will-change: opacity;
   }
   ```

---

## سوالات مصاحبه

**سؤال 1: تفاوت multiply و screen چیست؟**
پاسخ: multiply تاریک می‌کند، screen روشن می‌کند.

**سؤال 2: mix-blend-mode و background-blend-mode چه فرقی دارند؟**
پاسخ: mix برای elements، background برای backgrounds.

**سؤال 3: یکی از عرضه multiply است؟**
پاسخ: بله، multiply اغلب استفاده می‌شود.

**سؤال 4: آیا text روی mix-blend-mode تأثیر می‌گذارد؟**
پاسخ: بله، text هم تحت تأثیر قرار می‌گیرد.

**سؤال 5: Performance چطور است؟**
پاسخ: Blend modes GPU intensive هستند.

---

## جمع‌بندی

Blend Modes یک ویژگی قدرتمند برای اثرات بصری است. شامل:
- multiply, screen, overlay, و دیگر modes
- mix-blend-mode برای elements
- background-blend-mode برای backgrounds
- اثرات شیک و professional

---

## تمرین

### پروژه: یک Design Showcase

**هدف:** صفحه‌ای بسازید که تمام blend modes را نشان دهد.

**ویژگی‌ها:**
- چندین blend mode
- overlays
- text effects
- image effects

**نتیجه:**
- اثرات شیک
- professional appearance
- interactive demo
