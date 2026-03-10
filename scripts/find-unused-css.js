const fs = require('fs');
const path = require('path');

const usedFromFiles = new Set();
function extractClasses(content) {
  const re = /className=\{\`([^\`]*)\`\}|className="([^"]*)"|className='([^']*)'/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const s = (m[1] || m[2] || m[3] || '').replace(/\$\{[^}]*\}/g, ' ').replace(/\s+/g, ' ').trim();
    s.split(' ').forEach(c => c && usedFromFiles.add(c));
  }
}

function walk(dir, fn) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules') walk(p, fn);
    else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) {
      try { fn(p); } catch (_) {}
    }
  }
}
walk('src', p => extractClasses(fs.readFileSync(p, 'utf8')));

['tp-project-mr','tp-project-ml','height-1','height-2','height-3','height-4','height-5','height-6','d-inline-flex','justify-content-end','text-end','cat1','cat2','cat3','cat4','back-to-top-btn-show','not-hide-cursor','white-bg','dropdown-opened','header-sticky','opened','active'].forEach(c => usedFromFiles.add(c));

const cssPath = path.join(__dirname, '../public/assets/scss');
const cssClasses = new Set();
function collectScssClasses(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) collectScssClasses(p);
    else if (e.name.endsWith('.scss')) {
      const content = fs.readFileSync(p, 'utf8');
      const matches = content.matchAll(/\.[a-zA-Z_][a-zA-Z0-9_-]*/g);
      for (const m of matches) cssClasses.add(m[0].slice(1));
    }
  }
}
collectScssClasses(cssPath);
const appScss = path.join(__dirname, '../src/app/globals.scss');
if (fs.existsSync(appScss)) {
  const c = fs.readFileSync(appScss, 'utf8');
  for (const m of c.matchAll(/\.[a-zA-Z_][a-zA-Z0-9_-]*/g)) cssClasses.add(m[0].slice(1));
}

const prefixes = ['tp-','cn-','ab-','sv-','pd-','tm-','postbox','blog-','showcase-','accordion','body-','logo-'];
const bootstrap = /^(container|row|col-|d-|mb-|mt-|ms-|me-|p-|px-|py-|text-|fs-|fw-|w-100|fix|smooth|align-|justify-|flex-|gap-|gx-|gy-|overflow-|z-index|border-|rounded|btn)/;

let srcContent = '';
walk('src', p => { srcContent += fs.readFileSync(p, 'utf8') + '\n'; });

const verifiedUnused = [];
for (const c of cssClasses) {
  if (usedFromFiles.has(c)) continue;
  if (prefixes.some(p => c.startsWith(p))) continue;
  if (bootstrap.test(c)) continue;
  if (c.includes('fa-') || c.startsWith('swiper')) continue;
  if (c.length < 3) continue;
  if (srcContent.includes('"' + c + '"') || srcContent.includes("'" + c + "'") || srcContent.includes('`' + c + '`')) continue;
  if (new RegExp('[\\s"\'`]' + c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[\\s"\'`]').test(srcContent)) continue;
  verifiedUnused.push(c);
}

console.log('Verified unused classes:', verifiedUnused.length);
fs.writeFileSync(path.join(__dirname, '../verified-unused-classes.txt'), verifiedUnused.sort().join('\n'));
