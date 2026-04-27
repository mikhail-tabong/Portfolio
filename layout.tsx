import type { Metadata } from 'next';
import { DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mikhail "Kyle" Tabong | Data & Compliance Analyst',
  description: 'Mikhail (Kyle) Tabong — Financial Crimes Compliance Analyst at Protiviti. Portfolio of data analytics, ML, and ETL projects.',
  themeColor: '#00FFA3',
  openGraph: {
    title: 'Mikhail "Kyle" Tabong | Portfolio',
    type: 'website',
    url: 'https://mikhail-tabong.github.io/',
    images: ['/profile.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans bg-bg0 text-txt">
        {children}
      </body>
    </html>
  );
}
