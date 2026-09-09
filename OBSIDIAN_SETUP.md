# Obsidian → Portfolio Setup

## First time
Open `portfolio-content/` as an Obsidian vault.

The included `.obsidian/app.json` makes pasted images land in the folder you are currently working in.

## Zero-terminal workflow
Install the **Obsidian Git** community plugin and configure a periodic commit/push.

Your normal loop becomes:

Obsidian → write/paste → Obsidian Git → GitHub → GitHub Action → live portfolio

## What GitHub generates
For each week, the action creates:
- `Blogs/Week_XX.html`
- `Blogs/assets/weekly/Week_XX/<day>/...`
- `Blogs/manifest.json`

## GitHub permissions
Repository Settings → Actions → General → Workflow permissions → allow read and write permissions.

## Do not edit
Treat `Blogs/Week_XX.html` and `Blogs/assets/weekly/` as generated build output.
