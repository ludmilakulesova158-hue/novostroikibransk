import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Домен — менять в одном месте: astro.config.mjs (site) + site.profile.mjs (site.url).
export default defineConfig({
  site: 'https://novostroikibransk.ru',
  output: 'static',
  trailingSlash: 'always',
  build: {
    // Astro теряет scoped-стили при 'auto' — держим 'never' (правило ядра egorov_seo).
    inlineStylesheets: 'never',
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [[remarkToc, { heading: '(содержание|оглавление|contents?)', maxDepth: 3 }]],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: ['heading-anchor'] } }],
    ],
  },
});
