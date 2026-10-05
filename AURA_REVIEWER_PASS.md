# AURA_REVIEWER_PASS.md

Второй проход: readonly визуальный QA (`aura-design-reviewer`) + исправления.

## Найдено и исправлено

| # | Проблема | Severity | Исправление | Файлы |
|---|---|---|---|---|
| 1 | `olga.jpg` отсутствует, `<img>` в 4 местах без fallback → битые картинки | 🔴 crit | Введён компонент `Portrait.astro` с `onerror` → аккуратная заглушка (инициалы «ОВ»); применён в hero, «Об эксперте», странице эксперта, авторе статьи | `src/components/Portrait.astro`, `blocks/Hero.astro`, `pages/index.astro`, `pages/o-eksperte/index.astro`, `pages/blog/[...slug].astro` |
| 2 | `logo.svg` отсутствует, но заявлен в JSON-LD `Organization.logo` | 🔴 crit | Создан реальный `public/images/logo.svg` (типографский лого) | `public/images/logo.svg` |
| 3 | Терракота на бумаге = 4.40 (<4.5 AA) | 🟠 warn | `--terracotta` → `#a94b25` (5.06 на paper, 5.64 на white) | `src/styles/global.css` |
| 4 | `--muted-2` #8a8072 = 3.48 для мелкого текста | 🟠 warn | `--muted-2` → `#746b5e` (4.69 на paper) | `src/styles/global.css` |
| 5 | Охра на охровой подложке = 2.45 | 🟠 warn | Добавлен `--ochre-dark #8a5f14` (4.55); применён в `icon-badge--ochre` и `zhk-detail__note` | `src/styles/global.css`, `pages/novostroyki/[slug].astro` |
| 6 | Риск overflow шапки на 360px | 🟠 warn | `.brand{min-width:0}`, `.brand__name` ellipsis + `max-width:42vw`, скрытие имени <420px | `src/components/Header.astro` |

## Отклонено с обоснованием
- **`ApartmentComplex` без `offers`/`image`** — данные по ценам/срокам ЖК не подтверждены (E-E-A-T): не добавляем выдуманные offers.
- **`<title>` 74–105 символов** — ложное срабатывание из-за чтения UTF-8 в PowerShell ANSI; фактическая максимальная длина `<title>` = **56 символов** (проверено Node).
- **Шрифты через `@import` / 19 CSS-файлов** — перф-замечание, не визуальный блокер; preconnect уже есть.

## Повторная проверка после правок
- `npm run build` — 28 страниц, 0 ошибок.
- `npx astro check` — 0 ошибок, 1 hint.
- `node scripts/local-audit.mjs` — on-page 0 критично / 0 предупреждений; schema 42 блока, 0 критично.
- Максимальная длина `<title>` — 56; `<img>` без alt — 0; `onerror`-заглушка присутствует; `logo.svg` в dist.

## Остаточные пробелы (вне правок)
- Нет реальных фото Ольги/ЖК (загружает заказчик) — сейчас осознанный fallback.
- Нет рендер-теста (Playwright/Lighthouse) — оценки адаптива аналитические.
