import React from 'react';
import LeaveFormRadio from '../LeaveFormRadio';
import LeaveFormFromTo from '../LeaveFormFromTo';
import LeaveFormDate from '../LeaveFormDate';
import ClipboardData from '@/components/icons/Panel/ClipboardData';

export default function LeaveForm() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 border-b-2 border-black pb-4 mb-6">
        <ClipboardData />
        <span className="text-3xl font-medium font-barlow">
          leave permission Form
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        <LeaveFormRadio
          title="Leave (daily - hourly)"
          items={['Hourly leave', 'Day off']}
        />
        <LeaveFormFromTo title="I want leave from" />
        <LeaveFormDate title="From Date" />
        <LeaveFormDate title="To Date" />
        <LeaveFormRadio
          title="Type of leave"
          items={['entitlement', 'illness']}
        />
      </div>
      <div className="flex">
        <button className="bg-primary text-white font-barlow text-base font-semibold px-8 py-2 rounded-lg mt-8">
          Submit
        </button>
        <button className="bg-[#F8F5F0] text-primary font-barlow text-base font-semibold px-8 py-2 rounded-lg mt-8 ml-4">
          Cancel
        </button>
      </div>
    </div>
  );
}
