// Детальный подсчёт слов по страницам dist/ (для контроля порогов тонкости).
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { wordCount } from './seo-agent/lib/quality-gates.mjs';

const MIN = { home: 400, service: 700, location: 500, blog: 1300, catalog: 400, category: 350, landing: 500, faq: 600, default: 500 };
function typeOf(url) {
  if (url === '/') return 'home';
  if (/^\/(blog|stati|servisy|articles)\//.test(url)) return 'blog';
  if (/(kalkulyator|sravnenie|kontakty|ekspert|about|o-|politika)/.test(url)) return 'landing';
  if (url.split('/').filter(Boolean).length >= 3) return 'catalog';
  return 'default';
}
function htmlText(html) {
  const main = (html.match(/<main[\s\S]*?<\/main>/i) || [html])[0];
  return main.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ');
}
const files = [];
(function w(d) { for (const e of readdirSync(d, { withFileTypes: true })) { const p = join(d, e.name); if (e.isDirectory()) w(p); else if (e.name === 'index.html' || (e.name.endsWith('.html') && !/404/.test(e.name))) files.push(p); } })('dist');
const rows = files.map((f) => {
  const url = '/' + relative('dist', f).replace(/\\/g, '/').replace(/index\.html$/, '');
  if (/404|politika/.test(url)) return null;
  const words = wordCount(htmlText(readFileSync(f, 'utf-8')));
  const type = typeOf(url);
  return { url, words, type, min: MIN[type] ?? 500 };
}).filter(Boolean).sort((a, b) => a.words - b.words);
for (const r of rows) console.log(`${r.words.toString().padStart(5)} / ${r.min}  ${r.type.padEnd(8)} ${r.url}`);
