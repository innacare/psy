import {ReactNode} from 'react';
import type {Metadata, Viewport} from 'next';
import {Comfortaa, Nunito} from 'next/font/google';
import JsonLd from 'components/JsonLd';
import {PAGE_URL, PERSON_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_ORIGIN, SITE_TITLE} from 'config/site';
import './globals.css';

const comfortaa = Comfortaa({subsets: ['latin', 'cyrillic'], weight: ['500', '600', '700'], variable: '--font-comfortaa'});
const nunito = Nunito({subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700', '800'], variable: '--font-nunito'});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'психолог онлайн',
    'психолог КПТ',
    'когнітивно-поведінкова терапія',
    'психолог тривога',
    'психолог депресія',
    'емоційне вигорання',
    'РДУГ',
    'консультація психолога онлайн',
    PERSON_NAME,
  ],
  authors: [{name: PERSON_NAME, url: PAGE_URL}],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,
  alternates: {canonical: PAGE_URL},
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'uk_UA',
  },
  twitter: {card: 'summary_large_image', title: SITE_TITLE, description: SITE_DESCRIPTION},
  robots: {
    index: true,
    follow: true,
    googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1},
  },
  formatDetection: {telephone: false},
  verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
    ? {google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}
    : undefined,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fdf4ee',
};

const RootLayout = ({children}: Readonly<{children: ReactNode}>) => (
  <html lang="uk" className={`${comfortaa.variable} ${nunito.variable}`}>
    <body>
      {children}
      <JsonLd />
    </body>
  </html>
);

export default RootLayout;
