import React from 'react';

export default function PhoneInput() {
  return (
    <div className="relative flex items-center">
      <select className="h-[40px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex">
        <option value="+1">🇺🇸 +1</option>
        <option value="+44">🇬🇧 +44</option>
        <option value="+33">🇫🇷 +33</option>
      </select>
      <input
        type="tel"
        className="w-[360px] md:w-[389px] h-[40px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex"
        placeholder="Phone number"
      />
    </div>
  );
}
