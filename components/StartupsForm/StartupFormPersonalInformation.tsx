import * as React from 'react';
import Input from '../common/form/Input';

export default function StartupFormPersonalInformation({
  register,
  errors,
  handleCountryChange,
  selectedCountry,
  countries
}: {
  register: any;
  errors: any;
  handleCountryChange: any;
  selectedCountry: any;
  countries:any;

}) {
  return (
    <>
      <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Input
          register={register}
          errors={errors}
          nameInput="firstName"
          type="text"
          label="First Name"
          required="First Name is Required."
          patternValue="^[A-Za-z]+$"
          patternMessage="Only Alphabetic Characters are Allowed."
          placeholder="Enter your First Name"
          className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
          labelClass="text-[#6b6b6b] dark:text-current"
        />

        <Input
          register={register}
          errors={errors}
          nameInput="lastName"
          type="text"
          label="Last Name"
          required="Last Name is Required."
          patternValue="^[A-Za-z]+$"
          patternMessage="Only Alphabetic Characters are Allowed."
          placeholder="Enter your Last Name"
          className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
          labelClass="text-[#6b6b6b] dark:text-current"
        />

        <Input
          register={register}
          errors={errors}
          nameInput="birthDate"
          type="date"
          label="Date of Birth"
          required="Date of Birth is Required."
          patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
          patternMessage="Please enter a valid Date of Birth (e.g., 2001/02/11)"
          placeholder="Enter your Date of Birth"
          className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
          labelClass="text-[#6b6b6b] dark:text-current"
        />

        <Input
          register={register}
          errors={errors}
          nameInput="email"
          type="email"
          label="Email Address"
          required="Email Address is Required."
          patternValue="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          patternMessage="Enter a Valid Email Address"
          placeholder="Enter your Email Address"
          className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
          labelClass="text-[#6b6b6b] dark:text-current"
        />

        {/* <Input
          register={register}
          errors={errors}
          nameInput="countryOfResidence"
          type="text"
          label="Country of Residence"
          required="Country of Residence is Required."
          patternValue="^[A-Za-z]+$"
          patternMessage="Only Alphabetic Characters are Allowed."
          placeholder="Enter your Country of Residence"
          className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
          labelClass="text-[#6b6b6b] dark:text-current"
        /> */}
            <div className="col-span-1">
              <label htmlFor="countrySelect" className='text-[#6b6b6b] dark:text-current'>Select a country:</label>
              <select
                id="countrySelect"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                // name='countryOfResidence'
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="" selected>Select a country</option>
                {countries.map((country:any, index:number) => (
                  <option key={index} value={country.text}>
                    {country.text}
                  </option>
                ))}
              </select>
            </div>
        <Input
          register={register}
          errors={errors}
          nameInput="provinceOfResidence"
          type="text"
          label="City Of Residence"
          required="City Of Residence is Required."
          patternValue="^[A-Za-z]+$"
          patternMessage="Only Alphabetic Characters are Allowed."
          placeholder="Enter your City Of Residence"
          className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
          labelClass="text-[#6b6b6b] dark:text-current"
        />
      </div>
    </>
  );
}
