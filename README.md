# Інна Ларіна — психолог

Односторінковий сайт на Next.js (static export) для GitHub Pages.

```
npm run dev      # локальна розробка: http://localhost:3000/psy/
npm run build    # статичний експорт у out/
npm run deploy   # публікація out/ у gh-pages
```

## Адреса сайту та SEO

Адреса задається в одному місці: `src/app/config/site.ts` (`SITE_ORIGIN`, `BASE_PATH`).
Від неї залежать `basePath` у `next.config.ts`, canonical, Open Graph, sitemap, robots, manifest і JSON-LD.

Перехід на власний домен: `SITE_ORIGIN = 'https://your-domain'`, `BASE_PATH = ''`, потім `npm run build`.

Google Search Console: код підтвердження береться зі змінної `NEXT_PUBLIC_GOOGLE_VERIFICATION` (мета-тег додається, якщо вона задана).

## Контакти

```
Telegram: @larinna21
Phone: +380933076225
```
