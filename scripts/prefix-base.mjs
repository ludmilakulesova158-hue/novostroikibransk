// Префикс корневых URL для деплоя на GitHub Pages (project site: /<repo>/).
// Запуск: node scripts/prefix-base.mjs <repo-name> [distDir]
// Переписывает href="/..." и src="/..." в собранных HTML (кроме внешних, //, mailto:, tel:, #).
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const base = (process.argv[2] || '').replace(/^\/+|\/+$/g, '');
const dist = process.argv[3] || 'dist';
if (!base) {
  console.error('Укажите имя репозитория: node scripts/prefix-base.mjs <repo>');
  process.exit(1);
}
if (!existsSync(dist)) {
  console.error(`Нет папки ${dist}/ — сначала npm run build`);
  process.exit(1);
}
const prefix = `/${base}`;

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const attrRe = /(\b(?:href|src)=)"(\/(?!\/)[^"]*)"/g;

let files = 0;
let rewrites = 0;
for (const f of walk(dist)) {
  const html = readFileSync(f, 'utf-8');
  const next = html.replace(attrRe, (m, attr, url) => {
    if (url.startsWith(prefix + '/') || url === prefix) return m; // уже префикс
    rewrites++;
    return `${attr}"${prefix}${url}"`;
  });
  if (next !== html) {
    writeFileSync(f, next, 'utf-8');
    files++;
  }
}
console.log(`prefix-base: ${prefix} → переписано ${rewrites} ссылок в ${files} файлах`);
