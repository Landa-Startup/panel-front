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
      <div className="bg-[#f9f6f3] dark:bg-[#1D232A] p-4 rounded-lg w-full mt-3 mb-1 drop-shadow-lg">
        {options.map((option) => (
          <label key={option.value} className="flex items-center my-4">
            <input
              type="radio"
              value={option.value}
              {...register(nameRadioButton, {
                required: required,
              })}
              className="radio mr-2 text-indigo-600 dark:text-indigo-400 drop-shadow-lg"
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
