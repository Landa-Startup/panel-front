import React from 'react';
import DatePicker from './DatePicker';

export default function LeaveFormDate({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1">
        <span className="font-barlow text-base font-semibold">{title}</span>
        <span className="text-primary">*</span>
      </div>
      <DatePicker />
    </div>
  );
}
