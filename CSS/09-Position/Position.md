# عنوان درس

## این مبحث چیست؟

- `position` نحوه‌ی قرارگیری عنصر در document flow را مشخص می‌کند.
- این ویژگی در UI‌های دیجیتال برای tooltip، badge، sticky header، modal و overlay کاربرد زیادی دارد.
- درک درست position به‌طور مستقیم روی ساختار real-world layout تأثیر می‌گذارد.

## چرا از آن استفاده می‌کنیم؟

- برای قرار دادن عناصر روی محورهای خاص
- برای ساخت sticky nav، floating actions و badgeها
- برای کنترل offset بدون تغییر flow اصلی
- برای ایجاد overlay و layerهای ظاهری در UI

## چه زمانی استفاده می‌کنیم؟

- وقتی عنصر باید نسبت به خود یا parent position بگیرد، `relative` و `absolute` مناسب‌اند.
- وقتی باید عنصر در viewport ثابت بماند، `fixed` استفاده می‌شود.
- وقتی header یا section باید داخل scroll ثابت بماند، `sticky` بهترین انتخاب است.
- `static` حالت پیش‌فرض است و معمولاً کار خاصی انجام نمی‌دهد.

## چه زمانی نباید استفاده کنیم؟

- وقتی برای یک layout ساده، عناصر ناخواسته با `absolute` از flow خارج می‌شوند.
- وقتی sticky یا fixed به‌صورت بی‌رویه برای همه‌ی بخش‌ها استفاده شود.
- وقتی position در کنار `z-index` بدون تحلیل stacking context استفاده شود.

## تفاوت با روش‌های مشابه

- `static` حالت طبیعی است.
- `relative` عنصر را در همان جای خودش نگه می‌دارد و offset می‌دهد.
- `absolute` نسبت به nearest positioned ancestor positioning می‌شود.
- `fixed` با viewport در ارتباط است.
- `sticky` در جریان document می‌ماند و وقتی به مرز موردنظر می‌رسد، ثابت می‌شود.

## بهترین روش‌های استفاده

- از `absolute` فقط در container‌های known و مقید استفاده کن.
- برای badge و labelها از `absolute` یا `relative` در parent مناسب بهره ببر.
- برای sticky headers از `position: sticky` با threshold مناسب استفاده کن.
- `fixed` را برای floating action buttons و notificationها به‌کار ببر.

## اشتباهات رایج

- استفاده‌ی غیرمنطقی از `absolute` برای همه‌ی layoutها
- قرار دادن `fixed` برای همه‌ی عناصر بدون نیاز
- نادیده گرفتن parent positioning برای `absolute`
- ترکیب `position` با `z-index` بدون شناخت context

## نکات بازار کار

- در پروژه‌های واقعی، position بخشی از UI foundation است.
- یک Front-End engineer باید بداند کدام position برای کدام نوع component مناسب است.
- درک `relative`/`absolute`/`sticky` در طراحی interactive خیلی مهم است.

## چک‌لیست یادگیری

- [ ] حالت‌های `static`، `relative` و `absolute` را می‌شناسم.
- [ ] `fixed` و `sticky` را برای componentهای واقعی می‌توانم به‌کار ببرم.
- [ ] parent positioning برای absolute را به درستی می‌دانم.
- [ ] از position برای small UI details و layout حرفه‌ای استفاده می‌کنم.

## تمرین

اکنون فایل Position.Exercises.html را ایجاد کن و تمرین‌های زیر را انجام بده.

1. یک sticky topbar بساز.
2. یک floating action button ثابت در گوشه‌ی صفحه ایجاد کن.
3. یک badge در یک card با `absolute` بساز.
4. یک notification panel با `fixed` طراحی کن.
5. یک sidebar sticky در یک dashboard بساز.
6. یک tooltip با `absolute` نسبت به parent بساز.
7. یک section با sticky heading طراحی کن.
8. یک landing page با nav و CTA overlay بساز.
9. یک dashboard با sticky topbar و card‌های relative بساز.
10. یک complex UI با multiple position cases طراحی کن.

## درس بعدی

در درس بعدی، `z-index` و مفهوم stacking context به‌صورت عملی مرور می‌شود.

## پیش‌نیازها

- Overflow
- Display
