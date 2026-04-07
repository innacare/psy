import {ReactNode} from 'react';
import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import './globals.css';

const roboto = Roboto({subsets: ['latin'], weight: ['400', '700', '900']});

export const metadata: Metadata = {
  title: 'Ларіна Інна — психолог у Києві | Депресія, тривога, вигорання',
  description:
    'Ларіна Інна — практикуючий психолог у Києві. Допомога при депресії, тривожних розладах, стресі, емоційному вигоранні та прокрастинації. Онлайн та офлайн консультації.',
  keywords: [
    'психолог Київ',
    'психолог онлайн',
    'депресія допомога',
    'тривога лікування',
    'емоційне вигорання',
    'стрес психолог',
    'прокрастинація допомога',
    'психотерапія Київ',
    'консультація психолога',
    'Ларіна Інна психолог',
  ],
  authors: [{name: 'Ларіна Інна'}],
  creator: 'Ларіна Інна',
  publisher: 'Ларіна Інна',
  metadataBase: new URL('https://innacare.github.io/'),
  alternates: {
    canonical: '/psy',
  },
  openGraph: {
    title: 'Ларіна Інна — психолог у Києві',
    description:
      'Допомога при депресії, тривозі, стресі, вигоранні та прокрастинації. Психолог у Києві. Онлайн та офлайн консультації.',
    url: 'https://innacare.github.io/psy',
    siteName: 'Ларіна Інна — психолог',
    images: [
      {
        url: '/psy/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Ларіна Інна психолог',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ларіна Інна — психолог у Києві',
    description: 'Психологічна допомога: депресія, тривога, стрес, вигорання, прокрастинація.',
    images: ['https://innacare.github.io/psy/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  manifest: '/psy/manifest.json',
  icons: {
    icon: '/psy/favicon.ico',
    shortcut: '/psy/favicon.ico',
  },
};

const RootLayout = ({children}: Readonly<{children: ReactNode}>) => (
  <html lang="uk">
    <body className={roboto.className}>{children}</body>
  </html>
);

export default RootLayout;
