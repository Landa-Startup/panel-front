import Image from 'next/image';
import React from 'react';

export default function KeyDifferentiating() {
  return (
    <div className="bg-[#FAFAFA] grid grid-cols-1 md:grid-cols-2 justify-items-end">
      <div className="flex flex-col my-5 md:my-20 mx-5 md:ml-28 gap-5">
        <span className="font-gilda text-2xl md:text-3xl leading-5 text-primary">
          Key Differentiating Factors:
        </span>
        <div className="font-barlow leading-6 md:w-[550px] text-black gap-2">
          <p>
            First and foremost, it&apos;s essential to understand that the most
            critical aspect is the mental model and perspective behind these key
            differentiating factors. The way we perceive and approach a business
            can create various points of distinction.
          </p>
          <span className="text-primary font-bold">What sets us apart:</span>
          <ul className="list-decimal ml-4">
            <li>
              Specialized Screening and Analysis of Startups: We specialize in
              screening and analyzing startups, creating opportunities for
              members to learn from each other.
            </li>
            <li>
              Members Invest Directly: Members invest directly in startups of
              their choice, creating an environment where no member feels
              pressured to invest, and no member misses out on potential
              investment opportunities.
            </li>
            <li>
              Focus on Building Investor Connections: Our primary approach is to
              foster connections among members, involving not only charitable
              activities but also numerous entertaining activities and social
              events.
            </li>
            <li>
              Value Supporters&apos; Financial Contributions: We highly value
              the financial contributions of our supporters. Their opinions and
              guidance contribute to all aspects of the holding&apos;s
              operations.
            </li>
            <li>
              Inclusive Structure: Our structure provides an opportunity for
              entrepreneurs to engage with reputable investors who have the
              capacity to invest at the startup level.
            </li>
            <li>
              Collaboration with Other Investment Centers: We welcome
              collaboration with other investment centers and investment
              communities. Entrepreneurs seeking capital from multiple investor
              groups benefit from this collaboration.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 hidden md:block group">
        <Image
          className="group-hover:animate-pulse duration-2000 "
          src="/static/images/Home/KeyDifferentiating/Vector 58.png"
          alt="Landa Key Differentiating"
          width={586}
          height={741}
        />
      </div>
    </div>
  );
}
