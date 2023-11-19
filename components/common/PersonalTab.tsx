import React from 'react';
import Link from 'next/link';
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
      className="flex h-[300px] w-[300px] flex-col items-center justify-between rounded-sm border border-primary md:w-[270px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col space-y-2 self-start p-4">
        <Link
          href={linkedIn}
          className="rounded-full bg-[#222] p-2 text-white opacity-75"
        >
          <LinkedIn />
        </Link>
      </div>
      <div className="flex flex-col items-center px-4 pb-4 text-white  ">
        <span className="text-lg font-normal">{name}</span>
        <div className="flex w-full items-center justify-center border-t-2 font-light ">
          <span className="border-t-3 font-light ">{position}</span>
        </div>
      </div>
    </div>
  );
}
