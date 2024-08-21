import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import IconImg from 'public/icon.ico';
import { ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Profile',
  description: 'My Profile',
  icons: IconImg.src,
};

type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={IconImg.src} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
