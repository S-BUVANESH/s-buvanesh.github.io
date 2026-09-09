import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'portfolio-content');
const OUTPUT_DIR = path.join(ROOT, 'Blogs');
const ASSETS_DIR = path.join(OUTPUT_DIR, 'assets', 'weekly');
const MANIFEST_PATH = path.join(OUTPUT_DIR, 'manifest.json');

const DAY_NAMES = ['01_Monday','02_Tuesday','03_Wednesday','04_Thursday','05_Friday','06_Saturday'];
const IMAGE_RE = /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i;

const esc = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const inline = (value) => {
  let s = esc(value);
  s = s.replace(/!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, file, alt) => {
    const clean = file.trim();
    const label = esc((alt || clean).trim());
    return `<img class="md-image" src="${imageUrl(clean)}" alt="${label}">`;
  });
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^\*])\*([^*]+)\*(?!\*)/g, '$1<em>$2</em>');
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  return s;
};

let currentImagePrefix = '';

const imageUrl = (filename) => {
  const safe = filename.trim();
  return `${currentImagePrefix}/${encodeURIComponent(safe)}`;
};

function stripFrontmatter(md) {
  const match = md.match(/^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]*/);
  if (!match) return { meta: {}, body: md };
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^([^:#]+):\s*(.*)$/);
    if (m) meta[m[1].trim()] = m[2].trim().replace(/^['"]|['"]$/g, '');
  }
  return { meta, body: md.slice(match[0].length) };
}

function markdownToHtml(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  let out = [];
  let paragraph = [];
  let listOpen = false;
  let quoteOpen = false;
  let codeOpen = false;
  let codeLines = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      out.push(`<p>${inline(paragraph.join(' '))}</p>`);
      paragraph = [];
    }
  };
  const closeList = () => {
    if (listOpen) { out.push('</ul>'); listOpen = false; }
  };
  const closeQuote = () => {
    if (quoteOpen) { out.push('</blockquote>'); quoteOpen = false; }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.startsWith('```')) {
      flushParagraph(); closeList(); closeQuote();
      if (!codeOpen) { codeOpen = true; codeLines = []; }
      else { out.push(`<pre><code>${esc(codeLines.join('\n'))}</code></pre>`); codeOpen = false; }
      continue;
    }
    if (codeOpen) { codeLines.push(line); continue; }

    if (!line.trim()) { flushParagraph(); continue; }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph(); closeList(); closeQuote();
      const level = Math.min(heading[1].length, 4);
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      flushParagraph(); closeList(); closeQuote();
      out.push('<hr>');
      continue;
    }

    const bullet = line.match(/^\s*[-*]\s+(.+)$/);
    if (bullet) {
      flushParagraph(); closeQuote();
      if (!listOpen) { out.push('<ul>'); listOpen = true; }
      out.push(`<li>${inline(bullet[1])}</li>`);
      continue;
    }

    if (/^\s*>\s?/.test(line)) {
      flushParagraph(); closeList();
      if (!quoteOpen) { out.push('<blockquote>'); quoteOpen = true; }
      out.push(`<p>${inline(line.replace(/^\s*>\s?/, ''))}</p>`);
      continue;
    }

    closeList(); closeQuote();
    paragraph.push(line.trim());
  }

  flushParagraph(); closeList(); closeQuote();
  if (codeOpen) out.push(`<pre><code>${esc(codeLines.join('\n'))}</code></pre>`);
  return out.join('\n');
}

function findImageInDay(dayPath, requested) {
  const direct = path.join(dayPath, requested);
  if (fs.existsSync(direct)) return direct;
  const target = requested.toLowerCase();
  const match = fs.readdirSync(dayPath).find(f => f.toLowerCase() === target);
  return match ? path.join(dayPath, match) : null;
}

function processWeek(weekIndex) {
  const weekName = `Week_${String(weekIndex).padStart(2,'0')}`;
  const weekPath = path.join(CONTENT_DIR, weekName);
  const weekOutput = path.join(ASSETS_DIR, weekName);
  if (fs.existsSync(weekOutput)) fs.rmSync(weekOutput, { recursive: true, force: true });
  fs.mkdirSync(weekOutput, { recursive: true });

  let body = '';
  let hasContent = false;
  let daysWithContent = 0;
  let imageCount = 0;
  let title = `Week ${String(weekIndex).padStart(2,'0')} Review`;
  let date = new Date().toISOString().slice(0,10);

  if (!fs.existsSync(weekPath)) return { hasContent:false, daysWithContent:0, imageCount:0, title, date, url:`Blogs/${weekName}.html` };

  const rootMarkdown = fs.readdirSync(weekPath).filter(f => f.toLowerCase().endsWith('.md') && f.toLowerCase() !== 'readme.md').sort();
  const daySections = [];

  for (const mdFile of rootMarkdown) {
    const full = path.join(weekPath, mdFile);
    const raw = fs.readFileSync(full, 'utf8');
    const { meta, body: markdown } = stripFrontmatter(raw);
    if (meta.week_title) title = meta.week_title;
    if (meta.title && title.startsWith('Week ')) title = meta.title;
    if (meta.date) date = meta.date;
    body += markdownToHtml(markdown) + '\n';
    hasContent = true;
  }

  for (const day of DAY_NAMES) {
    const dayPath = path.join(weekPath, day);
    if (!fs.existsSync(dayPath)) continue;

    const files = fs.readdirSync(dayPath);
    const markdownFiles = files.filter(f => f.toLowerCase().endsWith('.md') && f.toLowerCase() !== 'readme.md').sort();
    const imageFiles = files.filter(f => IMAGE_RE.test(f)).sort();
    if (!markdownFiles.length && !imageFiles.length) continue;

    hasContent = true;
    daysWithContent++;

    const dayOut = path.join(weekOutput, day);
    fs.mkdirSync(dayOut, { recursive:true });

    for (const img of imageFiles) {
      fs.copyFileSync(path.join(dayPath,img), path.join(dayOut,img));
      imageCount++;
    }

    currentImagePrefix = `assets/weekly/${weekName}/${day}`;
    let dayHtml = `<section class="day"><div class="day-kicker">${esc(day.replace(/^\d+_/, ''))}</div>`;

    for (const mdFile of markdownFiles) {
      const raw = fs.readFileSync(path.join(dayPath, mdFile), 'utf8');
      const { meta, body: markdown } = stripFrontmatter(raw);
      if (meta.week_title) title = meta.week_title;
      if (meta.title && title.startsWith('Week ')) title = meta.title;
      if (meta.date) date = meta.date;

      // Validate that embedded images exist; unmatched embeds stay as text rather than breaking the page.
      dayHtml += `<div class="note"><div class="note-source">${esc(mdFile)}</div>${markdownToHtml(markdown)}</div>`;
    }

    const embedded = new Set();
    for (const mdFile of markdownFiles) {
      const raw = fs.readFileSync(path.join(dayPath, mdFile), 'utf8');
      for (const match of raw.matchAll(/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) embedded.add(match[1].trim());
    }
    const gallery = imageFiles.filter(img => !embedded.has(img));
    if (gallery.length) {
      dayHtml += `<div id="gallery" class="gallery"><div class="gallery-title">VISUAL FIELD ARCHIVE</div><div class="gallery-grid">`;
      for (const img of gallery) {
        dayHtml += `<figure><img class="gallery-image" src="${currentImagePrefix}/${encodeURIComponent(img)}" alt="${esc(img)}"><figcaption>${esc(img)}</figcaption></figure>`;
      }
      dayHtml += `</div></div>`;
    }

    dayHtml += '</section>';
    daySections.push(dayHtml);
  }

  if (!hasContent) {
    body = `<section class="empty"><div class="empty-mark">WAITING FOR NOTES</div><h2>This week is ready for your next field entry.</h2><p>Drop Markdown notes and images into the appropriate day folder in <code>portfolio-content/${weekName}/</code>, then commit/push.</p></section>`;
  } else {
    body = body + daySections.join('\n');
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)} — Buvanesh S.</title>
<meta name="description" content="Weekly engineering field notes — ${esc(title)}">
<style>
:root{--bg:#020612;--panel:rgba(8,20,48,.72);--gold:#D4AF37;--gold2:#F7E7A9;--cyan:#00F0FF;--text:#F8FAFC;--muted:#94A3B8;--line:rgba(212,175,55,.22)}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:radial-gradient(circle at 50% 0%,#081738 0%,#020716 55%,#01030a 100%);color:var(--muted);font:400 17px/1.8 Outfit,system-ui,sans-serif}body:before{content:"";position:fixed;inset:0;pointer-events:none;opacity:.45;background-image:radial-gradient(rgba(212,175,55,.08) 1px,transparent 1px);background-size:40px 40px}.wrap{width:min(1120px,92%);margin:auto;position:relative}.nav{position:sticky;top:0;z-index:10;padding:16px 0;background:rgba(2,6,18,.82);backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}.nav-inner{display:flex;justify-content:space-between;align-items:center;gap:20px}.brand{color:var(--gold2);font:700 14px "Cinzel",serif;letter-spacing:.12em}.back{font:700 11px "Space Mono",monospace;color:var(--gold);padding:8px 12px;border:1px solid var(--line);text-decoration:none}.hero{padding:90px 0 55px}.kicker,.day-kicker,.note-source,.gallery-title,.empty-mark{font:700 11px/1.5 "Space Mono",monospace;letter-spacing:.18em;text-transform:uppercase;color:var(--gold)}h1{font:800 clamp(40px,6vw,76px)/1.02 Cinzel,serif;color:var(--text);margin:14px 0 18px}h2{font:700 32px/1.2 Cinzel,serif;color:var(--text);margin:18px 0 10px}h3,h4{color:var(--gold2);font-family:Outfit,sans-serif}a{color:var(--cyan)}main{padding-bottom:100px}.day,.note,.gallery,.empty{background:var(--panel);border:1px solid var(--line);box-shadow:0 20px 50px rgba(0,0,0,.28);padding:28px;margin:24px 0}.day{border-left:2px solid var(--gold)}.day-kicker{margin-bottom:10px}.note{margin:18px 0;background:rgba(3,10,26,.62)}.note-source{color:var(--muted);margin-bottom:15px;font-size:10px}.note p{margin:12px 0}.note ul{padding-left:24px}.note li{margin:5px 0}.note blockquote{margin:20px 0;padding:18px 20px;border-left:3px solid var(--gold);background:rgba(212,175,55,.06);color:var(--gold2)}.note code{color:var(--gold2);background:rgba(255,255,255,.06);padding:2px 5px}.note pre{overflow:auto;padding:18px;background:#01030a;border:1px solid var(--line)}.md-image{display:block;max-width:100%;height:auto;margin:20px auto;border:1px solid var(--line)}.gallery-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px;margin-top:16px}.gallery figure{margin:0;background:rgba(0,0,0,.18);border:1px solid var(--line)}.gallery-image{width:100%;aspect-ratio:4/3;object-fit:cover}.gallery figcaption{padding:9px 10px;font:10px "Space Mono",monospace;color:var(--muted);word-break:break-word}.empty{text-align:center;padding:80px 30px}.empty h2{margin-bottom:12px}.footer{padding:40px 0;color:var(--muted);font:11px "Space Mono",monospace;text-align:center;border-top:1px solid var(--line)}@media(max-width:700px){body{font-size:16px}.hero{padding-top:55px}.day,.note,.gallery,.empty{padding:20px}h2{font-size:26px}}
</style>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="nav"><div class="wrap nav-inner"><div class="brand">BUVANESH S. · ENGINEERING LOG</div><a class="back" href="../index.html#experience">← PORTFOLIO</a></div></header>
<div class="wrap">
<header class="hero">
<div class="kicker">WEEK ${String(weekIndex).padStart(2,'0')} · ${hasContent ? 'PUBLISHED DOSSIER' : 'READY'}</div>
<h1>${esc(title)}</h1>
<p>Chronological learning notes, experiments, technical reflections and visual field evidence.</p>
<p class="kicker">DATE · ${esc(date)}</p>
</header>
<main id="gallery">${body}</main>
<footer class="footer">GENERATED FROM OBSIDIAN · ${new Date().toISOString().slice(0,10)}</footer>
</div>
</body></html>`;

  fs.writeFileSync(path.join(OUTPUT_DIR, `${weekName}.html`), html, 'utf8');
  return {hasContent,daysWithContent,imageCount,title,date,url:`Blogs/${weekName}.html`};
}

fs.mkdirSync(OUTPUT_DIR, {recursive:true});
fs.mkdirSync(ASSETS_DIR, {recursive:true});

const manifest = {};
for(let i=0;i<=19;i++) manifest[String(i).padStart(2,'0')] = processWeek(i);
fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest,null,2)+'\n','utf8');

console.log(`Compiled ${Object.values(manifest).filter(x=>x.hasContent).length} weeks.`);
