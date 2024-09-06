import '../styles/main.css';
import { Metadata } from 'next';
import Navbar from '@/components/ui/web/Navbar/Navbar';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}
