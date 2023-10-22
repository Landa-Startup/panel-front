import React from 'react';

export default function LeaveFormFromTo({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1">
        <span className="font-barlow text-base font-semibold">{title}</span>
        <span className="text-primary">*</span>
      </div>
      <div className="flex gap-2 items-center">
        <input
          className="w-[130px] h-[45px] bg-whiteGold rounded-lg px-7 py-2 font-barlow text-xl tracking-[5px]"
          placeholder="12:21"
        />
        <span>To</span>
        <input
          className="w-[130px] h-[45px] bg-whiteGold rounded-lg px-7 py-2 font-barlow text-xl tracking-[5px]"
          placeholder="12:21"
        />
      </div>
    </div>
  );
}
