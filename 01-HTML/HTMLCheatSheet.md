# HTML Cheat Sheet

## Core Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <main>
    <section>
      <h1>Heading</h1>
      <p>Paragraph</p>
    </section>
  </main>
</body>
</html>
```

## Common Semantic Elements

- `header` — page or section intro
- `nav` — navigation links
- `main` — main content area
- `section` — thematic grouping
- `article` — self-contained content
- `aside` — supplementary content
- `footer` — footer area

## Text and Linking

- `<h1>` to `<h6>` for headings
- `<p>` for paragraph
- `<a href="...">` for links
- `<strong>` and `<em>` for emphasis

## Media

- `<img src="..." alt="...">`
- `<audio controls>`
- `<video controls>`
- `<figure>` and `<figcaption>`

## Forms

```html
<form>
  <label for="name">Name</label>
  <input id="name" type="text">
  <button type="submit">Submit</button>
</form>
```

## Lists

- `<ul>` unordered list
- `<ol>` ordered list
- `<li>` list item
- `<dl>`, `<dt>`, `<dd>` for definition lists

## Tables

```html
<table>
  <thead>
    <tr><th>Name</th><th>Age</th></tr>
  </thead>
  <tbody>
    <tr><td>Ali</td><td>25</td></tr>
  </tbody>
</table>
```

## Accessibility Tips

- Always use `alt` on images
- Use labels for form controls
- Prefer semantic elements over generic `div`
- Use `aria-*` only when needed

## Performance Tips

- Avoid unnecessary nested elements
- Use proper image size and format
- Keep structure simple and reusable

## Best Practices

- Use valid HTML5 structure
- Keep content meaningful and clean
- Separate markup from styling
- Review accessibility and SEO regularly
