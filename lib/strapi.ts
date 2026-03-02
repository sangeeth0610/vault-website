const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const FETCH_TIMEOUT_MS = 8000;

type StrapiFetchOptions = RequestInit & {
  next?: { revalidate?: number };
};

async function strapiFetch<T>(
  endpoint: string,
  options?: StrapiFetchOptions
): Promise<{ data: T }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  const { next, ...fetchOpts } = options ?? {};
  const response = await fetch(`${STRAPI_URL}${endpoint}`, {
    ...fetchOpts,
    signal: controller.signal,
    next: next ?? { revalidate: 60 },
  });
  clearTimeout(timeout);

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status}`);
  }

  return response.json();
}

export function getStrapiMediaUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

// --- About (single type) ---
export interface AboutDetailItem {
  id?: number;
  heading: string;
  body: string;
}

export interface AboutData {
  documentId?: string;
  id?: number;
  title?: string;
  heroImage?: { url: string; alternativeText?: string } | null;
  details?: Array<{ heading?: string; body?: string }>;
  blocks?: unknown[];
}

export async function getAboutPage(): Promise<AboutData | null> {
  try {
    const json = await strapiFetch<AboutData>(
      '/api/about?populate=heroImage,details,blocks'
    );
    const data = json?.data ?? null;
    // Add id to details for React keys (Strapi component has no id)
    if (data?.details) {
      data.details = data.details.map((d, i) => ({
        id: i + 1,
        heading: d?.heading ?? '',
        body: d?.body ?? '',
      })) as AboutDetailItem[];
    }
    return data;
  } catch (error) {
    console.error('Failed to fetch about page from Strapi:', error);
    return null;
  }
}

// --- Global (single type) ---
export interface GlobalData {
  documentId?: string;
  siteName?: string;
  siteDescription?: string;
  favicon?: { url: string } | null;
  defaultSeo?: {
    metaTitle?: string;
    metaDescription?: string;
    shareImage?: { url: string } | null;
  };
}

export async function getGlobal(): Promise<GlobalData | null> {
  try {
    const json = await strapiFetch<GlobalData>(
      '/api/global?populate=favicon,defaultSeo'
    );
    return json?.data ?? null;
  } catch (error) {
    console.error('Failed to fetch global from Strapi:', error);
    return null;
  }
}

// --- Blogs ---
export interface BlogItem {
  documentId: string;
  title?: string;
  description?: string;
  slug?: string;
  publishedAt?: string;
  cover?: { url: string; alternativeText?: string } | null;
  author?: { documentId: string; name?: string } | null;
  category?: { documentId: string; name?: string } | null;
}

export async function getBlogs(): Promise<BlogItem[]> {
  try {
    const json = await strapiFetch<BlogItem[] | BlogItem>(
      '/api/blogs?populate=cover,author,category'
    );
    const data = json?.data;
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Failed to fetch blogs from Strapi:', error);
    return [];
  }
}

export async function getBlogById(id: string): Promise<BlogItem | null> {
  try {
    const json = await strapiFetch<BlogItem>(
      `/api/blogs/${id}?populate=cover,author,category`
    );
    return json?.data ?? null;
  } catch (error) {
    console.error('Failed to fetch blog from Strapi:', error);
    return null;
  }
}

// --- News ---
export interface NewsItem {
  documentId: string;
  title?: string;
  description?: string;
  slug?: string;
  publishedAt?: string;
  cover?: { url: string; alternativeText?: string } | null;
  author?: { documentId: string; name?: string } | null;
}

export async function getNews(): Promise<NewsItem[]> {
  try {
    const json = await strapiFetch<NewsItem[] | NewsItem>(
      '/api/news?populate=cover,author'
    );
    const data = json?.data;
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Failed to fetch news from Strapi:', error);
    return [];
  }
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
  try {
    const json = await strapiFetch<NewsItem>(
      `/api/news/${id}?populate=cover,author`
    );
    return json?.data ?? null;
  } catch (error) {
    console.error('Failed to fetch news from Strapi:', error);
    return null;
  }
}

// --- Events ---
export interface EventDetailBlock {
  header: string;
  description: string;
  image?: { url: string; alternativeText?: string } | null;
}

export interface EventItem {
  documentId: string;
  title?: string;
  date?: string;
  description?: string;
  slug?: string;
  bgImage?: { url: string; alternativeText?: string } | null;
  detailsImage?: EventDetailBlock[] | null;
  participants?: Array<{ url: string; alternativeText?: string }> | null;
  partners?: Array<{ url: string; alternativeText?: string }> | null;
}

type MediaItem = { url: string; alternativeText?: string };
type StrapiMediaArray = { data?: Array<{ attributes?: MediaItem; url?: string }> } | MediaItem[];

function normalizeMediaArray(raw: StrapiMediaArray | null | undefined): MediaItem[] | null {
  if (!raw) return null;
  if (Array.isArray(raw)) {
    return raw.map((p) => ({
      url: (p as MediaItem).url ?? '',
      alternativeText: (p as MediaItem).alternativeText,
    }));
  }
  const data = raw.data;
  if (!Array.isArray(data)) return null;
  return data.map((item) => {
    const attrs = (item as { attributes?: MediaItem }).attributes ?? (item as MediaItem);
    return { url: attrs.url ?? '', alternativeText: attrs.alternativeText };
  });
}

function normalizeMediaSingle(
  raw: { url?: string; alternativeText?: string; data?: { attributes?: MediaItem } } | null | undefined
): MediaItem | null {
  if (!raw) return null;
  if (typeof raw === 'object' && 'url' in raw && raw.url) {
    return { url: raw.url, alternativeText: raw.alternativeText };
  }
  const data = raw as { data?: { attributes?: MediaItem } };
  const attrs = data.data?.attributes;
  return attrs?.url ? { url: attrs.url, alternativeText: attrs.alternativeText } : null;
}

type RawDetailBlock = { header?: string; description?: string; image?: unknown };

function normalizeDetailsImage(raw: RawDetailBlock[] | null | undefined): EventDetailBlock[] | null {
  if (!raw || !Array.isArray(raw)) return null;
  return raw.map((block) => ({
    header: block.header ?? '',
    description: block.description ?? '',
    image: normalizeMediaSingle(block.image as { url?: string; data?: { attributes?: MediaItem } }),
  }));
}

function normalizeEvent(raw: Record<string, unknown>): EventItem {
  const e = raw as unknown as EventItem & {
    participants?: StrapiMediaArray;
    partners?: StrapiMediaArray;
    detailsImage?: RawDetailBlock[];
  };
  const participants = normalizeMediaArray(e.participants);
  const partners = normalizeMediaArray(e.partners);
  const detailsImage = normalizeDetailsImage(e.detailsImage);
  return {
    ...e,
    participants: participants ?? e.participants ?? null,
    partners: partners ?? e.partners ?? null,
    detailsImage: detailsImage ?? e.detailsImage ?? null,
  } as EventItem;
}

const EVENTS_POPULATE =
  'populate[0]=bgImage&populate[1]=participants&populate[2]=partners&populate[3]=detailsImage&populate[4]=detailsImage.image';

export async function getEvents(): Promise<EventItem[]> {
  try {
    const json = await strapiFetch<{ data: EventItem[] | EventItem }>(
      `/api/events?${EVENTS_POPULATE}`
    );
    const data = json?.data;
    const list = Array.isArray(data) ? data : data ? [data] : [];
    return list.map((item) => normalizeEvent(item as Record<string, unknown>));
  } catch (error) {
    console.error('Failed to fetch events from Strapi:', error);
    return [];
  }
}

export async function getEventById(id: string): Promise<EventItem | null> {
  try {
    const json = await strapiFetch<{ data: EventItem }>(
      `/api/events/${id}?${EVENTS_POPULATE}`
    );
    const raw = json?.data ?? null;
    return raw ? normalizeEvent(raw as Record<string, unknown>) : null;
  } catch (error) {
    console.error('Failed to fetch event from Strapi:', error);
    return null;
  }
}
