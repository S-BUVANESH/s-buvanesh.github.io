# Buvanesh S. — Portfolio

A cinematic static portfolio built with HTML/CSS/JavaScript, Three.js, GSAP and Lenis.

## Obsidian → GitHub → Portfolio

The repository now uses `portfolio-content/` as an Obsidian vault.

1. Write notes and paste images into `Week_XX/01_Monday` ... `06_Saturday`.
2. Obsidian Git can commit and push those changes automatically.
3. GitHub Actions runs `scripts/build-templates.js`.
4. Generated weekly dossiers are written to `Blogs/`.
5. `Blogs/manifest.json` tells the portfolio bookshelf which weeks have published content.

### Important
`portfolio-content/` is the **source of truth**.
`Blogs/` is **generated output**. Avoid manually editing generated weekly pages.

The workflow is in `.github/workflows/obsidian-publish.yml`.
