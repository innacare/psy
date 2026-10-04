import type {MetadataRoute} from 'next';
import {PAGE_URL} from 'config/site';

export const dynamic = 'force-static';

const sitemap = (): MetadataRoute.Sitemap => [
  {url: PAGE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1},
];

export default sitemap;
