import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function Fourth() {
  return (
    <div
      className="flex flex-col h-screen bg-[#263238] text-white relative"
      id="Roadmap-3"
    >
      <div className="flex flex-col md:flex-row-reverse justify-evenly pyb-8 pt-16 z-10 px-10 space-y-5">
        <Image
          loading="lazy"
          alt="Landa academy"
          src={'static/images/Academy/Roadmap/Office work-amico 1.svg'}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-evenly">
          <div className="md:w-[480px] text-4xl md:text-5xl font-normal tracking-wider leading-snug">
            Employment opportunities
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="w-5 h-5 bg-[#80C555] rounded-full mt-3" />
            <div className="w-[454px] text-xl font-normal font-barlow leading-10 text-justify">
              After completing the intensive 6-month academy program, you will
              have the opportunity to officially work alongside experienced
              mentors on startups and international projects to gain valuable
              work experience.
            </div>
          </div>
        </div>
      </div>
      <ScrollButton
        scrollTo="Roadmap-4"
        color="white"
        addedClass="mx-auto md:ml-28"
      />
      <svg
        className="absolute top-0 left-[550px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="358"
        height="492"
        viewBox="0 0 358 492"
        fill="none"
      >
        <path
          d="M355.602 490.491C355.602 444.422 348.184 397.858 344.122 352.017C342.37 332.248 340.75 316.251 335.512 297.919C333.338 290.308 328.606 283.614 327.189 275.82C317.603 223.097 287.294 183.693 243.387 153.561C228.756 143.52 214.108 132.78 199.765 122.279C177.681 106.11 151.156 98.7284 127.155 86.1176C82.0459 62.4161 35.7405 37.8231 1.61621 1.5"
          stroke="#F1F8EC"
          strokeWidth="3"
          stroke-linecap="round"
          stroke-dasharray="6 6"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-[672px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="237"
        height="346"
        viewBox="0 0 237 346"
        fill="none"
      >
        <path
          d="M234.934 1.82227C233.014 22.9377 203.414 37.9531 195.999 57.5C183.537 90.3543 171.609 104.382 175.999 139.5C180.5 175.5 177.98 211.673 139.5 224.5C130.5 227.5 143 228.683 63 228.683C-1.23571 228.683 -12.5016 315 18.9999 350.5"
          stroke="#F1F8EC"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
}
