# STATUS.md — состояние проекта и онбординг

## Что сделано
- Полный многостраничный Astro-сайт (28 страниц): главная, новостройки (хаб + 8 ЖК), вторичка,
  загород, 6 услуг, об эксперте, отзывы, кейсы, блог (2 статьи), контакты, политика, 404.
- Дизайн-система «тёплый премиум» (графит/терракота/охра, Prata+Manrope), адаптив, motion.
- SEO/GEO: canonical, JSON-LD @graph (WebSite, RealEstateAgent, Person, BlogPosting, FAQPage,
  BreadcrumbList, ItemList/ApartmentComplex), robots.txt для AI-ботов, llms.txt, sitemap.
- 152-ФЗ: политика текстом, cookie-баннер с гейтингом Метрики, чекбокс согласия, реквизиты в подвале.
- Форма заявки (honeypot + consent) → PHP-форвардер → Telegram/MAX.
- Ядро `egorov_seo` подключено: `site.profile.mjs`, `scripts/`, `ecosystem.config.cjs`.
- Aura-артефакты: `AURADESIGN.md`, `AURA_SOURCE_ANALYSIS.md`, `AURA_REPLICATION_TODO.md`,
  `AURA_BRAND_KIT_IMAGE_PROMPT.md`, `AURA_COLOR_PSYCHOLOGY.md`, `AURA_SHAPE_MAP.json`,
  `AURA_FONT_MATCH.md`, `AURA_VISUAL_DIFF.md`, `AURA_ASSET_REGISTRY.json`.

## Проверки (зелёные)
- `npm run build` — 28 страниц, 0 ошибок.
- `npx astro check` — 0 ошибок.
- `node scripts/local-audit.mjs` — on-page: 0 критично / 0 предупреждений; schema: 0 критично.
- Тонкие страницы — 14 (8 карточек ЖК, listing /blog/, /kontakty, /otzyvy, /keysy и др.) —
  это очередь на обогащение, а не блокеры. Основной контент (2 статьи, 6 услуг) — в норме.

## Не сделано / требует данных
1. Реальные фото (портрет, лого, ЖК) — `public/images/`.
2. Реквизиты оператора ПДн (ОГРНИП/ИНН) — `src/consts.ts`, `site.profile.mjs`.
3. Боевой домен.
4. `.env` с ключами и запуск `test-apis.mjs`.
5. Деплой на хостинг + настройка cron/бота.
6. Обогащение тонких страниц (`expand-existing.mjs`, ЖК-enrichment).

## Онбординг нового сайта (напоминание ядра)
1. Заполнить `site.profile.mjs` (сделано).
2. `.env` по `.env.example`.
3. Проверить `@astrojs/mdx` (подключён).
4. `test-apis.mjs`.
5. Подтвердить сайт в Вебмастере, добавить sitemap, создать счётчик Метрики.
6. Положить `lead.php` на хостинг (в проекте: `public/api/lead.php`).
7. Развернуть 152-ФЗ (сделано).
8. `DRY_RUN=false run.mjs` + проверить 200 на опубликованном URL.
9. Cron `daily-report.mjs`.

## Риски
- Нет MCP KV → генеративные картинки недоступны (fallback осознанный).
- Нет ключей → автопилот не запускается; сайт при этом собирается и деплоится.
- Портрет/лого/фото ЖК — плейсхолдеры до загрузки реальных файлов.
