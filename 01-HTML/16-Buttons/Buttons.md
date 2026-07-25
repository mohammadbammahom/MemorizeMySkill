# دکمه‌های HTML

---

## این مبحث چیست؟

عنصر `<button>`:

- `<button>` - دکمه تعاملی
- `type="submit"` - ارسال فرم
- `type="reset"` - بازنشانی فرم
- `type="button"` - عمل JavaScript
- `disabled` - غیرفعال
- `aria-label` - برچسب accessibility

---

## چرا از آن استفاده می‌کنیم؟

- **Semantics**: دکمه معنایی، نه `<div>` یا `<a>`
- **Accessibility**: Screen readers درست عمل می‌کند
- **Form submission**: submit دکمه فرم
- **Styling**: CSS بهتر برای buttons
- **Keyboard**: آسان برای keyboard users

---

## چه زمانی استفاده می‌کنیم

**ارسال فرم:**

```html
<button type="submit">ارسال</button>
```

**کلیک عام:**

```html
<button type="button">کلیک</button>
```

**بازنشانی:**

```html
<button type="reset">پاک</button>
```

**Disabled دکمه:**

```html
<button disabled>غیرفعال</button>
```

---

## چه زمانی نباید استفاده کنیم

❌ `<div>` برای دکمه:
```html
<div onclick="action()">کلیک</div> <!-- بد accessibility -->
```

❌ `<a>` برای action:
```html
<a href="javascript:void(0)">عمل</a> <!-- semantic نیست -->
```

❌ Button بدون type:
```html
<button>عمل</button> <!-- type="submit" فرض -->
```

---

## تفاوت با عناصر مشابه

| عنصر | نقش | Semantic | Keyboard |
|-----|--------|----------|----------|
| button | عمل | ✓ | ✓ |
| a | لینک | ✓ | ✓ |
| div | grouping | ✗ | ✗ |
| input | فرم | ✓ | ✓ |

---

## بهترین روش‌های استفاده

✅ صحیح type (submit، reset، button)

✅ aria-label برای icon buttons

✅ disabled state واضح

✅ Hover/focus states برای UX

✅ Submit دکمه درون فرم

---

## اشتباهات رایج

❌ Button بدون type:
```html
<button>عمل</button> <!-- type="submit" فرض، ممکن غلط باشد -->
```

❌ Icon button بدون aria-label:
```html
<button>✕</button> <!-- accessibility نیست -->
```

❌ Multiple submit buttons بدون name:
```html
<button type="submit">ذخیره</button>
<button type="submit">حذف</button> <!-- کدام؟ -->
```

---

## نکات بازار کار

- **Accessibility**: aria-label الزامی برای icon buttons
- **Form handling**: submit دکمه باید در form
- **Code review**: `<div onclick>` reject می‌شود
- **Mobile**: بزرگ‌تر برای touch (۴۴px+ حداقل)

---

## چک‌لیست یادگیری

- [ ] button types (submit، reset، button)
- [ ] disabled attribute و state
- [ ] aria-label برای accessibility
- [ ] button درون form
- [ ] disabled state styling

---

## تمرین

اکنون فایل `Buttons.Exercises.html` را بساز و تمرین‌های زیر را انجام بده.

1. فرم ساده: submit و reset buttons.
2. دکمه‌های مختلف: primary، secondary، danger.
3. Icon buttons: aria-label کامل.
4. Disabled buttons: state واضح.
5. دکمه‌های چندگانه: نام‌های مختلف.
6. Modal buttons: تایید و لغو.
7. Dashboard buttons: actions مختلف.
8. Button group: multiple buttons with styles.
9. Login page: submit button.
10. صفحه کامل: button scenarios.

---

## درس بعدی

**Labels**: برچسب‌ها و form associations.

---

## پیش‌نیازها

- Lesson 15: Form Validation
