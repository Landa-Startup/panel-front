'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormData } from '../../../app/types/global';
import { login } from '@/services/authService';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { DecodedToken } from 'app/types/global';
import NotificationSendForm from '../../common/form/NotificationSendForm';
import Image from 'next/image';
import Telephone from '@/components/icons/auth/Login/Telephone';
import Landa from '@/components/icons/auth/Login/Landa';
import Spinner from '@/components/common/Spinner';

export default function LoginPage() {
  const router = useRouter();

  // const initialFormData:
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const onSubmit = async (formData: LoginFormData) => {
    setIsSubmitting(true);
    setSend(true);
    try {
      const user = await login(formData.email, formData.password);
      if (user) {
        setIsSuccess(true);
        setShowNotification(true);
        setSend(false);
        console.log('Form data sent successfully!');
        // read from cookie
        setTimeout(() => {
          setShowNotification(false);
        }, 10000); // 10 seconds in milliseconds
        const cookies = parseCookies();
        const currentUser: DecodedToken = JSON.parse(cookies.currentUser);

        router.push(`/dashboard/${currentUser.role}`);
      }
    } catch (error) {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      //TODO: remove below code after testing
      console.error('Error sending form data:', error);
      setTimeout(() => {
        setShowNotification(false);
        // setIsSubmitting(false)
      }, 10000); // 10 seconds in milliseconds

    }
  };

  return (
    <div className="flex relative">
      <div className="flex items-end absolute left-32 top-9">
        <Landa />
        <span className="text-black text-xl">LANDA</span>
      </div>
      <Image
        className=" hidden md:block absolute md:right-28 md:bottom-0 md:z-10"
        src="/static/images/panel/login/blur.png"
        alt="Landa Blur"
        width={589}
        height={800}
      />

      <div className="w-full md:w-9/12 bg-[#CCB598] h-screen flex flex-col items-center justify-center space-y-11">
        <span className="font-condensed text-7xl text-white">Login</span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-9"
        >
          <div>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Your email is required.',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is not valid',
                },
              })}
              placeholder="Email"
              className={`md:w-[548px] md:h-[75px] w-[300px] input input-bordered bg-white/50 backdrop-blur-lg border border-gray-200 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <p style={{ color: 'red' }}>{errors.email.message}</p>
            )}
          </div>
          <div>
            {' '}
            <input
              id="password"
              type="password"
              {...register('password', {
                required: 'Your password is required.',
                minLength: {
                  value: 5,
                  message: 'Your password must be at least 8 characters long.',
                },
              })}
              placeholder="Password"
              className={`md:w-[548px] md:h-[75px] w-[300px] input input-bordered bg-white/50 backdrop-blur-lg border border-gray-200 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary ${
                errors.password ? 'border-red-500' : ''
              }`}
            />
            {errors.password && (
              <p style={{ color: 'red' }}>{errors.password.message}</p>
            )}
          </div>
          <div className="form-control self-start">
            <label className="label cursor-pointer flex-row-reverse gap-2">
              <span className="label-text text-white font-barlow text-xl">
                Remember me
              </span>
              <input type="checkbox" className="checkbox border border-white" />
            </label>
          </div>
          <button
            type="submit"
            className="mt-3 btn btn-wide btn-neutral bg-primary rounded-sm border-none text-white self-center"
            disabled={send}
          >
            {send ? (
              // Show the loading spinner when submitting
              <div className="flex justify-center items-center gap-2">
                <Spinner />
                Submitting...
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </form>
        <NotificationSendForm
          submitting={isSubmitting}
          success={isSuccess}
          sendStatus={send}
          show={showNotification}
        />
        <div className="flex gap-2 items-center absolute left-32 bottom-11">
          <Telephone />
          <div className="flex flex-col text-black">
            <span>Reservation</span>
            <span className="font-semibold">855 100 4444</span>
          </div>
        </div>
      </div>
      <div className="md:w-[589px] bg-[#fff] h-screen relative overflow-hidden">
        <div className="hidden md:block md:w-[589px] md:h-[802px]">
          <Image
            className="absolute"
            src="/static/images/panel/login/notBlur.png"
            alt="Landa Blur"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
