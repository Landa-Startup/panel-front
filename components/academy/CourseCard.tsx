import Link from 'next/link';
import React from 'react';

export default function CourseCard({
  title,
  image,
  active,
  date,
}: {
  title: string;
  image: string;
  active?: boolean;
  date: string;
}) {
  return (
    <Link
      href={'/academy/' + title}
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className={`flex items-center justify-center w-[175px] md:h-[486px] relative flex-shrink-0 flex-col p-4 bg-gray-300 courses-overlay h-[220px] md:hover:w-[384px] md:hover:h-[486px] group transition-in duration-500${
        active ? ' border-2 border-yellow-400' : ''
      }`}
    >
      <div className="hidden md:block absolute md:w-[396px] left-[65px] top-[350px] origin-top-left -rotate-90 text-white text-4xl font-medium leading-[50px] tracking-widest transition-colors duration-500 md:group-hover:rotate-0 md:group-hover:max-w-fit md:group-hover:static">
        {title}
      </div>
      <div className="text-yellow-50 text-xl font-medium leading-[50px] tracking-wide hidden z-10 md:group-hover:block">
        {date}
      </div>
      <div className="z-10 md:hidden md:w-[396px] left-[45px] top-[80px] origin-top-left text-white text-xl font-medium leading-[50px] tracking-widest md:group-hover:animate-spin md:group-hover:transition-all md:group-hover:duration-500">
        {title}
      </div>
      {active ? (
        <div className="flex items-center justify-center bottom-0 left-0 h-[45px] absolute w-full text-center bg-yellow-400 text-emerald-800 font-medium md:group-hover:hidden">
          <span className="text-xl md:text-xl tracking-[1px] md:tracking-wide">
            Register Now
          </span>
        </div>
      ) : (
        <></>
      )}
      {/* <button className="w-44 h-14 px-16 py-3.5 mt-11 bg-yellow-400 justify-center items-center gap-2.5 hidden md:group-hover:transition-opacity md:group-hover:duration-500 md:group-hover:inline-flex z-10">
        <div className="text-center text-white text-2xl font-normal">
          Check Now
        </div>
      </button> */}
    </Link>
  );
}
