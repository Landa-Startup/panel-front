import React from 'react';

export default function YesRadioButton({
  title,
  register,
  errors,
  required,
  name,
  selectedRadio,
  handleRadioChange,
  handleChangeFile,
  fileName,
}: {
  title: string;
  register: any;
  errors: any;
  required: string;
  name: string;
  selectedRadio: string;
  handleRadioChange: any;
  handleChangeFile: any;
  fileName: string;
}) {
  return (
    <div>
      {/* Label for the radio buttons */}
      <label className="text-[#6b6b6b] dark:text-current">{title}</label>
      <div className="flex flex-col">
        {/* Radio buttons for 'Yes' and 'No' */}
        <div className="flex flex-row mt-4 bg-[#f9f6f3] dark:bg-[#1D232A] p-4 rounded-lg drop-shadow-lg">
          <label className="flex flex-column mr-10 ">
            <input
              type="radio"
              value="true"
              {...register(name, { required: required })}
              checked={selectedRadio === 'true'}
              onChange={handleRadioChange}
              className="radio mr-2 text-indigo-600 dark:text-indigo-400 drop-shadow-lg"
            />
            <span>Yes</span>
          </label>
          <label className="flex flex-row">
            <input
              type="radio"
              value=""
              {...register(name, { required:  'this file is requied!'})}
              checked={selectedRadio === ''}
              onChange={handleRadioChange}
              className="radio mr-2 text-indigo-600 dark:text-indigo-400  drop-shadow-lg"
            />
            <span>No</span>
          </label>
        </div>

        {/* Conditional file input */}
        {selectedRadio === 'true' && (
          <div className="flex justify-center">
            <input
              type="file"
              required
              className="bg-[#f9f6f3] dark:bg-[#1D232A] mt-3 p-5 w-full rounded-lg"
              {...register(fileName, { required: 'this file is requied!' })}
              onChange={handleChangeFile} // Use onChange event handler after register
            />
            {errors[fileName] && (
              <span className="mt-4 text-sm text-yellow-500">
                {errors[fileName].message}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Error message for radio buttons */}
      {errors[name] && (
        <span className="mt-4 text-sm text-yellow-500">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}
