# معرفی Vite

## What is Vite?

- Vite یک ابزار توسعه‌ی Front-End مدرن است.
- برای اجرای سریع پروژه‌ها و ارائه‌ی تجربه‌ی توسعه‌ی روان طراحی شده است.
- نام آن از واژه‌ی French به معنی «سریع» گرفته شده است.
- Vite معمولاً با پروژه‌های JavaScript، React، Vue و TypeScript استفاده می‌شود.

## Why do developers use it?

- شروع سریع‌تر توسعه
- بارگذاری سریع‌تر در حالت dev
- Hot Module Replacement (HMR) سریع
- سادگی در تنظیمات اولیه
- عملکرد بهتر نسبت به ابزارهای قدیمی‌تر

## Advantages over Create React App

- زمان شروع سریع‌تر
- HMR بسیار سریع‌تر
- پیکربندی ساده‌تر
- عملکرد بهتر در توسعه
- وابستگی کمتر به boilerplate سنگین

## Advantages over Webpack

- تنظیمات کمتر و خواناتر
- سرور توسعه‌ی سریع‌تر
- بهینه‌سازی برای module federation و ESM
- تجربه‌ی توسعه‌ی روان‌تر
- نسبت به Webpack در پروژه‌های مدرن معمولاً ساده‌تر است

## When should Vite be used?

- وقتی پروژه‌ی Front-End مدرن می‌سازید
- وقتی به سرعت توسعه و تجربه‌ی بهتر نیاز دارید
- برای React، Vue، Svelte، Vanilla JS و TypeScript
- برای پروژه‌های SPA و بعضی پروژه‌های SSR با تنظیمات مناسب

# نصب

## npm

```bash
npm create vite@latest
npm install
```

## yarn

```bash
yarn create vite
# یا
npm create vite@latest

yarn
```

## pnpm

```bash
pnpm create vite
pnpm install
```

## نکات نصب

- برای پروژه جدید، معمولاً از `npm create vite@latest` استفاده می‌شود.
- اگر از بسته‌ی مدیر دیگری استفاده می‌کنید، نسخه‌ی مربوطه را جایگزین کنید.
- در پروژه‌های واقعی، بهتر است ابزارها و نسخه‌ها در CI و محیط توسعه یکسان بمانند.

# ساخت پروژه

## Vanilla JavaScript

```bash
npm create vite@latest my-app -- --template vanilla
cd my-app
npm install
npm run dev
```

## React

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

## TypeScript

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

## Vue

```bash
npm create vite@latest my-app -- --template vue
cd my-app
npm install
npm run dev
```

## نمونه‌های دیگر

- `react-swc`
- `vue-ts`
- `preact`
- `svelte`
- `lit`

# ساختار پروژه

## package.json

- شامل اسکریپت‌های مهم پروژه است.
- dependencyها و devDependencyها در این فایل قرار دارند.
- مهم‌ترین اسکریپت‌ها معمولاً این‌ها هستند:
  - `dev`
  - `build`
  - `preview`

## vite.config.js

- فایل پیکربندی اصلی Vite است.
- برای تنظیمات سرور، alias، plugins و build استفاده می‌شود.
- اگر پروژه در JavaScript باشد، این فایل با `.js` ساخته می‌شود.

## vite.config.ts

- نسخه‌ی TypeScript پیکربندی Vite است.
- در پروژه‌های TS، این فایل معمولاً ترجیح‌پذیرتر است.
- بهتر است برای TypeScript-heavy پروژه‌ها از این نسخه استفاده شود.

## public

- فایل‌های استاتیک بدون پردازش قرار می‌گیرند.
- معمولاً برای تصاویر، favicon و فایل‌های عمومی استفاده می‌شود.
- این folder به صورت مستقیم در خروجی build کپی می‌شود.

## src

- منبع اصلی کد پروژه است.
- فایل‌های JSX، TSX، CSS، assets و componentها معمولاً در این بخش قرار می‌گیرند.
- در پروژه‌های React، `main.jsx` یا `main.tsx` در این مسیر است.

## assets

- برای فایل‌های تصویری، فونت، svg و سایر منابع ثابت استفاده می‌شود.
- این مسیر در پروژه‌های واقعی برای مدیریت بهتر منابع کمک‌کننده است.

## index.html

- نقطه‌ی ورودی اصلی پروژه است.
- در Vite، این فایل نقش root HTML را دارد.
- برای mount کردن app در `#root` یا یک container مشابه استفاده می‌شود.

# دستورات مهم

## npm run dev

- سرور توسعه‌ی Vite را اجرا می‌کند.
- تغییرات در زمان واقعی در مرورگر اعمال می‌شوند.
- URL معمولاً روی `localhost:5173` است.

## npm run build

- نسخه‌ی production پروژه را می‌سازد.
- خروجی نهایی در folder مشخصی قرار می‌گیرد.
- برای استقرار و publish استفاده می‌شود.

## npm run preview

- خروجی build را به صورت local preview اجرا می‌کند.
- برای بررسی نهایی قبل از deployment مناسب است.

## npm install

- dependencyها را نصب می‌کند.
- `package-lock.json` یا lockfile مناسب ایجاد می‌شود.

## npm update

- نسخه‌های packageها را به روز می‌کند.
- بهتر است با دقت انجام شود تا تغییرات ناخواسته ایجاد نشود.

## دستورات عمومی دیگر

```bash
npm run dev -- --host
npm run build
npm run preview
npx vite --host
```

# Alias

## Alias چیست؟

- Alias مسیرهای کوتاه و خوانا برای importها است.
- معمولاً برای جلوگیری از `../../`های طولانی استفاده می‌شود.

## مثال

```js
import Button from '@/components/Button'
```

## تنظیم در vite.config.ts

```ts
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## مزایا

- خوانایی بهتر
- کاهش خطاهای مسیر
- نگهداشت بهتر پروژه

## نکات

- برای TypeScript، معمولاً `tsconfig.json` را هم به‌روز کنید.
- اگر از alias استفاده می‌کنید، `baseUrl` و `paths` در tsconfig را تنظیم کنید.

# Environment Variables

## .env

- متغیرهای عمومی پروژه را نگه می‌دارد.
- این فایل در build و runtime در دسترس است.
- برای مقادیر عمومی استفاده می‌شود.

## .env.local

- برای تنظیمات محلی و شخصی استفاده می‌شود.
- معمولاً در محیط توسعه و برای داده‌های حساس به کار می‌رود.
- نباید داخل git ارسال شود.

## import.meta.env

- در Vite، دسترسی به متغیرهای محیطی با این API انجام می‌شود.

```js
const isDev = import.meta.env.DEV
const isProd = import.meta.env.PROD
const baseUrl = import.meta.env.VITE_API_URL
```

## بهترین شیوه‌ها

- متغیرهای حساس را در `.env.local` نگه دارید
- متغیرهای عمومی را با پیشوند `VITE_` تعریف کنید
- از ریختن secret در client-side خودداری کنید
- برای production، مقدار مناسب در environment deployment تنظیم کنید

# Static Assets

## Images

- با `import` یا استفاده از `public` می‌توانند وارد شوند.
- برای assets بزرگ، بهتر است از بهینه‌سازی و lazy loading استفاده شود.

## Fonts

- فونت‌های محلی یا CDN را می‌توان به پروژه اضافه کرد.
- در CSS، با `@font-face` یا import ساده می‌توان از آن استفاده کرد.

## Videos

- فایل‌های ویدیویی در `public` یا `src/assets` قرار می‌گیرند.
- برای استفاده‌ی بهتر، از `poster` و preload مناسب استفاده کنید.

## SVG

- SVG می‌تواند به‌صورت component یا asset وارد شود.
- برای آیکون‌ها و تصاویر vector مناسب است.
- در React معمولاً `import { ReactComponent as Logo } from './logo.svg'` استفاده می‌شود.

# CSS

## CSS

- Vite از CSS پشتیبانی می‌کند.
- فایل `*.css` در پروژه به‌طور خودکار پردازش می‌شود.
- می‌توان آن را به component یا module وارد کرد.

## CSS Modules

- برای scoped styling استفاده می‌شود.
- توصیف کلاس‌ها به صورت local انجام می‌شود.
- در پروژه‌های بزرگ بسیار کاربردی است.

```css
.title {
  color: red;
}
```

```js
import styles from './Button.module.css'
```

## SCSS

- برای ساختار بهتر CSS و متغیرها، nesting و partials استفاده می‌شود.
- در Vite، معمولاً با `sass` نصب می‌شود.

```bash
npm install -D sass
```

## PostCSS

- برای تبدیل و بهینه‌سازی CSS استفاده می‌شود.
- می‌تواند با autoprefixer و سایر پلاگین‌ها ترکیب شود.

## Tailwind

- Tailwind یک framework utility-first برای styling است.
- در Vite با `@tailwindcss/vite` یا پیکربندی کلاسیک نصب می‌شود.
- برای پروژه‌های UI-heavy به‌ویژه مناسب است.

# Plugins

## React Plugin

- برای پروژه‌های React به کار می‌رود.
- JSX و React Fast Refresh را فعال می‌کند.

```bash
npm install -D @vitejs/plugin-react
```

## Vue Plugin

- برای Vue و Vue SFC استفاده می‌شود.
- پشتیبانی از template و HMR را فراهم می‌کند.

## TypeScript Plugin

- برای TypeScript در صورت نیاز به پیکربندی اختصاصی استفاده می‌شود.
- در Vite، TS معمولاً به‌صورت native پشتیبانی می‌شود.

## SVG Plugin

- برای تبدیل SVG به component یا import ساده استفاده می‌شود.
- در سیستم‌های دیزاین و آیکون‌سازی کاربرد دارد.

## Common plugin categories

- `vite-plugin` برای HMR و tooling
- pluginهای accessibility و linting
- pluginهای bundling و asset optimization
- pluginهای SSR و routing

# vite.config

## مهم‌ترین آپشن‌ها

- `root`: مسیر root پروژه
- `base`: مسیر پایه برای deployment
- `publicDir`: مسیر public folder
- `resolve.alias`: aliasهای مسیر
- `server.port`: پورت dev server
- `server.host`: bind host
- `build.outDir`: خروجی build
- `build.minify`: minify کردن خروجی
- `plugins`: ثبت پلاگین‌ها

## مثال

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
```

# Build

## Production build

- `npm run build` پروژه را برای production آماده می‌کند.
- این مرحله معمولاً minify، tree-shaking و bundle generation را انجام می‌دهد.

## Output folder

- خروجی معمولاً `dist` است.
- این folder برای deploy و publish آماده می‌شود.

## Optimization

- code splitting
- tree shaking
- asset hashing
- lazy loading
- gzip و compression در deployment

# Deployment

## Netlify

- با GitHub integration و deploy command ساده انجام می‌شود.
- معمولاً `npm run build` و `dist` را به عنوان publish directory انتخاب می‌کنند.

## Vercel

- برای پروژه‌های React و Next-friendly بسیار محبوب است.
- build command و output directory معمولاً تنظیم می‌شوند.

## GitHub Pages

- برای پروژه‌های static مناسب است.
- اگر `base` در Vite درست تنظیم نشود، مسیرها ممکن است مشکل پیدا کنند.

## Traditional Hosting

- output folder را روی سرور آپلود کنید.
- لازم است از مسیر پایه، rewrite و static file serving درست پشتیبانی شود.

# Performance Tips

- از assetهای بزرگ به‌صورت غیرضروری استفاده نکنید
- layout و rendering را ساده نگه دارید
- از lazy loading برای بخش‌های سنگین استفاده کنید
- برای فایل‌های ثابت، از caching و hash استفاده کنید
- در build، خروجی را با اعتبار و minification مناسب آماده کنید

# Common Mistakes

- عدم استفاده از `VITE_` برای متغیرهای client-side
- استفاده نادرست از alias
- نگه داشتن مسیرهای اشتباه فایل‌ها
- deploy بدون تنظیم `base`
- عدم کنترل `publicDir`
- نادیده گرفتن version lock برای team collaboration

# Best Practices

- برای پروژه‌های بزرگ، از alias و structure ثابت استفاده کنید
- فایل‌های environment را به‌صورت جداگانه نگه دارید
- برای هر پروژه، `vite.config.*` را ساده و قابل فهم نگه دارید
- build و deploy را با CI هماهنگ کنید
- برای نسخه‌های team، lockfile را حفظ کنید

# Interview Questions

- What is Vite and why is it popular?
- What are the main differences between Vite and CRA?
- What is HMR in Vite?
- Why is Vite faster than Webpack in development?
- What is the role of `vite.config.js`?
- What is `npm run dev` used for?
- What is `npm run build` used for?
- What is `npm run preview` used for?
- How do environment variables work in Vite?
- Why should variables be prefixed with `VITE_`?
- What is `import.meta.env`?
- How do aliases help in large projects?
- What is the difference between `public` and `src`?
- How do CSS Modules help maintainability?
- When should SCSS be used?
- What is the purpose of PostCSS?
- How does Tailwind fit into a Vite project?
- What is the role of `base` in `vite.config`?
- How would you deploy a Vite app to Netlify?
- How would you deploy a Vite app to GitHub Pages?

# Cheat Sheet

## Commands

```bash
npm create vite@latest
npm install
npm run dev
npm run build
npm run preview
```

## Folder structure

```text
public/
src/
index.html
package.json
vite.config.ts
```

## Config files

- `package.json`
- `vite.config.js`
- `vite.config.ts`
- `tsconfig.json`
- `.env`
- `.env.local`

## Environment variables

```bash
VITE_API_URL=http://localhost:3000
```

## Build

```bash
npm run build
```

## Deployment

- Netlify: build command + dist
- Vercel: build command + output directory
- GitHub Pages: set base path carefully
- Traditional Hosting: upload built `dist`

# Final Checklist

- [ ] I understand what Vite is and why developers use it.
- [ ] I can create a Vite project using npm, yarn, or pnpm.
- [ ] I know the difference between `public`, `src`, and `assets`.
- [ ] I can use `npm run dev`, `build`, and `preview` correctly.
- [ ] I know how to configure alias paths.
- [ ] I understand `.env`, `.env.local`, and `import.meta.env`.
- [ ] I can manage static assets in the project.
- [ ] I know when to use CSS Modules, SCSS, PostCSS, or Tailwind.
- [ ] I can configure a practical `vite.config`.
- [ ] I can deploy a Vite project to common hosting providers.
- [ ] I can explain the build output folder and optimization strategy.
- [ ] I can use Vite in real-world Front-End work.
