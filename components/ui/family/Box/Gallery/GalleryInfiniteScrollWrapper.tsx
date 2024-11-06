import useShowHideTopHeader from '@/hooks/useShowHideTopHeader';
import GalleryInfiniteScroll from './GalleryInfiniteScroll';

export default function GalleryInfiniteScrollWrapper() {
  const { setShowHeader } = useShowHideTopHeader();
  return (
    <>
      <GalleryInfiniteScroll setShowHeader={setShowHeader} />
    </>
  );
}
