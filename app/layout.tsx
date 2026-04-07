import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Snehal Yelle | Brand Content Strategist',
  description:
    'Snehal Yelle is a Brand Content Strategist with 7+ years of experience crafting award-winning 360° campaigns for OTT, television & film — Sony LIV, Zee TV, Dharma Productions and more. Based in Mumbai, India.',
  keywords: [
    'Snehal Yelle',
    'Brand Content Strategist',
    'Content Marketing',
    'Entertainment Marketing',
    'OTT Marketing',
    'Mumbai',
    'Sony LIV',
    'Zee TV',
    'Dharma Productions',
  ],
  authors: [{ name: 'Snehal Yelle' }],
  creator: 'Snehal Yelle',
  openGraph: {
    type: 'website',
    title: 'Snehal Yelle | Brand Content Strategist',
    description:
      '7+ years crafting award-winning campaigns for OTT, television & film. Sony LIV, Zee TV, Dharma Productions and more.',
    siteName: 'Snehal Yelle Portfolio',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snehal Yelle | Brand Content Strategist',
    description:
      '7+ years crafting award-winning campaigns for OTT, television & film.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.variable} ${playfair.variable} portfolio-body`}>
        {children}
      </body>
    </html>
  );
}
