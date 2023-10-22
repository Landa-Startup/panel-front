import { errors } from 'formidable';
import * as React from 'react';
import Input from '../common/form/Input';
import { InvestorRegistrationFormData } from 'app/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../common/TextArea';
import RadioButtonGroup from '../common/RadioButtonGroup';
import NoRadioButton from '../common/NoRadioButton';
import YesRadioButton from '../common/YesRadioButton';
import { ChangeEvent } from 'react';

export default function StartupFormBusinessModel({
  register,
  errors,
  handleFinancialFileChange,
}: {
  register: any;
  errors: any;
  handleFinancialFileChange: any;

}) {

  const preparationStatsOption = [
    {
      value: 'The basic principle has been observed.',
      label: 'The basic principle has been observed.',
    },
    {
      value: 'The technology concept has been formulated.',
      label: 'The technology concept has been formulated.',
    },
    {
      value: 'Experimental proof of concept.',
      label: 'Experimental proof of concept.',
    },
    {
      value: 'The confirmed technology in laboratory.',
      label: 'The confirmed technology in laboratory.',
    },
    {
      value: 'The confirmed technology in the environmental conditions',
      label: 'The confirmed technology in the environmental conditions',
    },
    {
      value: 'The presented technology in the environmental conditions',
      label: 'The presented technology in the environmental conditions',
    },
    {
      value: 'Show the system prototype in the mvp operating environment.',
      label: 'Show the system prototype in the mvp operating environment.',
    },
    {
      value: 'The proved realistic system in the operating environment.',
      label: 'The proved realistic system in the operating environment.',
    },
    {
      value: 'A complete and qualified system.',
      label: 'A complete and qualified system.',
    },
  ];


  return (
    <>
      <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="col-span-2">
          <div>
            <p className="text-3xl mb-3">Business Model</p>
          </div>
          <div>
            <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
          </div>
          <TextArea
            title="Describe the method of monetization of your plan?*"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="monetizationOfYourPlan"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title="Please clearly mention the structure of your sales cycle from contact to delivery."
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="structureOfYourSales"
            patternMessage=""
            patternValue=""
            required="this is requried!"
          />
        </div>
        <div className="col-start-1 col-span-1">
          <label className="text-[#6b6b6b] dark:text-current">If your plan has a financial model, please upload</label>
          <div className='flex justify-center '>
            <input
              type="file"
              className="bg-[#f9f6f3] dark:bg-[#1D232A] mt-3 p-5 w-full rounded-lg"
              {...register('financialFile', {
                required: '',
              })}
              onChange={handleFinancialFileChange} // must use onChange event handler after register
            />
          </div>
        </div>
        <div className="col-start-1 col-span-2">
          <TextArea
            title="Have you previously cooperated with investors or accelerators?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="cooperatedWithInvestors"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title="How did you hear about us?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="getToKnowUs"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
      </div>
    </>
  );
}
