import { useEffect, useState } from 'react';
import GalleryContext from './GalleryContext';
import { ImageType } from '@/types/image';
import { SearchImage } from '@/types/image/searchImage';
import { filterImages, countImagesForSearch } from '@/api/image-api';

const GalleryProvider = ({ children }: { children: React.ReactNode }) => {
  const [result, setResult] = useState<ImageType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const [search, setSearch] = useState<SearchImage>({
    name: '',
    folder_id: '',
    show_in_slider: false,
    show_in_gallery: false,
    page: 0,
    pageSize: 10
  });

  const processSearch = async () => {
    const images = await filterImages({ ...search, page: pageNumber });
    setResult(images);
    countTotalPages();
  };

  const countTotalPages = async () => {
    const totalImages = await countImagesForSearch({
      ...search,
      page: pageNumber
    });
    const totalPages = Math.ceil(totalImages / search.pageSize);
    setTotal(totalPages);
  };

  const setSearchText = (name: string) => {
    setPageNumber(0);
    setSearch({ ...search, name });
  };

  const setFilter = (showInSlider: boolean, showInGallery: boolean) => {
    setPageNumber(0);
    setSearch({ ...search, show_in_slider: showInSlider, show_in_gallery: showInGallery });
  };

  const changePage = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  useEffect(() => {
    processSearch();
  }, [search, pageNumber]);

  return (
    <GalleryContext.Provider
      value={{
        result,
        processSearch,
        setSearchText,
        total,
        changePage,
        pageNumber,
        setFilter
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;
