# AURA_FONT_MATCH.md

## Выбор (по skill aura-cyrillic-google-fonts)
- **Display:** `Prata` — editorial/luxury serif, поддержка кириллицы есть. Характер: спокойная премиальность, «дорогая» подача без излишней декоративности. Вес 400 (единственный у гарнитуры).
- **Body:** `Manrope` — современный гротеск, отличная кириллица, веса 400–800. Характер: чистый, нейтральный, читаемый в интерфейсе.
- **Пара:** `Prata + Manrope` из категории Luxury/Editorial каталога скилла.

## Подключение
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Prata&display=swap');
```
Используется `display=swap`; подключены только нужные веса.

## Проверка кириллицы
- Prata: subsets latin, latin-ext, cyrillic, cyrillic-ext, vietnamese — ✅.
- Manrope: subsets latin, latin-ext, cyrillic, cyrillic-ext, greek, vietnamese — ✅.

## Иерархия
| Роль | Шрифт | Размер | Трекинг |
|---|---|---|---|
| H1 | Prata | clamp(32,5.2vw,58) | −0.01em |
| H2 | Prata | clamp(26,3.8vw,42) | −0.01em |
| H3 | Prata | clamp(19,2.2vw,24) | −0.01em |
| Lead | Manrope 450 | clamp(17,2vw,20) | 0 |
| Body | Manrope 450 | 17 | 0 |
| Eyebrow | Manrope 700 | 13 | 0.12em uppercase |
| Button | Manrope 700 | 15.5 | 0.01em |

## Альтернативы (если Prata не подойдёт по вкусу)
`Playfair Display + Manrope`, `Cormorant Garamond + Manrope`, `Lora + Source Sans 3` — все с кириллицей.

## Запреты
Не использовать Clash Display / Satoshi / Neue Montreal / Space Grotesk для русского текста (нет гарантированной кириллицы). Не более двух семейств на странице — соблюдено.
