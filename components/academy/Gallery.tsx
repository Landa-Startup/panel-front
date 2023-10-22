import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';

export default function Gallery() {
  return (
    <div className="py-5 relative bg-neutral-50 bg-opacity-95">
      <div className="flex flex-col">
        <div className="text-center text-lime-400 text-base md:text-[32px] font-normal leading-[50px] tracking-[5.6px] md:tracking-[11.20px]">
          LANDA ACADEMY
        </div>
        <div className="text-center text-black text-3xl md:text-[64px] font-normal leading-[50px] tracking-[1.6px] md:tracking-[3.20px]">
          Our Gallery
        </div>
        <div className="grid grid-cols-2 mx-8 md:mx-32 md:grid-cols-3 justify-items-center gap-2 my-5">
          <Image
            loading="lazy"
            width={389}
            height={243}
            quality={100}
            alt="Gallery Photo"
            className="w-[173px] md:w-[389px] h-[155px] md:h-[243px] object-cover"
            src="/static/images/Academy/gallery/1.png"
          />
          <Image
            loading="lazy"
            width={291}
            height={243}
            quality={100}
            alt="Gallery Photo"
            className="w-[173px] md:w-[389px] h-[155px] md:h-[243px] object-cover"
            src="/static/images/Academy/gallery/2.png"
          />
          <Image
            loading="lazy"
            width={493}
            height={243}
            quality={100}
            alt="Gallery Photo"
            className="w-[173px] md:w-[389px] h-[155px] md:h-[243px] object-cover"
            src="/static/images/Academy/gallery/3.png"
          />
          <Image
            loading="lazy"
            width={489}
            height={243}
            quality={100}
            alt="Gallery Photo"
            className="w-[173px] md:w-[389px] h-[155px] md:h-[243px] object-cover"
            src="/static/images/Academy/gallery/4.png"
          />
          <Image
            loading="lazy"
            width={389}
            height={243}
            quality={100}
            alt="Gallery Photo"
            className="w-[173px] md:w-[389px] h-[155px] md:h-[243px]"
            src="/static/images/Academy/gallery/5.png"
          />
          <Image
            loading="lazy"
            width={287}
            height={243}
            quality={100}
            alt="Gallery Photo"
            className="w-[173px] md:w-[389px] h-[155px] md:h-[243px] object-cover"
            src="/static/images/Academy/gallery/6.png"
          />
        </div>
        <div className="mx-auto">
          <Button
            size="visit"
            bgColor="Yellow"
            text="Visit Now"
            goto="/academy/gallery"
          />
        </div>
      </div>
    </div>
  );
}
