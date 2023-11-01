import React from 'react';
import Input from '../common/form/Input';

export default function LeaveFormFromTo({
  title,
  register,
  errors,
}: {
  title: string;
  register: any;
  errors: any;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1">
        <span className="font-barlow text-base font-semibold">{title}</span>
        <span className="text-primary">*</span>
      </div>
      <div className="flex gap-2 items-center">
        <Input
          register={register}
          errors={errors}
          nameInput="leaveStartTime"
          type="time"
          label=""
          required="Start time is Required."
          patternValue=""
          patternMessage="Please enter a valid Start time (e.g., 2001/02/11)"
          placeholder="12:21"
          className="w-[150px] h-[60px] bg-whiteGold rounded-lg px-7 py-2 font-barlow text-xl tracking-[5px] md:w-[210px]"
          labelClass="text-[#6b6b6b] dark:text-current"
        />
        <span>To</span>
        <Input
          register={register}
          errors={errors}
          nameInput="leaveEndTime"
          type="time"
          label=""
          required="End Time is Required."
          patternValue=""
          patternMessage="Please enter a valid End Time (e.g., 2001/02/11)"
          placeholder="12:21"
          className="w-[150px] h-[60px] bg-whiteGold rounded-lg px-7 py-2 font-barlow text-xl tracking-[5px] md:w-[210px]"
          labelClass="text-[#6b6b6b] dark:text-current"
        />
      </div>
    </div>
  );
}
