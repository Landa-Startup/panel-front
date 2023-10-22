import React from 'react';
import Link from 'next/link';
import IconLinkedin from '../icons/IconLinkedin';
import LinkedIn from '../icons/about/LinkedIn';

export default function PersonalTab({
  image,
  name,
  position,
  linkedIn,
}: {
  image: string;
  name: string;
  position: string;
  linkedIn: string;
}) {
  return (
    <div
      className="w-[300px] md:w-[270px] h-[300px] border border-primary rounded-sm flex flex-col justify-between items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col p-4 space-y-2 self-start">
        <Link
          href={linkedIn}
          className="text-white rounded-full bg-[#222] p-2 opacity-75"
        >
          <LinkedIn />
        </Link>
      </div>
      <div className="flex flex-col items-center px-4 pb-4 text-white  ">
        <span className="font-normal text-lg">{name}</span>
        <div className="font-light w-full flex items-center justify-center border-t-2 ">
          <span className="font-light border-t-3 ">{position}</span>
        </div>
      </div>
    </div>
  );
}
