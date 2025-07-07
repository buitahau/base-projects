import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hau Bui - Fullstack Java Developer',
  description: 'Experienced Fullstack Developer specializing in Java Spring Boot backend development and React frontend technologies. Building scalable web applications with modern tech stack.',
  keywords: 'Fullstack Developer, Java, Spring Boot, React, Next.js, Web Development, Software Engineer',
  authors: [{ name: 'Hau Bui' }],
  creator: 'Hau Bui',
  publisher: 'Hau Bui',
  openGraph: {
    title: 'Hau Bui - Fullstack Java Developer',
    description: 'Experienced Fullstack Developer specializing in Java Spring Boot backend development and React frontend technologies.',
    url: 'https://haubui.site',
    siteName: 'Hau Bui Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hau Bui - Fullstack Java Developer',
    description: 'Experienced Fullstack Developer specializing in Java Spring Boot backend development and React frontend technologies.',
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}