'use client';

import '@/styles/family/css/bootstrap.min.css';
import '@/styles/family/css/style.css';
import '@/styles/family/css/responsive.css';
import React from 'react';
import Head from '@/components/ui/family/Head';

export default function FamilyLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head />
      <body
        id="home"
        data-spy="scroll"
        data-target="#navbar-wd"
        data-offset="98"
      >
        {children}
      </body>
    </>
  );
}
