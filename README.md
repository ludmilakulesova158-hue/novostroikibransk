# novostroikibransk — сайт эксперта по недвижимости Ольги Валентиновой

Персональный сайт эксперта по недвижимости в Брянске (новостройки, вторичка, загородка) с
SEO/GEO-фундаментом и ядром контент-автопилота `egorov_seo`.

## Стек
- **Astro 5** (static), чистый scoped CSS, `@astrojs/mdx`, `@astrojs/sitemap`.
- Шрифты: **Prata** (заголовки) + **Manrope** (текст) — Google Fonts, кириллица.
- Ядро SEO/GEO: `scripts/seo-agent/*` (адаптируется одним файлом `site.profile.mjs`).
- Деплой: FTP на РФ-хостинг (`scripts/deploy-ftp.py`).

## Структура
```
src/
  consts.ts              # факты о сайте/эксперте (контакты, домен, реквизиты)
  content.config.ts      # коллекции: blog, uslugi, zhk
  content/blog|uslugi|zhk
  layouts/BaseLayout.astro
  components/            # Header, Footer, LeadForm, CookieConsent, Icon, ZHKCard...
  components/blocks/     # Hero, Features, Steps, Faqs, CallToAction, Reviews
  lib/schema.ts          # JSON-LD @graph (GEO)
  pages/                 # 28 страниц
public/                  # robots.txt, llms.txt, favicon, images, api/lead.php, .htaccess
scripts/                 # ядро egorov_seo (агент, бот, деплой, шаблоны 152-ФЗ)
site.profile.mjs         # контракт сайта для ядра
AURADESIGN.md            # дизайн-контракт + Aura-артефакты
```

## Команды
```bash
npm install
npm run dev          # локальная разработка
npm run build        # сборка в dist/
npm run preview      # предпросмотр сборки
npm run check        # astro check (типы)
node scripts/local-audit.mjs   # тех-аудит dist (on-page/schema/качество)
node scripts/words.mjs         # подсчёт слов по страницам
python scripts/deploy-ftp.py   # деплой dist/ на FTP (после build)
```

## Перед публикацией (обязательно)
1. **Домен** — заменить `novostroikibransk.ru` на боевой в: `astro.config.mjs`, `src/consts.ts`,
   `site.profile.mjs`, `public/robots.txt`, `public/llms.txt`.
2. **Реквизиты оператора ПДн** (152-ФЗ) — заполнить ОГРНИП/ИНН в `src/consts.ts` (LEGAL) и
   `site.profile.mjs` (legal). Политика — `/politika-konfidencialnosti/`.
3. **Фото** — положить в `public/images/` (см. `public/images/README.txt`): `olga.jpg`, `logo.svg`,
   `zhk/<slug>.jpg`. Портрет реального эксперта не генерировать.
4. **Метрика** — `PUBLIC_METRIKA_ID` в `.env` (иначе баннер не показывается).
5. **Заявки** — заполнить `TELEGRAM_BOT_TOKEN`/`TELEGRAM_CHAT_ID` на хостинге (env) для
   `public/api/lead.php`.

## Автопилот (egorov_seo)
1. `cp .env.example .env` и заполнить ключи (xmlstock, LLM-провайдер, Вебмастер/Метрика, Telegram, FTP).
2. `node scripts/seo-agent/test-apis.mjs` — проверить интеграции.
3. `DRY_RUN=true MAX_NEW_PAGES=1 node scripts/seo-agent/run.mjs` — холостой прогон.
4. Боевой cron: `run.mjs` + `daily-report.mjs`; бот — через `ecosystem.config.cjs` (pm2).
5. Обогащение тонких страниц: `node scripts/seo-agent/expand-existing.mjs`.

Подробности — в `STATUS.md` и в скилле `egorov_seo`.
