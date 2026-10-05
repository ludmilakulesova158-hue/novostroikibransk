// Подбор фото новостроек для карточек ЖК из Wikimedia Commons (свободные лицензии CC0/CC BY/CC BY-SA).
// Кураторский список: реальные современные ЖК (Moscow «Eco Bunino», квартал реновации, новостройка в
// Измайлово, ЖК на Волге). Используем как ИЛЛЮСТРАТИВНЫЕ изображения (imageNote) с кредитом автора.
// Запуск: node scripts/zhk-images.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const ZHK_DIR = join(ROOT, 'src/content/zhk');
const OUT_DIR = join(ROOT, 'public/images/zhk');
const UA = 'novostroikibransk-image-fetch/1.0 (site preview)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function withRetry(fn, tries = 4) {
  let last;
  for (let i = 0; i < tries; i++) {
    try { return await fn(); } catch (e) {
      last = e;
      if (!/429/.test(e.message)) throw e;
      await sleep(4000 * (i + 1));
    }
  }
  throw last;
}

// slug → файл на Wikimedia Commons. Только РЕАЛЬНЫЕ новостройки Брянска (ЖК «Атмосфера»,
// «Панорама», «La-классик») — как иллюстративные обложки карточек (imageNote + кредит).
const FILES = {
  'zhk-praym': 'ЖК "Атмосфера в Алых парусах".jpg',
  'grinwood-9': 'Благоустройство придомовой территории ЖК "Панорама".jpg',
  'klubnyy-dom-3-3': 'Входная группа ЖК "La-классик", (Ля-классик) г. Брянск.jpg',
  'klubnyy-dom-3-4': 'ЖК "Атмосфера на Дуки".jpg',
  'next-pl-partizan': 'ЖК "Атмосфера на Костычева" в Брянске..jpg',
  obereg: 'ЖК Атмосфера на Дуки.jpg',
  'duki-46': 'ЖК "Атмосфера на Дуки".jpg',
  osobin: 'ЖК "Атмосфера в Алых парусах".jpg',
};

function strip(html) {
  return String(html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

async function fileInfo(title) {
  const u =
    'https://commons.wikimedia.org/w/api.php?action=query&titles=' +
    encodeURIComponent('File:' + title) +
    '&prop=imageinfo&iiprop=url%7Csize%7Cextmetadata&iiurlwidth=1600&format=json&origin=*';
  const res = await fetch(u, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60_000) });
  if (!res.ok) throw new Error(`commons HTTP ${res.status}`);
  const j = await res.json();
  const pages = Object.values(j.query?.pages || {});
  const ii = pages[0]?.imageinfo?.[0];
  if (!ii) throw new Error('нет imageinfo');
  const em = ii.extmetadata || {};
  return {
    url: ii.thumburl || ii.url,
    width: ii.thumbwidth || ii.width,
    height: ii.thumbheight || ii.height,
    license: strip(em.LicenseShortName?.value) || 'CC',
    artist: strip(em.Artist?.value) || 'Wikimedia Commons',
    page: ii.descriptionurl || ii.url,
  };
}

async function download(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(90_000) });
  if (!res.ok) throw new Error(`download HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

mkdirSync(OUT_DIR, { recursive: true });
let ok = 0;
for (const [slug, title] of Object.entries(FILES)) {
  process.stdout.write(`• ${slug} ... `);
  try {
    const info = await withRetry(() => fileInfo(title));
    if (!info.url) throw new Error('нет url');
    const buf = await withRetry(() => download(info.url), 2);
    writeFileSync(join(OUT_DIR, `${slug}.jpg`), buf);
    const jsonPath = join(ZHK_DIR, `${slug}.json`);
    const data = JSON.parse(readFileSync(jsonPath, 'utf-8').replace(/^\uFEFF/, ''));
    data.image = `/images/zhk/${slug}.jpg`;
    data.imageNote = 'Иллюстративное фото';
    data.imageCredit = `${info.artist} · ${info.license} · Wikimedia Commons`;
    writeFileSync(jsonPath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
    console.log(`ok ${info.width}x${info.height}, ${buf.length} bytes, ${info.license}`);
    ok++;
  } catch (e) {
    console.log(`ошибка: ${e.message}`);
  }
  await sleep(2500);
}
console.log(`\nГотово: ${ok}/${Object.keys(FILES).length}`);
