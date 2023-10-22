import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function Third() {
  return (
    <div
      className="flex flex-col h-screen bg-[#80C555] text-white relative"
      id="Roadmap-2"
    >
      <div className="flex flex-col md:flex-row justify-evenly pt-2 pb-8 z-10 px-10 space-y-4">
        <Image
          loading="lazy"
          alt="Landa academy"
          src={'static/images/Academy/Roadmap/At the office-amico 2.svg'}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-evenly">
          <div className="md:w-[592px] text-4xl mt-28 mb-10 md:text-5xl font-normal tracking-wider leading-snug text-[#3D5656]">
            Joining Landa Academy and benefiting from its facilities.
          </div>
          <ul className="hidden text-[#3D5656] font-barlow text-lg font-medium leading-[25px] md:leading-[50px] tracking-[1px] space-y-3">
            <li>1.Personalized mentoring by industry professionals</li>
            <li>2.Co-working spaces</li>
            <li>3.Free participation at the next courses</li>
            <li>4.Engagement in real projects and international startups</li>
            <li>5.Talent identification of adolescent</li>
            <li>6.Teaching Fundamentals of Entrepreneurship</li>
            <li>7.How to work in international markets</li>
          </ul>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="w-5 h-5 bg-[#80C555] rounded-full mt-3" />
            <div className="w-[454px] text-xl font-normal font-barlow leading-10 text-justify"></div>
          </div>
        </div>
      </div>
      <ScrollButton
        scrollTo="Roadmap-3"
        color="white"
        addedClass="mx-auto md:ml-auto md:mr-28"
      />
      <svg
        className="absolute top-0 left-[620px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="367"
        height="364"
        viewBox="0 0 367 364"
        fill="none"
      >
        <path
          d="M339.5 0.499585C377.5 -10.0014 349.5 -5.2906 339.5 0.499585ZM339.5 0.499585C287 15.0075 263.768 25.3335 221.5 94.4993C210.5 112.499 181.5 133.455 154.5 139.499C121 146.999 118.5 149.435 104.5 153.499C90.5 157.564 59.5 179.999 57.5 181.999C48.4653 191.034 41 199.999 28 223.001C14.329 247.19 11.2727 273.5 11.2727 290.015C11.2727 307.231 19.0948 337.789 11.2727 352.854C8.95374 357.32 7.7418 361.572 2.11914 361.572"
          stroke="#FFFBE6"
          strokeWidth="3"
          stroke-linecap="round"
          stroke-dasharray="6 6"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-[500px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="314"
        viewBox="0 0 52 314"
        fill="none"
      >
        <path
          d="M41.4076 2.19727C40.2697 13.5766 31.9553 25.1025 27.4885 35.2015C20.0992 51.9077 16.7803 67 12.9953 86.2862C10.5002 99 9.00024 109 5.24651 125.461C0.5001 168.5 -2.42535 221.726 15.5783 262.643C24.2806 282.422 35.9803 299.459 49.7607 314.5"
          stroke="#FFFBE6"
          strokeWidth="3"
          stroke-linecap="round"
          stroke-dasharray="6 6"
        />
      </svg>
    </div>
  );
}
