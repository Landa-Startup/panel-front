import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsProfileCard({
  image,
  title,
  description,
  links,
}: {
  image: string;
  title: string;
  description: string;
  links: Record<string, string>;
}) {
  return (
    <div className="container mb-6 shadow-lg bg-whiteGold mx-auto w-fit h-fit border">
      <Link href="#">
        <div className="w-[350px] md:w-[400px] h-[350px] md:h-[400px] relative">
          <Image
            loading="lazy"
            alt={`${title} Image`}
            layout="fill"
            src={image}
          />
        </div>
      </Link>

      <div className="flex items-center justify-center p-2 mt-6 space-x-3">
        {/* Add descriptive alt text for icons */}
        <Link href={links.whatsapp}>
          <Image
            loading="lazy"
            alt="Icon 1"
            src="/static/images/03bc78eaab3dcbbdddec7554e9d34351.png"
            width={25}
            height={25}
          />
        </Link>
        <Link href={links.linkedin}>
          <Image
            loading="lazy"
            alt="Icon 2"
            src="/static/images/6fd49ad10f9b1a9ab4224d4d900d8355.png"
            width={25}
            height={25}
          />
        </Link>
        <Link href={links.email}>
          <Image
            loading="lazy"
            alt="Icon 3"
            src="/static/images/aeb307f84efb8c124b331799a6f734e6.png"
            width={25}
            height={25}
          />
        </Link>
        <Link href={links.website}>
          <Image
            loading="lazy"
            alt="Icon 4"
            src="/static/images/c897906edf05703723098f4a66032d9b.png"
            width={25}
            height={25}
          />
        </Link>
      </div>

      <div>
        <div className="text-center font-gilda">
          <p className="mt-2 text-xl font-medium text-black font-Barlow">
            {title}
          </p>
          <p className="text-gray-700 font-Barlow text-xs font-normal mt-2 mb-[16px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
