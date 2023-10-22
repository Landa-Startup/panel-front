import React from 'react';
import CopyRight from '../common/CopyRight';
import Image from 'next/image';
import Link from 'next/link';
import Instagram from '../icons/footer/Instagram';
import Envelope from '../icons/footer/Envelope';
import Whatsapp from '../icons/footer/Whatsapp';
import LinkedIn from '../icons/footer/LinkedIn';

export default function Footer() {
  function GetYear() {
    var currentYear = new Date().getFullYear();
    return currentYear;
  }
  return (
    <div className="flex flex-col p-8 bg-neutral-800 font-barlow">
      <div className="flex flex-col justify-between space-y-5 md:flex-row md:p-20">
        <div className="flex flex-col md:w-[344px] mt-5">
          <div className="h-[25px] text-justify text-white text-xl font-medium">
            About Landa
            <br />
          </div>
          <div className="mt-1 text-base font-normal text-justify text-neutral-400">
            In Landa Academy, individuals will be trained based on their
            interests and capabilities. Necessary actions are taken at the Landa
            Acceleration Center to accelerate their unique abilities. Then,
            investment is made based on the investment priorities of developing
            the nurtured capabilities of individuals.
            <br />
          </div>
          <div className="w-[126px] h-[22px] flex flex-row justify-between items-center mt-2 ">
            <Link
              aria-label="Instagram"
              href={
                'https://instagram.com/landa_holding?igshid=YTQwZjQ0NmI0OA=='
              }
              className="hover:text-primary"
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link
              aria-label="Email"
              href={'mailto:info@landaholding.com'}
              className="hover:text-primary"
            >
              <Envelope />
            </Link>
            <Link
              aria-label="Whatsapp"
              href={'https://wa.me/989120539563'}
              className="hover:text-primary"
              target="_blank"
            >
              <Whatsapp />
            </Link>
            <Link
              aria-label="Linkedin"
              href={'https://www.linkedin.com/company/landa-startup-inc'}
              className="hover:text-primary"
              target="_blank"
            >
              <LinkedIn />
            </Link>
          </div>
        </div>
        <div className="flex flex-col col-span-1 space-y-1">
          <div className="text-xl font-medium text-justify text-white">
            Explore
            <br />
          </div>
          <div className="flex flex-col">
            <Link
              href={'/'}
              className="text-base font-normal text-neutral-400 hover:text-primary max-w-fit"
            >
              Home
            </Link>
            <Link
              href={'/about'}
              className="text-base font-normal text-neutral-400 hover:text-primary max-w-fit"
            >
              About
            </Link>
            <Link
              href={'/contact'}
              className="text-base font-normal text-neutral-400 hover:text-primary max-w-fit"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col col-span-1 space-y-1">
          <div className="text-xl font-medium text-white">Forms</div>
          <div className="inline-flex flex-col items-start self-stretch justify-start">
            <Link
              href={'/startups'}
              className="text-base font-normal text-neutral-400 hover:text-primary max-w-fit"
            >
              Startups
            </Link>
            <Link
              href={'/'}
              className="text-base font-normal text-neutral-400 hover:text-primary max-w-fit"
            >
              Investor Center
            </Link>
            <Link
              href={'/'}
              className="text-base font-normal text-neutral-400 hover:text-primary max-w-fit"
            >
              Entrepreneur Center
            </Link>
            <Link
              href={'/'}
              className="text-base font-normal text-neutral-400 hover:text-primary max-w-fit"
            >
              Our business partners
            </Link>
          </div>
        </div>
        <div className="flex flex-col col-span-1 space-y-1">
          <div className="w-[93px] h-[30px] text-justify text-white text-xl font-medium">
            Contact
            <br />
          </div>
          <div className="text-base font-normal text-justify text-neutral-400">
            No. 200, 7646 Yonge Street, Toronto, ON L4J 1V9, Canada
          </div>
          <div className="text-base font-normal text-justify text-neutral-400">
            +1 (416) 557-7622
          </div>
          <div className="text-base font-normal text-neutral-400">
            A3 Unit,Daneshvar tower, Eastern Daneshvar street, Tehran, Iran
          </div>
          {/* <div className="text-base font-normal text-justify text-neutral-400">
            02188030167
          </div> */}
          <div className="text-base font-normal text-justify text-neutral-400">
            Tala Complex, Saadat Abad St, Isfahan, Iran
          </div>
          <div className="text-base font-normal text-justify text-neutral-400">
            03131311914
          </div>
        </div>
      </div>
      <div className="self-stretch pt-4 text-center text-white border-t">
        © Copyright {GetYear()} by{' '}
        <Link href={'/'} className="text-primary">
          LandaHolding
        </Link>
      </div>
    </div>
  );
}
