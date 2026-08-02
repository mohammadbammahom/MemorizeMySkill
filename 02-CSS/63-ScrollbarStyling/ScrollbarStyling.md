   # CSS Scrollbar Styling

---

## معرفی

Scrollbar Styling یک ویژگی CSS است که به شما امکان می‌دهد تا ظاهر اسکرول‌بار را سفارشی کنید. این ویژگی شامل pseudo-elements مثل `::-webkit-scrollbar` است که کنترل تمام جنبه‌های ظاهری اسکرول‌بار می‌کند.

---

## چرا این ویژگی مهم است؟

Scrollbar Styling برای بهبود تجربه کاربری استفاده می‌شود:
- دیزاین یکپارچه‌تری برای وب‌سایت
- تطابق با رنگ‌سازی brand
- بهتر شدن interface
- تجربه کاربری حرفه‌ای‌تر
- کنترل دقیق ظاهر

---

## پیش‌نیازها

برای یادگیری این درس باید بدانید:
- CSS پایه
- Pseudo-elements
- Box Model
- Overflow property
- رنگ‌ها و Gradients

---

## سینتکس

### ::-webkit-scrollbar

```css
.element::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
```

### ::-webkit-scrollbar-track

```css
.element::-webkit-scrollbar-track {
  background: #f1f1f1;
}
```

### ::-webkit-scrollbar-thumb

```css
.element::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.element::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

---

## تمام ویژگی‌ها

### ::-webkit-scrollbar
- `width`: عرض اسکرول‌بار عمودی
- `height`: ارتفاع اسکرول‌بار افقی

### ::-webkit-scrollbar-track
- `background`: رنگ پس‌زمینه
- `border-radius`: گوشه‌های خمیده

### ::-webkit-scrollbar-thumb
- `background`: رنگ اسکرول‌بار
- `border-radius`: گوشه‌های خمیده
- `box-shadow`: سایه
- `:hover`: هنگام hover

### ::-webkit-scrollbar-button
- دکمه‌های بالا/پایین

### ::-webkit-scrollbar-corner
- گوشه‌ی intersection

---

## مثال ساده

```css
.container {
  width: 300px;
  height: 200px;
  overflow-y: scroll;
}

.container::-webkit-scrollbar {
  width: 10px;
}

.container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
```

**توضیح:**
- عرض اسکرول‌بار 10px است
- پس‌زمینه خاکستری روشن
- thumb خاکستری تیره
- گوشه‌های خمیده

---

## مثال متوسط

```css
.modern-scrollbar {
  overflow-y: scroll;
  width: 400px;
  height: 300px;
}

.modern-scrollbar::-webkit-scrollbar {
  width: 12px;
}

.modern-scrollbar::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 10px;
}

.modern-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #667eea, #764ba2);
  border-radius: 10px;
  border: 2px solid #f0f0f0;
}

.modern-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #764ba2, #667eea);
}
```

**توضیح:**
- gradient رنگی در thumb
- border برای فاصله
- hover effect
- border-radius برای smooth look

---

## مثال حرفه‌ای

```css
.premium-scrollbar {
  overflow-y: auto;
  max-height: 500px;
  padding: 20px;
}

/* برای Firefox */
.premium-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #667eea #f0f0f0;
}

/* برای WebKit */
.premium-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.premium-scrollbar::-webkit-scrollbar-track {
  background: linear-gradient(to bottom, #f5f5f5, #efefef);
  border-radius: 10px;
}

.premium-scrollbar::-webkit-scrollbar-thumb {
  background: #667eea;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  background-clip: content-box;
}

.premium-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #764ba2;
  background-clip: content-box;
}

.premium-scrollbar::-webkit-scrollbar-corner {
  background: #f5f5f5;
}
```

**توضیح:**
- Firefox و WebKit support
- sophisticated styling
- box-shadow برای depth
- background-clip برای padding

---

## نکات مهم

- فقط WebKit browsers (Chrome, Safari, Edge) استفاده می‌کنند
- Firefox از scrollbar-width و scrollbar-color استفاده می‌کند
- فقط اسکرول‌باری که overflow: auto/scroll دارند قابل سفارشی‌سازی
- mobile browsers معمولاً سفارشی‌سازی را نادیده می‌گیرند
- accessibility را در نظر بگیرید

---

## اشتباهات رایج

### اشتباه 1: فراموش کردن ::-webkit- prefix

```css
/* غلط */
.element:scrollbar {
  width: 10px;
}
```

**راه حل:** `::-webkit-scrollbar` استفاده کنید.

### اشتباه 2: استفاده برای elements بدون overflow

```css
/* غلط */
div {
  overflow: visible; /* یا بدون overflow */
  /* این کار نمی‌کند */
}
```

**راه حل:** overflow: auto یا overflow: scroll الزامی است.

### اشتباه 3: نادیده گرفتن Firefox

```css
/* ناقص */
.element::-webkit-scrollbar {
  width: 10px;
}
/* Firefox support فراموش شد */
```

**راه حل:** `scrollbar-width` و `scrollbar-color` اضافه کنید.

---

## بهترین روش‌ها (Best Practices)

1. **رنگ‌ها قابل خواندگی باشند:**
   ```css
   .scrollbar {
     overflow-y: auto;
   }
   
   .scrollbar::-webkit-scrollbar-thumb {
     background: #667eea;
   }
   ```

2. **Firefox support کنید:**
   ```css
   .scrollbar {
     scrollbar-width: thin;
     scrollbar-color: #667eea #f0f0f0;
   }
   ```

3. **Hover effect اضافه کنید:**
   ```css
   .scrollbar::-webkit-scrollbar-thumb:hover {
     background: #764ba2;
   }
   ```

4. **Subtle transitions:**
   ```css
   .scrollbar::-webkit-scrollbar-thumb {
     transition: background 0.3s ease;
   }
   ```

---

## سوالات مصاحبه

**سؤال 1: چه pseudo-elements برای scrollbar styling استفاده می‌شوند؟**
پاسخ: ::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb

**سؤال 2: آیا Firefox آن را پشتیبانی می‌کند؟**
پاسخ: بله، اما scrollbar-width و scrollbar-color استفاده می‌کند.

**سؤال 3: آیا mobile devices آن را پشتیبانی می‌کنند؟**
پاسخ: عموماً نه، موبایل browsers سفارشی‌سازی را نادیده می‌گیرند.

**سؤال 4: overflow الزامی است؟**
پاسخ: بله، overflow: auto یا scroll باید وجود داشته باشد.

**سؤال 5: چگونه width و height تنظیم کنم؟**
پاسخ: ::-webkit-scrollbar میں width برای عمودی و height برای افقی.

---

## جمع‌بندی

Scrollbar Styling یک ویژگی قدرتمند برای بهبود ظاهر وب‌سایت است. این ویژگی شامل:
- ::-webkit-scrollbar pseudo-elements
- Firefox support با scrollbar-width
- hover و transition effects
- responsive و professional look

---

## تمرین

### پروژه: یک Content Browser با Styled Scrollbars

**هدف:** یک content reader بسازید که اسکرول‌بارهای سفارشی‌شده‌ای داشته باشد.

**ساختار HTML:**
```html
<div class="app">
  <header class="header">
    <h1>Content Browser</h1>
  </header>
  
  <div class="content-area">
    <aside class="sidebar">
      <!-- مقالات -->
    </aside>
    
    <main class="content">
      <!-- محتوای اصلی -->
    </main>
  </div>
</div>
```

**ویژگی‌های CSS:**
- sidebar با scrollbar سفارشی
- main content با scrollbar سفارشی
- رنگ‌های متناسب
- hover effects

**نتیجه انتظاری:**
- اسکرول‌بارهای با رنگ متناسب
- smooth hover transitions
- Firefox support
- professional look

**چالش اضافی:**
- چند رنگ‌سازی مختلف
- dark mode scrollbars
- animations
- responsive scrollbars
