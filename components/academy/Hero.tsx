'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import ArrowDown from '../icons/hero/ArrowDown';

export default function Hero({
  showLanda,
  title,
  subTitle,
  buttonBg,
  backgroundImage,
  leftImage,
  showButton,
}: {
  showLanda: boolean;
  title: string;
  subTitle: string;
  buttonBg?: string;
  backgroundImage: string;
  leftImage: string;
  showButton?: boolean;
}) {
  return (
    <div className="h-screen relative overflow-hidden bg-[#3D5656]">
      <Image
        loading="lazy"
        className="absolute bottom-16 hidden md:block"
        src={'/static/images/Academy/Hero/leadership-amico 1.svg'}
        width={383}
        height={383}
        alt="Hero Illustration"
      />
      <Image
        loading="lazy"
        className="absolute bottom-16 md:hidden"
        src={'/static/images/Academy/Hero/leadership-amico 1.svg'}
        width={214}
        height={214}
        alt="Hero Illustration"
      />
      <div className="flex flex-col items-center justify-center md:h-screen space-y-5 py-36">
        <div className="md:w-[712px] flex flex-col items-center space-y-4 px-10">
          <div className="font-gilda text-4xl md:text-6xl text-[#F1F8EC]">
            {title}
          </div>
          <div className="font-condensed text-neutral-50 text-opacity-95 text-xl md:text-2xl font-semibold leading-normal text-center md:leading-10 tracking-[2px] ">
            {subTitle}
          </div>
        </div>
        {showButton ? (
          <Button
            text="Register Now"
            size="notVisit"
            bgColor="Yellow"
            addedClass={buttonBg ? 'md:hidden' : 'block'}
            goto="/"
          />
        ) : (
          <></>
        )}
        <Image
          loading="lazy"
          className="w-[365px] md:w-[412px] h-[497px] md:h-[560px] absolute -right-28 md:right-0 -bottom-20"
          src={`/static/images/${leftImage}`}
          alt="Landa"
          width={412}
          height={500}
        />
        <Link
          aria-label="Scroll To Next Section"
          className="absolute flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-white rounded-full animate-bounce left-7 md:left-10 bottom-4"
          href={'#Roadmap-1'}
        >
          <ArrowDown />
        </Link>
      </div>
    </div>
  );
}
