import React from 'react';
import Image from 'next/image';
import MagazineModernPostBottomCard from './MagazineModernPostBottomCard';

export default function MagazineModernPostBottomSpace() {
  return (
    <div className="flex px-16">
      <MagazineModernPostBottomCard
        description="Placeholder Description 1"
        image="/path/to/your/image1.jpg"
      />
      <MagazineModernPostBottomCard
        description="Placeholder Description 2"
        image="/path/to/your/image2.jpg"
      />
    </div>
  );
}
