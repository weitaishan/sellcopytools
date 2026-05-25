# Contributing

Thanks for your interest in improving SellCopy Tools.

This project is intentionally simple: static HTML, CSS, and JavaScript. Please keep contributions lightweight and easy to deploy on static hosting.

## Development Setup

Run a local server from the repository root:

```bash
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080
```

## Good Contributions

- Add a new ecommerce copy generator page.
- Improve an existing generator template.
- Improve accessibility, keyboard navigation, labels, and semantic HTML.
- Improve page metadata, canonical links, or internal links.
- Fix broken links or sitemap entries.
- Reduce CSS or JavaScript complexity.

## Page Guidelines

For new generator pages:

```text
1. Place the page under tools/.
2. Use a clear keyword-focused title.
3. Add a concise meta description.
4. Include a canonical URL.
5. Link back to /tools/ and relevant related tools.
6. Add the URL to sitemap.xml.
```

## Code Style

- Use plain HTML, CSS, and JavaScript.
- Avoid adding build tools unless they are clearly necessary.
- Keep copy generation client-side.
- Keep pages fast and readable.
- Prefer accessible form labels and descriptive link text.

## Privacy

Do not commit private operating notes, analytics exports, revenue data, account screenshots, API keys, or local environment files.

## Pull Request Checklist

- The site runs locally.
- New links work.
- Metadata is updated.
- `sitemap.xml` is updated when adding public pages.
- No private data is included.

