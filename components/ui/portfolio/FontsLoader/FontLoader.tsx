import { useEffect } from 'react';

interface FontLoaderProps {
  href: string;
  integrity: string;
}

export default function FontLoader({ href, integrity }: FontLoaderProps) {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.integrity = integrity;
    link.crossOrigin = 'anonymous';
    link.referrerPolicy = 'no-referrer';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
}
