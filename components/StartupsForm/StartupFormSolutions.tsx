import { errors } from 'formidable';
import * as React from 'react';
import Input from '../common/form/Input';
import { InvestorRegistrationFormData } from 'app/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../common/TextArea';
import RadioButtonGroup from '../common/RadioButtonGroup';

export default function StartupFormSolutions({
  register,
  errors,
}:{
  register:any;
  errors:any;
}){



  const preparationStatsOption = [
    { value: 'basicPrinciple', label: 'The basic principle has been observed.' },
    { value: 'technologyConcept', label: 'The technology concept has been formulated.' },
    { value: 'exprimentalProof', label: 'Experimental proof of concept.' },
    { value: 'confirmedTechnologyLab', label: 'The confirmed technology in laboratory.' },
    { value: 'confirmedTechnologyEnv', label: 'The confirmed technology in the environmental conditions' },
    { value: 'presentedTechnologyEnv', label: 'The presented technology in the environmental conditions' },
    { value: 'systemPrototypeInMvp', label: 'Show the system prototype in the mvp operating environment.' },
    { value: 'realisticSystem', label: 'The proved realistic system in the operating environment.' },
    { value: 'qualifiedSystem', label: 'A complete and qualified system.' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="col-span-2">
          <div>
            <p className="text-3xl mb-3">Solutions</p>
          </div>
          <div>
            <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
          </div>
          <TextArea
            title="What is your unique value proposition (innovation)? What is new about what you do?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="solution"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        <div className="col-span-2">
          <RadioButtonGroup
            title="How much is level of your product and technology preparation?"
            options={preparationStatsOption}
            register={register}
            errors={errors}
            required="Preparation Stats Required"
            nameRadioButton="productLevel"
          />
        </div>
        <div className="col-span-2 mt-2">
          <TextArea
            title="Briefly explain how your technology is scalable?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="scalable"
            patternMessage=""
            patternValue=""
            required="this is required"
          />
        </div>
      </div>
    </>
  );
}
