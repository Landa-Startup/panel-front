import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';
import Link from 'next/link';

export default function ContactUs() {
  // TODO: use daisyUI for styling
  return (
    <div className="md:h-[644px] bg-neutral-50 flex flex-col md:flex-row justify-between items-center md:px-36 text-justify px-12">
      <div className="md:w-[515px] md:h-[476px] flex flex-col items-center justify-center px-1 py-10">
        <p className=":text-justify text-black md:text-xl">
          At Landa Holding, we welcome strategic affiliations with international firms and qualified influencers alike. As an approved affiliate, you will receive co-branded support and future representations that wield substantial influence within the business landscape.
          To become an affiliate, please complete our free questionnaire for our confidential review.
        </p>
        <Link href={'/partner-membership'}>
          <Button text="Join Us" size="visit" goto='/partner-membership' />
        </Link>
      </div>
      <div className="flex gap-20  md:h-full relative mt-5 ma:my-0 md:mb-0 ml-5 mr-2">
        <div className="absolute top-0 w-full h-16 md:h-58  z-10" />
        <div className="absolute bottom-0 w-full h-16 md:h-60  via-transparent-white z-10" />
        <div className="flex flex-col justify-around ">
          <div className="spin-image">
            <Image
              className=""
              src="/static/images/Home/universities/1.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image">
            <Image
              className=""
              src="/static/images/Home/universities/22.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image">
            <Image
              className=""
              src="/static/images/Home/universities/3.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image">
            <Image
              className=""
              src="/static/images/Home/universities/4.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className="spin-image-top">
            <Image
              className=""
              src="/static/images/Home/universities/5.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image-top">
            <Image
              className=""
              src="/static/images/Home/universities/6.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image-top">
            <Image
              className=""
              src="/static/images/Home/universities/77.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image-top">
            <Image
              className=""
              src="/static/images/Home/universities/88.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start md:mt-10">
          <div className="spin-image">
            <Image
              className=""
              src="/static/images/Home/universities/9.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
