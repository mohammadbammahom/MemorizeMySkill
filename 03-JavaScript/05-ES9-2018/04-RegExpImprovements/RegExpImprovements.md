# بهبود‌های RegExp در ES9

---

## این مبحث چیست؟

ES9 چند بهبود مهم برای Regular Expressions معرفی کرد که پردازش متن را آسان‌تر می‌کند. این بهبود‌ها شامل dotAll flag، named capture groups، lookbehind assertions و Unicode properties هستند.

---

## چرا از آن استفاده می‌کنیم؟

Regex patterns اغلب نامفهوم و دشوار هستند. این بهبود‌ها کد را خوانا‌تر و قابل‌فهم‌تر می‌کنند.

---

## چه زمانی استفاده می‌کنیم؟

- هنگام پردازش متن‌های بزرگ
- هنگام parsing log files
- هنگام validation user input
- هنگام extracting data from strings
- هنگام text searching

---

## چه زمانی نباید استفاده کنیم؟

برای simple string operations، regex نیاز نیست. مثلاً برای `.includes()` یا `.indexOf()`.

---

## تفاوت با مفاهیم مشابه

| فیچر | کاربرد |
|---|---|
| dotAll flag | . matches newlines |
| Named groups | Readable group access |
| Capture groups | Unnamed group access |
| Lookbehind | Context before match |
| Lookahead | Context after match |
| Unicode | International text |

---

## مثال‌های واقعی

هنگام parsing log files، می‌توانی named groups برای level، timestamp و message استفاده کنی. هنگام parsing URLs، می‌توانی lookbehind برای یافتن parameters استفاده کنی.

---

## بهترین روش‌های استفاده

- Named groups را برای clarity استفاده کن
- dotAll flag را کاملاً فهم کن
- Lookbehind/lookahead patterns سادگی نگه دار
- Unicode properties را برای international text استفاده کن
- Flags (s, u, g) را به‌درستی ترکیب کن

---

## اشتباهات رایج

1. نفراموشی s flag برای multiline matching
2. نادرست named group syntax
3. Mixing lookbehind with lookahead
4. Unicode flag فراموشی
5. Complex patterns بدون comments

---

## نکات بازار کار

Regex patterns از بنیادی‌ترین skill های string processing هستند. هر frontend یا backend developer باید از آن استفاده بتواند. Complex regex patterns اغلب در code reviews مورد بحث هستند.

---

## چک‌لیست یادگیری

- [ ] می‌توانم dotAll flag را استفاده کنم
- [ ] می‌توانم named capture groups بنویسم
- [ ] می‌توانم lookbehind assertions استفاده کنم
- [ ] می‌توانم Unicode properties استفاده کنم
- [ ] می‌توانم complex patterns بنویسم

---

## اجرای درس

```bash
node RegExpImprovements.js
```

```bash
node RegExpImprovements.exercise.js
```

---

## تمرین

یک validator برای user data بساز. Email، phone و address fields را با regex pattern‌های ES9 validate کن. Named groups برای extracting parts و lookbehind برای prefix matching استفاده کن.
