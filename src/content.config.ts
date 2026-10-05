import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro:schema';

const seoSchema = z.object({
  title: z.string(),
  seoTitle: z.string().optional(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updated: z.coerce.date().optional(),
  category: z.string().default('Недвижимость'),
  keywords: z.array(z.string()).default([]),
  tldr: z.string().optional(),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: seoSchema,
});

const uslugi = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/uslugi' }),
  schema: seoSchema.extend({
    icon: z.string().default('service'),
    order: z.number().default(99),
  }),
});

const zhk = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/zhk' }),
  schema: z.object({
    name: z.string(),
    shortName: z.string().optional(),
    developer: z.string().default(''),
    district: z.string(),
    address: z.string().default(''),
    type: z.string().default(''),
    class: z.string().optional(),
    status: z.string().default('Данные уточняются'),
    delivery: z.string().default('Уточняется'),
    priceFrom: z.string().default('Уточняется'),
    priceM2: z.string().default('Уточняется'),
    rooms: z.array(z.string()).default([]),
    features: z.array(z.string()).default([]),
    description: z.string().default(''),
    image: z.string().optional(),
    mapUrl: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { blog, uslugi, zhk };
