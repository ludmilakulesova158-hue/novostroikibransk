# AURA_BRAND_KIT_IMAGE_PROMPT.md

> Brand-kit изображение не сгенерировано: MCP KV (`user-mcp-kv/gpt-image-2`) в среде недоступен.
> Ниже — готовый промпт для генерации одной большой brand-kit картинки на одном холсте.

**Tool:** `user-mcp-kv/gpt-image-2` (или любой text-to-image).

**Prompt (EN):**
"Single large brand-kit board for a premium real-estate expert website, warm premium palette: warm ivory paper #f6f2ea, warm graphite #1f1b16, terracotta #b4552d, ochre #c08a2e. Layout as multiple labeled mini-slides on one canvas: (1) color palette swatches with hex codes, (2) typography specimen — elegant serif 'Prata' for headings and clean sans 'Manrope' for body, (3) background textures (warm paper, subtle sand), (4) UI components — pill primary button in terracotta, ghost button, card with soft shadow, icon badges, tags, FAQ accordion, (5) hero composition — portrait frame on the right with two floating trust cards, (6) real-estate icons (building, key, shield, map-pin) in a consistent 1.7px line style, (7) responsive preview desktop + mobile. Clean, editorial, calm, high-end, no emojis, no cold blue gradients, generous whitespace."

**Fallback (использован в проекте):** brand-kit собран как код — токены в `AURADESIGN.md` + живой CSS в `src/styles/global.css` + компоненты `src/components/*`. Это даёт тот же результат (воспроизводимость) без генерации растрового холста.
