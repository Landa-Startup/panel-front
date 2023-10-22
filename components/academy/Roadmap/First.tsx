import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function Second() {
  return (
    <div
      className="flex flex-col h-screen bg-[#FFFBE6] relative"
      id="Roadmap-1"
    >
      <div className="flex flex-col px-10 md:flex-row-reverse justify-evenly pt-16 pb-10 z-10">
        <Image
          loading="lazy"
          alt="Landa academy"
          src={'static/images/Academy/Roadmap/Seminar-amico (1) 1.svg'}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-evenly font-barlow">
          <div className="md:w-[500px] text-gray-600 text-4xl md:text-5xl font-barlow font-normal tracking-wider leading-snug">
            Registration and participation in Optional courses
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="w-5 h-5 bg-yellow-400 rounded-full mt-2.5" />
            <div className="w-[280px] font-barlow text-gray-600 text-base md:text-2xl font-normal leading-10 text-justify md:w-[500px] font-barlow text-gray-600 text-base md:text-2xl font-normal leading-10 text-justify">
              Embark on your adventurous journey at Landa Academy by
              participating in our tailored crash courses designed by mentors
              from the Landa Holding.
            </div>
          </div>
          <div className="justify-start items-start gap-2 inline-flex ">
            <div className="w-5 h-5 bg-yellow-400 rounded-full mt-2.5" />
            <div className="md:w-[500px] font-barlow text-gray-600 text-base md:text-2xl font-normal leading-10 text-justify">
              Obtain A valid Certificate of achievement
            </div>
          </div>
        </div>
      </div>
      <ScrollButton scrollTo="Roadmap-2" addedClass="mx-auto md:ml-28" />
      <svg
        className="absolute bottom-0 right-[345px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="328"
        height="493"
        viewBox="0 0 328 493"
        fill="none"
      >
        <path
          d="M243.963 2C245.618 16.791 251.817 31.6754 256.156 46.2502C269.026 89.4737 280.453 132.582 294.949 175.506C305.228 205.942 313 243 323.5 274.5C333.166 336.302 309.908 387.86 276.5 422C208 492 10.5 494 1.49999 542.5"
          stroke="#3D5656"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
}
