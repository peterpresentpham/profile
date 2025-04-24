/* eslint-disable react/self-closing-comp */
import '@peter-present/led-caro/dist/assets/style.css';
import { Fira_Code } from 'next/font/google';
import { ReactNode } from 'react';
import 'react-modern-drawer/dist/index.css';
import MetadataHead from 'src/components/MetadataHead';
import 'src/globals.css';
import 'src/styles/color-button.style.css';
import 'src/styles/vibe.style.css';

const fira = Fira_Code({ subsets: ['latin'] });
type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <MetadataHead />
      <body className={fira.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6VHX4S7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
