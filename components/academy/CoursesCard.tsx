import React from 'react';

export default function CoursesCard({
  title,
  isActive,
  backgroundImage,
}: {
  title: string;
  isActive?: boolean;
  backgroundImage: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className={`relative flex flex-col justify-center items-center w-[556px] h-[486px] rounded-sm group ${
        isActive ? 'border-2 border-[#FDD30A9E]' : ''
      }`}
    >
      <span className="font-barlow text-5xl font-medium tracking-[2.4px] text-white">
        {title}
      </span>
      <div
        className={`${
          isActive ? '' : 'hidden'
        } absolute btn border-none w-full rounded-none text-black bg-[#FDD30A9E] bottom-0 group-hover:text-white group-hover:bg-[#222] transition-all duration-500`}
      >
        Register Now
      </div>
    </div>
  );
}
