import React from 'react';
import ClipboardData from '@/components/icons/Panel/ClipboardData';
import House from '@/components/icons/Panel/House';

export default function LeftSection({
  activeMenu,
  handleMenuClick
}: {
  activeMenu: any;
  handleMenuClick: any;
}) {
  return (
    <div className="flex w-2/12 flex-col bg-[#EEE6DD] text-[#222]">
      <ul className="divide-y divide-[#AA8453] font-barlow text-xl font-medium">
        <li
          className={`flex items-center justify-center gap-2 py-3 md:justify-start md:pl-6 ${
            activeMenu === 'dashboard' ? 'active font-bold' : ''
          }`}
          onClick={() => handleMenuClick('dashboard')}
        >
          <House />
          <span className="hidden cursor-pointer md:block">Dashboard</span>
        </li>
        <li
          className={`flex items-center justify-center gap-2 py-3 md:justify-start md:pl-6 ${
            activeMenu === 'leave' ? 'active font-bold' : ''
          }`}
          onClick={() => handleMenuClick('leave')}
        >
          <ClipboardData size={16} />
          <span className="hidden cursor-pointer md:block">
            Leave Permissions
          </span>
        </li>
      </ul>
    </div>
  );
}
