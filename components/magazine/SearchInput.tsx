import React from 'react';
import Magnifier from '../icons/common/Magnifier';

export default function SearchInput() {
  return (
    <div className="bg-whiteGold p-3 rounded-sm relative">
      <span className="absolute inset-y-0 right-5 flex items-center pr-2">
        <Magnifier />
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered w-full"
      />
    </div>
  );
}
