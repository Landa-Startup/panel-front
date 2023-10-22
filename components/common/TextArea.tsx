import React from 'react';

export default function TextArea({
  title,
  register,
  errors,
  required,
  nameTextArea,
  patternValue,
  patternMessage,
  placeholder,
}: {
  title: string;
  register: any;
  errors: any;
  required: string;
  nameTextArea: string;
  patternValue: string;
  patternMessage: string;
  placeholder: string;
}) {
  // Create a regular expression pattern for validation
  const pattern = new RegExp(patternValue);

  return (
    <div>
      {/* Label for the textarea */}
      <label className="text-[#6b6b6b] dark:text-current">{title}</label>
      <textarea
        className={
          'textarea textarea-bordered textarea-lg w-full mt-3 mb-1 drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]' +
          (errors[nameTextArea] ? ' border-red-500' : '')
        }
        {...register(nameTextArea, {
          required: required,
          pattern: {
            value: pattern,
            message: patternMessage,
          },
        })}
        placeholder={placeholder}
      />
      {errors[nameTextArea] && (
        <span className="mt-4 text-sm text-yellow-500">
          {errors[nameTextArea].message}
        </span>
      )}
    </div>
  );
}
