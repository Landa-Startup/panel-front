'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ArrowDown from '../icons/acceleration/ArrowDown';

export default function AccelerationServices() {
  const [expanded, setExpanded] = useState(false);

  const services = [
    {
      title: 'Pitch deck preparation',
      image: '1.png',
    },
    {
      title: 'Mentoring',
      image: '2.png',
    },
    {
      title: 'Networking with suitable individuals',
      image: '3.png',
    },
    {
      title: 'Initial financing',
      image: '4.png',
    },
    {
      title: 'MVP development',
      image: '5.png',
    },
    {
      title: 'Research and development',
      image: '6.png',
    },
    {
      title: 'Website design',
      image: '7.png',
    },
    {
      title: 'Business plan creation',
      image: '8.png',
    },
    {
      title: 'Idea brainstorming and development',
      image: '9.png',
    },
    {
      title: 'Cooperative workspace',
      image: '10.png',
    },
    {
      title: 'Patent registration',
      image: '11.png',
    },
    {
      title: 'Organizing startup presentation events',
      image: '12.png',
    },
  ];

  const displayedServices = expanded ? services : services.slice(0, 6);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-11 mt-8 border-b-2 pb-14">
      {displayedServices.map((service) => (
        <div
          className="md:w-[343px] h-[115px] text-[#2B2115] overflow-hidden font-barlow text-xl rounded-sm bg-[#F7F3EE] flex justify-center items-center relative"
          key={service.title}
        >
          <span>{service.title}</span>
          <Image
            className="absolute opacity-25 -bottom-8 -left-3"
            src={`/static/images/acceleration/${service.image}`}
            alt="forough"
            width={109}
            height={109}
          />
        </div>
      ))}
      <div className="flex mx-auto items-center gap-2">
        <span
          className="font-gilda text-center cursor-pointer"
          onClick={toggleExpanded}
        >
          {expanded ? 'See Less' : 'See More'}
        </span>
        <ArrowDown />
      </div>
    </div>
  );
}
