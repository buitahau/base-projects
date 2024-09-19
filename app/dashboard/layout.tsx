'use client';

import 'jsvectormap/dist/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import '@/styles/dashboard/style.css';
import '@/styles/dashboard/satoshi.css';
import Loader from '@/components/ui/common/Loader';
import React, { useEffect, useState } from 'react';
import DefaultLayout from '@/components/ui/dashboard/Layouts/DefaultLayout';

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
    <body suppressHydrationWarning={true}>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        {loading ? <Loader /> : <DefaultLayout> {children}</DefaultLayout>}
      </div>
    </body>
  );
}
