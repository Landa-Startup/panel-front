import { useForm, UseFormRegister, FieldValues } from 'react-hook-form';

export default function Select({
  register,
  errors,
  nameInput,
  label,
  required,
  options,
  className,
  labelClass,
  placeholder,
}: {
  register: any;
  errors: any;
  nameInput: string;
  label: string;
  required: string;
  options: Array<{ value: string; label: string }>;
  className: string;
  labelClass: string;
  placeholder: string;
}) {
  return (
    <>
    <div>

      <label htmlFor={nameInput} className={labelClass}>
        {label}
      </label>

      <select
        id={nameInput}
        {...register(nameInput, {
          required: required,
        })}
        className={className + (errors[nameInput] ? ' border-red-500' : '')}
      >
        <option disabled selected value={""}>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors[nameInput] && (
        <span className="mt-2 text-sm text-yellow-500">
          {errors[nameInput].message}
        </span>
      )}

      <br />
    </div>
    </>
  );
}
