'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import { Entrepreuneur } from '../../app/types/global';
import EntrepreneursTitle from './EntrepreneursTitle';
import NotificationSendForm from '../common/form/NotificationSendForm';
import apiClient from '@/utils/api';
import GetCsrfToken from '@/utils/get-csrf-token';

export default function EntrepreneursForm() {
  const initialFormData: Entrepreuneur = {
    email: '',
    companyName: '',
    phone: '',
    website: '',
    fieldOfProfessional: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Entrepreuneur>({
    mode: 'onBlur',
    defaultValues: initialFormData,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  // TODO: change Send to send(start with small letter)
  const [Send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken("https://panel.landaholding.com/get-csrf-token");
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (data: Entrepreuneur) => {
    setIsSubmitting(true);
    setSend(true);
    try {
      const response = await apiClient.post(
        'entrepreuneur-form',
        JSON.stringify(data),
        {
          headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json',
          },
        }
      );
      // if (!response.ok) {
      //   console.error('Failed to submit form data.');
      // }
      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000);
      reset(initialFormData); // Reset the form after successful submission
      console.log('Form data sent successfully!');
    } catch (error) {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      console.error('Error sending form data:', error);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds;
    }
  };

  const test = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  return (
    <>
      <div className="container m-16 p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <EntrepreneursTitle />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="companyName"
                type="text"
                label="Company Name"
                required="Company Name is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your Company Name"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1">
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
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="website"
                type="text"
                label="Website"
                required="Website is Required."
                placeholder="Enter your Website"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="phone"
                type="text"
                label="Phone"
                required="Phone Number is Required."
                placeholder="Enter your Phone Number"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue={''}
                patternMessage={''}
              />
            </div>
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="fieldOfProfessional"
                type="text"
                label="Field Of Professional"
                required=" Field Of Professional is Required."
                placeholder="Enter your Field Of Professional"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue={''}
                patternMessage={''}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-3 btn btn-wide btn-neutral bg-primary border-none text-white"
              disabled={Send}
            >
              {Send ? 'Submitting ....' : 'Submit'}
            </button>
          </div>
        </form>
        <NotificationSendForm
          submitting={isSubmitting}
          success={isSuccess}
          sendStatus={Send}
          show={showNotification}
        />
      </div>
    </>
  );
}
