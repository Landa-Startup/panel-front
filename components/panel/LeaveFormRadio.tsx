import React from 'react';

export default function LeaveFormRadio({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1">
        <span className="font-barlow text-base font-semibold">{title}</span>
        <span className="text-primary">*</span>
      </div>
      <div className="flex gap-9 py-3 px-4 bg-[#F8F5F080] rounded-lg">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4">
            <input
              className="radio checked:bg-primary checked:border-primary"
              type="radio"
              name={title}
              value={item.split(' ')[0]}
              checked={index === 0}
            />
            <label className="font-barlow text-sm text-[#939393]">{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
