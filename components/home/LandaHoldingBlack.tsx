import Link from 'next/link';
import React from 'react';
import Lines from '../icons/LandaHoldingBlack/Lines';
import ButtonArrow from '../icons/LandaHoldingBlack/ButtonArrow';

export default function LandaHoldingBlack() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly md:justify-between md:pr-20 md:pl-36 items-center relative bg-[#ffffff] py-5 md:py-10 space-y-5 md:h-[590px]">
      <Lines />
      <div className="flex flex-col items-center justify-around md:items-start space-y-6 pt-6">
        <div className="flex flex-col md:items-start items-center self-start">
          <div className="flex flex-col">
            <span className="text-black text-xl font-gilda font-normal border-black w-[340px] hidden md:block">
              LANDA HOLDING
            </span>
            <span className="text-black text-4xl font-gilda font-normal border-b md:border-none border-black w-[340px] pb-3 text-center md:text-start">
              Investment Center
              <br />
            </span>
          </div>
        </div>
        <div className="w-[320px] md:w-[434px]">
          <ul className="text-black text-[14px] font-normal leading-6 list-disc pl-4 font-barlow space-y-2 ml-0">
            <li className="leading-7 md:leading-10">
              Global investment opportunities within your reach.
            </li>
            <li className="leading-7 md:leading-10">
              Access to a network of successful entrepreneurs and investors.
            </li>
            <li className="leading-7 md:leading-10">
              Exclusive insights and expert analysis for informed decisions.
            </li>
            <li className="leading-7 md:leading-10">
              Collaborative environment for joint ventures and partnerships.
            </li>
            <li className="leading-7 md:leading-10">
              Accelerated growth potential through diversified investments.
            </li>
          </ul>
        </div>
        <button className="relative justify-start items-center gap-4 mt-10 inline-flex md:self-center h-6 group bg-[#222222] p-5 md:p-6 rounded-sm">
          <Link href={'/investor-registration'}>
            <div className="text-white text-[24px] md:text-[32px] font-normal leading-6 tracking-[1.5px] font-condensed">
              Register
            </div>
          </Link>
          <div className="justify-start items-start gap-2.5 flex">
            <div className="relative w-5 h-5">
              <div className="absolute inset-0 bg-black border border-black transition duration-1000 ease-in-out opacity-0 hover:opacity-100"></div>
              <div className="w-full h-full border border-white">
                <ButtonArrow />
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="flex flex-col items-center justify-around md:items-start space-y-6 py-10 z-10">
        <div className="flex flex-col md:items-start items-center">
          <div className="flex flex-col">
            <span className="text-black text-xl font-gilda font-normal border-black w-[340px] hidden md:block">
              LANDA HOLDING
            </span>
            <span className="text-black text-4xl font-gilda font-normal border-b  md:border-none border-black w-[340px] pb-3 text-center md:text-start">
              Entrepreneur Center
              <br />
            </span>
          </div>
        </div>
        <div className="w-[380px] md:w-[500px] px-6">
          <ul className="text-black text-[14px] font-normal leading-8 list-disc pl-5 font-barlow md:mt-4">
            <li className="leading-7">
              Global networking opportunities for collaboration and partnerships
            </li>
            <li className="leading-7">
              Access to all videos of pitches, industry trend presentations and
              panel discussions
            </li>
            <li className="leading-7">
              Attending events of the entrepreneurs center
            </li>
            <li className="leading-7">
              Meetings with top business leaders and entrepreneurs
            </li>
            <li className="leading-7">
              Participation in seasonal meetings with other international
              entrepreneurs
            </li>
            <li className="leading-7">
              Online platform for connecting with other entrepreneurs
            </li>
          </ul>
        </div>
        <button className="relative justify-start items-center gap-4 inline-flex md:self-center h-6 group bg-[#222222] p-5 md:p-6 rounded-sm">
          <Link href={'/entrepreneurs'}>
            <div className="text-white text-[24px] md:text-[32px] tracking-[1.5px] font-normal leading-6 font-condensed">
              Register
            </div>
          </Link>
          <div className="justify-start items-start gap-2.5 flex">
            <div className="relative w-5 h-5">
              <div className="absolute inset-0 bg-black border border-black transition duration-1000 ease-in-out opacity-0 hover:opacity-100"></div>
              <div className="w-full h-full border border-white">
                <ButtonArrow />
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
