import { errors } from 'formidable';
import * as React from 'react';
import Input from '../common/form/Input';
import { InvestorRegistrationFormData } from 'app/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../common/TextArea';

export default function StartupFormProperty({
  register,
  errors,
}:{
  register:any;
  errors:any;
}) {
  return (
    <>
      <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
        <div className='col-span-2'>
        <div>
          <p className="text-3xl mb-3">Property</p>
        </div>
        <div>
          <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
        </div>
        <TextArea
          title="How much revenue has your startup made since its inception?"
          register={register}
          errors={errors}
          placeholder="Description"
          nameTextArea="startupRevenue"
          patternMessage=""
          patternValue=""
          required="this is required!"
        />
        </div>
        <div className="col-span-2">
          <TextArea
            title="How much is your monthly income?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="monthlyIncome"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        {/* <div className="col-span-2">
          <TextArea
            title="What is your current interest rate?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="currentInterestRate"
            patternMessage=""
            patternValue=""
            required=""
          />
        </div> */}
        <div className="col-span-2">
          <TextArea
            title="How much current funding did you raise before starting your business?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="currentRaisedFunding"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title="How much capital do you need to start your project?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="neededCapital"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>

      </div>
    </>
  );
}
