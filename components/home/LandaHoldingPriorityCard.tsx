import Image from 'next/image';
import React from 'react';

export default function LandaHoldingPriorityCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="w-44 h-24 md:w-72  md:h-40 flex justify-center relative border border-primary overflow-hidden">
      {/* Background Image */}
      <Image
        loading="lazy"
        className="absolute -right-2 md:-right-6 -bottom-2 md:-bottom-8 w-12 md:w-[120px] h-12 md:h-[120px] opacity-5"
        src={image}
        alt=""
        width={500}
        height={500}
      />

      {/* Title Container */}
      <div className="justify-center items-center gap-2.5 inline-flex">
        <div className="flex items-center text-black text-base md:text-2xl font-normal font-gilda w-10 md:w-52 justify-center text-center">
          {title}
        </div>
      </div>

      {/* Small Image Overlay */}
      <Image
        loading="lazy"
        className="absolute top-2 left-2 w-8 md:w-[50px] h-8 md:h-[50px]"
        src={image}
        alt="Landa Priority"
        width={500}
        height={500}
      />
    </div>
  );
}
