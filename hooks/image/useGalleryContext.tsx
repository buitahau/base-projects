import GalleryContext from '@/components/ui/dashboard/Family/Gallery/GalleryContext';
import { useContext } from 'react';

const useGalleryContext = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGalleryContext must be used within a GalleryProvider');
  }
  return context;
};

export default useGalleryContext;
