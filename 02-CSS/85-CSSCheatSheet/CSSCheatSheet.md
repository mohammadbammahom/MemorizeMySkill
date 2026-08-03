# CSS Cheat Sheet
---
## این مبحث چیست؟
این cheat sheet یک مرور سریع از قوانین اصلی CSS را ارائه می‌دهد. هدف آن یادآوری دستورات پرکاربرد برای طراحی صفحات وب است.
---
## Selectors
```css
* { }
.class { }
#id { }
element { }
[attr] { }
::pseudo-element { }
:pseudo-class { }
```
---
## Box Model
```css
margin: 10px;
padding: 10px;
border: 1px solid #ccc;
width: 100px;
height: 100px;
```
---
## Display
```css
display: block;
display: inline;
display: inline-block;
display: flex;
display: grid;
display: none;
```
---
## Colors
```css
color: #333;
background: #f8f9fa;
border-color: #ddd;
box-shadow: 0 0 10px rgba(0,0,0,0.1);
```
---
## Typography
```css
font-size: 16px;
font-weight: 700;
font-style: italic;
line-height: 1.5;
text-align: center;
```
---
## Positioning
```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
top: 0;
left: 0;
```
---
## Flexbox
```css
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
```
---
## Grid
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
gap: 10px;
```
---
## Animations
```css
animation: pulse 1.2s ease-in-out infinite;
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
```
---
## Useful Properties
```css
transition: all 0.3s ease;
border-radius: 12px;
box-sizing: border-box;
overflow: hidden;
white-space: nowrap;
```
---
## جمع‌بندی
این یادداشت سریع به شما کمک می‌کند قوانینی که اغلب استفاده می‌شوند را به یاد داشته باشید و در طراحی وب سریع‌تر عمل کنید.
