import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import 'src/globals.css';
import NextSeo from 'src/views/NextSeo';

const inter = Inter({ subsets: ['latin'] });
type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <NextSeo />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
