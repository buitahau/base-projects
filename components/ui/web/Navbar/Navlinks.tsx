'use client';

import Link from 'next/link';
import s from './Navbar.module.css';

interface NavlinkProps {}

export default function Navlink() {
  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1"></div>
      <div className="flex justify-end space-x-8">
        <Link href="/sign-in" className={s.link}>
          Sign In
        </Link>
      </div>
    </div>
  );
}
