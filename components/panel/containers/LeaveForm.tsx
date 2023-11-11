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
import RadioButton from '@/components/common/RadioButton';
import jalaliDateToAdDate from '@/services/jalaliDateToAdDate';
import { JBDateInput } from 'jb-date-input-react';

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

  const handleStart = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStart(event.target.value);
  };
  const handleEnd = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEnd(event.target.value);
  };
  const onSubmit = async (formData: LeaveFormData) => {
    setIsSubmitting(true);
    setSend(true);
    let startDate = String(jalaliDateToAdDate(start)).replace(/\//g, '-');
    let endDate = String(jalaliDateToAdDate(end)).replace(/\//g, '-');
    console.log(startDate);
    console.log(endDate);
    console.log(`${startDate}T${formData.leaveStartTime}:00+03:30`);
    console.log(`${endDate}T${formData.leaveEndTime}:00+03:30`);
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
      const response = await apiClient.post(
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
        <ClipboardData size={32} />
        <span className="text-3xl font-medium font-barlow">
          leave permission Form
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        <JBDateInput
          label="Start Date"
          format="YYYY/MM/DD"
          valueType="JALALI"
          value="1399-05-01T12:05:39.530Z"
          onChange={(event) => {
            setStart(event.target.value);
          }}
          style="--jb-date-input-border-radius:9px;--jb-date-input-bgcolor:#f9f6f3;--jb-date-input-label-weight:bold;--jb-date-input-box-height:60px; width:300px; margin-left:auto; margin-right:auto;"
          required={true}
        ></JBDateInput>
        <JBDateInput
          label="End Date"
          format="YYYY/MM/DD"
          valueType="JALALI"
          value="1399-05-01T12:05:39.530Z"
          onChange={(event) => {
            setEnd(event.target.value);
          }}
          style="--jb-date-input-border-radius:9px;--jb-date-input-bgcolor:#f9f6f3;--jb-date-input-label-weight:bold;--jb-date-input-box-height:60px; width:300px; margin-left:auto; margin-right:auto;"
          required={true}
        ></JBDateInput>
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
