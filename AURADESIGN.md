---
name: novostroikibransk — Ольга Валентинова
description: Персональный сайт эксперта по недвижимости в Брянске (новостройки, вторичка, загородка) с SEO/GEO-автопилотом egorov_seo.
niche: real-estate-expert-bryansk
source_reference: "3-е фото брифа — лендинг «МАКСИМУМ» (механика секций); визитка — бренд «Макромир»"
colors:
  paper: "#f6f2ea"        # тёплая бумага (фон)
  paper_2: "#efe8db"      # вторичный фон секций
  surface: "#ffffff"      # карточки
  sand: "#ece3d2"         # песочный, заглушки/теги
  ink: "#1f1b16"          # тёплый графит (текст, тёмные секции)
  ink_2: "#3a342c"
  muted: "#6e6558"
  muted_2: "#8a8072"
  line: "#e6dccb"
  line_strong: "#d8ccb6"
  terracotta: "#b4552d"   # primary accent (CTA, акценты)
  terracotta_dark: "#8f4020"
  terracotta_soft: "#f3e3d9"
  ochre: "#c08a2e"        # secondary accent (на тёмном фоне)
  ochre_soft: "#f2e6cd"
  dark: "#201c17"         # тёмные секции (warm charcoal)
  on_dark: "#f6f2ea"
  on_dark_muted: "#c9bfae"
  success: "#4a6b4f"
  danger: "#a3372a"
typography:
  display: { family: "Prata", fallback: "Georgia, 'Times New Roman', serif", weights: [400] }
  body: { family: "Manrope", fallback: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", weights: [400, 500, 600, 700, 800] }
  scale: { h1: "clamp(32px,5.2vw,58px)", h2: "clamp(26px,3.8vw,42px)", h3: "clamp(19px,2.2vw,24px)", body: "17px", lead: "clamp(17px,2vw,20px)" }
  tracking: { display: "-0.01em", eyebrow: "0.12em" }
spacing:
  section_y: "clamp(56px,8vw,104px)"
  container: "1180px"
  gutter: "clamp(18px,4vw,28px)"
radii: { sm: "10px", base: "14px", lg: "22px", xl: "30px", pill: "999px" }
borders: { width: "1px", width_strong: "1.5px", color: "var(--line)", color_strong: "var(--line-strong)" }
shadows:
  sm: "0 2px 8px rgba(31,27,22,.05)"
  base: "0 10px 30px rgba(31,27,22,.07)"
  lg: "0 24px 60px rgba(31,27,22,.12)"
components:
  button_primary: "terracotta bg, #fff text, pill radius, shadow terracotta .28"
  button_dark: "ink bg, on_dark text, pill"
  button_ghost: "transparent bg, ink text, 1.5px line-strong border, pill"
  button_on_dark_ghost: "transparent bg, on_dark text, rgba(246,242,234,.35) border"
  card: "surface bg, 1px line border, r-lg, shadow-sm; hover translateY(-4px)+shadow"
  icon_badge: "52px, r 14px, terracotta-soft bg, terracotta icon (ochre variant)"
  factbox: "ochre-soft bg, #e6d3a8 border, r-base"
  tag: "sand bg pill; tag--terracotta = terracotta-soft/terracotta-dark"
  faq: "native <details>, surface card, +/− mark terracotta"
motion:
  ease: "cubic-bezier(.22,1,.36,1)"
  hover_lift: "translateY(-2px) кнопки, -4px карточки"
  durations: { fast: "160ms", base: "200ms", slow: "500ms" }
  reduced_motion: "обнуляет анимации через @media (prefers-reduced-motion)"
assets:
  portrait: "/images/olga.jpg (реальное фото, НЕ генерировать — E-E-A-T)"
  logo: "/images/logo.svg (Макромир)"
  og: "/images/og-default.jpg (1200×630, сгенерирован локально)"
  zhk: "/images/zhk/<slug>.jpg (опционально; иначе типографическая заглушка)"
  generation: "MCP KV недоступен → fallback: CSS/SVG-формы + реальное фото (осознанно, без пиксельных заглушек)"
---

# AURADESIGN.md — дизайн-контракт сайта «Новостройки Брянска»

## 1. Доктрина репликации источника

Референс (3-е фото) — лендинг «МАКСИМУМ»: белый/тёмный ритм секций, нумерованные карточки `01–04`, сетка из трёх колонок, тёмные CTA-секции, аккордеон FAQ на нативных `<details>`, длинный одностраничник с финальной лентой. Мы переносим **механику** (структуру и ритм секций), но меняем **палитру на тёплый премиум-недвижимость** (графит + терракота + охра на тёплой бумаге) по решению заказчика (гибрид). Визитка «Макромир» даёт бренд-факты и оранжево-чёрную айдентику — от неё берём тёплый акцент (терракота/охра вместо чистого оранжевого).

Композиционный замок (не менять без запроса): hero с портретом справа и «плавающими» карточками доверия; нумерованные шаги `01–08`; тёмная секция «Об эксперте»; финальная тёмная CTA-лента со свечением.

## 2. Философия

Спокойная, «бумажная» премиальность вместо кричащих градиентов. Много воздуха, крупная серифная типографика (Prata) в заголовках и чистый гротеск (Manrope) в тексте. Тёплые тени, скругления, песочные подложки. Эмоция: доверие и надёжность эксперта, а не агрессивные продажи.

## 3. Цвет и контраст

- Фон — тёплая бумага `--paper`; секции чередуются с `--paper-2` и тёмными `--dark`.
- Акцент действия — только `--terracotta`; на тёмном фоне акценты — `--ochre` (терракота на графите даёт недостаточный контраст).
- Текст на тёмном — `--on-dark`/`--on-dark-muted`; никогда не оставлять тёмный текст на тёмном фоне.
- Primary CTA всегда залит; ghost-кнопки — с явной обводкой `--line-strong`.
- Контраст текста ≥ 4.5:1; крупных заголовков ≥ 3:1.

## 4. Типографика

- Заголовки: `Prata` (400), tracking −0.01em, `text-wrap: balance` для h1–h2.
- Body: `Manrope` 450/500; лиды — 17–20px, `--muted`.
- Eyebrow: uppercase, 13px, 700, tracking 0.12em, терракота/охра, с риской-линией.
- Кириллица обязательна у обоих семейств (проверено: Prata и Manrope содержат Cyrillic).

## 5. Сетка и layout

- Контейнер 1180px, боковые отступы `clamp(18px,4vw,28px)`.
- Сетки: `.grid--2/3/4`; на ≤980px — 2 колонки, ≤640px — 1.
- Вертикальный ритм секций — `--section-y`.
- `trailingSlash: 'always'`, статический HTML; `inlineStylesheets: 'never'` (иначе Astro теряет scoped-стили).

## 6. Компоненты

- **Кнопки:** `.btn` + модификаторы `--primary/--dark/--ghost/--light/--on-dark-ghost/--sm/--block`. Радиус pill, padding 14/26.
- **Карточки:** `.card` (surface, border, r-lg, shadow-sm), hover-подъём.
- **IconBadge:** 52px, terracotta-soft; ochre-вариант для тёмных/акцентных секций.
- **Hero:** портрет в рамке r-xl 4:5, две плавающие карточки (агентство, отзывы), бейджи-сегменты.
- **Steps:** `01–08`, вертикальный ритм, липкий заголовок слева на десктопе.
- **Faqs:** `<details>`, крестик-плюс терракотовый; дублируется как FAQPage JSON-LD.
- **LeadForm:** поля имя/контакт/сообщение, honeypot `company`, обязательный чекбокс согласия, статусы ok/error, POST на `SITE.leadEndpoint`.
- **Header:** sticky, blur, мобильное меню на кнопке-бургере; активная ссылка — терракота.
- **Footer:** тёмный, 4 колонки, реквизиты оператора ПДн, политика.

## 7. Motion

Осмысленный и тихий: hover-подъём кнопок (−2px) и карточек (−4px), zoom фото ЖК при hover, transition 160–200ms `--ease`. Ticker/parallax отсутствуют. `prefers-reduced-motion` обнуляет анимации.

## 8. Ассеты

MCP KV в среде недоступен → осознанный fallback: реальное фото Ольги, SVG-иконки (собственный набор `Icon.astro`), CSS/SVG-заглушки для ЖК (типографические, не «битые картинки»), локально сгенерированная OG-обложка. Портрет реального эксперта **не генерируем** (E-E-A-T). Реестр — `AURA_ASSET_REGISTRY.json`.

## 9. Адаптив

Брейкпоинты: 1080px (меню), 980px (сетки), 880px (двухколоночные секции), 640px (одна колонка), 560/520px (мелкие правки hero/footer). Проверять переполнение на 360px.

## 10. Доступность

Skip-link, `aria-label` на иконочных ссылках, `aria-current` на активной навигации, `alt` у всех изображений, focus-visible контур терракотовый, нативные `<details>` для FAQ, контраст по WCAG AA.

## 11. Анти-паттерны (запрещено)

- Эмодзи в UI (заменены на SVG `Icon.astro`).
- Тёмный текст на тёмном / белый на белом.
- Прозрачная primary-кнопка.
- Холодные синие градиенты и «generic AI slop».
- Портрет-вырезка с обрывом снизу (используется рамка, а не cutout).
- Выдуманные цены/сроки/отзывы — всё с пометкой «уточняется» или вынесено на внешние площадки.

## 12. QA-чеклист

- [x] Сборка `astro build` без ошибок (28 страниц).
- [x] `astro check` — 0 ошибок.
- [x] on-page аудит dist — 0 критично, 0 предупреждений.
- [x] schema-validate — 0 критично.
- [x] canonical + JSON-LD на каждой боевой странице.
- [x] robots.txt для AI-ботов + llms.txt + sitemap.
- [x] 152-ФЗ: политика, cookie-баннер с гейтингом Метрики, чекбокс, реквизиты.
- [ ] Заполнить реальные фото (`public/images/`) и реквизиты (`src/consts.ts`, `site.profile.mjs`).
- [ ] Домен заменить с `novostroikibransk.ru` на боевой.

## 13. AI prompt integration

Для воспроизведения: `Собери Astro-сайт с токенами из frontmatter AURADESIGN.md (тёплый премиум: paper #f6f2ea, ink #1f1b16, terracotta #b4552d, ochre #c08a2e). Шрифты Prata + Manrope. Механика референса: нумерованные шаги, карточки, тёмные секции, FAQ-аккордеон. Без эмодзи, без холодных градиентов.`
