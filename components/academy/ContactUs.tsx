import Image from 'next/image';
import React from 'react';

export default function ContactUs() {
  return (
    <div className="relative md:w-[1440px] md:h-[694px] md:pl-[121px] md:pr-[120px] md:pt-[38px] md:pb-[104px] pt-5 bg-[#F1F8EC] flex-col justify-start items-center gap-[37px] flex">
      <div className="self-center flex-col  items-center inline-flex">
        <div className="md:w-[413px] md:h-[58px] text-center text-lime-400 text-base md:text-2xl md:text-[32px] font-normal leading-[50px] tracking-[5.6px] md:tracking-[11.20px]">
          LANDA ACADEMY
        </div>
        <div className="md:w-[413px] md:h-[58px] text-center text-black text-3xl md:text-5xl md:text-[64px] font-normal leading-[50px] tracking-[1.6px] md:tracking-[3.20px] ">
          Contact Us
        </div>
      </div>
      <div className="md:w-[1199px] md:h-[304px] relative flex-col justify-start items-center flex space-y-4">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:w-[794px]">
          <input
            className="w-[360px] md:w-[389px] h-[40px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex"
            placeholder="First Name"
          ></input>
          <input
            className="w-[360px] md:w-[389px] h-[40px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex"
            placeholder="Last Name"
          ></input>
        </div>
        <textarea
          className="w-[360px] md:w-[794px] h-[84px] md:h-[185px] relative bg-yellow-50 border border-yellow-400 pl-5 mt-1 md:mt-7"
          placeholder="Description"
        />
      </div>
      <button className="bg-yellow-400 h-[36px] md:h-14 w-[160px] md:w-60 mx-auto text-white">
        Visit Now
      </button>
      <Image
        loading="lazy"
        className="-mb-4 md:absolute md:-left-16 md:-bottom-[5px]"
        src={'/static/images/Academy/Collab-pana 1.svg'}
        alt="Academy Contact Us"
        width={522}
        height={348}
      />
    </div>
  );
}
