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
  } = useForm<LoginFormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [error,setError] = useState('');

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
    } catch (err:any) {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      setError(err.message)
      //TODO: remove below code after testing
      // setError(err)
      setTimeout(() => {
        setShowNotification(false);
        // setIsSubmitting(false)
      }, 10000); // 10 seconds in milliseconds

    }
  };

  return (
    <div className="relative flex">
      <div className="absolute left-32 top-9 flex items-end">
        <Landa />
        <span className="text-xl text-black">LANDA</span>
      </div>
      <Image
        className=" absolute hidden md:bottom-0 md:right-28 md:z-10 md:block"
        src="/static/images/auth/login/blur.png"
        alt="Landa Blur"
        width={589}
        height={800}
      />

      <div className="flex h-screen w-full flex-col items-center justify-center space-y-11 bg-[#CCB598] md:w-9/12">
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
                  value: /^[A-Za-z0-9]+@[a-z0-9]+.[a-z0-9 .]{2,}$/,
                  message: 'Email is not valid',
                },
              })}
              placeholder="Email"
              className={`input input-bordered w-[300px] rounded-md border border-gray-200 bg-white/50 px-3 py-2 text-gray-700 backdrop-blur-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary md:h-[75px] md:w-[548px] ${errors.email ? 'border-red-500' : ''
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
              className={`input input-bordered w-[300px] rounded-md border border-gray-200 bg-white/50 px-3 py-2 text-gray-700 backdrop-blur-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary md:h-[75px] md:w-[548px] ${errors.password ? 'border-red-500' : ''
                }`}
            />
            {errors.password && (
              <p style={{ color: 'red' }}>{errors.password.message}</p>
            )}
          </div>
          <div className="form-control self-start">
            <label className="label cursor-pointer flex-row-reverse gap-2">
              <span className="label-text font-barlow text-xl text-white">
                Remember me
              </span>
              <input type="checkbox" className="checkbox border border-white" />
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-neutral btn-wide mt-3 self-center rounded-sm border-none bg-primary text-white"
            disabled={send}
          >
            {send ? (
              // Show the loading spinner when submitting
              <div className="flex items-center justify-center gap-2">
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
          successMessage='Login success!'
          faildMessage={error}
        />
        <div className="absolute bottom-11 left-32 flex items-center gap-2">
          <Telephone />
          <div className="flex flex-col text-black">
            <span>Reservation</span>
            <span className="font-semibold">855 100 4444</span>
          </div>
        </div>
      </div>
      <div className="relative h-screen overflow-hidden bg-[#fff] md:w-[589px]">
        <div className="hidden md:block md:h-[802px] md:w-[589px]">
          <Image
            className="absolute"
            src="/static/images/auth/login/not-blur.png"
            alt="Landa Blur"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
