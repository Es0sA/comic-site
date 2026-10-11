# Heartline Comics: Shopify Theme

A bespoke, dark-mode Shopify 2.0 storefront theme engineered for Heartline Comics, featuring customized comic-panel layouts, character spotlight sections, horizontal category shelves, and animation showcases.

---

## Overview

Heartline Comics is an independent comic book brand and merchandise storefront built around the Menace character universe. This repository contains the complete custom Shopify Online Store 2.0 theme, structured on top of Shopify Dawn (v12.0.0) and transformed into a tailored, multimedia-rich comic shop experience.

---

## Custom Sections & Key Features

1. **Menace Hero Banner (`sections/menace-hero.liquid`)**:
   * Cinematic video background and high-impact brand headline.
   * Direct call-to-action buttons driving traffic to curated comic collections.

2. **Character Universe Showcase (`sections/menace-family.liquid`)**:
   * Interactive character cards introducing core story figures (Menace, Heartline, Ember).
   * Illustrated character portraits, bios, and stylized comic borders.

3. **Horizontal Category Shelves (`sections/menace-shelf.liquid`)**:
   * Dedicated product shelves optimized for comic book formats:
     * Bundle Up & Save (discounted book bundles).
     * Physical Comics (print editions, variant covers, signed issues).
     * Digital Comics (instant download digital editions).
     * Merch & Collectibles (apparel, prints, and lifestyle items).
   * Tag-based filtering and custom collection link-outs.

4. **Animation Reel Teaser (`sections/menace-animation-teaser.liquid`)**:
   * Embedded video reel section presenting animated comic teasers and motion graphics.
   * Modular clip blocks with dedicated watch links.

5. **Enhanced Store Experience**:
   * Custom comic-card product styling with dynamic badges (format, sale, stock status).
   * Streamlined slide-out cart drawer (`snippets/cart-drawer.liquid`) with real-time updates.
   * Fully responsive across mobile, tablet, and widescreen desktop displays.

---

## Directory Layout

```
comic-site/
|-- assets/              # Theme stylesheets (base.css, component-menace-*.css) and scripts
|-- config/              # settings_schema.json and default preset configurations
|-- layout/              # Theme wrapper templates (theme.liquid, password.liquid)
|-- locales/             # Multi-language translation dictionaries
|-- sections/            # Core storefront sections, including custom Menace modules
|-- snippets/            # Reusable Liquid snippets (cards, cart drawer, badges)
|-- templates/           # JSON-based Online Store 2.0 page and product templates
|-- .gitignore           # Environment and editor ignore rules
`-- README.md            # Repository documentation
```

---

## Local Development with Shopify CLI

This theme is designed for development and deployment via the official Shopify CLI.

### Prerequisites

* Node.js 18 or higher
* Shopify CLI installed:
  ```bash
  npm install -g @shopify/cli @shopify/theme
  ```

### Connect to Development Store

1. Authenticate with your Shopify partner or store account:
   ```bash
   shopify auth login
   ```

2. Start a live development preview:
   ```bash
   shopify theme dev --store your-store-name.myshopify.com
   ```

3. Open the localhost URL provided by the CLI to preview theme changes in real time with hot reload.

### Pushing Changes

To push updates directly to a development or unpublished theme:

```bash
shopify theme push --store your-store-name.myshopify.com
```

---

## Design System

* **Primary Palette**: High-contrast deep dark backgrounds, bright neon magenta/pink accents, and crisp white readability typography.
* **Layout Paradigm**: Inspired by sequential comic panel compositions rather than standard e-commerce grid templates.
* **Typography**: Bold condensed display headers paired with clean sans-serif body copy for legibility.

---

## License

Proprietary theme assets and branding. All rights reserved by Heartline Comics.
