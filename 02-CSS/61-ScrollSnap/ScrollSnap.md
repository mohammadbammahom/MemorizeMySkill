# CSS Scroll Snap

---

## معرفی

CSS Scroll Snap یک ویژگی قدرتمند است که به شما اجازه می‌دهد تا رفتار اسکرول را کنترل کنید. این ویژگی مشخص می‌کند که اسکرول باید در نقاط خاصی متوقف شود. برای مثال، وقتی صفحه‌ای را اسکرول می‌کنید، نقاط snap تعریف می‌کنند کجا باید اسکرول متوقف شود.

---

## چرا این ویژگی مهم است؟

Scroll Snap برای تجربه کاربری بهتر استفاده می‌شود. این ویژگی:
- تجربه کاربری را بهتر می‌کند
- برای گالری‌های تصویر ایده‌آل است
- برای اسلایدر‌ها مفید است
- بدون JavaScript کار می‌کند
- تمامی صفحات مدرن آن را پشتیبانی می‌کنند

---

## پیش‌نیازها

برای یادگیری این درس باید بدانید:
- CSS پایه
- Box Model
- Overflow property
- Flexbox یا Grid

---

## سینتکس

Scroll Snap از دو property اصلی استفاده می‌کند:

### scroll-snap-type

این property روی container تعریف می‌شود:

```css
.container {
  scroll-snap-type: x mandatory;
}
```

**مقادیر:**
- `x`: اسکرول افقی
- `y`: اسکرول عمودی
- `both`: اسکرول دو جهته
- `mandatory`: الزامی (همیشه snap می‌کند)
- `proximity`: نزدیکی (فقط اگر نزدیک باشد snap می‌کند)

### scroll-snap-align

این property روی item‌ها تعریف می‌شود:

```css
.item {
  scroll-snap-align: center;
}
```

**مقادیر:**
- `none`: بدون snap
- `start`: شروع
- `center`: وسط
- `end`: پایان

### scroll-snap-stop

این property کنترل می‌کند که آیا snap‌کردن الزامی است:

```css
.item {
  scroll-snap-stop: always;
}
```

**مقادیر:**
- `normal`: معمولی
- `always`: همیشه snap کن

---

## تمام ویژگی‌ها

### scroll-snap-type
- `x mandatory`: اسکرول افقی الزامی
- `y mandatory`: اسکرول عمودی الزامی
- `both proximity`: دو جهته با نزدیکی
- `x proximity`: افقی با نزدیکی

### scroll-snap-align
- `start`: شروع باز
- `center`: وسط
- `end`: انتهای باز

### scroll-snap-stop
- `always`: همیشه متوقف شو
- `normal`: فقط اگر الزامی باشد

### scroll-padding
فاصله‌ای که snap نقطه از لبه باید داشته باشد:

```css
.container {
  scroll-padding: 20px;
  scroll-padding-top: 50px;
}
```

---

## مثال ساده

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  width: 300px;
  height: 300px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.item {
  width: 300px;
  height: 300px;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
```

**توضیح:**
- Container عرض 300px دارد
- overflow-x: scroll اسکرول افقی فعال می‌کند
- scroll-snap-type: x mandatory اسکرول را به نقاط snap محدود می‌کند
- هر item عرض 300px دارد، بنابراین یکی در هر زمان نشان داده می‌شود
- scroll-snap-align: center هر item را در وسط snap می‌کند

---

## مثال متوسط

```html
<div class="gallery">
  <div class="photo">
    <img src="photo1.jpg" alt="Photo 1">
  </div>
  <div class="photo">
    <img src="photo2.jpg" alt="Photo 2">
  </div>
  <div class="photo">
    <img src="photo3.jpg" alt="Photo 3">
  </div>
</div>
```

```css
.gallery {
  width: 100%;
  height: 400px;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  display: flex;
  gap: 10px;
  padding: 10px;
}

.photo {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  border-radius: 8px;
  overflow: hidden;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

**توضیح:**
- gallery container overflow-x: scroll دارد
- scroll-snap-type: x mandatory اسکرول را ثابت می‌کند
- flex-shrink: 0 مانع کوچک‌شدن item‌ها می‌شود
- scroll-snap-stop: always هر item الزاما snap می‌شود

---

## مثال حرفه‌ای

```html
<div class="carousel">
  <div class="carousel-container">
    <div class="slide">
      <h2>سلاید ۱</h2>
      <p>محتوای سلاید اول</p>
    </div>
    <div class="slide">
      <h2>سلاید ۲</h2>
      <p>محتوای سلاید دوم</p>
    </div>
    <div class="slide">
      <h2>سلاید ۳</h2>
      <p>محتوای سلاید سوم</p>
    </div>
    <div class="slide">
      <h2>سلاید ۴</h2>
      <p>محتوای سلاید چهارم</p>
    </div>
  </div>
  <div class="dots">
    <button class="dot active"></button>
    <button class="dot"></button>
    <button class="dot"></button>
    <button class="dot"></button>
  </div>
</div>
```

```css
.carousel {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.carousel-container {
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  display: flex;
  gap: 0;
  scroll-padding-left: 0;
}

.carousel-container::-webkit-scrollbar {
  height: 8px;
}

.carousel-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.slide {
  flex-shrink: 0;
  width: 100%;
  height: 300px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

.slide h2 {
  margin: 0 0 10px;
  font-size: 2rem;
}

.slide p {
  margin: 0;
  font-size: 1.1rem;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  padding: 20px 0;
}

.dot {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
  transition: background 0.3s ease;
}

.dot.active {
  background: #667eea;
}

.dot:hover {
  background: #888;
}
```

**توضیح:**
- Carousel container scroll-snap-type: x mandatory دارد
- scroll-behavior: smooth اسکرول صاف است
- هر slide عرض 100% دارد و scroll-snap-stop: always دارد
- نقاط زیر نشان‌دهندگی slide فعلی هستند

---

## نکات مهم

- scroll-snap-type باید روی **container** تعریف شود
- scroll-snap-align باید روی **children** تعریف شود
- overflow: scroll یا overflow: auto الزامی است
- هنگام scroll، browser خود snap نقاط را مدیریت می‌کند
- بدون JavaScript کار می‌کند
- scroll-padding برای تنظیم فاصله استفاده می‌شود
- تمام مرورگرهای مدرن آن را پشتیبانی می‌کنند

---

## اشتباهات رایج

### اشتباه 1: فراموش کردن scroll-snap-align

```css
/* غلط */
.container {
  scroll-snap-type: x mandatory;
}

.item {
  /* scroll-snap-align فراموش شد */
}
```

**راه حل:** scroll-snap-align را بر روی items تعریف کنید.

### اشتباه 2: overflow تعریف نشده

```css
/* غلط */
.container {
  scroll-snap-type: x mandatory;
  /* overflow فراموش شد */
}
```

**راه حل:** overflow: scroll یا overflow: auto اضافه کنید.

### اشتباه 3: استفاده نادرست از proximity

```css
/* مشکل‌دار */
.container {
  scroll-snap-type: x proximity;
}
```

اگر proximity استفاده کنید، گاهی snap نمی‌شود.

**راه حل:** برای snap مطمئن، mandatory استفاده کنید.

---

## بهترین روش‌ها (Best Practices)

1. **استفاده کنید برای:**
   - گالری‌های تصویر
   - اسلایدر‌های محصول
   - صفحات تک‌صفحه‌ای
   - اسکرول افقی

2. **scroll-padding استفاده کنید:**
   ```css
   .container {
     scroll-padding-top: 60px; /* برای fixed header */
   }
   ```

3. **scroll-behavior: smooth برای تجربه بهتر:**
   ```css
   .container {
     scroll-behavior: smooth;
     scroll-snap-type: x mandatory;
   }
   ```

4. **scroll-snap-stop: always برای item‌های مهم:**
   ```css
   .item {
     scroll-snap-stop: always;
   }
   ```

---

## سوالات مصاحبه

**سؤال 1: scroll-snap-type چه تفاوتی با overflow: scroll دارد؟**
پاسخ: overflow: scroll فقط اسکرول را فعال می‌کند، اما scroll-snap-type snap points تعریف می‌کند.

**سؤال 2: آیا scroll-snap بدون overflow کار می‌کند؟**
پاسخ: خیر، overflow: scroll یا overflow: auto الزامی است.

**سؤال 3: تفاوت mandatory و proximity چیست؟**
پاسخ: mandatory همیشه snap می‌کند، proximity فقط اگر نزدیک باشد.

**سؤال 4: scroll-snap-stop: always چه کار می‌کند؟**
پاسخ: مشخص می‌کند که اسکرول باید در این item متوقف شود.

**سؤال 5: آیا mobile devices بر آن پشتیبان‌اند؟**
پاسخ: بله، تمام مرورگرهای مدرن mobile پشتیبانی می‌کنند.

---

## جمع‌بندی

CSS Scroll Snap یک ویژگی قدرتمند برای بهبود تجربه اسکرول است. این ویژگی بدون نیاز به JavaScript کار می‌کند و برای:
- گالری‌های تصویر
- اسلایدر‌ها
- اسکرول افقی

ایده‌آل است. scroll-snap-type روی container و scroll-snap-align روی items تعریف می‌شود.

---

## تمرین

### پروژه: یک کتاب‌خوان با Scroll Snap

**هدف:** یک کتاب‌خوان ساده بسازید که صفحات با scroll snap نشان داده شوند.

**ساختار HTML:**
```html
<div class="book-reader">
  <div class="pages">
    <div class="page">
      <h1>صفحه ۱</h1>
      <p>متن صفحه اول...</p>
    </div>
    <div class="page">
      <h1>صفحه ۲</h1>
      <p>متن صفحه دوم...</p>
    </div>
    <!-- صفحات بیشتر -->
  </div>
  <div class="page-info">
    صفحه <span class="current-page">1</span> از <span class="total-pages">5</span>
  </div>
</div>
```

**ویژگی‌های CSS:**
- pages container باید scroll-snap-type: y mandatory داشته باشد
- هر page باید scroll-snap-align: start داشته باشد
- scroll-snap-stop: always برای هر صفحه
- overflow-y: scroll برای اسکرول عمودی
- هر صفحه 100vh ارتفاع داشته باشد

**نتیجه انتظاری:**
- وقتی اسکرول می‌کنید، ہر صفحه تمام‌شود
- scroll snap آن را در شروع snap می‌کند
- اطلاعات صفحه در پایین نشان داده می‌شود

**چالش اضافی:**
- دکمه‌های next/previous اضافه کنید
- شماره‌گذاری صفحات را به‌روز کنید
- استایل‌ها را بهتر کنید
- تاریکی‌روز را اضافه کنید
