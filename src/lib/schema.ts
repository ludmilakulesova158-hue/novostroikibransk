// JSON-LD @graph builders (GEO/SEO). Вставляются server-side через <script type="application/ld+json">.
import { SITE } from '../consts';

const abs = (u?: string) => (!u ? undefined : /^https?:/.test(u) ? u : `${SITE.url}${u.startsWith('/') ? '' : '/'}${u}`);

export function personNode() {
  return {
    '@type': 'Person',
    '@id': `${SITE.url}/#person`,
    name: SITE.name,
    jobTitle: SITE.role,
    url: `${SITE.url}/o-eksperte/`,
    image: abs('/images/olga.jpg'),
    telephone: SITE.phone,
    email: SITE.email,
    worksFor: { '@id': `${SITE.url}/#org` },
    sameAs: [SITE.vk, SITE.max],
    knowsAbout: [
      'новостройки Брянска',
      'вторичная недвижимость',
      'загородная недвижимость',
      'ипотека',
      'проверка юридической чистоты',
      'сопровождение сделок с недвижимостью',
    ],
  };
}

export function orgNode() {
  return {
    '@type': 'Organization',
    '@id': `${SITE.url}/#org`,
    name: SITE.agency,
    url: SITE.url,
    logo: abs('/images/logo.svg'),
  };
}

export function realEstateAgentNode() {
  return {
    '@type': 'RealEstateAgent',
    '@id': `${SITE.url}/#business`,
    name: SITE.brand,
    image: abs('/images/olga.jpg'),
    url: `${SITE.url}/`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '₽₽',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Дуки, 63, ТЦ «Соловьи», 2 этаж',
      addressLocality: SITE.city,
      addressRegion: 'Брянская область',
      postalCode: '241007',
      addressCountry: 'RU',
    },
    areaServed: [
      { '@type': 'City', name: 'Брянск' },
      { '@type': 'AdministrativeArea', name: 'Брянская область' },
    ],
    founder: { '@id': `${SITE.url}/#person` },
    openingHours: 'Mo-Su 09:00-20:00',
    sameAs: [SITE.vk, SITE.max],
  };
}

export function websiteGraph({ searchUrlTemplate }: { searchUrlTemplate?: string } = {}) {
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: `${SITE.url}/`,
      name: SITE.brand,
      inLanguage: 'ru-RU',
      publisher: { '@id': `${SITE.url}/#org` },
      ...(searchUrlTemplate
        ? {
            potentialAction: {
              '@type': 'SearchAction',
              target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}${searchUrlTemplate}` },
              'query-input': 'required name=search_term_string',
            },
          }
        : {}),
    },
    orgNode(),
    personNode(),
    realEstateAgentNode(),
  ];
  return { '@context': 'https://schema.org', '@graph': graph };
}

type Faq = { q: string; a: string };

export function articleGraph(p: {
  title: string;
  description: string;
  url: string;
  datePublished: Date | string;
  dateModified?: Date | string;
  image?: string;
  keyword?: string;
  faq?: Faq[];
  section?: string;
}) {
  const url = abs(p.url)!;
  const iso = (d: Date | string) => new Date(d).toISOString().slice(0, 10);
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: p.title,
      description: p.description,
      inLanguage: 'ru-RU',
      mainEntityOfPage: url,
      datePublished: iso(p.datePublished),
      dateModified: iso(p.dateModified ?? p.datePublished),
      articleSection: p.section,
      image: abs(p.image ?? '/images/og-default.jpg'),
      keywords: p.keyword,
      author: { '@id': `${SITE.url}/#person` },
      publisher: { '@id': `${SITE.url}/#org` },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.prose > p:first-of-type', '.prose h2'] },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: p.section ?? 'Блог', item: `${SITE.url}${p.section === 'Услуги' ? '/uslugi/' : '/blog/'}` },
        { '@type': 'ListItem', position: 3, name: p.title, item: url },
      ],
    },
    personNode(),
    orgNode(),
  ];
  if (p.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: p.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function breadcrumbsNode(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.href),
    })),
  };
}

export function zhkItemListGraph(items: { name: string; url: string; district: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Новостройки Брянска',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'ApartmentComplex',
        name: it.name,
        url: abs(it.url),
        address: {
          '@type': 'PostalAddress',
          addressLocality: SITE.city,
          addressRegion: `Брянская область, ${it.district} район`,
          addressCountry: 'RU',
        },
      },
    })),
  };
}
