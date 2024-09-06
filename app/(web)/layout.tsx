import '../../styles/main.css';
import React from 'react';
import Navbar from '@/components/ui/web/Navbar/Navbar';

export default async function WebLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="bg-black">
      <Navbar />
      <main
        id="skip"
        className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
      >
        <div className="flex flex-col gap-12 items-start">{children}</div>
      </main>
    </body>
  );
}
