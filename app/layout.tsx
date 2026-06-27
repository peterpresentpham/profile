import { Fira_Code, Inter } from 'next/font/google';
import { ReactNode } from 'react';
import MetadataHead from 'src/components/MetadataHead';
import 'src/styles/color-button.style.css';
import 'src/styles/globals.css';

const fira = Fira_Code({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
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
