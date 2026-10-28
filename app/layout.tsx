import type { Metadata, Viewport } from 'next';
import { Fira_Code, Inter } from 'next/font/google';
import Script from 'next/script';
import { ReactNode } from 'react';
import { siteMetadata } from 'src/configs/siteMetadata';
import 'src/styles/globals.css';

const fira = Fira_Code({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
type Props = Readonly<{ children: ReactNode }>;

const { title, description, url, siteName, keywords, icon, image, twitterHandle, gtmId } =
  siteMetadata;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords,
  applicationName: siteName,
  authors: [{ name: 'Peter', url }],
  alternates: { canonical: '/' },
  icons: { icon },
  openGraph: {
    type: 'website',
    url,
    siteName,
    title,
    description,
    locale: 'en_US',
    images: [image],
  },
  twitter: {
    card: 'summary_large_image',
    site: twitterHandle,
    creator: twitterHandle,
    title,
    description,
    images: [image],
  },
};

export const viewport: Viewport = { themeColor: '#07050f', colorScheme: 'dark' };

const gtmSnippet = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={fira.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
        <Script id="gtm" strategy="afterInteractive">
          {gtmSnippet}
        </Script>
      </body>
    </html>
  );
}
