'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LeaveFormFromTo from '../LeaveFormFromTo';
import ClipboardData from '@/components/icons/Panel/ClipboardData';
import GetCsrfToken from '@/utils/get-csrf-token';
import { useForm } from 'react-hook-form';
import NotificationSendForm from '../../common/form/NotificationSendForm';
import apiClient from '@/utils/api';
import { DecodedToken } from 'app/types/global';
import { parseCookies } from 'nookies';
import RadioButton from '@/components/common/RadioButton';
import jalaliDateToAdDate from '@/services/jalaliDateToAdDate';
import dynamic from 'next/dynamic';
// import { JBDateInputValueObject } from 'jb-date-input-react';

interface LeaveFormData {
  leaveType: number;
  leaveStartDate: Date;
  leaveEndDate: Date;
  leaveStartTime: string;
  leaveEndTime: string;
}

// import jbDate
const JBDateInput = dynamic(() => import('jb-date-input-react').then(module => module.JBDateInput), {
  ssr: false,
});


export default function LeaveForm() {
  const initialLeaveForm: LeaveFormData = {
    leaveType: 1,
    leaveStartDate: new Date(),
    leaveEndDate: new Date(),
    leaveStartTime: '',
    leaveEndTime: '',
  };


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeaveFormData>({
    mode: 'onBlur',
    defaultValues: initialLeaveForm,
  });

  const [formData, setFormData] = useState<LeaveFormData>(initialLeaveForm);
  console.log(formData)
  const cookies = parseCookies();
  const currentUser: DecodedToken | null = cookies.currentUser
    ? JSON.parse(cookies.currentUser)
    : null;
  const jwt_token = currentUser?.jwt;
  const user_id = currentUser?.user_id;
  const [csrfToken, setCsrfToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  // TODO: change Send to send(start with small letter)
  const [Send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [error,setError] = useState('');

  const router = useRouter();
  const onCancel = () => {
    router.push('/dashboard/manager');
  };
  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        'https://panel.landaholding.com/get-csrf-token'
      );
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  // handle radio button
  const [selectedRadio, setSelectedRadio] = useState('1');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const handleRadio = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRadio(event.target.value);
  };
  const onSubmit = async (formData: LeaveFormData) => {
    setIsSubmitting(true);
    setSend(true);
    const startDate = String(jalaliDateToAdDate(start)).replace(/\//g, '-');
    const endDate = String(jalaliDateToAdDate(end)).replace(/\//g, '-');
    const sendFormData = new FormData();
    sendFormData.append(
      'start_time',
      `${startDate}T${formData.leaveStartTime}:00+03:30`
    );
    sendFormData.append(
      'end_time',
      `${endDate}T${formData.leaveEndTime}:00+03:30`
    );
    sendFormData.append('vacation_status', String(selectedRadio));
    sendFormData.append('user', String(user_id));

    try {
      await apiClient.post(
        'panel/create-vacation-form',
        sendFormData,
        {
          headers: {
            'content-type': 'application/json',
            'X-CSRFToken': csrfToken,
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );

      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(initialLeaveForm); // Reset the form after successful submission
      setFormData(initialLeaveForm);
      console.log('Form data sent successfully!');
      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    } catch (error:any) {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      console.log('error')
      console.log(error.message['detail'])
      setError(error.message)

      reset(initialLeaveForm); // Reset the form after successful submission
      setFormData(initialLeaveForm); // reset states after successful submission
      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="mb-6 flex gap-2 border-b-2 border-black pb-4">
        <ClipboardData size={32} />
        <span className="font-barlow text-xl font-medium md:text-3xl">
          leave permission Form
        </span>
      </div>
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
        <JBDateInput
          label="Start Date"
          format="YYYY/MM/DD"
          valueType="JALALI"
          value="1399-05-01T12:05:39.530Z"
          onChange={(event) => {
            setStart(event.target.value);
          }}
          style="--jb-date-input-border-radius:9px;--jb-date-input-bgcolor:#f9f6f3;--jb-date-input-label-weight:bold;--jb-date-input-box-height:60px; margin: 10px"
          required={true}
        >{ }</JBDateInput>
        <JBDateInput
          label="End Date"
          format="YYYY/MM/DD"
          valueType="JALALI"
          value="1399-05-01T12:05:39.530Z"
          onChange={(event) => {
            setEnd(event.target.value);
          }}
          style="--jb-date-input-border-radius:9px;--jb-date-input-bgcolor:#f9f6f3;--jb-date-input-label-weight:bold;--jb-date-input-box-height:60px; margin: 10px"
          required={true}
        >{ }</JBDateInput>
        <LeaveFormFromTo
          title="I want leave from"
          register={register}
          errors={errors}
        />
        <RadioButton
          register={register}
          errors={errors}
          name="vacation_status"
          required="this is required!"
          selectedRadio={selectedRadio}
          handleRadioChange={handleRadio}
          title="Type Of Leave Form"
        />
      </div>
      <div className="flex">
        <button
          disabled={Send}
          type="submit"
          className="mt-8 rounded-lg bg-primary px-8 py-2 font-barlow text-base font-semibold text-white"
        >
          {Send ? 'Submiting ....' : 'Submit'}
        </button>
        <button
          className="ml-4 mt-8 rounded-lg bg-[#F8F5F0] px-8 py-2 font-barlow text-base font-semibold text-primary"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
      <NotificationSendForm
        submitting={isSubmitting}
        success={isSuccess}
        sendStatus={Send}
        show={showNotification}
        successMessage='Your Vacation request has Send'
        faildMessage={error}
      />
    </form>
  );
}
