import { Fira_Code } from 'next/font/google';
import { ReactNode } from 'react';
import 'src/globals.css';
import NextSeo from 'src/views/NextSeo';

const fira = Fira_Code({ subsets: ['latin'] });
type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <NextSeo />
      <body className={fira.className}>{children}</body>
    </html>
  );
}
