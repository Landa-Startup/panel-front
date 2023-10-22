import Image from 'next/image';
import React from 'react';
import PlayButton from './PlayButton';

export default function Video() {
  return (
    <div className="flex justify-center items-start relative h-[475px]">
      <Image
        loading="lazy"
        className="blur-md object-cover"
        src={'/static/images/Academy/e8789aa2b833892200e6100e9998211b.jpg'}
        quality={100}
        alt="Landa Video"
        layout="fill"
      />
      {/* <Image loading="lazy"
        className="absolute w-[377px] h-[453px] bottom-0 -right-10"
        src={'/static/images/Academy/Vector 67.png'}
        quality={100}
        alt="Landa Video"
        width={377}
        height={453}
      /> */}
      {/* <Image loading="lazy"
        className="absolute right-0 w-[480px] h-[576px] object-contain"
        src={'/static/images/Academy/Vector 67 (2).png'}
        alt="Landa Video"
        layout="fill"
      /> */}
      <div className="flex flex-col relative items-center my-auto">
        <div className="font-condensed font-normal text-yellow-300 text-[32px] text-center tracking-[11.20px] leading-[50px] whitespace-nowrap">
          LANDA ACADEMY
        </div>
        <div className="font-gilda font-normal text-white text-[48px] text-center tracking-[2.40px] leading-[normal] mb-14">
          Promotional Video
        </div>
        <PlayButton />
      </div>
    </div>
  );
}
