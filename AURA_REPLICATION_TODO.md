# AURA_REPLICATION_TODO.md

## Сделано
- [x] Скаффолд Astro 5 + MDX + sitemap, `inlineStylesheets:'never'`.
- [x] Токены тёплого премиума (global.css) + шрифты Prata/Manrope.
- [x] BaseLayout: canonical, OG, JSON-LD слот, skip-link, cookie-баннер.
- [x] Header (sticky, мобильное меню), Footer (реквизиты, политика).
- [x] Компоненты: Icon (SVG-набор), LeadForm (honeypot+consent), Breadcrumbs, ZHKCard, Reviews.
- [x] Блоки: Hero, Features, Steps, Faqs, CallToAction.
- [x] Страницы: главная, новостройки (хаб+8 ЖК), вторичка, загород, услуги (6), об эксперте, отзывы, кейсы, блог (2 статьи), контакты, политика, 404.
- [x] Schema: WebSite/RealEstateAgent/Person/BlogPosting/FAQPage/Breadcrumb/ItemList.
- [x] GEO: robots.txt для AI-ботов, llms.txt, sitemap.
- [x] 152-ФЗ: 4 элемента.
- [x] OG-обложка сгенерирована локально.
- [x] Проверки: build, astro check, on-page, schema-validate.

## Осталось (вне текущей сборки)
- [ ] Реальные фото: `public/images/olga.jpg`, `logo.svg`, `zhk/<slug>.jpg`.
- [ ] Реальные реквизиты оператора ПДн (ОГРНИП/ИНН) в `src/consts.ts` и `site.profile.mjs`.
- [ ] Боевой домен (сейчас `novostroikibransk.ru`) в `astro.config.mjs`, `consts.ts`, `site.profile.mjs`, `robots.txt`, `llms.txt`.
- [ ] `.env` с ключами + `node scripts/seo-agent/test-apis.mjs`.
- [ ] Деплой: `npm run build && python scripts/deploy-ftp.py`.
- [ ] Включить автопилот: cron `run.mjs` + `daily-report.mjs`, бот через pm2.
- [ ] Обогатить тонкие страницы: `expand-existing.mjs` (ЖК-карточки — bespoke).
