'use client';

import 'jsvectormap/dist/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import '@/styles/dashboard/style.css';
import '@/styles/dashboard/satoshi.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });

  return (
    <body suppressHydrationWarning={true} className="dark">
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <div className="flex">
          <div className="relative flex flex-1 flex-col">
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </body>
  );
}
