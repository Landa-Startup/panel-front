import React from 'react';
import List from '../icons/common/List';
import Magnifier from '../icons/common/Magnifier';

export default function SearchInput() {
  return (
    <div className="relative text-gray-400 focus-within:text-gray-600 w-[722px] h-[56px] flex items-center mx-auto my-11">
      <span className="absolute inset-y-0 left-2 flex items-center pl-2">
        <List />
      </span>

      <input
        className="w-full rounded-3xl input input-bordered px-10"
        placeholder="Search"
        type="search"
      />

      <span className="absolute inset-y-0 right-2 flex items-center pr-2">
        <Magnifier />
      </span>
    </div>
  );
}
