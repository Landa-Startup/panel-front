import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function Fifth() {
  return (
    <div
      className="flex flex-col h-screen items-center relative px-10 py-10 bg-[#FFFBE6] space-y-7"
      id="Roadmap-4"
    >
      <div className="order-2 md:w-[420px] text-black font-barlow text-3xl md:text-5xl font-normal leading-snug static md:absolute left-40 top-16">
        Work experience at the Canadian company
      </div>
      <Image
        loading="lazy"
        className="md:mt-28 md:mb-16 z-10 order-1"
        alt="Landa academy"
        src={'static/images/Academy/Roadmap/Selecting team-cuate (1) 1.svg'}
        width={645}
        height={430}
      />
      <div className="justify-start items-start gap-2 inline-flex pb-5 order-3">
        <div className="w-5 h-5 bg-yellow-400 rounded-full mt-3" />
        <div className="md:w-[500px] text-black font-barlow text-xl font-medium leading-10 tracking-[1px] text-justify">
          Following a year of active participation within Landa, you will
          receive a credible and verifiable Canadian work experience certificate
          from us.
        </div>
      </div>
      <div className="order-4">
        <ScrollButton scrollTo="Courses" addedClass="mx-auto mt-5 md:-mt-5" />
      </div>
      <svg
        className="absolute -top-7 left-[683px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="178"
        viewBox="0 0 47 178"
        fill="none"
      >
        <path
          d="M1.5007 -4.50009C10.0788 10.4421 18.7399 36.2214 18.8044 49.7387C19.0199 94.863 1.61819 125.126 33.2157 140.199C54.8047 155.221 40.0143 158.95 42.8714 175.725"
          stroke="#FDD30A"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
}
