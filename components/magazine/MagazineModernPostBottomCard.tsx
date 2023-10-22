import React from 'react';
import Image from 'next/image';

export default function MagazineModernPostBottomCard({
  image,
  description,
}: {
  image: string;
  description: string;
}) {
  return (
    <div className="px-4 mb-1">
      <div className="flex justify-center">
        <Image
          loading="lazy"
          src={image}
          alt="Landa"
          width={330}
          height={430}
        />
      </div>
      <div className="flex justify-start mt-3 mb-3">
        <p className="px-6 text-justify text-slate-950 text-bold">
          {description}
        </p>
      </div>
    </div>
  );
}
