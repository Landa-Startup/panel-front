import GalleryButtonsContainer from '@/components/academy/GalleryButtonsContainer';
import GalleryImageCardContainer from '@/components/academy/GalleryImageCardContainer';
import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Landa Holding | Gallery',
  description:
    'Meet the dedicated and talented individuals who make up the Landa Holding team. Learn about their expertise, passion, and commitment to excellence. Get to know the driving force behind our success.',
};

export default function page() {
  return (
    <div>
      <Banner
        image="/static/images/Academy/Banner/gallery.png"
        title="Gallery"
      />
      <GalleryButtonsContainer />
      <GalleryImageCardContainer />
    </div>
  );
}
