import React from 'react';
import Link from 'next/link';
import IconLinkedin from '../icons/IconLinkedin';
import IconRoundedEmail from '../icons/IconRoundedEmail';
import IconRoundedInstagram from '../icons/IconInstagramRounded';
import IconWeb from '../icons/IconWeb';
import IconInstagram from '../icons/IconInstagram';
import LinkedIn from '../icons/about/LinkedIn';

export default function AboutusPersonalTabs({
  image,
  name,
  position,
  linkedIn,
  email,
  website,
  instagram,
}: {
  image: string;
  name: string;
  position: string;
  linkedIn: string;
  email: string;
  website: string;
  instagram: string;
}) {
  return (
    <div
      className="w-[300px] md:w-[270px] h-[300px] border border-primary rounded-sm flex flex-col  items-center md:ml-12 lg:mt-20"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col p-2  self-start">
        <Link
          href={linkedIn}
          target="_blank"
          className="text-white rounded-full bg-[#222] p-2 opacity-75"
        >
          <linkedIn />
        </Link>
      </div>

      <div className=" pl-2 pb-2 self-start">
        <a href={email}>
          <IconRoundedEmail />
        </a>
      </div>
      <div className=" pl-2 pb-2 self-start">
        <Link href={website} target="_blank">
          <IconWeb />
        </Link>
      </div>
      <div className=" pl-2 self-start opacity-75  ">
        <Link href={instagram} target="_blank">
          <IconRoundedInstagram />
        </Link>
      </div>
      <div className="flex flex-col items-center px-4 pb-4 mt-40 lg:mt44  ">
        <span className="font-normal text-lg text-black">{name}</span>
        <div className="font-light w-full flex items-center justify-center  ">
          <span className="font-light border-t-3 ">{position}</span>
        </div>
      </div>
    </div>
  );
}
