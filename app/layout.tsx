import '@peter-present/led-caro/dist/assets/style.css';
import { Fira_Code } from 'next/font/google';
import { ReactNode } from 'react';
import 'react-modern-drawer/dist/index.css';
import 'src/globals.css';
import 'src/styles/magical-border.style.css';
import NextSeo from 'src/views/NextSeo';

const fira = Fira_Code({ subsets: ['latin'] });
type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <NextSeo />
      <body className={fira.className}>{children}</body>
    </html>
  );
}
