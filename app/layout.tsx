import { Metadata } from 'next';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Hello Base',
  description: 'Base front end project'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}
