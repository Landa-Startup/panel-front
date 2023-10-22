'use client'
import React, { useState, useEffect } from 'react'
import Input from '../common/form/Input'
import { useForm } from 'react-hook-form';
import GetCsrfToken from '@/utils/get-csrf-token';
import apiClient from '@/utils/api';
interface FormData {
  email: string;
  password: string;
}
export default function RegisterForm() {
  const initialFormData: FormData = {
    email: '',
    password: ''
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: initialFormData,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [csrfToken, setCsrfToken] = useState('');

  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        'https://panel.landaholding.com/get-csrf-token'
      );
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSend(true);
    try {
      const response = await apiClient.post(
        'accounts/register',
        JSON.stringify(data),
        {
          headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json',
          },
        }
      );
      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(initialFormData);
      setFormData(initialFormData);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000);
    } catch (error) {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      console.error('Error sending form data:', error);
      reset(initialFormData);
      setFormData(initialFormData);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }
  };
  return (
    <div className="container m-16 p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            register={register}
            errors={errors}
            nameInput="email"
            type="text"
            label="Email"
            required="First Name is Required."
            patternValue=""
            patternMessage=""
            placeholder="Enter your Email"
            className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
          <Input
            register={register}
            errors={errors}
            nameInput="password"
            type="text"
            label="Password"
            required="First Name is Required."
            patternValue=""
            patternMessage=""
            placeholder="Enter your Password"
            className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
        </div>
        <div className="">
          <button className="ml-auto btn btn-accent" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
