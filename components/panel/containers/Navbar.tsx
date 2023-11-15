'use client';
import IconDown from '@/components/icons/IconDown';
import { DecodedToken } from 'app/types/global';
import Image from 'next/image';
import { parseCookies } from 'nookies';
import React, { use, useEffect, useState } from 'react';

export default function Navbar() {
  const [userData, setUserData] = useState<DecodedToken | null>(null);
  useEffect(() => {
    const cookies = parseCookies();
    const currentUser: DecodedToken | null = JSON.parse(cookies.currentUser);
    if (currentUser) {
      setUserData(currentUser);
    }
  }, []);

  return (
    <div className="flex h-[calc(100vh)-5px]">
      <div className="flex flex-col md:flex-row bg-primary w-2/12 h-16 items-center md:items-end md:pl-9 md:pb-2 p-2">
        {/* TODO: why svg here? */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="47"
          viewBox="0 0 38 47"
          fill="none"
        >
          <g id="Vector 58">
            <path
              d="M8.59261 47C8.82119 47 8.93549 47 9.0386 46.9674C9.12609 46.9397 9.20728 46.895 9.27755 46.836C9.36037 46.7664 9.42162 46.6699 9.54412 46.477L24.3849 23.0958C24.4528 22.9889 24.4867 22.9354 24.5103 22.8777C24.5304 22.8287 24.5448 22.7775 24.5533 22.7252C24.5633 22.6638 24.5623 22.6004 24.5602 22.4737L24.2401 2.61328C24.2223 1.5105 24.2134 0.95911 24.0108 0.758355C23.8434 0.592448 23.6038 0.521924 23.3732 0.570716C23.0942 0.629756 22.788 1.08845 22.1758 2.00583L15.556 11.9249C15.4801 12.0387 15.4421 12.0956 15.4161 12.1575C15.3941 12.21 15.3785 12.2651 15.3698 12.3215C15.3595 12.3878 15.3621 12.4561 15.3672 12.5929L15.7241 22.0802C15.7291 22.2126 15.7316 22.2788 15.722 22.3432C15.7139 22.3979 15.6993 22.4515 15.6785 22.5028C15.6541 22.563 15.6184 22.6188 15.5469 22.7304L1.11137 45.2651C0.745433 45.8363 0.562464 46.122 0.582141 46.3581C0.598554 46.5551 0.697484 46.736 0.8545 46.856C1.04274 47 1.38195 47 2.06035 47H8.59261Z"
              fill="#F8F5F0"
            />
            <path
              d="M20.3449 31.6592C20.2037 31.8792 20.1332 31.9892 20.1059 32.1078C20.0828 32.2084 20.0822 32.3128 20.1041 32.4135C20.13 32.5325 20.1992 32.6433 20.3378 32.865L28.8407 46.4703C28.9628 46.6657 29.0238 46.7634 29.1069 46.8338C29.1774 46.8936 29.259 46.9388 29.347 46.9669C29.4508 47 29.566 47 29.7964 47H35.9875C36.6523 47 36.9846 47 37.1718 46.8586C37.3281 46.7406 37.4278 46.5626 37.4467 46.3678C37.4694 46.1343 37.2958 45.8509 36.9484 45.2841L25.5048 26.6112C25.1899 26.0974 25.0325 25.8405 24.8276 25.7528C24.6563 25.6795 24.4628 25.6775 24.2899 25.7473C24.0833 25.8308 23.9206 26.0844 23.5953 26.5916L20.3449 31.6592Z"
              fill="#F8F5F0"
            />
          </g>
        </svg>
        <span className="md:text-xl font-semibold tracking-[2px] text-whiteGold">
          LANDA
        </span>
      </div>
      <div className="bg-[#CCB598] h-16 w-10/12">
        <div className="flex justify-end h-16 items-center gap-5 md:gap-12 md:mr-16">
          {/* TODO: why svg here? */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-bell-fill text-[#222]"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
          </svg> */}
          <div className="flex gap-2 md:gap-4 items-center">
            <div className="w-10 h-10 relative">
              {/* <Image
                className="rounded-full border border-black"
                src={`${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}${userData?.image}`}
                alt="Manager"
                layout="fill"
              /> */}
            </div>
            <div className="flex text-[#222] text-xl tracking-[0.5px] items-center gap-2">
              <span className="capitalize">
                {userData?.first_name} {userData?.last_name}
              </span>
              <IconDown />
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* <div className="relative w-6 h-5">
              <Image
                src="/static/images/Academy/USA.svg"
                alt="USA"
                layout="fill"
              />
            </div> */}
            {/* TODO: why svg here? */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down text-[#222]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg> */}
          </div>
        </div>
      </div>
    </div>
  );
}
