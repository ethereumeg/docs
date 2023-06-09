# EthereumEG Docs 👨‍🌾📗

This documention is build using [Astro](https://astro.build/) and [Docs Theme](https://astro.build/themes/details/docs/).

## For developers

### Quick start

```bash
git clone https://github.com/ethereumeg/docs ethereumeg-docs
cd ethereumeg-docs
npm install     # <-- Installs dependencies
npm run dev     # <-- Starts local dev server at `localhost:3000` 
```

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Production deploy

The page is built and deployed as [docs.ethevents.club](https://docs.ethevents.club) automatically by [GitHub Actions](https://github.com/features/actions) to [GitHub Pages](https://pages.github.com/) with each commit to `main`.

Build and deploy settings: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

## Contributors

* [tree](https://ethevents.club/u/tree)