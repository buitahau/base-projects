import { createContext } from 'react';
import { ImageType } from '@/types/image';

interface GalleryContextType {
  result: ImageType[];
  processSearch: () => Promise<void>;
  setSearchText: (name: string) => void;
  total: number;
  changePage: (page: number) => void;
  pageNumber: number;
  setFilter: (showInSlider: boolean, showInGallery: boolean) => void;
}

const GalleryContext = createContext<GalleryContextType>({
  result: [],
  processSearch: async () => {},
  setSearchText: (name: string) => {},
  total: 0,
  changePage: (page: number) => {},
  pageNumber: 0,
  setFilter: (showInSlider: boolean, showInGallery: boolean) => {}
});

export default GalleryContext;
