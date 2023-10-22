import React from 'react';

export default function GalleryButtonsContainer() {
  return (
    <div className="flex gap-9 justify-center my-11">
      <button className="btn w-[220px] bg-[#B3DC99] text-black">Photos</button>
      <button className="btn w-[220px] bg-[#ECEFEF] text-black">Videos</button>
    </div>
  );
}
