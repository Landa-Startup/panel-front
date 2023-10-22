import React from 'react';
import Play from '../icons/PlayButton/Play';
export default function PromotionalVideo() {
  return (
    <div
      style={{
        backgroundImage:
          "url('/static/images/Home/Promotional-Video/blurred-co-working.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        filter: 'brightness(0.8)',
      }}
      className="h-[300px] md:h-[400px] relative"
    >
      <div className="absolute flex flex-col h-[300px] md:h-[400px] w-full inset-0 bg-black bg-opacity-40 justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-xs md:text-base font-normal leading-[2.5px] tracking-[2.5px] text-white w-155 h-23 font-condensed">
          LANDA HOLDING
        </div>
        <div className="h-12 my-4 text-4xl font-normal tracking-[1.6px] text-white w-373 font-gilda">
          Promotional Video
        </div>
        <div className="relative w-24 h-w-24 p-6 font-light text-center text-white border-2 rounded-full opacity-100 border-primary font-futura b4">
          <div className="circle h-1 w-1 top-1/2 left-1/2 bg-white rounded-full absolute  z-[-10]"></div>
          <Play />
        </div>
      </div>
    </div>
  );
}
