import React from 'react';
import Play from '../icons/PlayButton/Play';

export default function PlayButton() {
  return (
    <div className="inline-flex items-start gap-[10px] relative">
      <div className="relative w-[130px] h-[130px] rounded-[65px] border-[0.5px] border-solid border-white" />
      <div className="absolute w-[120px] h-[120px] top-[5px] left-[5px] bg-white rounded-[60px]" />
      <PlayButton />
    </div>
  );
}
