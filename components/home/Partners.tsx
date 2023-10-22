import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';

export default function Partners() {
  const logosLeft = [
    {
      number: 1,
      alt: 'evimo',
    },
    {
      number: 2,
      alt: 'azad university',
    },
    {
      number: 3,
      alt: 'nekeoi',
    },
    {
      number: 4,
      alt: 'evimo',
    },
    {
      number: 5,
      alt: 'evimo',
    },
    {
      number: 6,
      alt: 'evimo',
    },
    {
      number: 7,
      alt: 'evimo',
    },
    {
      number: 8,
      alt: 'evimo',
    },
  ];

  const logosRight = [
    {
      number: 9,
      alt: 'evimo',
    },
    {
      number: 10,
      alt: 'evimo',
    },
    {
      number: 11,
      alt: 'evimo',
    },
    {
      number: 12,
      alt: 'evimo',
    },
    // {
    //   number: 13,
    //   alt: 'evimo',
    // },
    {
      number: 14,
      alt: 'evimo',
    },
    {
      number: 15,
      alt: 'evimo',
    },
    // {
    //   number: 16,
    //   alt: 'evimo',
    // },
  ];

  return (
    <div>
      <div className="flex flex-col md:grid grid-cols-4 bg-[#FAFAFA] p-5 md:p-16 md:gap-16">
        <div className="grid grid-cols-4 md:grid-cols-2 gap-8 w-[350px] order-2 md:order-1 mt-9">
          {logosLeft.map((role, index) => (
            <Image
              className="w-20 md:w-32 h-20 md:h-32 object-contain"
              key={index}
              src={`/static/images/Home/contact/${role.number}.png`}
              alt={role.alt}
              width={130}
              height={130}
            />
          ))}
        </div>
        <div className="col-span-4 md:col-span-2 gap-6 md:gap-14 md:bg-[#F8F5F0] flex flex-col items-center justify-center p-5 md:p-9 order-1">
          <p className="text-primary text-xl md:text-4xl font-gilda">
            Join Our Business Partners
          </p>
          <p className="md:w-[222px] md:ml-9 font-barlow text-sm md:text-base font-medium leading-7 tracking-[1.6px] md:tracking-[2.4px]  text-black lg:w-[500px] text-center">
            At Landa Holding, we welcome strategic affiliations with
            international firms and qualified influencers alike. As an approved
            affiliate, you will receive co-branded support and future
            representations that wield substantial influence within the business
            landscape. To become an affiliate, please complete our free
            questionnaire for our confidential review.
          </p>
          <div className="">
            <Button
              size="notVisit"
              text="Join Us"
              goto="/partner-membership"
              bgColor="Primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-2 gap-8 w-[350px] order-3">
          {logosRight.map((role, index) => (
            <Image
              className="w-20 md:w-32 h-20 md:h-32 object-contain"
              key={index}
              src={`/static/images/Home/contact/${role.number}.png`}
              alt={role.alt}
              width={500}
              height={500}
            />
          ))}
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center  p-5">
        <Button
          size="visit"
          type="button"
          text="Visit Now"
          goto="/partner-membership"
          bgColor="Primary"
          className=""
        />
      </div>
    </div>
  );
}
