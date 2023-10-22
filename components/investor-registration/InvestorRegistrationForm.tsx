'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from '../common/form/Select';
import InvestorRegistrationTitle from './InvestorRegistrationTitle';
import { InvestorRegistrationFormData } from '../../app/types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import TextArea from '../common/TextArea';
import GetCsrfToken from '@/utils/get-csrf-token';
import apiClient from '@/utils/api';
import Input from '../common/form/Input';

export default function InvestorRegistrationForm() {
  const initialInvestorRegistrationFormData: InvestorRegistrationFormData = {
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    email: '',
    countryOfResidence: '',
    provinceOfResidence: '',
    companyName: '',
    interests: '',
    positionInTeam: '',
    preferredAreas: '',
    howDidYouKnowUs: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InvestorRegistrationFormData>({
    mode: 'onBlur',
    defaultValues: initialInvestorRegistrationFormData,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [csrfToken, setCsrfToken] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [formData, setFormData] = useState<InvestorRegistrationFormData>(
    initialInvestorRegistrationFormData
  );

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken('https://panel.landaholding.com/get-csrf-token');
      setCsrfToken(token);
    }
    fetchCsrfToken();
  }, []);

  useEffect(() => {
    const apiUrl = 'https://restcountries.com/v3.1/all';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Process the data and set the countries state after sorting
        const countryData = data.map((country: any) => ({
          value: country.name.common,
          text: country.name.common,
        }));
        countryData.sort((a: any, b: any) => a.text.localeCompare(b.text)); // Sort alphabetically
        setCountries(countryData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);

    setFormData({
      ...formData,
      countryOfResidence: event.target.value, // Update the formData state
    });
  };

  console.log(selectedCountry);

  const onSubmit = async (formData: InvestorRegistrationFormData) => {
    setIsSubmitting(true);
    setSend(true);
    const sendFormData = new FormData();

    sendFormData.append('firstName', formData.firstName);
    sendFormData.append('lastName', formData.lastName);
    sendFormData.append('email', formData.email);
    sendFormData.append('countryOfResidence', selectedCountry);
    sendFormData.append('provinceOfResidence', formData.provinceOfResidence);
    sendFormData.append('birthDate', String(formData.birthDate));
    sendFormData.append('companyName', formData.companyName);
    sendFormData.append('howDidYouKnowUs', formData.howDidYouKnowUs);
    sendFormData.append('preferredAreas', formData.preferredAreas);
    sendFormData.append('interests', formData.interests);

    try {
      const response = await apiClient.post(
        'investor-registration',
        sendFormData,
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
      reset(initialInvestorRegistrationFormData);
      setFormData(initialInvestorRegistrationFormData);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000);
    } catch (error) {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      console.error('Error sending form data:', error);
      reset(initialInvestorRegistrationFormData);
      setFormData(initialInvestorRegistrationFormData);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }
  };

  return (
    <>
      <div className="container m-16 px-5 lg:p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <InvestorRegistrationTitle />
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
                nameInput="birthDate"
                type="date"
                label="Date of Birth"
                required="Date of Birth is Required."
                patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
                patternMessage="Please enter a valid Date of Birth(e.g., 2001/02/11)"
                placeholder="Enter your Date of Birth"
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
              <label
                htmlFor="countrySelect"
                className="text-[#6b6b6b] dark:text-current"
              >
                Select a country:
              </label>
              <select
                id="countrySelect"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                // name='countryOfResidence'
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="" selected>Select a country</option>
                {countries.map((country: any, index: number) => (
                  <option key={index} value={country.text}>
                    {country.text}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="col-span-1
              <Input
                register={register}
                errors={errors}
                nameInput="countryOfResidence"
                type="text"
                label="Country of Residence"
                required="Country of Residence is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your Country of Residence"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div> */}

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="provinceOfResidence"
                type="text"
                label="City Of Residence"
                required="City Of Residence is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your City Of Residence"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="companyName"
                type="text"
                label="Company Name"
                required="Company Name is Required."
                placeholder="Enter your Company Name"
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
                nameInput="interests"
                type="text"
                label="Interests"
                required="Interests is Required."
                placeholder="Enter your Interests"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue={''}
                patternMessage={''}
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <TextArea
                title="Preferred Areas for Investment"
                register={register}
                errors={errors}
                placeholder="Description"
                nameTextArea="preferredAreas"
                patternMessage=""
                patternValue=""
                required="This field is required"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <TextArea
                title="How did you hear about us?*"
                register={register}
                errors={errors}
                placeholder="Description"
                nameTextArea="howDidYouKnowUs"
                patternMessage=""
                patternValue=""
                required="This field is required"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              disabled={send}
              type="submit"
              className="mt-3 btn btn-wide bg-[#AA8453] hover:bg-[#94744a] dark:hover:bg-[#21282f] dark:bg-[#2b333d] text-white dark:text-current"
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
