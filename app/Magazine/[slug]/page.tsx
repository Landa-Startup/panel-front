import React from 'react';
import MagazineCardContainer from '@/components/magazine/MagazineCardContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Holding | Magazine',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <MagazineCardContainer url={params.slug} />;
    </div>
  );
}
