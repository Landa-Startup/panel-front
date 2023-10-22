import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsCooperation() {
  return (
    <div className="h-full py-10 text-center text-white bg-neutral-800">
      <div className="text-center">
        <p className="tracking-widest">LANDA HOLDING</p>
        {/* <p className="text-5xl not-italic leading-normal font-gilda">
          Cooperation
        </p> */}
      </div>
      <div className="grid grid-cols-1 gap-10 px-10 md:grid-cols-2 lg:px-28">
        <div className="col-span-1">
          <p className="text-xl font-semibold tracking-wide font-barlow">
            Investment Center
          </p>
          <p className="pt-2 font-light 2xl:mb-2 lg:max-xl:mb-1 xl:px-32">
            The Landa Investors Association is composed of a group of
            individuals active in the field of investment who collaborate with
            each other based on their investment priorities and invest in
            startups and new businesses.
            <br />
            If you are also interested in investing in new and innovative
            businesses and increasing your capital in the most modern way, we
            have provided an opportunity for you.
          </p>
          <div className="pt-10">
            <span className="mr-3">More</span>
            <Link href="/investor-registration">
              <Image
                loading="lazy"
                width={40}
                height={40}
                className="inline"
                src="/static/images/About/right-arrow2.png"
                alt="arrow"
              />
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <p className="text-xl font-semibold tracking-wide font-barlow">
            Entrepreneur Center
          </p>
          <p className="pt-2 pb-1 font-light xl:px-32 md:max-lg:pb-6 xl:max-2xl:mb-5">
            The Entrepreneur Center is a community of active individuals in the
            field of business and entrepreneurship who form a dynamic and
            powerful technological ecosystem together.
            <br />
            If you also have an interest in building a business or possess
            special skills, join us by completing the Entrepreneur Membership
            form.
          </p>
          <div className="pt-10 md:pt-16">
            <span className="mr-3">More</span>
            <Link href="/partner-membership">
              <Image
                loading="lazy"
                width={40}
                height={40}
                className="inline"
                src="/static/images/About/right-arrow2.png"
                alt="arrow"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
