# He Wen · 温和

Personal academic website, hosted at https://he-exploration.github.io/.

A small static site with English and Chinese text, responsive layouts, and no external dependencies.

## Edit

- `index.html`: page structure, default English copy, links, and metadata.
- `script.js`: both language versions. Keep the English copy in sync with `index.html`.
- `style.css`: typography, colors, and responsive layout.
- `favicon.svg`: browser icon.

## Preview

Run `python3 -m http.server 8000` in this directory, then open http://localhost:8000.

## GitHub Pages

In the `He-exploration/He-exploration.github.io` repository, open **Settings → Pages**. Select **Deploy from a branch**, then **main** and **/(root)**. Save. Subsequent changes to `main` will publish automatically.

`.nojekyll` tells GitHub Pages to serve the static files directly.
