import React from 'react';
import ClipboardData from '@/components/icons/Panel/ClipboardData';
import House from '@/components/icons/Panel/House';

export default function LeftSection({
  activeMenu,
  handleMenuClick,
}: {
  activeMenu: any;
  handleMenuClick: any;
}) {
  return (
    <div className="w-2/12 flex flex-col bg-[#EEE6DD] text-[#222]">
      <ul className="font-barlow font-medium text-2xl divide-y divide-[#AA8453]">
        <li
          className={`flex gap-2 items-center md:pl-6 py-3 justify-center md:justify-start ${
            activeMenu === 'dashboard' ? 'active font-bold' : ''
          }`}
          onClick={() => handleMenuClick('dashboard')}
        >
          <House />
          <span className="hidden md:block cursor-pointer">Dashboard</span>
        </li>
        <li
          className={`flex gap-2 items-center md:pl-6 py-3 justify-center md:justify-start ${
            activeMenu === 'leave' ? 'active font-bold' : ''
          }`}
          onClick={() => handleMenuClick('leave')}
        >
          <ClipboardData size={16} />
          <span className="hidden md:block cursor-pointer">
            Leave Permissions
          </span>
        </li>
      </ul>
    </div>
  );
}
