import React from 'react';
import ScrollButton from './ScrollButton';
import Image from 'next/image';

export default function Mobile() {
  return (
    <div
      className="md:hidden flex flex-col h-screen bg-[#F1F8EC] relative"
      id="Roadmap-3M"
    >
      <div className="flex flex-col px-10 md:flex-row-reverse justify-evenly pt-16 pb-10 z-10">
        <Image
          loading="lazy"
          alt="Landa academy"
          src={'static/images/Academy/Roadmap/leadership-amico 1 (1).svg'}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-evenly font-barlow">
          <ul className="text-[#3D5656] font-barlow text-xl font-medium leading-[25px] md:leading-[50px] tracking-[1px] space-y-2">
            <li>1.Personalized mentoring by industry professionals</li>
            <li>2.Co-working spaces</li>
            <li>3.Free participation at the next courses</li>
            <li>4.Engagement in real projects and international startups</li>
            <li>5.Talent identification of adolescent</li>
            <li>6.Teaching Fundamentals of Entrepreneurship</li>
            <li>7.How to work in international markets</li>
          </ul>
        </div>
      </div>
      <ScrollButton scrollTo="Roadmap-4" addedClass="mx-auto" />
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
