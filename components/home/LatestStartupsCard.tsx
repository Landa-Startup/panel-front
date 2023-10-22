import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StartupsArrowLeft from '../icons/Home/StartupsArrowLeft';

export default function LatestStartupsCard({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link} target="_blank">
      <div className="w-[264px] md:w-[350px] h-[290px] md:h-[468px] relative border border-black group hover:shadow-lg">
        {/* Image Container */}
        <div className="w-[264px] md:w-[350px] h-[254px] md:h-[468px] left-0 top-0 absolute" />

        {/* Image */}
        <Image
          loading="lazy"
          alt={image}
          className="w-[124px] md:w-[249px] h-[116px] md:h-[216px] left-[71px] md:left-[55px] top-2 md:top-[18px] absolute object-contain group-hover:scale-110 transition-all"
          src={image}
          width={500}
          height={500}
        />

        {/* Decorative Lines */}
        <div className="w-[155px] md:w-[298px] h-[0px] left-4 md:left-0 top-[160px] md:top-[295px] absolute border border-neutral-800"></div>

        {/* Title */}
        <div className="left-4 top-[130px] md:top-[250px] absolute text-neutral-800 text-2xl font-normal font-gilda">
          {title}
        </div>

        {/* Description */}
        <div className=" text-left w-[225px] md:w-[320px] left-[16px] top-[170px] md:top-[310px] md:bottom-20 absolute text-neutral-800 text-sm md:text-base font-normal leading-[15px] font-barlow ">
          {description}
        </div>

        {/* Link and Icon */}
        <div className="w-6 md:w-10 h-6 md:h-10 border right-[15px] bottom-[15px] md:left-[298px] md:top-[411px] absolute bg-neutral-800 justify-start items-start gap-2.5 inline-flex">
          <StartupsArrowLeft />
        </div>
      </div>
    </Link>
  );
}
