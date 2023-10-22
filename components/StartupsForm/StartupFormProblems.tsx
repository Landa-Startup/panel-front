import { errors } from 'formidable';
import * as React from 'react';
import Input from '../common/form/Input';
import { InvestorRegistrationFormData } from 'app/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../common/TextArea';

export default function StartupFormProblem({
  register,
  errors,
}:{
  register:any;
  errors:any;
}) {

  return (
    <>
      <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className='col-span-2'>
        <div>
          <p className="text-3xl mb-3">Problems</p>
        </div>
        <div>
          <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
        </div>
        <TextArea
          title="Describe the customer problem you want to solve with your product or service."
          register={register}
          errors={errors}
          placeholder="Description"
          nameTextArea="customerProblem"
          patternMessage=""
          patternValue=""
          required="is Required."
        />
        </div>

      </div>
    </>
  );
}
