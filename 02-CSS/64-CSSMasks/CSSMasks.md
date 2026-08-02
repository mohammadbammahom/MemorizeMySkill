   # CSS Masks

---

## معرفی

CSS Masks یک ویژگی قدرتمند است که به شما اجازه می‌دهد تا بخش‌هایی از element را پنهان کنید. از یک "mask" استفاده می‌کند که تعریف می‌کند کدام بخش‌های element نشان داده شوند و کدام‌ها پنهان شوند.

---

## چرا این ویژگی مهم است؟

CSS Masks برای ایجاد اثرات پیشرفته استفاده می‌شود:
- ایجاد اشکال پیچیده
- تدریجی transitions
- تصاویر دایره‌ای یا بیضی
- لوگو‌های خاص
- اثرات reveal شدن محتوا

---

## پیش‌نیازها

برای یادگیری این درس باید بدانید:
- CSS پایه
- Gradients
- SVG
- Opacity و transparency
- Position property

---

## سینتکس

### mask-image

```css
.element {
  mask-image: url(#mask-id);
  /* یا */
  mask-image: linear-gradient(to bottom, black, transparent);
}
```

### mask-size

```css
.element {
  mask-size: 100px 200px;
  /* یا */
  mask-size: cover;
  mask-size: contain;
}
```

### mask-position

```css
.element {
  mask-position: center;
  mask-position: 50% 50%;
}
```

### mask-repeat

```css
.element {
  mask-repeat: no-repeat;
  mask-repeat: repeat;
}
```

---

## تمام ویژگی‌ها

### mask-image
- URL به SVG یا image
- Gradient
- Function مثل conic-gradient

### mask-size
- Pixel values
- Percentages
- cover, contain

### mask-position
- Keywords (top, center, bottom)
- Percentages
- Pixel values

### mask-repeat
- repeat
- repeat-x
- repeat-y
- no-repeat

### mask-composite
- add
- subtract
- intersect
- exclude

---

## مثال ساده

```css
.mask-simple {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, red, blue);
  mask-image: radial-gradient(circle, black 50%, transparent 100%);
  mask-size: 100%;
  mask-repeat: no-repeat;
}
```

**توضیح:**
- background gradient رنگی
- mask-image دایره‌ای
- mask-repeat: no-repeat یک‌بار
- نتیجه: دایره رنگی

---

## مثال متوسط

```css
.mask-gradient {
  width: 300px;
  height: 300px;
  background: url('image.jpg');
  mask-image: linear-gradient(
    to right,
    black 0%,
    black 50%,
    transparent 100%
  );
  mask-repeat: no-repeat;
}
```

**توضیح:**
- تصویر background
- mask تدریجی
- سمت راست تصویر محو می‌شود

---

## مثال حرفه‌ای

```html
<svg width="0" height="0">
  <defs>
    <mask id="wave-mask">
      <path id="wave" d="M0,50 Q25,0 50,50 T100,50 L100,0 L0,0 Z" fill="black"/>
    </mask>
  </defs>
</svg>
```

```css
.mask-wave {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  mask-image: url(#wave-mask);
  mask-size: 100px 100px;
  mask-repeat: repeat-x;
}
```

**توضیح:**
- SVG mask شکل موج دار
- repeat-x برای pattern افقی
- gradient background
- ایجاد موج انیمیشن

---

## نکات مهم

- Mask به جای `display: none` استفاده می‌شود
- Mask رنگ شفاف را کنترل می‌کند
- مشکوک browser support (بیشتر Webkit)
- SVG masks بیشتر compatible هستند
- Performance را در نظر بگیرید

---

## اشتباهات رایج

### اشتباه 1: فراموش کردن mask-size

```css
/* مشکل‌دار */
.element {
  mask-image: url(mask.svg);
  /* mask-size فراموش شد */
}
```

**راه حل:** mask-size را تعریف کنید.

### اشتباه 2: استفاده از png شفاف

```css
/* معمولاً کار نمی‌کند */
.element {
  mask-image: url('image.png');
}
```

**راه حل:** SVG یا gradient استفاده کنید.

### اشتباه 3: نادیده گرفتن Prefix

```css
/* ناقص */
.element {
  mask-image: url(mask.svg);
  /* webkit prefix فراموش شد */
}
```

**راه حل:** `-webkit-mask-image` اضافه کنید.

---

## بهترین روش‌ها (Best Practices)

1. **SVG برای اشکال:**
   ```css
   .mask-svg {
     -webkit-mask-image: url(#mask-id);
     mask-image: url(#mask-id);
   }
   ```

2. **Gradient برای تدریجی:**
   ```css
   .mask-gradient {
     mask-image: linear-gradient(to right, black, transparent);
   }
   ```

3. **Performance:**
   ```css
   /* استفاده کنید */
   -webkit-mask-image: url(mask.svg);
   mask-image: url(mask.svg);
   ```

4. **Fallback:**
   ```css
   .element {
     background-color: blue;
     mask-image: url(mask.svg);
   }
   ```

---

## سوالات مصاحبه

**سؤال 1: تفاوت mask و clip-path چیست؟**
پاسخ: Mask opacity را کنترل می‌کند، clip-path شکل را قطع می‌کند.

**سؤال 2: آیا mask-image SVG و gradient هردو را پشتیبانی می‌کند؟**
پاسخ: بله، هردو پشتیبانی می‌شوند.

**سؤال 3: آیا Firefox پشتیبانی می‌کند؟**
پاسخ: بله، اما نیاز به -webkit prefix ندارد.

**سؤال 4: mask-composite چکار می‌کند؟**
پاسخ: چند mask را ترکیب می‌کند.

**سؤال 5: Performance چطور است؟**
پاسخ: SVG masks تقریباً بهتری دارند.

---

## جمع‌بندی

CSS Masks یک ویژگی پیشرفته برای ایجاد اثرات شیک است. شامل:
- mask-image for SVG و gradient
- mask-size و mask-position
- SVG masks برای اشکال پیچیده
- gradient masks برای تدریجی

---

## تمرین

### پروژه: یک Image Gallery با Mask Effects

**هدف:** یک gallery بسازید که تصاویر با mask effects نشان داده شوند.

**ساختار HTML:**
```html
<div class="gallery">
  <div class="gallery-item circular-mask">
    <img src="image1.jpg" alt="Image 1">
  </div>
  <div class="gallery-item gradient-mask">
    <img src="image2.jpg" alt="Image 2">
  </div>
  <!-- مقالات بیشتر -->
</div>
```

**ویژگی‌های CSS:**
- circular-mask: دایره‌ای mask
- gradient-mask: gradient mask
- hover effects
- responsive design

**نتیجه انتظاری:**
- تصاویر دایره‌ای
- تصاویر محو شدن
- smooth transitions

**چالش اضافی:**
- SVG wave masks
- animated masks
- multiple mask layers
