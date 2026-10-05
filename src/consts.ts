// Единый источник фактов о сайте/эксперте. Используется в layout, schema, подвале, форме.

export const SITE = {
  url: 'https://novostroikibransk.ru',
  name: 'Ольга Валентинова',
  brand: 'Валентинова Ольга — эксперт по недвижимости в Брянске',
  role: 'Эксперт по недвижимости',
  tagline: 'Новостройки, вторичка и загородная недвижимость в Брянске',
  description:
    'Ольга Валентинова — эксперт по недвижимости в Брянске. Подберу новостройку, вторичку или загородный дом, ' +
    'проверю объект, одобрю ипотеку и проведу сделку «под ключ».',
  phone: '+7 920 855-20-51',
  phoneHref: 'tel:+79208552051',
  email: 'olga.valentinova.79@mail.ru',
  address: '241007, г. Брянск, ул. Дуки, 63, ТЦ «Соловьи», 2 этаж',
  addressShort: 'ул. Дуки, 63, ТЦ «Соловьи», 2 этаж',
  city: 'Брянск',
  region: 'Брянская область',
  agency: 'Агентство недвижимости «Макромир»',
  vk: 'https://vk.ru/id180315617',
  max: 'https://max.ru/u/f9LHodD0cOITcTPpW4TE72IZbjA2odBHE1xDL_i165VBSv4XZ0X94KMRkPs',
  metrikaId: import.meta.env.PUBLIC_METRIKA_ID ?? '',
  leadEndpoint: import.meta.env.PUBLIC_LEAD_ENDPOINT ?? '/api/lead.php',
  policyPath: '/politika-konfidencialnosti/',
} as const;

export const LEGAL = {
  entityName: 'ИП Валентинова Ольга',
  ogrnip: '',
  inn: '',
  address: SITE.address,
  email: SITE.email,
  phone: SITE.phone,
  phoneHref: SITE.phoneHref,
} as const;

type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: 'Новостройки', href: '/novostroyki/' },
  { label: 'Вторичка', href: '/vtorichka/' },
  { label: 'Загород', href: '/zagorod/' },
  { label: 'Услуги', href: '/uslugi/' },
  { label: 'Об эксперте', href: '/o-eksperte/' },
  { label: 'Отзывы', href: '/otzyvy/' },
  { label: 'Блог', href: '/blog/' },
  { label: 'Контакты', href: '/kontakty/' },
];

export const DISTRICTS = [
  'Бежицкий',
  'Володарский',
  'Советский',
  'Фокинский',
  'Брянский район',
] as const;
