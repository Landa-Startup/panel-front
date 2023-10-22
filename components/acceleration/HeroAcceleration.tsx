'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../common/Button';

export default function Hero({
  showLanda,
  buttonBg,
  backgroundImage,
  leftImage,
  showButton,
}: {
  showLanda: boolean;
  buttonBg?: string;
  backgroundImage: string;
  leftImage: string;
  showButton?: boolean;
}) {
  return (
    <div
      style={{
        backgroundImage: `url('/static/images/acceleration/${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPositionX: '65%',
      }}
      className="h-[calc(100vh)] md:h-screen relative overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center md:h-screen space-y-5 py-36">
        <div
          className={` ${
            showLanda ? 'block' : 'hidden'
          } text-center font-barlow text-white text-2xl md:text-4xl md:tracking-[12.6px] font-normal tracking-[7px]`}
        >
          Landa Holding
        </div>
        <div className="font-gilda text-4xl text-center md:text-6xl tracking-[6.4px] text-[#F8F5F0]">
          Acceleration Center
        </div>

        {showButton ? (
          <Button
            text="Register Now"
            size="notVisit"
            addedClass={buttonBg ? 'md:hidden' : 'block'}
            goto="/StartupsForm"
            bgColor="Primary"
          />
        ) : (
          <></>
        )}
        <Image
          loading="lazy"
          className="w-[385px] h-[382px] sm:w-[305px] sm:h-[302px] mr-0 md:mr-0  md:w-[265px] md:h-[372px] w-[365px] h-[420px] xl:h-[560px] xl:w-[420px]   absolute -right-16 md:right-0 bottom-0 "
          src={`/static/images/${leftImage}`}
          alt="Landa"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
