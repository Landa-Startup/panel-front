import React from 'react';

export default function Banner({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="absolute inset-0 h-[250px] lg:h-[512px]"
      ></div>

      <div className="relative flex h-[250px] items-stretch justify-center lg:h-[512px] lg:justify-start">
        <div className="flex flex-col items-center justify-center text-center md:m-auto lg:m-auto">
          <p className="font-condensed text-base font-normal tracking-[5.60px] text-neutral-50 ">
            LANDA HOLDING
          </p>
          <p className="font-gilda text-[32px] font-normal text-neutral-50 md:text-[50px] lg:text-[74px] xl:text-[84px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
