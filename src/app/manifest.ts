import type {MetadataRoute} from 'next';
import {BASE_PATH, SITE_DESCRIPTION, SITE_NAME, withBase} from 'config/site';

export const dynamic = 'force-static';

const manifest = (): MetadataRoute.Manifest => ({
  name: SITE_NAME,
  short_name: 'Інна Ларіна',
  description: SITE_DESCRIPTION,
  lang: 'uk',
  dir: 'ltr',
  start_url: `${BASE_PATH}/`,
  scope: `${BASE_PATH}/`,
  display: 'standalone',
  background_color: '#fdf4ee',
  theme_color: '#6f5bd1',
  icons: [
    {src: withBase('/images/icon-192.png'), sizes: '192x192', type: 'image/png', purpose: 'any'},
    {src: withBase('/images/icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'any'},
  ],
});

export default manifest;
