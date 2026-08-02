   # CSS Overscroll Behavior

---

## معرفی

Overscroll Behavior یک ویژگی CSS است که کنترل می‌کند چه اتفاقی می‌افتد وقتی کاربر در انتهای element اسکرول می‌کند. این ویژگی نوع رفتاری اسکرول را تعریف می‌کند و می‌تواند bounce effect یا دیگر رفتارهای پیش‌فرض را غیرفعال کند.

---

## چرا این ویژگی مهم است؟

Overscroll Behavior برای کنترل تجربه اسکرول استفاده می‌شود:
- از انتشار اسکرول به parent elements جلوگیری می‌کند
- رفتار native اسکرول را کنترل می‌کند
- برای scroll modal و overlay‌ها مفید است
- تجربه کاربری را بهتر می‌کند
- مخصوص mobile devices مهم است

---

## پیش‌نیازها

برای یادگیری این درس باید بدانید:
- CSS پایه
- Overflow property
- Scroll behavior
- Event flow و propagation

---

## سینتکس

### overscroll-behavior

```css
.element {
  overscroll-behavior: auto | contain | none;
}
```

**مقادیر:**
- `auto`: رفتار پیش‌فرض (اسکرول می‌تواند parent را تأثیر دهد)
- `contain`: اسکرول در این element محدود است
- `none`: رفتار پیش‌فرض غیرفعال است

### overscroll-behavior-x

برای اسکرول افقی:

```css
.element {
  overscroll-behavior-x: contain;
}
```

### overscroll-behavior-y

برای اسکرول عمودی:

```css
.element {
  overscroll-behavior-y: contain;
}
```

---

## تمام ویژگی‌ها

### overscroll-behavior
- `auto`: رفتار پیش‌فرض
- `contain`: محدود به element
- `none`: غیرفعال

### overscroll-behavior-x
- `auto`: رفتار پیش‌فرض افقی
- `contain`: محدود افقی
- `none`: غیرفعال افقی

### overscroll-behavior-y
- `auto`: رفتار پیش‌فرض عمودی
- `contain`: محدود عمودی
- `none`: غیرفعال عمودی

---

## مثال ساده

```html
<div class="container">
  <div class="scrollable">
    <p>محتویات</p>
  </div>
</div>
```

```css
.scrollable {
  width: 300px;
  height: 200px;
  overflow-y: scroll;
  overscroll-behavior: contain;
}
```

**توضیح:**
- overflow-y: scroll اسکرول عمودی فعال می‌کند
- overscroll-behavior: contain اسکرول را محدود می‌کند
- وقتی به انتهای scrollable برسید، parent اسکرول نمی‌شود

---

## مثال متوسط

```html
<body>
  <header>Header</header>
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal-content">
        <!-- محتوایات modal -->
      </div>
    </div>
  </div>
  <div class="page-content">
    <!-- محتوای صفحه -->
  </div>
</body>
```

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 400px;
  height: 500px;
  background: white;
  border-radius: 8px;
  overflow-y: scroll;
  overscroll-behavior: contain;
}

.page-content {
  min-height: 200vh;
}
```

**توضیح:**
- modal overflow-y: scroll دارد
- overscroll-behavior: contain اسکرول modal را محدود می‌کند
- وقتی modal اسکرول می‌شود، صفحه پشت نمی‌چرخد

---

## مثال حرفه‌ای

```html
<div class="app">
  <aside class="sidebar">
    <nav class="nav-menu">
      <!-- menu items -->
    </nav>
  </aside>
  
  <main class="content">
    <div class="article">
      <!-- محتوای مقاله -->
    </div>
  </main>
</div>
```

```css
.app {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 250px;
  overflow-y: scroll;
  overscroll-behavior: contain;
  border-right: 1px solid #ddd;
  background: #f9f9f9;
}

.nav-menu {
  padding: 20px;
}

.content {
  flex: 1;
  overflow-y: scroll;
  overscroll-behavior: contain;
}

.article {
  padding: 30px;
  max-width: 800px;
}
```

**توضیح:**
- sidebar و content هر دو scroll دارند
- هر یک overscroll-behavior: contain دارند
- اسکرول در sidebar از صفحه اصلی جدا است

---

## نکات مهم

- **overscroll-behavior** روی scrollable elements تعریف می‌شود
- بیشتر برای modal و overlay استفاده می‌شود
- بدون JavaScript برای جلوگیری از scroll propagation
- **contain** مشابه event.preventDefault() است
- mobile devices بیشتر overscroll behavior دارند
- تمام مرورگرهای مدرن پشتیبانی می‌کنند

---

## اشتباهات رایج

### اشتباه 1: فراموش کردن overflow

```css
/* غلط */
.modal {
  overscroll-behavior: contain;
  /* overflow فراموش شد */
}
```

**راه حل:** overflow: auto یا overflow: scroll اضافه کنید.

### اشتباه 2: استفاده در body بدون دقت

```css
/* مشکل‌دار */
body {
  overscroll-behavior: none;
}
```

**راه حل:** فقط برای element‌های خاص استفاده کنید.

### اشتباه 3: فراموش کردن هر دو جهت

```css
/* ناقص */
.container {
  overscroll-behavior-y: contain;
  /* overscroll-behavior-x فراموش شد */
}
```

**راه حل:** اگر لازم است، هر دو جهت را تعریف کنید.

---

## بهترین روش‌ها (Best Practices)

1. **برای modal‌ها استفاده کنید:**
   ```css
   .modal {
     overflow-y: scroll;
     overscroll-behavior-y: contain;
   }
   ```

2. **برای sidebar‌ها:**
   ```css
   .sidebar {
     overflow-y: scroll;
     overscroll-behavior: contain;
   }
   ```

3. **برای gesture-based navigation:**
   ```css
   .drawer {
     overflow-y: auto;
     overscroll-behavior-y: contain;
   }
   ```

4. **جمع‌بندی:**
   ```css
   /* تمامی جهات */
   .container {
     overscroll-behavior: contain;
   }
   ```

---

## سوالات مصاحبه

**سؤال 1: تفاوت overscroll-behavior: contain و none چیست؟**
پاسخ: contain مثل auto است اما scroll propagation را متوقف می‌کند. none تمام overscroll behavior را غیرفعال می‌کند.

**سؤال 2: آیا overscroll-behavior بدون overflow کار می‌کند؟**
پاسخ: خیر، overflow: auto یا overflow: scroll الزامی است.

**سؤال 3: آیا mobile و desktop تفاوتی دارند؟**
پاسخ: بله، mobile devices معمولاً bounce effect دارند.

**سؤال 4: چه زمانی overscroll-behavior: none استفاده کنیم؟**
پاسخ: برای غیرفعال کردن تمام overscroll behaviors.

**سؤال 5: آیا می‌تواند performance را بهتر کند؟**
پاسخ: بله، scroll events را محدود می‌کند.

---

## جمع‌بندی

Overscroll Behavior یک ویژگی مفید برای کنترل رفتار اسکرول است. این ویژگی:
- اسکرول propagation را کنترل می‌کند
- برای modal و overlay ایده‌آل است
- تجربه کاربری بهتری فراهم می‌کند
- بدون JavaScript کار می‌کند

---

## تمرین

### پروژه: یک Dashboard با Sidebar و Modal

**هدف:** یک داشبورد ساخت که sidebar و modal اسکرول کنند بدون تأثیر بر هم.

**ساختار HTML:**
```html
<div class="dashboard">
  <aside class="sidebar">
    <div class="sidebar-content">
      <!-- menu items -->
    </div>
  </aside>
  
  <main class="main-content">
    <!-- صفحه محتوایات -->
  </main>
  
  <div class="modal-overlay" id="modal">
    <div class="modal">
      <div class="modal-content">
        <!-- محتوای modal -->
      </div>
    </div>
  </div>
</div>
```

**ویژگی‌های CSS:**
- dashboard استفاده از flexbox
- sidebar overflow-y: scroll با overscroll-behavior: contain
- main-content overflow-y: scroll
- modal fixed positioning با overscroll-behavior: contain
- modal-overlay برای background

**نتیجه انتظاری:**
- sidebar مستقل اسکرول می‌شود
- modal مستقل اسکرول می‌شود
- اسکرول‌ها به هم تأثیر نمی‌گذارند
- پس‌زمینه ثابت می‌ماند

**چالش اضافی:**
- دکمه بستن modal
- overlay را با animation نشان دهید
- keyboard navigation اضافه کنید
- mobile responsive کنید
- اسکرول‌بار سفارشی درست کنید
