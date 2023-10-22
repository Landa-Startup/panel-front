import React from 'react';

export default function CategoriesContainer() {
  return (
    <div className="bg-whiteGold px-4 py-8 rounded-sm">
      <span className="border-b-2 border-[#AA84534D] pb-4 font-gilda text-xl tracking-[4px] block">
        Categories
      </span>
      <ul className="font-condensed text-xl mt-7 space-y-4 text-[#6B6B6B]">
        <li>Business</li>
        <li>Planning</li>
        <li>Teamwork</li>
      </ul>
    </div>
  );
}
