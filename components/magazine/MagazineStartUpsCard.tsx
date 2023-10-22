import React from 'react';
import Image from 'next/image';

export default function MagazineStartUpsCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-16">
      {/* Image */}
      <div className="flex justify-center">
        <Image
          loading="lazy"
          className=""
          src={image}
          alt={title}
          width={320}
          height={420}
        />
      </div>

      {/* Date */}
      <div className="flex flex-col justify-start px-20">
        <h2 className="mt-4 text-2xl text-slate-950 font-bold">
          12 DECEMBER 2022
        </h2>

        {/* Title */}
        <h2 className="mt-1 mb-6 text-2xl text-yellow-600 font-bold">
          {title}
        </h2>
      </div>

      {/* Description */}
      <div className="flex justify-start px-20">
        <p className="text-justify text-slate-950 font-bold">{description}</p>
      </div>
    </div>
  );
}
