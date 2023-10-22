import React from 'react';

export default function TagsContainer() {
  return (
    <div className="bg-whiteGold px-4 py-8 rounded-sm">
      <span className="border-b-2 border-[#AA84534D] pb-4 font-gilda text-xl tracking-[4px] block">
        Tags
      </span>
      <div className="mt-7 grid grid-cols-3 gap-2">
        <button className="btn bg-[#D9D9D9] rounded-sm px-1">
          Health Club
        </button>
        <button className="btn bg-[#D9D9D9] rounded-sm px-1">Hotels</button>
        <button className="btn bg-[#D9D9D9] rounded-sm px-1">
          Restaurants
        </button>
        <button className="btn bg-[#D9D9D9] rounded-sm px-1">Teams</button>
        <button className="btn bg-[#D9D9D9] rounded-sm px-1">Businesses</button>
      </div>
    </div>
  );
}
