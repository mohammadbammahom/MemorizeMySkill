from pathlib import Path

root = Path(r'g:\B\AA-MiniProject\Memorize\02-CSS')
root.mkdir(parents=True, exist_ok=True)

lessons = [
    (
        '66-CSSBlendModes',
        'CSSBlendModes',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CSSBlendModes</title>
  <link rel="stylesheet" href="CSSBlendModes.css" />
</head>
<body>
  <main class="blend-shell">
    <section class="blend-card">
      <h1>Blend Modes</h1>
      <p>این کارت با افکت ترکیب رنگ و شفافیت طراحی شده است.</p>
    </section>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Blend Modes */
:root { --bg: #f8fafc; --card: #ffffff; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: linear-gradient(135deg, #22c55e, #3b82f6); color: #0f172a; }
.blend-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.blend-card { position: relative; width: min(480px, 100%); padding: 2rem; border-radius: 20px; background: linear-gradient(135deg, #fff, #f5f5f5); overflow: hidden; box-shadow: 0 18px 40px rgba(15, 23, 42, 0.2); }
.blend-card::before { content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, #ff6b6b, #4f46e5); mix-blend-mode: multiply; opacity: 0.8; pointer-events: none; }
.blend-card > * { position: relative; z-index: 1; }
''',
        '''# عنوان درس

## این مبحث چیست؟

- blend mode به شما کمک می‌کند دو لایه را با هم ترکیب کنید و جلوه‌ای حرفه‌ای ایجاد کنید.
- این تکنیک برای کارت‌ها، پس‌زمینه‌ها و تصاویر کاربرد زیادی دارد.

## این مبحث در بازار کار چرا مهم است؟

- در طراحی مدرن، جلوه‌های بصری دقیق و خلاقانه اهمیت زیادی دارند.
- استفاده درست از blend mode در پروژه‌های برند و UI بسیار ارزشمند است.

## نکات مهم

- این افکت باید با هدف و خوانایی همراه باشد.
- بهتر است از ترکیب‌های ساده و کنترل‌شده استفاده کنید.

## مثال واقعی

- یک کارت تبلیغاتی با لایه‌ی رنگی روی تصویر یا پس‌زمینه.

## اشتباهات رایج

- استفاده بیش از حد از افکت‌های سنگین.
- نادیده گرفتن کنتراست و خوانایی.

## چک لیست یادگیری

- [ ] مفهوم blend mode را فهمیده‌ام.
- [ ] یک مثال ساده ساخته‌ام.
- [ ] اثر را با خوانایی هماهنگ کرده‌ام.

## تمرین‌ها

1. یک کارت با دو لایه‌ی رنگی بساز.
2. چند حالت blend را امتحان کن.
3. نتیجه را با حالت بدون افکت مقایسه کن.
'''
    ),
    (
        '67-BackdropFilter',
        'BackdropFilter',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>BackdropFilter</title>
  <link rel="stylesheet" href="BackdropFilter.css" />
</head>
<body>
  <main class="glass-shell">
    <section class="glass-card">
      <h1>Backdrop Filter</h1>
      <p>این پنل با فیلتر پس‌زمینه و شفافیت طراحی شده است.</p>
    </section>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Backdrop Filter */
:root { --panel: rgba(255, 255, 255, 0.24); }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; min-height: 100vh; background: linear-gradient(45deg, #1d4ed8, #7c3aed); color: #fff; }
.glass-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.glass-card { width: min(480px, 100%); padding: 2rem; border-radius: 20px; background: var(--panel); border: 1px solid rgba(255, 255, 255, 0.3); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 16px 42px rgba(15, 23, 42, 0.2); }
''',
        '''# عنوان درس

## این مبحث چیست؟

- backdrop filter روی محتوای پشت عنصر اثر می‌گذارد و پنل‌های شفاف و مدرن ایجاد می‌کند.
- این ویژگی برای UIهای glassmorphism بسیار محبوب است.

## این مبحث در بازار کار چرا مهم است؟

- در پروژه‌های مدرن، لایه‌بندی و شفافیت در تجربه کاربری تأثیر زیادی دارد.
- این تکنیک در بخش‌های ورود، مودال و کارت‌های اطلاعات استفاده می‌شود.

## نکات مهم

- کنتراست و خوانایی باید حفظ شود.
- در مرورگرهای قدیمی شاید نیاز به fallback داشته باشید.

## مثال واقعی

- پنل ورود با پس‌زمینه تار و متن خوانا.

## اشتباهات رایج

- شفافیت بیش از حد.
- استفاده بدون توجه به زمینه پشت پنل.

## چک لیست یادگیری

- [ ] مفهوم backdrop filter را می‌دانم.
- [ ] یک نمونه شفاف ساخته‌ام.
- [ ] خوانایی را بررسی کرده‌ام.

## تمرین‌ها

1. یک صفحه ورود با پنل شفاف بساز.
2. blur را روی چند حالت امتحان کن.
3. برای dark mode نسخه‌ای آماده کن.
'''
    ),
    (
        '68-ClipPath',
        'ClipPath',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ClipPath</title>
  <link rel="stylesheet" href="ClipPath.css" />
</head>
<body>
  <main class="clip-shell">
    <div class="clip-card">Clip Path</div>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Clip Path */
:root { --accent: #2563eb; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
.clip-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.clip-card { width: 280px; height: 180px; display: grid; place-items: center; background: var(--accent); color: #fff; font-size: 1.25rem; font-weight: 700; clip-path: polygon(0 0, 100% 0, 100% 82%, 70% 100%, 30% 100%, 0 82%); box-shadow: 0 16px 38px rgba(37, 99, 235, 0.25); }
''',
        '''# عنوان درس

## این مبحث چیست؟

- clip-path به شما کمک می‌کند شکل‌های سفارشی برای عناصر تعریف کنید.
- این تکنیک برای کارت‌ها، دکمه‌ها و بنرهای خلاقانه کاربرد دارد.

## این مبحث در بازار کار چرا مهم است؟

- در طراحی مدرن، فرم‌های غیرمعمول می‌تواند هویت بصری ایجاد کند.
- این مهارت در پروژه‌های برند و UI خلاقانه ارزش زیادی دارد.

## نکات مهم

- فرم‌های پیچیده باید کاربرپسند و خوانا باشند.
- بهتر است برای مرورگرهای قدیمی fallback در نظر بگیرید.

## مثال واقعی

- کارت محصول با فرم خاص و گوشه‌های دایره‌ای‌شکل.

## اشتباهات رایج

- استفاده بی‌رویه از اشکال پیچیده.
- فراموش کردن فضای داخلی و خوانایی.

## چک لیست یادگیری

- [ ] مفهوم clip-path را فهمیده‌ام.
- [ ] یک نمونه ساده ساخته‌ام.
- [ ] فرم را با خوانایی هماهنگ کرده‌ام.

## تمرین‌ها

1. یک دکمه با clip-path بساز.
2. یک کارت با فرم شش‌ضلعی طراحی کن.
3. روی hover تغییر فرم بده.
'''
    ),
    (
        '69-CSSMotionPath',
        'CSSMotionPath',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CSSMotionPath</title>
  <link rel="stylesheet" href="CSSMotionPath.css" />
</head>
<body>
  <main class="motion-shell">
    <div class="track">
      <div class="marker"></div>
    </div>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Motion Path */
:root { --accent: #0f766e; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
.motion-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.track { width: 320px; height: 220px; position: relative; border: 2px dashed #cbd5e1; border-radius: 20px; }
.marker { width: 48px; height: 48px; border-radius: 50%; background: var(--accent); position: absolute; inset: 0 auto auto 0; offset-path: path("M 20 20 C 80 0, 220 0, 300 120"); offset-distance: 0%; animation: move 4s ease-in-out infinite; }
@keyframes move { 0% { offset-distance: 0%; } 50% { offset-distance: 100%; } 100% { offset-distance: 0%; } }
''',
        '''# عنوان درس

## این مبحث چیست؟

- motion path به شما کمک می‌کند یک عنصر روی یک مسیر خاص حرکت کند.
- این روش برای انیمیشن‌های لوکس و تعاملی مفید است.

## این مبحث در بازار کار چرا مهم است؟

- در تجربه کاربری مدرن، حرکت هدفمند و روان اهمیت زیادی دارد.
- این تکنیک در وب‌سایت‌های تعاملی و برندینگ کاربرد دارد.

## نکات مهم

- حرکات باید طبیعی و بدون شلوغی باشند.
- بهتر است زمان و مسیر را با دقت انتخاب کنید.

## مثال واقعی

- یک دکمه یا آیکون که روی مسیر مشخص در صفحه حرکت می‌کند.

## اشتباهات رایج

- حرکت‌های خیلی سریع یا غیرطبیعی.
- استفاده بدون هدف از انیمیشن.

## چک لیست یادگیری

- [ ] مفهوم motion path را می‌دانم.
- [ ] یک مسیر ساده طراحی کرده‌ام.
- [ ] حرکت را روان و کنترل‌شده ساخته‌ام.

## تمرین‌ها

1. یک مسیر منحنی برای یک دایره بساز.
2. سرعت حرکت را تنظیم کن.
3. با hover حالت دیگری ایجاد کن.
'''
    ),
    (
        '70-CSSViewTransitions',
        'CSSViewTransitions',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CSSViewTransitions</title>
  <link rel="stylesheet" href="CSSViewTransitions.css" />
</head>
<body>
  <main class="transition-shell">
    <section class="transition-card">
      <h1>View Transition</h1>
      <p>این کارت با انتقال نرم بین حالت‌های مختلف ظاهر می‌شود.</p>
    </section>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از View Transitions */
:root { --bg: #f8fafc; --card: #ffffff; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: var(--bg); color: #0f172a; }
.transition-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.transition-card { padding: 2rem; border-radius: 18px; background: var(--card); box-shadow: 0 12px 34px rgba(15, 23, 42, 0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; }
.transition-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(15, 23, 42, 0.16); }
''',
        '''# عنوان درس

## این مبحث چیست؟

- view transition به شما کمک می‌کند تغییرات حالت در صفحه را روان‌تر و حرفه‌ای‌تر نشان دهید.
- این روش در رابط‌های تعاملی و SPAها بسیار کاربردی است.

## این مبحث در بازار کار چرا مهم است؟

- تجربه کاربری بهتر در پروژه‌های مدرن اهمیت زیادی دارد.
- انتقال روان می‌تواند حس کیفیت یک محصول را بالا ببرد.

## نکات مهم

- انتقال باید هدفمند و کم‌حجم باشد.
- از افکت‌های غیرضروری پرهیز کنید.

## مثال واقعی

- باز شدن جزئیات یک کارت با انتقال نرم.

## اشتباهات رایج

- اضافه‌کردن انتقال‌های سنگین برای همه اتفاق‌ها.
- استفاده بدون توجه به سرعت و روانی.

## چک لیست یادگیری

- [ ] مفهوم انتقال حالت را می‌دانم.
- [ ] یک نمونه ساده ساخته‌ام.
- [ ] تجربه کاربری را در نظر گرفته‌ام.

## تمرین‌ها

1. روی hover یک انتقال اضافه کن.
2. برای دکمه و کارت جداگانه تنظیم کن.
3. سرعت و نرم‌بودن را کنترل کن.
'''
    ),
    (
        '71-CascadeLayers',
        'CascadeLayers',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CascadeLayers</title>
  <link rel="stylesheet" href="CascadeLayers.css" />
</head>
<body>
  <main class="layer-shell">
    <section class="layer-card">
      <h1>Layers</h1>
      <p>این نمونه برای کنترل بهتر ترتیب استایل‌ها است.</p>
    </section>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Cascade Layers */
:root { --bg: #f8fafc; --card: #ffffff; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: var(--bg); color: #0f172a; }
.layer-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.layer-card { padding: 1.5rem; border-radius: 16px; background: var(--card); box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08); }
@layer base, component;
@layer base { .layer-card { font-size: 1rem; } }
@layer component { .layer-card { padding: 2rem; border: 1px solid #e2e8f0; } }
''',
        '''# عنوان درس

## این مبحث چیست؟

- لایه‌های cascade به شما کمک می‌کند اولویت استایل‌ها را واضح‌تر و قابل کنترل‌تر کنید.
- این روش در پروژه‌های بزرگ و تیمی خیلی کاربردی است.

## این مبحث در بازار کار چرا مهم است؟

- جلوگیری از تعارض‌های غیرمنتظره و کدهای تکراری در پروژه‌های بزرگ اهمیت زیادی دارد.
- این مهارت برای نگهداری بهتر CSS ارزشمند است.

## نکات مهم

- لایه‌ها باید منظم و با هدف تعریف شوند.
- در پروژه‌های قدیمی، ترتیب و override باید دقیق بررسی شود.

## مثال واقعی

- مدیریت base، component و utility در یک سیستم طراحی.

## اشتباهات رایج

- ساخت لایه‌های بی‌نظم.
- استفاده بدون در نظر گرفتن اولویت.

## چک لیست یادگیری

- [ ] مفهوم لایه‌ها را می‌دانم.
- [ ] یک مثال ساده ساخته‌ام.
- [ ] در پروژه‌ای واقعی از آن استفاده می‌کنم.

## تمرین‌ها

1. سه لایه برای base، component و utility بساز.
2. اولویت لایه‌ها را نمایش بده.
3. نتیجه را مستند کن.
'''
    ),
    (
        '72-CSSScope',
        'CSSScope',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CSSScope</title>
  <link rel="stylesheet" href="CSSScope.css" />
</head>
<body>
  <main class="scope-shell">
    <section class="card">
      <h2>Scoped Styles</h2>
      <p>این بخش فقط در محدوده‌ی کارت استایل می‌گیرد.</p>
    </section>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Scoped Styles */
:root { --bg: #f8fafc; --card: #ffffff; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: var(--bg); color: #0f172a; }
.scope-shell { max-width: 960px; margin: 2rem auto; padding: 1rem; }
@scope (.card) to (.content) {
  h2 { color: #2563eb; }
  p { color: #475569; }
}
.card { padding: 1.25rem; background: var(--card); border-radius: 12px; box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08); }
''',
        '''# عنوان درس

## این مبحث چیست؟

- scope در CSS به شما کمک می‌کند استایل‌ها را در محدودهای مشخص اعمال کنید.
- این روش برای کامپوننت‌های مستقل و قابل‌نگهداری مفید است.

## این مبحث در بازار کار چرا مهم است؟

- در Component-Based UI، کنترل بهتر روی استایل‌ها اهمیت زیادی دارد.
- این تکنیک باعث کاهش تداخل و افزایش وضوح کد می‌شود.

## نکات مهم

- scope در پروژه‌های مدرن به‌صورت هدفمند و محدود استفاده شود.
- این روش در کنار معماری CSS بسیار مفید است.

## مثال واقعی

- استایل‌ی که فقط برای یک کارت یا ماژول خاص اعمال می‌شود.

## اشتباهات رایج

- استفاده بی‌رویه و بدون ساختار.
- سردرگمی در محدوده و override.

## چک لیست یادگیری

- [ ] مفهوم scope را می‌دانم.
- [ ] یک مثال ساده ساخته‌ام.
- [ ] استایل‌ها را در محدوده مشخص نگه داشته‌ام.

## تمرین‌ها

1. یک کارت و متن داخل آن را scoped کن.
2. با استایل‌های بیرونی مقایسه کن.
3. نتیجه را مستند کن.
'''
    ),
    (
        '73-AnchorPositioning',
        'AnchorPositioning',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AnchorPositioning</title>
  <link rel="stylesheet" href="AnchorPositioning.css" />
</head>
<body>
  <main class="anchor-shell">
    <button class="anchor-btn">نمایش راهنما</button>
    <div class="anchor-tip">راهنمایی در کنار دکمه</div>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Anchor Positioning */
:root { --accent: #2563eb; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
.anchor-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.anchor-btn { padding: 0.8rem 1rem; border: none; border-radius: 10px; background: var(--accent); color: #fff; cursor: pointer; }
.anchor-tip { margin-top: 0.75rem; padding: 0.75rem 1rem; border-radius: 10px; background: #fff; border: 1px solid #e2e8f0; }
''',
        '''# عنوان درس

## این مبحث چیست؟

- anchor positioning به شما کمک می‌کند المان‌های وابسته را نسبت به یک anchor دقیقاً قرار دهید.
- این روش برای tooltip، popover و منوهای شناور بسیار کاربردی است.

## این مبحث در بازار کار چرا مهم است؟

- در رابط‌های حرفه‌ای، دقت در موقعیت المان‌ها اهمیت زیادی دارد.
- این مهارت در ساخت UIهای تعاملی و قابل دسترس بسیار ارزشمند است.

## نکات مهم

- موقعیت باید در همه اندازه‌های صفحه درست باشد.
- دسترسی‌پذیری و کنترل با صفحه‌کلید را فراموش نکنید.

## مثال واقعی

- راهنمای ابزار کنار دکمه یا آیکون.

## اشتباهات رایج

- قرار دادن المان بدون در نظر گرفتن viewport.
- غفلت از تجربه کاربری با صفحه‌کلید.

## چک لیست یادگیری

- [ ] مفهوم anchor positioning را می‌دانم.
- [ ] یک مثال ساده ساخته‌ام.
- [ ] دسترسی‌پذیری را بررسی کرده‌ام.

## تمرین‌ها

1. یک tooltip ساده بساز.
2. برای منوی شناور موقعیت تنظیم کن.
3. روی overflow و viewport تست انجام بده.
'''
    ),
    (
        '74-CaretAndSelection',
        'CaretAndSelection',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CaretAndSelection</title>
  <link rel="stylesheet" href="CaretAndSelection.css" />
</head>
<body>
  <main class="edit-shell">
    <label for="textInput">متن نمونه</label>
    <input id="textInput" type="text" value="این متن را انتخاب کن" />
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Caret و Selection */
:root { --accent: #7c3aed; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
.edit-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
label { display: block; margin-bottom: 0.5rem; font-weight: 700; }
input { width: min(360px, 100%); padding: 0.9rem 1rem; border: 1px solid #cbd5e1; border-radius: 10px; caret-color: var(--accent); }
input::selection { background: #ddd6fe; color: #1f2937; }
''',
        '''# عنوان درس

## این مبحث چیست؟

- caret و selection را می‌توان با CSS سفارشی کرد تا تجربه تایپ و انتخاب متن بهتر شود.
- این ویژگی برای فرم‌ها و ادیتورها اهمیت زیادی دارد.

## این مبحث در بازار کار چرا مهم است؟

- در فرم‌های حرفه‌ای، جزئیات ظاهری می‌تواند کیفیت تجربه کاربری را بالا ببرد.
- چنین جزئیاتی در محصول‌های مدرن اهمیت زیادی دارد.

## نکات مهم

- باید رنگ caret و selection با برند و کنتراست هماهنگ باشد.
- در متن‌های طولانی، خوانایی مهم‌تر از زیبایی صرف است.

## مثال واقعی

- یک فیلد ورودی با انتخاب متن و caret رنگی.

## اشتباهات رایج

- انتخاب رنگی با کنتراست ضعیف.
- نادیده گرفتن فرم‌های مختلف.

## چک لیست یادگیری

- [ ] caret-color را می‌دانم.
- [ ] selection را سفارشی کرده‌ام.
- [ ] خوانایی را بررسی کرده‌ام.

## تمرین‌ها

1. برای یک input رنگ caret تنظیم کن.
2. رنگ selection را تغییر بده.
3. حالت dark mode را امتحان کن.
'''
    ),
    (
        '75-AccentColor',
        'AccentColor',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AccentColor</title>
  <link rel="stylesheet" href="AccentColor.css" />
</head>
<body>
  <main class="accent-shell">
    <label><input type="checkbox" checked /> وضعیت فعال</label>
    <label><input type="radio" name="option" checked /> گزینه اول</label>
    <label><input type="range" /> محدوده</label>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Accent Color */
:root { --accent: #0f766e; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
.accent-shell { min-height: 100vh; display: grid; gap: 1rem; place-content: center; padding: 2rem; }
label { display: flex; align-items: center; gap: 0.6rem; }
input { accent-color: var(--accent); }
''',
        '''# عنوان درس

## این مبحث چیست؟

- accent-color به شما کمک می‌کند رنگ‌های پیش‌فرض کنترل‌های فرم را سفارشی کنید.
- این ویژگی برای checkbox، radio و range کاربرد دارد.

## این مبحث در بازار کار چرا مهم است؟

- در فرم‌های حرفه‌ای، هماهنگی رنگی در همه کنترل‌ها اهمیت دارد.
- این جزئیات در تجربه کاربری خیلی محسوس است.

## نکات مهم

- رنگ تأکیدی باید با برند یا theme هماهنگ باشد.
- در dark mode هم باید قابل خواندن باشد.

## مثال واقعی

- فرم ثبت‌نام با کنترل‌های رنگی هماهنگ.

## اشتباهات رایج

- استفاده از رنگ‌های خیلی روشن یا تیره.
- نادیده گرفتن contrast.

## چک لیست یادگیری

- [ ] مفهوم accent-color را می‌دانم.
- [ ] یک فرم ساده ساخته‌ام.
- [ ] رنگ را با theme هماهنگ کرده‌ام.

## تمرین‌ها

1. برای checkbox و radio رنگ تأکیدی تنظیم کن.
2. برای range رنگی متفاوت به کار ببر.
3. نسخه dark mode بساز.
'''
    ),
    (
        '76-Appearance',
        'Appearance',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Appearance</title>
  <link rel="stylesheet" href="Appearance.css" />
</head>
<body>
  <main class="appearance-shell">
    <button class="custom-btn">ارسال</button>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Appearance */
:root { --accent: #2563eb; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
.appearance-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.custom-btn { appearance: none; border: none; padding: 0.9rem 1.2rem; border-radius: 999px; background: var(--accent); color: #fff; cursor: pointer; box-shadow: 0 10px 24px rgba(37, 99, 235, 0.2); }
''',
        '''# عنوان درس

## این مبحث چیست؟

- appearance به شما کمک می‌کند ظاهر پیش‌فرض عناصر فرم و کنترل‌ها را حذف یا سفارشی کنید.
- این ویژگی برای طراحی دکمه‌ها و ورودی‌ها کاربرد زیادی دارد.

## این مبحث در بازار کار چرا مهم است؟

- در طراحی UI، هماهنگی کنترل‌ها با برند اهمیت زیادی دارد.
- حذف ظاهر پیش‌فرض می‌تواند طراحی را حرفه‌ای‌تر کند.

## نکات مهم

- appearance باید با استایل‌های جایگزین همراه شود.
- در مرورگرهای متفاوت ممکن است رفتار کمی فرق کند.

## مثال واقعی

- دکمه‌ی ارسال با استایل سفارشی.

## اشتباهات رایج

- حذف ظاهر بدون طراحی جایگزین.
- نادیده گرفتن دسترسی و focus state.

## چک لیست یادگیری

- [ ] مفهوم appearance را می‌دانم.
- [ ] یک دکمه سفارشی ساخته‌ام.
- [ ] حالت focus را در نظر گرفته‌ام.

## تمرین‌ها

1. appearance را روی دکمه و input امتحان کن.
2. focus و hover را اضافه کن.
3. نسخه dark mode بساز.
'''
    ),
    (
        '77-Resize',
        'Resize',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Resize</title>
  <link rel="stylesheet" href="Resize.css" />
</head>
<body>
  <main class="resize-shell">
    <textarea class="resize-box">متن نمونه را تغییر اندازه بده.</textarea>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Resize */
:root { --border: #cbd5e1; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
.resize-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.resize-box { width: min(420px, 100%); min-height: 140px; padding: 1rem; border: 1px solid var(--border); border-radius: 12px; resize: both; overflow: auto; }
''',
        '''# عنوان درس

## این مبحث چیست؟

- resize به کاربر اجازه می‌دهد اندازه‌ی یک عنصر قابل‌تغییر را تغییر دهد.
- این ویژگی بیشتر برای textarea و عناصر قابل‌ویرایش کاربرد دارد.

## این مبحث در بازار کار چرا مهم است؟

- در فرم‌های پیچیده و ادیتورها، کنترل اندازه باعث بهبود تجربه کاربری می‌شود.
- این قابلیت در ابزارهای داخلی و صفحه‌های ویرایش متن مفید است.

## نکات مهم

- resize باید با محدودیت‌های منطقی همراه شود.
- بهتر است overflow مناسب در نظر گرفته شود.

## مثال واقعی

- یک textarea با امکان تغییر سایز در پنل ویرایش.

## اشتباهات رایج

- اجازه دادن به تغییر اندازه بدون محدودیت.
- فراموش کردن overflow و محدودیت ارتفاع.

## چک لیست یادگیری

- [ ] مفهوم resize را می‌دانم.
- [ ] یک مثال عملی ساخته‌ام.
- [ ] محدودیت‌های اندازه را در نظر گرفته‌ام.

## تمرین‌ها

1. برای textarea resize فعال کن.
2. حداقل و حداکثر اندازه را تنظیم کن.
3. با overflow بازی کن.
'''
    ),
    (
        '78-PointerEvents',
        'PointerEvents',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>PointerEvents</title>
  <link rel="stylesheet" href="PointerEvents.css" />
</head>
<body>
  <main class="pointer-shell">
    <div class="overlay"></div>
    <button class="action-btn">کلیک کن</button>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Pointer Events */
:root { --accent: #1d4ed8; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
.pointer-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; position: relative; }
.overlay { position: absolute; inset: 0; background: rgba(15, 23, 42, 0.12); pointer-events: none; }
.action-btn { padding: 0.85rem 1.15rem; border: none; border-radius: 999px; background: var(--accent); color: #fff; cursor: pointer; }
''',
        '''# عنوان درس

## این مبحث چیست؟

- pointer-events تعیین می‌کند یک المان آیا رویدادهای اشاره را دریافت می‌کند یا خیر.
- این ویژگی برای لایه‌های پوششی و تعامل‌های کنترل‌شده مفید است.

## این مبحث در بازار کار چرا مهم است؟

- در موقعیت‌های خاص، باید از تعامل با بخش‌های پوششی جلوگیری کرد.
- این تکنیک برای UI‌های پیچیده و overlayها کاربردی است.

## نکات مهم

- pointer-events باید با هدف و تجربه کاربری هماهنگ شود.
- در overlayها، مقدار none یا auto را با دقت انتخاب کنید.

## مثال واقعی

- یک لایه‌ی پوششی که مانع کلیک روی پس‌زمینه می‌شود.

## اشتباهات رایج

- غیرفعال‌سازی غیرضروری رویدادها.
- نادیده گرفتن دسترسی و تعامل.

## چک لیست یادگیری

- [ ] مفهوم pointer-events را می‌دانم.
- [ ] یک نمونه ساده ساخته‌ام.
- [ ] رفتار رویدادها را کنترل کرده‌ام.

## تمرین‌ها

1. یک لایه پوششی با none بساز.
2. روی button و overlay آزمایش کن.
3. رفتار را با hover مقایسه کن.
'''
    ),
    (
        '79-UserSelect',
        'UserSelect',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>UserSelect</title>
  <link rel="stylesheet" href="UserSelect.css" />
</head>
<body>
  <main class="select-shell">
    <button class="select-btn">این دکمه را انتخاب نکن</button>
    <p class="select-text">این متن قابل انتخاب است.</p>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از User Select */
:root { --accent: #0f766e; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
.select-shell { min-height: 100vh; display: grid; gap: 1rem; place-content: center; padding: 2rem; }
.select-btn { padding: 0.8rem 1rem; border: none; border-radius: 999px; background: var(--accent); color: #fff; cursor: pointer; user-select: none; }
.select-text { user-select: text; }
''',
        '''# عنوان درس

## این مبحث چیست؟

- user-select تعیین می‌کند آیا کاربر بتواند متن را انتخاب کند یا نه.
- این ویژگی برای دکمه‌ها، آیکون‌ها و کنترل‌های تعاملی مفید است.

## این مبحث در بازار کار چرا مهم است؟

- در رابط‌های تعاملی، جلوگیری از انتخاب ناخواسته متن می‌تواند تجربه را بهتر کند.
- این جزئیات در ابزارهای داخلی و اپلیکیشن‌ها مهم است.

## نکات مهم

- باید بین جلوگیری از انتخاب و دسترسی کاربر تعادل برقرار شود.
- برای متن‌های واقعی، انتخاب باید حفظ شود.

## مثال واقعی

- دکمه‌ی آیکون‌دار با متن غیرقابل انتخاب.

## اشتباهات رایج

- غیرفعال‌سازی انتخاب برای همه متن‌ها بدون دلیل.
- ایجاد مشکل در کپی و انتخاب مفید.

## چک لیست یادگیری

- [ ] مفهوم user-select را می‌دانم.
- [ ] یک مثال ساده ساخته‌ام.
- [ ] رفتار متن و دکمه را تنظیم کرده‌ام.

## تمرین‌ها

1. روی دکمه user-select را none کن.
2. روی پاراگراف text را فعال کن.
3. نتیجه را در مرورگر بررسی کن.
'''
    ),
    (
        '80-TouchAction',
        'TouchAction',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>TouchAction</title>
  <link rel="stylesheet" href="TouchAction.css" />
</head>
<body>
  <main class="touch-shell">
    <div class="touch-card">این بخش برای تست لمس و کشیدن طراحی شده است.</div>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Touch Action */
:root { --accent: #3b82f6; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
.touch-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.touch-card { width: min(360px, 100%); padding: 1.25rem; border-radius: 14px; background: #fff; box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08); touch-action: manipulation; }
''',
        '''# عنوان درس

## این مبحث چیست؟

- touch-action کنترل می‌کند که آیا عنصر روی دستگاه‌های لمسی باید واکنش به gesture‌ها داشته باشد یا نه.
- این ویژگی در اپ‌های موبایل و صفحه‌های تعاملی مهم است.

## این مبحث در بازار کار چرا مهم است؟

- تجربه کاربری روی موبایل با کنترل درست gestureها بهتر می‌شود.
- این قابلیت در کامپوننت‌های تعاملی کاربرد زیادی دارد.

## نکات مهم

- برای دکمه‌ها، manipulation مناسب است.
- برای اسکرول، تنظیمات دقیق‌تر لازم است.

## مثال واقعی

- کارت قابل لمس با رفتار مناسب روی موبایل.

## اشتباهات رایج

- غیرفعال‌سازی gestureها بدون هدف.
- ایجاد مشکل در اسکرول طبیعی.

## چک لیست یادگیری

- [ ] مفهوم touch-action را می‌دانم.
- [ ] یک نمونه موبایل‌محور ساخته‌ام.
- [ ] رفتار لمس را کنترل کرده‌ام.

## تمرین‌ها

1. روی یک کارت touch-action را تنظیم کن.
2. برای دکمه و اسکرول مقایسه کن.
3. روی موبایل تست کن.
'''
    ),
    (
        '81-WillChange',
        'WillChange',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>WillChange</title>
  <link rel="stylesheet" href="WillChange.css" />
</head>
<body>
  <main class="will-shell">
    <div class="will-card">Will Change</div>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Will Change */
:root { --accent: #f59e0b; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
.will-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.will-card { padding: 1.25rem 1.5rem; border-radius: 16px; background: var(--accent); color: #fff; box-shadow: 0 12px 30px rgba(245, 158, 11, 0.25); will-change: transform; transition: transform 0.25s ease; }
.will-card:hover { transform: translateY(-4px); }
''',
        '''# عنوان درس

## این مبحث چیست؟

- will-change به مرورگر کمک می‌کند به‌خوبی یک ویژگی را برای انیمیشن یا تغییرات آینده آماده کند.
- این ویژگی برای بهبود عملکرد در انیمیشن‌های سبک مفید است.

## این مبحث در بازار کار چرا مهم است؟

- در پروژه‌های حرفه‌ای، بهینه‌سازی عملکرد اهمیت زیادی دارد.
- استفاده درست از will-change می‌تواند تجربه روان‌تر ایجاد کند.

## نکات مهم

- فقط برای ویژگی‌های واقعی و به‌موقع استفاده شود.
- استفاده بیش از حد می‌تواند عملکرد را بدتر کند.

## مثال واقعی

- کارت‌ای که روی hover تغییر موقعیت می‌دهد.

## اشتباهات رایج

- استفاده برای همه چیزها.
- فراموش کردن cleanup و حذف بعد از نیاز.

## چک لیست یادگیری

- [ ] مفهوم will-change را می‌دانم.
- [ ] یک مثال ساده ساخته‌ام.
- [ ] استفاده‌ی منطقی انجام داده‌ام.

## تمرین‌ها

1. برای hover یک will-change اضافه کن.
2. روی transform و opacity آزمایش کن.
3. نتیجه را با عملکرد مقایسه کن.
'''
    ),
    (
        '82-ContentVisibility',
        'ContentVisibility',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ContentVisibility</title>
  <link rel="stylesheet" href="ContentVisibility.css" />
</head>
<body>
  <main class="visibility-shell">
    <section class="panel">بخش محتوا با visibility بهینه</section>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Content Visibility */
:root { --bg: #f8fafc; --card: #ffffff; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: var(--bg); color: #0f172a; }
.visibility-shell { max-width: 960px; margin: 2rem auto; padding: 1rem; }
.panel { padding: 1.25rem; border-radius: 12px; background: var(--card); box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08); content-visibility: auto; }
''',
        '''# عنوان درس

## این مبحث چیست؟

- content-visibility به مرورگر کمک می‌کند بخش‌های غیرقابل‌نمایش را با هزینه کمتر مدیریت کند.
- این ویژگی برای بهبود عملکرد در صفحات طولانی بسیار ارزشمند است.

## این مبحث در بازار کار چرا مهم است؟

- در صفحات بزرگ و با محتوا زیاد، بهینه‌سازی عملکرد اهمیت زیادی دارد.
- این مهارت در پروژه‌های خبری، داشبورد و پلتفرم‌های محتوا کاربردی است.

## نکات مهم

- باید برای بخش‌هایی استفاده شود که در ابتدا قابل مشاهده نیستند.
- استفاده بی‌رویه ممکن است مزیت‌های عملکردی را کم کند.

## مثال واقعی

- بخش‌های پایین صفحه‌ی وبلاگ یا داشبورد که در ابتدا پنهان هستند.

## اشتباهات رایج

- استفاده برای همه بخش‌ها.
- غافل شدن از تجربه کاربری و زمان بارگذاری.

## چک لیست یادگیری

- [ ] مفهوم content-visibility را می‌دانم.
- [ ] یک مثال ساده ساخته‌ام.
- [ ] کاربرد آن را در پروژه‌ای واقعی درک کرده‌ام.

## تمرین‌ها

1. یک بخش طولانی را با content-visibility تنظیم کن.
2. برای صفحه وبلاگ امتحان کن.
3. نتیجه را بررسی کن.
'''
    ),
    (
        '83-Contain',
        'Contain',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Contain</title>
  <link rel="stylesheet" href="Contain.css" />
</head>
<body>
  <main class="contain-shell">
    <section class="contain-card">Contain</section>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Contain */
:root { --bg: #f8fafc; --card: #ffffff; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: var(--bg); color: #0f172a; }
.contain-shell { max-width: 960px; margin: 2rem auto; padding: 1rem; }
.contain-card { padding: 1.25rem; border-radius: 12px; background: var(--card); box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08); contain: layout paint; }
''',
        '''# عنوان درس

## این مبحث چیست؟

- contain به شما کمک می‌کند تاثیرات layout و paint را در یک بخش محدود کنید.
- این ویژگی برای ساخت کامپوننت‌های مستقل و قابل پیش‌بینی مفید است.

## این مبحث در بازار کار چرا مهم است؟

- در طراحی کامپوننتی، کنترل بهتر روی محتوای داخلی اهمیت زیادی دارد.
- این روش می‌تواند به بهبود عملکرد کمک کند.

## نکات مهم

- contain را به‌صورت هدفمند و متناسب با کامپوننت استفاده کنید.
- استفاده بیش از حد ممکن کار را پیچیده کند.

## مثال واقعی

- یک کارت اطلاعاتی که فقط در داخل خود رفتار می‌کند.

## اشتباهات رایج

- استفاده بی‌دلیل برای همه المان‌ها.
- نادیده گرفتن اثر روی layout‌های بزرگ‌تر.

## چک لیست یادگیری

- [ ] مفهوم contain را می‌دانم.
- [ ] یک مثال ساده ساخته‌ام.
- [ ] کاربرد آن را در یک کامپوننت درک کرده‌ام.

## تمرین‌ها

1. یک کامپوننت با contain بساز.
2. روی layout و paint تست کن.
3. نتیجه را مستند کن.
'''
    ),
    (
        '84-Isolation',
        'Isolation',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Isolation</title>
  <link rel="stylesheet" href="Isolation.css" />
</head>
<body>
  <main class="isolation-shell">
    <div class="stacked-card">Isolation</div>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Isolation */
:root { --bg: #f8fafc; --card: #ffffff; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: var(--bg); color: #0f172a; }
.isolation-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.stacked-card { padding: 1.25rem 1.5rem; border-radius: 14px; background: var(--card); box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08); isolation: isolate; }
''',
        '''# عنوان درس

## این مبحث چیست؟

- isolation به شما کمک می‌کند یک stacking context مستقل ایجاد کنید.
- این ویژگی برای مدیریت لایه‌ها و blend شدن‌ها مفید است.

## این مبحث در بازار کار چرا مهم است؟

- در طراحی‌های پیچیده، کنترل لایه‌ها یکی از مهم‌ترین بخش‌هاست.
- این مهارت برای جلوگیری از تداخل‌های بصری ارزشمند است.

## نکات مهم

- isolation زمانی مفید است که چند لایه با هم تداخل می‌کنند.
- بهتر است برای بخش‌های خاص استفاده شود.

## مثال واقعی

- یک کارت با پس‌زمینه‌های ترکیبی در لایه‌های مختلف.

## اشتباهات رایج

- استفاده بی‌دلیل برای همه المان‌ها.
- نادیده گرفتن اثر روی layered layouts.

## چک لیست یادگیری

- [ ] مفهوم isolation را می‌دانم.
- [ ] یک مثال ساده ساخته‌ام.
- [ ] کاربرد آن را در لایه‌بندی درک کرده‌ام.

## تمرین‌ها

1. یک کارتی با لایه‌های متمایز بساز.
2. isolation را روی آن اعمال کن.
3. نتیجه را با حالت بدون آن مقایسه کن.
'''
    ),
    (
        '85-MixBlendModeAdvanced',
        'MixBlendModeAdvanced',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>MixBlendModeAdvanced</title>
  <link rel="stylesheet" href="MixBlendModeAdvanced.css" />
</head>
<body>
  <main class="blend-advanced-shell">
    <div class="blend-card">
      <h1>Advanced Blend</h1>
      <p>این بخش با ترکیب لایه‌های رنگی و تصویر طراحی شده است.</p>
    </div>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Mix Blend Mode پیشرفته */
:root { --bg: #f8fafc; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: linear-gradient(135deg, #0f172a, #1d4ed8); color: #fff; }
.blend-advanced-shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.blend-card { position: relative; width: min(480px, 100%); padding: 2rem; border-radius: 18px; background: linear-gradient(135deg, #fff, #fef3c7); overflow: hidden; color: #0f172a; }
.blend-card::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle, #f43f5e, #6366f1); mix-blend-mode: screen; opacity: 0.9; }
.blend-card > * { position: relative; z-index: 1; }
''',
        '''# عنوان درس

## این مبحث چیست؟

- mix-blend-mode پیشرفته به شما کمک می‌کند لایه‌ها را با حالت‌های پیچیده‌تر ترکیب کنید.
- این روش برای طراحی‌های خلاقانه و هیجان‌انگیز بسیار مفید است.

## این مبحث در بازار کار چرا مهم است؟

- در پروژه‌های برند و UI خلاقانه، جزئیات بصری مهم است.
- این مهارت در طراحی‌های تعاملی و پوسترها ارزش زیادی دارد.

## نکات مهم

- از حالت‌های ترکیب برای تقویت معنا و خوانایی استفاده کنید.
- استفاده زیاد از این افکت‌ها می‌تواند شلوغ شود.

## مثال واقعی

- کارت با لایه‌ی رنگی روی تصویر یا پس‌زمینه‌های مدرن.

## اشتباهات رایج

- ترکیب‌های غیرمنطقی و شلوغ.
- فراموش کردن کنتراست.

## چک لیست یادگیری

- [ ] مفهوم mix-blend-mode را می‌دانم.
- [ ] یک نمونه پیشرفته ساخته‌ام.
- [ ] نتیجه را با خوانایی هماهنگ کرده‌ام.

## تمرین‌ها

1. چند حالت blend را امتحان کن.
2. یک کارت با حالت screen و multiply بساز.
3. نسخه‌ی ساده و پیچیده را مقایسه کن.
'''
    ),
    (
        '86-ResponsivePatterns',
        'ResponsivePatterns',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ResponsivePatterns</title>
  <link rel="stylesheet" href="ResponsivePatterns.css" />
</head>
<body>
  <main class="pattern-shell">
    <section class="panel">
      <article>کارت اول</article>
      <article>کارت دوم</article>
      <article>کارت سوم</article>
    </section>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از Responsive Patterns */
:root { --bg: #f8fafc; --card: #ffffff; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: var(--bg); color: #0f172a; }
.pattern-shell { max-width: 1100px; margin: 2rem auto; padding: 1rem; }
.panel { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.panel article { padding: 1rem; border-radius: 12px; background: var(--card); box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08); }
''',
        '''# عنوان درس

## این مبحث چیست؟

- الگوهای پاسخگو برای نمایش مناسب محتوا در اندازه‌های مختلف صفحه طراحی می‌شوند.
- این روش‌ها در طراحی UI و وب‌سایت‌های مدرن بسیار مهم هستند.

## این مبحث در بازار کار چرا مهم است؟

- کاربران در دستگاه‌های مختلف از سایت شما استفاده می‌کنند و تجربه باید همواره خوب باشد.
- این مهارت برای ساخت پروژه‌های حرفه‌ای ضروری است.

## نکات مهم

- الگو باید بر اساس محتوا و هدف صفحه انتخاب شود.
- از breakpointهای زیاد و بی‌دلیل خودداری کنید.

## مثال واقعی

- صفحه‌ای با کارت‌های اطلاعاتی که در موبایل و دسکتاپ متفاوت چینش می‌شوند.

## اشتباهات رایج

- وابسته کردن layout به breakpointهای زیاد.
- نادیده گرفتن محتوا در طراحی.

## چک لیست یادگیری

- [ ] الگوی پاسخگو را می‌دانم.
- [ ] یک نمونه ساخته‌ام.
- [ ] در چند اندازه صفحه تست کرده‌ام.

## تمرین‌ها

1. یک صفحه با کارت‌ها و sidebar بساز.
2. layout را با grid پاسخگو طراحی کن.
3. روی breakpointهای مختلف تست کن.
'''
    ),
    (
        '87-CSSArchitectureAdvanced',
        'CSSArchitectureAdvanced',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CSSArchitectureAdvanced</title>
  <link rel="stylesheet" href="CSSArchitectureAdvanced.css" />
</head>
<body>
  <main class="arch-shell">
    <section class="card card--primary">
      <h1>Architecture</h1>
      <p>استفاده از لایه‌بندی و متغیرها در یک ساختار منظم.</p>
    </section>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از معماری CSS پیشرفته */
:root { --color-bg: #f8fafc; --color-card: #ffffff; --color-primary: #2563eb; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: var(--color-bg); color: #0f172a; }
.arch-shell { max-width: 960px; margin: 2rem auto; padding: 1rem; }
.card { padding: 1.25rem; border-radius: 12px; background: var(--color-card); box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08); }
.card--primary { border: 1px solid var(--color-primary); }
''',
        '''# عنوان درس

## این مبحث چیست؟

- معماری CSS پیشرفته به شما کمک می‌کند کد را در پروژه‌های بزرگ منظم‌تر نگه دارید.
- این روش روی خوانایی، نگهداری و همکاری تیمی تأثیر زیادی دارد.

## این مبحث در بازار کار چرا مهم است؟

- در تیم‌های حرفه‌ای، ساختار کد و naming استاندارد اهمیت زیادی دارد.
- این مهارت برای رشد به‌عنوان توسعه‌دهنده‌ی فرانت‌اند ضروری است.

## نکات مهم

- از متغیرها و لایه‌بندی برای کاهش تکرار استفاده کنید.
- naming باید روشن و منظم باشد.

## مثال واقعی

- سیستم طراحی با کارت‌ها، دکمه‌ها و utilityها.

## اشتباهات رایج

- جمع‌آوری همه استایل‌ها در یک فایل بزرگ.
- استفاده از نام‌های مبهم و تکراری.

## چک لیست یادگیری

- [ ] معماری CSS را می‌دانم.
- [ ] یک ساختار ساده طراحی کرده‌ام.
- [ ] خوانایی و نگهداری را در نظر گرفته‌ام.

## تمرین‌ها

1. یک ساختار file-based برای پروژه طراحی کن.
2. متغیرهای مشترک را جدا کن.
3. یک guideline ساده برای تیم بنویس.
'''
    ),
    (
        '88-RealWorldComponents',
        'RealWorldComponents',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>RealWorldComponents</title>
  <link rel="stylesheet" href="RealWorldComponents.css" />
</head>
<body>
  <main class="components-shell">
    <section class="card">
      <h2>دکمه و کارت</h2>
      <button class="btn">مشاهده</button>
    </section>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از کامپوننت‌های دنیای واقعی */
:root { --accent: #2563eb; --card: #ffffff; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
.components-shell { max-width: 960px; margin: 2rem auto; padding: 1rem; }
.card { padding: 1.25rem; border-radius: 14px; background: var(--card); box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08); }
.btn { margin-top: 0.75rem; padding: 0.75rem 1rem; border: none; border-radius: 999px; background: var(--accent); color: #fff; cursor: pointer; }
''',
        '''# عنوان درس

## این مبحث چیست؟

- در دنیای واقعی، بیشتر پروژه‌ها از کامپوننت‌های تکرارشونده تشکیل شده‌اند.
- این درس روی ساختار و استایل کامپوننت‌های کاربردی تمرکز دارد.

## این مبحث در بازار کار چرا مهم است؟

- توسعه‌دهنده‌های حرفه‌ای باید بتوانند دکمه‌ها، کارت‌ها و هدرها را به‌صورت قابل‌استفاده طراحی کنند.
- این مهارت در پروژه‌های محصول و UI library نقش مهمی دارد.

## نکات مهم

- کامپوننت‌ها باید قابل استفاده، تمیز و قابل‌تکثیر باشند.
- حالت‌های hover، focus و disabled را در نظر بگیرید.

## مثال واقعی

- دکمه، کارت، badge و فرم در یک صفحه‌ی نمونه.

## اشتباهات رایج

- طراحی کامپوننت‌های وابسته به صفحه.
- فراموش کردن حالت‌های تعاملی.

## چک لیست یادگیری

- [ ] یک کامپوننت ساده ساخته‌ام.
- [ ] حالت‌های تعاملی را اضافه کرده‌ام.
- [ ] ساختار آن را قابل‌استفاده کرده‌ام.

## تمرین‌ها

1. یک دکمه و کارت بساز.
2. حالت hover و focus اضافه کن.
3. یک badge و alert هم طراحی کن.
'''
    ),
    (
        '89-FinalProject',
        'FinalProject',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>FinalProject</title>
  <link rel="stylesheet" href="FinalProject.css" />
</head>
<body>
  <main class="project-shell">
    <header class="hero">
      <nav class="nav">
        <span>Memorize</span>
        <a href="#">شروع</a>
      </nav>
      <div class="hero-content">
        <h1>پروژه‌ی نهایی CSS</h1>
        <p>یک صفحه‌ی حرفه‌ای با هدر، hero، کارت‌ها و دکمه اقدام.</p>
        <button class="btn">شروع یادگیری</button>
      </div>
    </header>
    <section class="cards">
      <article class="card">کارت اول</article>
      <article class="card">کارت دوم</article>
      <article class="card">کارت سوم</article>
    </section>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از پروژه‌ی نهایی */
:root { --bg: #f8fafc; --card: #ffffff; --accent: #2563eb; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: var(--bg); color: #0f172a; }
.project-shell { max-width: 1200px; margin: 2rem auto; padding: 1rem; }
.hero { padding: 2rem; border-radius: 24px; background: linear-gradient(135deg, #111827, #2563eb); color: #fff; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
.hero-content { max-width: 620px; }
.btn { margin-top: 0.75rem; padding: 0.9rem 1.2rem; border: none; border-radius: 999px; background: #fff; color: var(--accent); cursor: pointer; }
.cards { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); margin-top: 1.5rem; }
.card { padding: 1rem; border-radius: 14px; background: var(--card); box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08); }
''',
        '''# عنوان درس

## این مبحث چیست؟

- این درس یک پروژه‌ی کاربردی و کامل برای جمع‌بندی مهارت‌های CSS است.
- در این پروژه، عناصر مختلف از پایه تا پیشرفته در کنار هم استفاده می‌شوند.

## این مبحث در بازار کار چرا مهم است؟

- در کار واقعی، باید بتوانید چند مفهوم CSS را در یک صفحه‌ی کامل به‌صورت منسجم استفاده کنید.
- این مهارت برای ساخت نمونه‌کار و پورتفولیو بسیار ارزشمند است.

## نکات مهم

- ابتدا ساختار صفحه را مشخص کنید.
- سپس layout، نوع‌بندی، spacing و رنگ را مدیریت کنید.

## مثال واقعی

- یک صفحه‌ی معرفی محصول یا پورتفولیو با hero، کارت و دکمه.

## اشتباهات رایج

- شروع بدون برنامه.
- شلوغی بیش از حد و نبود hierarchy.

## چک لیست یادگیری

- [ ] یک پروژه‌ی کامل ساخته‌ام.
- [ ] responsive را رعایت کرده‌ام.
- [ ] کدها را منظم‌تر کرده‌ام.

## تمرین‌ها

1. صفحه‌ی خود را با بخش‌های بیشتر تکمیل کن.
2. چند کامپوننت اضافه کن.
3. نسخه‌ی موبایل را بررسی کن.
'''
    ),
    (
        '90-CSSCheatSheet',
        'CSSCheatSheet',
        '''<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CSSCheatSheet</title>
  <link rel="stylesheet" href="CSSCheatSheet.css" />
</head>
<body>
  <main class="sheet-shell">
    <h1>چیت‌شیت CSS</h1>
    <section class="card">
      <h2>Layout</h2>
      <p>flexbox، grid، position و media queries</p>
    </section>
    <section class="card">
      <h2>Visual</h2>
      <p>gradient، shadow، filter و clip-path</p>
    </section>
    <section class="card">
      <h2>Advanced</h2>
      <p>var، @layer، scope و contain</p>
    </section>
  </main>
</body>
</html>
''',
        '''/* نمونه عملی از CSS Cheat Sheet */
:root { --bg: #f8fafc; --card: #ffffff; --accent: #2563eb; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: var(--bg); color: #0f172a; }
.sheet-shell { max-width: 1000px; margin: 2rem auto; padding: 1rem; }
.card { padding: 1rem 1.25rem; margin-bottom: 1rem; border-radius: 12px; background: var(--card); box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08); }
.sheet-shell h1 { color: var(--accent); }
''',
        '''# عنوان درس

## این مبحث چیست؟

- این درس یک چیت‌شیت کاربردی و خلاصه‌ی مهم‌ترین مفاهیم CSS است.
- هدف آن کمک به مرور سریع و یادآوری اصول کلیدی است.

## این مبحث در بازار کار چرا مهم است؟

- در کار روزمره، مرور سریع مفاهیم کمک می‌کند سرعت و دقت بالاتر برود.
- این چیت‌شیت برای تمرین، مصاحبه و مرور سریع بسیار مفید است.

## نکات مهم

- چیت‌شیت باید مختصر، کاربردی و مرتب باشد.
- بهتر است موضوع‌ها بر اساس دسته‌بندی‌های مهم ارائه شوند.

## مثال واقعی

- یک صفحه‌ی مرجع با بخش‌های layout، visual و advanced.

## اشتباهات رایج

- نوشتن چیت‌شیت خیلی شلوغ و طولانی.
- نادیده گرفتن دسته‌بندی و خوانایی.

## چک لیست یادگیری

- [ ] مفهوم چیت‌شیت CSS را می‌دانم.
- [ ] یک نسخه‌ی ساده ساخته‌ام.
- [ ] آن را برای مرور سریع استفاده می‌کنم.

## تمرین‌ها

1. یک چیت‌شیت کامل برای CSS بنویس.
2. بخش‌های اصلی را دسته‌بندی کن.
3. آن را در پروژه‌ی خود نگه دار.
'''
    )
]

created = []
for folder_name, base_name, html_content, css_content, md_content in lessons:
    folder = root / folder_name
    folder.mkdir(exist_ok=True)
    for filename, content in [
        (f'{base_name}.html', html_content),
        (f'{base_name}.css', css_content),
        (f'{base_name}.md', md_content),
    ]:
        path = folder / filename
        if not path.exists():
            path.write_text(content, encoding='utf-8')
            created.append(str(path))

root_files = {
    'CSS-Roadmap.md': '''# نقشه راه دوره CSS

## هدف

- آموزش مفاهیم پایه تا پیشرفته CSS.
- ساختن مهارت برای پروژه‌های واقعی و حرفه‌ای.

## مسیر پیشنهادی

1. مفاهیم پایه و انتخابگرها.
2. layout و responsive design.
3. جلوه‌های مدرن و بهینه‌سازی.
4. معماری و پروژه‌های کاربردی.
''',
    'CSSCheatSheet.md': '''# چیت‌شیت CSS

## Layout

- flexbox برای چیدمان‌های ساده.
- grid برای چیدمان‌های پیچیده.
- position برای کنترل لایه‌ها.

## Visual

- gradient، shadow و filter.
- clip-path و backdrop-filter.

## Advanced

- var، @layer و scope.
- contain، isolation و content-visibility.
''',
}
for filename, content in root_files.items():
    path = root / filename
    if not path.exists():
        path.write_text(content, encoding='utf-8')
        created.append(str(path))

print('Created files:')
for p in created:
    print(p)
