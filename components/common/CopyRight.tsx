import Link from 'next/link';
import React from 'react';

export default function CopyRight() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="absolute top-[350px] flex w-full justify-center text-center font-barlow text-base font-normal text-white">
      Copyright © {currentYear}
      <Link href={'/'} className="text-primary">
        Landa
      </Link>
      ® , All Rights Reserved.
    </div>
  );
}
