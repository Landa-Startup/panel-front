import React from 'react';

export default function RadioButtonGroup({
  title,
  options,
  register,
  errors,
  required,
  nameRadioButton,
}: {
  title: string;
  options: Array<{ value: string; label: string }>;
  register: any;
  errors: any;
  required: string;
  nameRadioButton: string;
}) {
  return (
    <div>
      <label className="text-[#6b6b6b] dark:text-current">{title}</label>
      <div className="mb-1 mt-3 w-full rounded-lg bg-[#f9f6f3] p-4 drop-shadow-lg dark:bg-[#1D232A]">
        {options.map((option) => (
          <label key={option.value} className="my-4 flex items-center">
            <input
              type="radio"
              value={option.value}
              {...register(nameRadioButton, {
                required: required,
              })}
              className="radio mr-2 text-indigo-600 drop-shadow-lg dark:text-indigo-400"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {errors[nameRadioButton] && (
        <span className="mt-4 text-sm text-yellow-500">
          {errors[nameRadioButton].message}
        </span>
      )}
    </div>
  );
}
