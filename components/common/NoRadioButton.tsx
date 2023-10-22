import React from 'react';

export default function NoRadioButton({
  title,
  register,
  errors,
  required,
  name,
}: {
  title: string;
  register: any;
  errors: any;
  required: string;
  name: string;
}) {
  return (
    <div>
      <label className="text-[#6b6b6b] dark:text-current">{title}</label>
      <div className="flex flex-row mt-4 mb-5 bg-[#f9f6f3] dark:bg-[#1D232A] p-4 rounded-lg drop-shadow-lg">
        <label className="flex flex-column mr-10">
          <input
            type="radio"
            value="yes"
            {...register(name, {
              required: required,
            })}
            className="radio mr-2 text-indigo-600 dark:text-indigo-400 drop-shadow-lg"
          />
          <span>Yes</span>
        </label>
        <label className="flex flex-row">
          <input
            type="radio"
            value="no"
            {...register(name, {
              required: required,
            })}
            className="radio mr-2 text-indigo-600 dark:text-indigo-400 drop-shadow-lg"
          />
          <span>No</span>
        </label>
      </div>

      {errors[name] && (
        <span className="mt-4 text-sm text-yellow-500">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}
