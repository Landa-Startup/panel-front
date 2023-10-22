'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LeaveFormRadio from '../LeaveFormRadio';
import LeaveFormFromTo from '../LeaveFormFromTo';
import LeaveFormDate from '../LeaveFormDate';
import ClipboardData from '@/components/icons/Panel/ClipboardData';
import GetCsrfToken from '@/utils/get-csrf-token';
import { useForm } from 'react-hook-form';
import NotificationSendForm from '../../common/form/NotificationSendForm';
import apiClient from '@/utils/api';
import { DecodedToken } from 'app/types/global';
import { parseCookies } from 'nookies';
import Input from '@/components/common/form/Input';

interface LeaveFormData {
  leaveType: number;
  leaveStartDate: Date;
  leaveEndDate: Date;
  leaveStartTime: string;
  leaveEndTime: string;
}
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
  const cookies = parseCookies();
  const currentUser: DecodedToken | null = JSON.parse(cookies.currentUser);
  const jwt_token = currentUser?.jwt;
  const user_id = currentUser?.user_id;
  const [csrfToken, setCsrfToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  // TODO: change Send to send(start with small letter)
  const [Send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  
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

  const onSubmit = async (formData: LeaveFormData) => {
    setIsSubmitting(true);
    setSend(true);
    const sendFormData = new FormData();
    sendFormData.append('start_time', String(`${formData.leaveStartDate}T${formData.leaveStartTime}`));
    sendFormData.append('end_time', String(`${formData.leaveEndDate}T${formData.leaveEndTime}`));
    sendFormData.append('vacation_status', String(formData.leaveType));
    sendFormData.append('user', String(user_id));


    try {
      const response = await apiClient.post(
        'panel/create-vacation-form',
        sendFormData,
        {
          headers: {
            'content-type': 'application/json',
            'X-CSRFToken': csrfToken,
            'Authorization': `Bearer ${jwt_token}`,
          },
        }
      );


      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(initialLeaveForm); // Reset the form after successful submission
      setFormData(initialLeaveForm);
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
      reset(initialLeaveForm); // Reset the form after successful submission
      setFormData(initialLeaveForm); // reset states after successful submission
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex gap-2 border-b-2 border-black pb-4 mb-6">
        <ClipboardData />
        <span className="text-3xl font-medium font-barlow">
          leave permission Form
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        {/* <LeaveFormRadio
          title="Leave (daily - hourly)"
          items={['Hourly leave', 'Day off']}
        /> */}
        <LeaveFormFromTo
          title="I want leave from"
          register={register}
          errors={errors}
        />
        <Input
          register={register}
          errors={errors}
          nameInput="leaveStartDate"
          type="date"
          label="Start Date"
          required="Start Date is Required."
          patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
          patternMessage="Please enter a valid Start Date (e.g., 2001/02/11)"
          placeholder="Enter your Start Date"
          className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
          labelClass="text-[#6b6b6b] dark:text-current"
        />
        <Input
          register={register}
          errors={errors}
          nameInput="leaveEndDate"
          type="date"
          label="End Date"
          required="End Date is Required."
          patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
          patternMessage="Please enter a valid End Date (e.g., 2001/02/11)"
          placeholder="Enter your End Date"
          className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
          labelClass="text-[#6b6b6b] dark:text-current"
        />
        {/* <LeaveFormDate title="From Date" /> */}
        {/* <LeaveFormDate title="To Date" /> */}
        <LeaveFormRadio
          title="Type of leave"
          items={['entitlement', 'illness']}
          register={register}
          errors={errors}
        />
      </div>
      <div className="flex">
        <button
          disabled={Send}
          type="submit"
          className="bg-primary text-white font-barlow text-base font-semibold px-8 py-2 rounded-lg mt-8"
        >
          {Send ? 'Submiting ....' : 'Submit'}
        </button>
        <button
          className="bg-[#F8F5F0] text-primary font-barlow text-base font-semibold px-8 py-2 rounded-lg mt-8 ml-4"
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
      />
    </form>
  );
}
