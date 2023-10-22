import Image from 'next/image';
import React from 'react';
import Link from 'next/link'
export default function CompaniesCard({
  name,
  logo,
  link
}: {
  name: string;
  logo: string;
  link: string;
}) {
  return (
    <Link href={link} target="_blank">
      <div className="bg-[#F7F3EE] w-[145px] md:w-[192px] h-[160px] md:h-[170px] flex flex-col items-center justify-between rounded-sm">
        <div className="w-[138px] h-[138px] relative">

          <Image
            className="object-contain p-1"
            src={`/static/images/About/companies/${logo}`}
            alt="Landa Companies"
            layout="fill"
          />

        </div>
        <span className="font-gilda text-xl md:text-2xl leading-6 bg-neutral-500 w-full text-center text-white py-2">
          {name}
        </span>
      </div>
    </Link>
  );
}
