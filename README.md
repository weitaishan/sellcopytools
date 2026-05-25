# SellCopy Tools

SellCopy Tools is a static ecommerce copywriting toolkit with free, browser-based generators for product descriptions, marketplace titles, ad headlines, email snippets, SEO metadata, and other store marketing copy.

The project is built as a zero-backend website: plain HTML, CSS, and JavaScript. It can be deployed to GitHub Pages, Cloudflare Pages, Netlify, Vercel, or any static hosting service.

## Features

- Free ecommerce sales copy generator on the homepage
- Dedicated generator pages for Shopify, Amazon, Etsy, ads, email, SEO, and product messaging
- Client-side copy generation with no database or API key
- Copy-to-clipboard support
- Lightweight event hooks for analytics
- SEO-friendly static pages, canonical URLs, sitemap, and robots.txt
- Legal pages for privacy, terms, and affiliate disclosure

## Tool Categories

- Product descriptions and product benefits
- Amazon listing titles, descriptions, and bullet points
- Etsy titles and product descriptions
- Shopify product titles, descriptions, and meta descriptions
- Facebook and Google ad copy
- Email copy and abandoned cart messages
- SEO titles and meta descriptions
- Brand slogans and value propositions

## Project Structure

```text
.
├── index.html
├── about.html
├── contact.html
├── assets/
│   ├── analytics.js
│   ├── app.js
│   └── styles.css
├── guides/
├── legal/
├── tools/
├── robots.txt
└── sitemap.xml
```

## Local Development

Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

No build step is required.

## Customization

To adapt this project for another ecommerce copywriting site:

1. Update site metadata in `index.html` and each page in `tools/`.
2. Update canonical URLs in page `<head>` sections.
3. Replace or remove the analytics snippet in `assets/analytics.js`.
4. Update `sitemap.xml` with your production URLs.
5. Update contact details in `contact.html` and `legal/privacy.html`.
6. Replace placeholder ad slots only after your ad provider approves the site.

## Analytics Events

The frontend emits lightweight Google Analytics events when available:

```text
generate_copy
copy_generated_output
```

If `window.gtag` is not available, the generator still works normally.

## Deployment

Any static host will work. Common options:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

For best SEO results, deploy with clean URLs, HTTPS, a valid sitemap, and a custom domain.

## Contributing

Contributions are welcome. Useful improvements include:

- New ecommerce generator templates
- Better copy formulas for existing tools
- Accessibility improvements
- Performance improvements
- SEO metadata fixes
- Documentation improvements

See [CONTRIBUTING.md](CONTRIBUTING.md) for local contribution guidelines.

## License

MIT. See [LICENSE](LICENSE).
