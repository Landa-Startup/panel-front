export default function RadioButton({
  title,
  register,
  errors,
  required,
  name,
  selectedRadio,
  handleRadioChange,
}: {
  title: string;
  register: any;
  errors: any;
  required: string;
  name: string;
  selectedRadio: any;
  handleRadioChange: any;
}) {
  return (
    <div>
      {/* Label for the radio buttons */}
      <label className="text-[#6b6b6b]">{title}</label>
      <div className="flex flex-col">
        {/* Radio buttons for 'Yes' and 'No' */}
        <div className="flex flex-row mt-4 bg-[#f9f6f3]  p-4 rounded-lg drop-shadow-lg">
          <label className="flex flex-column mr-10 ">
            <input
              type="radio"
              value="1"
              {...register(name, { required: required })}
              checked={selectedRadio === '1'}
              onChange={handleRadioChange}
              className="radio mr-2 text-indigo-600 dark:text-indigo-400 drop-shadow-lg"
            />
            <span>illness</span>
          </label>
          <label className="flex flex-row">
            <input
              type="radio"
              value='2'
              {...register(name, { required:  'this file is requied!'})}
              checked={selectedRadio === '2'}
              onChange={handleRadioChange}
              className="radio mr-2 text-indigo-600 dark:text-indigo-400  drop-shadow-lg"
            />
            <span>entitlement</span>
          </label>
        </div>

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