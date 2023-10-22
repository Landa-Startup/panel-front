import Image from 'next/image';
import React from 'react';

export default function GalleryImageCard({ src }: { src: string }) {
  return (
    <div className="relative w-[555px] h-[416px]">
      <Image
        className="object-cover rounded-sm"
        src={src}
        alt="Landa Academy Image"
        layout="fill"
      />
    </div>
  );
}
