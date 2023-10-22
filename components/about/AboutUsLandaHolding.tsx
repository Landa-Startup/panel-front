import React from 'react';
import Image from 'next/image';

export default function AboutUsLandaHolding() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly pt-5 md:py-32 bg-[#FAFAFA] lg:flex flex-row">
      <div className="text-black p-3 space-y-2">
        <p className="text-3xl text-center font-semibold font-gilda">
          About Landa Holding
        </p>
        <p className="lg:w-[687px]  text-justify  text-xl mt-4 md:mt-8 ml-0 md:mx-10 font-normal tracking-wide font-barlow mb-20">
          {/* Landa International Holding started its activity in Canada in 2017 as
          one of the most reliable companies in the field of immigration. Landa
          Holding&rsquo;s distinctive feature that makes it unique compared to
          other immigration companies is its extensive charitable activities and
          high-quality transaction flow. Landa Holding aims to gather reliable
          investors together from all over the world and introduce the best
          investment opportunities for start-up businesses. */}
          Landa Holding is distinctive and distinguished from others in the same market and what makes us unique is our extensive charitable activities and world-class transaction flow, which facilitate the process of private business development. Landa Holding aims to attract reliable investors from all over the world and recommend the best investment opportunities for startup businesses, and to establish the right environment and connections between the idea holders and providers of services for this matter.
        </p>
      </div>
      <Image
        className="brightness-95 contrast-[1.15] drop-shadow-md"
        loading="lazy"
        src="/static/images/About/team.jpg"
        width={661}
        height={404}
        quality={100}
        alt="Landa Team"
        objectFit="cover"
      />
    </div>

  );
}
