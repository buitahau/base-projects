'use client';

import TopHeader from '@/components/ui/family/TopHeader';
import FamilySlider from '@/components/ui/family/FamilySlider';
import StoryBox from '@/components/ui/family/Box/Story';
import FamilyBox from '@/components/ui/family/Family';
import GalleryInfiniteScrollWrapper from '@/components/ui/family/Box/Gallery/GalleryInfiniteScrollWrapper';

export default function FamilyPage() {
  return (
    <>
      {/* <PreLoader /> */}
      <TopHeader />
      <FamilySlider />
      <StoryBox />
      <FamilyBox />
      {/* <GalleryBox /> */}
      <GalleryInfiniteScrollWrapper />
      {/* <EventBox /> */}
      {/* <Footer /> */}
    </>
  );
}
