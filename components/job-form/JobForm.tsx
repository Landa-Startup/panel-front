'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import { JobFormData } from '../../app/types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '@/utils/get-csrf-token';
import apiClient from '@/utils/api';

export default function JobForm() {
  const initialJobFormData: JobFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    cvFile: '' as File | '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<JobFormData>({
    mode: 'onBlur',
    defaultValues: initialJobFormData,
  });

  const [formData, setFormData] = useState<JobFormData>(initialJobFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [handleChangeFile, setHandleChangeFile] = useState();
  const [csrfToken, setCsrfToken] = useState('');
  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken('https://panel.landaholding.com/get-csrf-token');
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  //   const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = event.target.files && event.target.files[0];
  //     setFormData({ ...formData, cvFile: file as File });
  //     console.log('cvfile:', formData.cvFile);
  //   };

  const [cvFileState, setCvFileState] = useState<{ cvFile: File | '' }>({
    cvFile: '',
  });

  const handleCvFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cvFile = event.target.files && event.target.files[0];
    if (event.target.files && event.target.files.length > 0) {
      setCvFileState({ cvFile: event.target.files[0] });
    }
  };

  const onSubmit = async (formData: JobFormData) => {
    setIsSubmitting(true);
    setSend(true);
    const sendFormData = new FormData();

    if (cvFileState.cvFile) {
      sendFormData.append(
        'cvFile',
        cvFileState.cvFile,
        cvFileState.cvFile.name
      );
    }
    sendFormData.append('firstName', formData.firstName);
    sendFormData.append('lastName', formData.lastName);
    sendFormData.append('email', formData.email);
    sendFormData.append('phoneNumber', formData.phoneNumber);

    try {
      console.log('new form data ', formData);

      const response = await apiClient.post('apply-job-form', sendFormData, {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRFToken': csrfToken,
        },
      });

      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(initialJobFormData); // Reset the form after successful submission
      setFormData(initialJobFormData);
      console.log('Form data sent successfully!');
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    } catch (error) {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      //TODO: remove below code after testing
      console.error('Error sending form data:', error);
      reset(initialJobFormData); // Reset the form after successful submission
      setFormData(initialJobFormData); // reset states after successful submission
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }
  };

  return (
    <>
      <div className="container m-16 px-5 lg:p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <>
          <div className="container m-16 px-5 lg:p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
            <>
              <div className="text-center">
                <p className="mb-20 font-serif text-2xl tracking-wide">
                  Apply job Form
                </p>
              </div>
              <div>
                <p className="mb-4 text-4xl">Personal Information</p>
              </div>
              <div>
                <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
              </div>
            </>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-1">
                  <Input
                    register={register}
                    errors={errors}
                    nameInput="firstName"
                    type="text"
                    label="First Name"
                    required="First Name is Required."
                    patternValue=""
                    patternMessage=""
                    placeholder="Enter your First Name"
                    className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                    labelClass="text-[#6b6b6b] dark:text-current"
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    register={register}
                    errors={errors}
                    nameInput="lastName"
                    type="text"
                    label="Last Name"
                    required="Last Name is Required."
                    patternValue=""
                    patternMessage=""
                    placeholder="Enter your Last Name"
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
                    nameInput="phoneNumber"
                    type="tel"
                    label="Phone Number"
                    required="Phone Number is Required."
                    patternValue="^[0-9]{11}$"
                    patternMessage="Enter a Valid Phone Number"
                    placeholder="Enter your Phone Number"
                    className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                    labelClass="text-[#6b6b6b] dark:text-current"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="cvFileInput">CV File:</label>
                  <input
                    type="file"
                    id="cvFileInput"
                    className="bg-[#f9f6f3] dark:bg-[#1D232A] mt-3 p-5 w-full rounded-lg"
                    {...register('cvFile', {
                      required: 'CV File is Required',
                    })}
                    onChange={handleChangeFile} // must use onChange event handler after register
                  />
                  {errors['cvFile'] && (
                    <span className="mt-4 text-sm text-yellow-500">
                      {errors['cvFile'].message?.toString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-3 btn btn-wide bg-[#AA8453] hover:bg-[#94744a] dark:hover:bg-[#21282f] dark:bg-[#2b333d] text-white dark:text-current"
                  disabled={send}
                >
                  {send ? 'Submitting ....' : 'Submit'}
                </button>
              </div>
            </form>
            <NotificationSendForm
              submitting={isSubmitting}
              success={isSuccess}
              sendStatus={send}
              show={showNotification}
            />
          </div>
        </>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="firstName"
                type="text"
                label="First Name"
                required="First Name is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your First Name"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="lastName"
                type="text"
                label="Last Name"
                required="Last Name is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your Last Name"
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
                nameInput="phoneNumber"
                type="tel"
                label="Phone Number"
                required="Phone Number is Required."
                patternValue="^[0-9]{11}$"
                patternMessage="Enter a Valid Phone Number"
                placeholder="Enter your Phone Number"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="cvFileInput">CV File:</label>
              <input
                type="file"
                id="cvFileInput"
                className="bg-[#f9f6f3] dark:bg-[#1D232A] mt-3 p-5 w-full rounded-lg"
                {...register('cvFile', {
                  required: 'CV File is Required',
                })}
                onChange={handleCvFileChange} // must use onChange event handler after register
              />
              {errors['cvFile'] && (
                <span className="mt-4 text-sm text-yellow-500">
                  {errors['cvFile'].message?.toString()}
                </span>
              )}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-3 btn btn-wide bg-[#AA8453] hover:bg-[#94744a] dark:hover:bg-[#21282f] dark:bg-[#2b333d] text-white dark:text-current"
              disabled={send}
            >
              {send ? 'Submitting ....' : 'Submit'}
            </button>
          </div>
        </form>
        <NotificationSendForm
          submitting={isSubmitting}
          success={isSuccess}
          sendStatus={send}
          show={showNotification}
        />
      </div>
    </>
  );
}
