# CSS Blend Modes
---
## این مبحث چیست؟
CSS Blend Modes مجموعه‌ای از مقادیر CSS است که نحوه ترکیب رنگ‌های یک عنصر با لایه‌های زیرین آن را تعیین می‌کند. این ویژگی به شما امکان می‌دهد که تصاویر، پس‌زمینه‌ها و متن‌ها در هم ادغام شوند و جلوه‌های بصری حرفه‌ای ایجاد کنند.
---
## چرا از آن استفاده می‌کنیم؟
- برای ساختن افکت‌های بصری شیشه‌ای و نورپردازی.
- برای ترکیب رنگ و تصویر بدون نیاز به ویرایش عکس.
- برای افزایش جذابیت بنرها و کارت‌های معرفی محصول.
- برای ایجاد حرکت بصری در طرح‌های متنی و پس‌زمینه‌ها.
---
## چه زمانی استفاده می‌کنیم
- وقتی می‌خواهیم عنوان روی تصویر با حالت طبیعی‌تری نمایش داده شود:
```css
.hero-text {
  color: white;
  mix-blend-mode: overlay;
}
```
- وقتی می‌خواهیم تصویر و رنگ پس‌زمینه یک کارت با هم ترکیب شوند:
```css
.card {
  background: url('product.jpg');
  background-color: rgba(255, 128, 0, 0.5);
  background-blend-mode: multiply;
}
```
- وقتی می‌خواهیم لایه‌ای روشن روی تصویر بسازیم:
```css
.image-overlay {
  background: rgba(255, 255, 255, 0.35);
  mix-blend-mode: screen;
}
```
---
## چه زمانی نباید استفاده کنیم
- زمانی که خوانایی متن مهم‌ترین اولویت است.
```css
.heading {
  color: yellow;
  mix-blend-mode: difference;
}
```
- وقتی ترکیب ساده رنگ کافی است.
```css
.box {
  background-color: #222;
  mix-blend-mode: normal;
}
```
- وقتی می‌خواهیم در مرورگرهای قدیمی پشتیبانی قوی داشته باشیم.
```css
.old-browser {
  mix-blend-mode: exclusion;
}
```
---
## تفاوت با ویژگی‌های مشابه
| ویژگی | کاربرد | تفاوت |
|-------|--------|-------|
| `mix-blend-mode` | ترکیب عنصر با لایه‌های زیرین | روی کل عنصر تاثیر می‌گذارد |
| `background-blend-mode` | ترکیب لایه‌های پس‌زمینه | فقط روی background اعمال می‌شود |
| `opacity` | تنظیم شفافیت کلی عنصر | تمام محتوا را یکجا شفاف می‌کند |
| `filter` | فیلتر روی خود عنصر | روی محتوای داخل عنصر تاثیر می‌گذارد |
---
## بهترین روش‌های استفاده
- از حالت‌های نرم مانند `overlay` و `soft-light` برای متن استفاده کنید.
- قبل از نهایی کردن طرح، کنتراست را با پس‌زمینه بررسی کنید.
- برای بخش‌های مهم، با دقت انتخاب کنید که کدام حالت را به کار ببرید.
- `background-blend-mode` را برای ترکیب لایه‌های پس‌زمینه و `mix-blend-mode` را برای عناصر رویی استفاده کنید.
- تست مرورگرهای مختلف را فراموش نکنید.
---
## اشتباهات رایج
- ❌ استفاده از حالت‌های شدید روی متن حساس:
```css
.title {
  color: white;
  mix-blend-mode: hard-light;
}
```
- ❌ استفاده از `mix-blend-mode` بدون پس‌زمینه مناسب:
```css
.card {
  mix-blend-mode: multiply;
}
```
- ❌ اعمال blend mode روی تمام صفحه:
```css
body {
  mix-blend-mode: screen;
}
```
- ❌ فراموش کردن fallback برای مرورگرهایی که blend mode پشتیبانی نمی‌کنند:
```css
.image {
  background-color: rgba(0,0,0,0.2);
  background-blend-mode: screen;
}
```
---
## نکات بازار کار
- Blend Modes در طراحی بنرها، کارت‌های محصول و صفحه‌های معرفی کاربرد دارد.
- در مصاحبه باید تفاوت `mix-blend-mode` و `background-blend-mode` را توضیح دهید.
- در بازبینی کد، باید خوانایی و سازگاری مرورگر را بررسی کنید.
- طراحی‌های حرفه‌ای از این ویژگی به شکل محدود و هدف‌مند استفاده می‌کنند.
- همیشه مطمئن شوید متن‌ها روی پس‌زمینه قابل خواندن باشند.
---
## چک‌لیست یادگیری
- [ ] می‌دانم `mix-blend-mode` چیست.
- [ ] می‌توانم `background-blend-mode` را توضیح دهم.
- [ ] می‌دانم چه زمانی نباید از blend mode استفاده کنم.
- [ ] می‌توانم تفاوت `mix-blend-mode` و `background-blend-mode` را تشخیص دهم.
- [ ] می‌توانم نمونه‌ی خوانا از blend mode بنویسم.
- [ ] می‌توانم fallback را برای مرورگرهای قدیمی طراحی کنم.
---
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
- `mix-blend-mode` برای ترکیب عناصر رویی
- `background-blend-mode` برای ترکیب لایه‌های پس‌زمینه
- استفاده محتاطانه برای حفظ خوانایی

---

## تمرین

در این تمرین یک صفحه نمونه بسازید که از ترکیب رنگ و تصویر با Blend Mode برای ایجاد بخش‌های بصری جذاب استفاده می‌کند.

مراحل انجام تمرین:

1. در HTML یک بخش بنر (`section`) ایجاد کنید که شامل موارد زیر باشد:
   - یک تصویر پس‌زمینه یا یک لایه رنگی گسترده.
   - یک لایه پوششی نیمه‌شفاف جلوی تصویر.
   - یک عنوان بزرگ و یک دکمه فراخوانی اقدام.

2. در CSS این موارد را پیاده‌سازی کنید:
   - برای پوشش از `mix-blend-mode: overlay` استفاده کنید.
   - رنگ پوشش را نیمه‌شفاف انتخاب کنید تا تصویر زیر آن دیده شود.
   - متن عنوان باید روی تصویر واضح و خوانا باشد.
   - دکمه باید رنگ و حاشیه‌ای داشته باشد که در مقابل پس‌زمینه قابل دیدن باشد.

3. یک کارت محصول بسازید که شامل تصویر یا پس‌زمینه رنگی، عنوان، توضیح کوتاه و دکمه باشد.
   - از `background-blend-mode: multiply` روی پس‌زمینه کارت استفاده کنید.
   - یک لایه رنگ نیمه‌شفاف روی پس‌زمینه قرار دهید.
   - متن داخل کارت باید خوانا و متناسب با رنگ پس‌زمینه باشد.

4. یک بلوک ویژگی (feature block) طراحی کنید:
   - یک لایه تزئینی با `mix-blend-mode: screen` اضافه کنید.
   - این بلوک باید شامل یک عنوان و یک دکمه باشد.
   - ترکیب رنگ و تصویر باید جلوه‌ای روشن و پویا ایجاد کند.

5. یک حالت fallback ساده اضافه کنید تا در مرورگرهایی که blend mode پشتیبانی نمی‌کنند، صفحه قابل خواندن باشد:
   - قبل از `background-blend-mode` یک `background-color` ساده مشخص کنید.
   - مطمئن شوید متن و دکمه در صورت عدم پشتیبانی هم دیده می‌شوند.

نتیجه نهایی:
یک صفحه شامل بنر، کارت محصول و بلوک ویژگی بسازید که با استفاده از Blend Mode جلوه‌ای حرفه‌ای و خوانا داشته باشد و در مرورگرهای ناپشتیبانی نیز به درستی قابل استفاده باشد.
