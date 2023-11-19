import Image from 'next/image';
import React from 'react';

export default function UploadInput({ title }: { title: string }) {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-2.5">
      {/* Label for the upload input */}
      <div className="text-[15px] font-normal text-neutral-800">{title}</div>

      {/* Container for the upload input */}
      <div className="inline-flex items-center justify-center gap-[5px] rounded-md bg-stone-100 px-6 py-2 shadow">
        {/* Upload icon */}
        <Image
          loading="lazy"
          className="h-5 w-5"
          src="/static/images/01b4cd75ff21ef0a30e6e410fa049bb0.png"
          width={100}
          height={100}
          alt="upload"
        />

        {/* The actual input */}
        <input
          className="text-[13px] font-normal capitalize text-neutral-800"
          type="file"
        />
      </div>
    </div>
  );
}
