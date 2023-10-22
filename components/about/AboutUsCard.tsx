import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type AboutUsCardProps = {
  title: string;
  text: string;
  image: string;
  reverse: boolean;
  description: string;
  link: string;
};

const AboutUsCard = ({
  title,
  text,
  image,
  reverse,
  description,
  link,
}: AboutUsCardProps) => {
  return (
    <>
      {reverse && (
        <div className="flex flex-col-reverse leading-6 justify-items-center lg:grid md:grid-cols-2">
          <div className="px-[30px] md:px-0 leading-6 text-black md:ml-8 pb-5">
            <p className="font-gilda text-3xl md:pr-8 text-center mt-3">
              {title}
            </p>
            <p className="font-barlow  text-normal leading-6 justify-left mt-5 ">
              {text}
            </p>
            <Link href={link}>
              <button className=" justify-items-center mx-auto bg-[#AA8453] text-white md:mt-24 mt-8  flex px-10 py-2 font-barlow">
                Visit Now
              </button>
            </Link>{' '}
          </div>
          <div className="col-span-1 md:pl-0">
            <div
              className="my-2 lg:w-[610px] md:h-[320px] md:w-[672px] w-screen h-[160px] md:mt-2 "
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <Image
                loading="lazy"
                alt={`Image for ${title}`}
                src={image}
                layout="fill" // Set layout to 'fill'
                objectFit="cover" // Set objectFit to 'cover'
              />
            </div>
          </div>
        </div>
      )}
      {!reverse && (
        <div className="flex md:py-12 flex-col md:grid md:grid-cols-1">
          <div className="col-span-1">
            <div
              className="mb-2 md:w-[670px] md:h-[357px]  h-[160px] md:mt-2 "
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <Image
                loading="lazy"
                alt={`Image for ${title}`}
                src={image}
                layout="fill" // Set layout to 'fill'
                objectFit="cover" // Set objectFit to 'cover'
              />
            </div>
          </div>
          <div className="col-span-1 font-barlow leading-6 mt-1 text-black	px-[30px]">
            <p className="text-3xl font-normal text-black mt-3 text-center font-gilda">
              {title}
            </p>
            <p className="mt-5 text-normal">{text}</p>
            <Link href={link}>
              <button className=" justify-items-center mx-auto bg-[#AA8453] text-white md:mt-24 mt-8  flex px-10 py-2 font-barlow">
                Visit Now
              </button>
            </Link>
          </div>
          <p className="text-black font-Gilda Display text-sm	font-normal	leading-normal  ml-[110px]">
            {description}
          </p>
        </div>
      )}
    </>
  );
};

export default AboutUsCard;
