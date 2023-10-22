'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import Select from '../common/form/Select';
import InvestorRegistrationTitle from 'app/types/global';
import { StartupsFormData } from '../../app/types/global';
import StartupFormTitle from './StartupFormTitle';
import StartupFormPersonalInformation from './StartupFormPersonalInformation';
import StartupFormIdea from './StartupFormIdea';
import StartupFormMVP from './StartupFormMVP';
import StartupFormTrialProduct from './StartupFormTrialProduct';
import StartupFormFirstSale from './StartupFormFirstSale';
import StartupFormSaleDevelopment from './StartupFormSaleDevelopment';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '@/utils/get-csrf-token';
import apiClient from '@/utils/api';

//TODO: add this enum in a file and import it to index.ts api file , global.d file
enum Type {
  IDEA = 'IDEA',
  MVP = 'MVP',
  TRIAL = 'TRIAL',
  FisrtSale = 'FisrtSale',
  SaleDevelopment = 'SaleDevelopment',
}

export default function StartupFormForm() {
  const initialStartupsFormData: StartupsFormData = {
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    email: '',
    countryOfResidence: '',
    provinceOfResidence: '',
    type: Type.IDEA,
    ideaExplanation: '',
    getToKnowUs: '',
    pitchDeck: true,
    pitchDeckFile: '' as File | '',
    businessPlan: true,
    businessPlanFile: '' as File | '',
    productName: '',
    siteAddress: '',
    customerProblem: '',
    solution: '',
    productLevel: '',
    scalable: '',
    monetizationOfYourPlan: '',
    structureOfYourSales: '',
    financialModelFile: '' as File | '',
    cooperatedWithInvestors: '',
    financial: true,
    financialFile: '' as File | '',
    customerCharacteristic: '',
    currentCustomers: '',
    estimatedMarketSize: '',
    totalTamSamSom: '',
    startupRevenue: '',
    monthlyIncome: '',
    currentInterestRate: '',
    currentRaisedFunding: '',
    neededCapital: '',
    MVP: false,
    FirstSale: false,
    TrialProduct: false,
    SaleDevelopment: false,
    Idea: false,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<StartupsFormData>({
    mode: 'onBlur',
    defaultValues: initialStartupsFormData,
  });

  const [selectedRadio, setSelectedRadio] = useState('');

  // useEffect(() => {
  //   setSelectedRadio('IDEA');
  // }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  // TODO: change Send to send(start with small letter)
  const [Send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRadio(event.target.value);
  };
  const [filePost, setFilePost] = useState<{ businessPlanFile: File | '' }>({
    businessPlanFile: '',
  });
  const [filePost2, setFilePost2] = useState<{ pitchDeckFile: File | '' }>({
    pitchDeckFile: '',
  });
  const [filePost3, setFilePost3] = useState<{ financialFile: File | '' }>({
    financialFile: '',
  });

  const handlePitchDeckFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const pitchDeckFile = event.target.files && event.target.files[0];
    if (event.target.files && event.target.files.length > 0) {
      setFilePost2({ pitchDeckFile: event.target.files[0] });
    }
  };

  const handleBusinessPlanFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setFilePost({ businessPlanFile: event.target.files[0] });
    }
    // const businessPlanFile = event.target.files && event.target.files[0];
    // setFilePost({businessPlanFile: event.target.files[0]})
  };

  const handleFinancialFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const financialFile = event.target.files && event.target.files[0];
    if (event.target.files && event.target.files.length > 0) {
      setFilePost3({ financialFile: event.target.files[0] });
    }
  };

  const [formData, setFormData] = useState<StartupsFormData>(
    initialStartupsFormData
  );

  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        'https://panel.landaholding.com/get-csrf-token'
      );
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

  const onSubmit = async (formData: StartupsFormData) => {
    setIsSubmitting(true);
    setSend(true);
    const sendFormData = new FormData();
    // TODO: fix this condition for other field
    if (filePost.businessPlanFile) {
      sendFormData.append(
        'businessPlanFile',
        filePost.businessPlanFile,
        filePost.businessPlanFile.name
      );
    }
    if (filePost2.pitchDeckFile) {
      sendFormData.append(
        'pitchDeckFile',
        filePost2.pitchDeckFile,
        filePost2.pitchDeckFile.name
      );
    }
    if (filePost3.financialFile) {
      sendFormData.append(
        'financialFile',
        filePost3.financialFile,
        filePost3.financialFile.name
      );
    }
    console.log(formData.birthDate);
    sendFormData.append('firstName', formData.firstName);
    sendFormData.append('lastName', formData.lastName);
    sendFormData.append('email', formData.email);
    sendFormData.append('countryOfResidence', formData.countryOfResidence);
    sendFormData.append('provinceOfResidence', formData.provinceOfResidence);
    sendFormData.append('type', formData.type);
    sendFormData.append('birthDate', String(formData.birthDate));
    sendFormData.append('ideaExplanation', formData.ideaExplanation);
    sendFormData.append('getToKnowUs', formData.getToKnowUs);
    sendFormData.append('pitchDeck', String(formData.pitchDeck));
    sendFormData.append('pitchDeckFile', formData.pitchDeckFile as Blob);
    sendFormData.append('businessPlan', String(formData.businessPlan));
    sendFormData.append('businessPlanFile', formData.businessPlanFile as Blob);
    sendFormData.append('productName', formData.productName);
    sendFormData.append('siteAddress', formData.siteAddress);
    sendFormData.append('customerProblem', formData.customerProblem);
    sendFormData.append('solution', formData.solution);
    sendFormData.append('productLevel', formData.productLevel);
    sendFormData.append('scalable', formData.scalable);
    sendFormData.append(
      'monetizationOfYourPlan',
      formData.monetizationOfYourPlan
    );
    sendFormData.append('structureOfYourSales', formData.structureOfYourSales);
    sendFormData.append(
      'financialModelFile',
      formData.financialModelFile as Blob
    );
    sendFormData.append(
      'cooperatedWithInvestors',
      formData.cooperatedWithInvestors
    );
    sendFormData.append('financial', String(formData.financial));
    sendFormData.append('financialFile', formData.financialFile as Blob);
    sendFormData.append(
      'customerCharacteristic',
      formData.customerCharacteristic
    );
    sendFormData.append('currentCustomers', formData.currentCustomers);
    sendFormData.append('estimatedMarketSize', formData.estimatedMarketSize);
    sendFormData.append('totalTamSamSom', formData.totalTamSamSom);
    sendFormData.append('startupRevenue', formData.startupRevenue);
    sendFormData.append('monthlyIncome', formData.monthlyIncome);
    sendFormData.append('currentInterestRate', formData.currentInterestRate);
    sendFormData.append('currentRaisedFunding', formData.currentRaisedFunding);
    sendFormData.append('neededCapital', formData.neededCapital);
    try {
      const response = await apiClient.post('startups-form', sendFormData, {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRFToken': csrfToken,
        },
      });

      //       if (!response.ok) {
      //         throw new Error('Network response was not ok');
      //       }

      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(initialStartupsFormData); // Reset the form after successful submission
      setFormData(initialStartupsFormData);
      setSelectedRadio('');
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
      reset(initialStartupsFormData); // Reset the form after successful submission
      setFormData(initialStartupsFormData); // reset states after successful submission
      setSelectedRadio('');
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }
  };

  const test = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  console.log(selectedRadio);

  return (
    <>
      <div className="container m-10 px-5 lg:p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <StartupFormTitle />
        <div>
          <p className="mb-4 text-4xl">Personal Information</p>
        </div>

        <div>
          <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StartupFormPersonalInformation
            register={register}
            errors={errors}
            selectedCountry={selectedCountry}
            handleCountryChange={handleCountryChange}
            countries={countries}
          />

          <div>
            <p className="mb-4 text-4xl">Growth and Scale-up</p>
          </div>
          <div>
            <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
          </div>
          <label htmlFor="">Select Your Status: </label>
          <br />
          <select
            className="select select-bordered w-full max-w-xs mt-4"
            onChange={handleItemChange}
          >
            <option value={'IDEA'} defaultChecked>
              Idea
            </option>
            <option value={'MVP'}>MVP(Minimum Viable Product)</option>
            <option value={'FisrtSale'}>Fisrt Sale</option>
            <option value={'SaleDevelopment'}>Sale Development</option>
          </select>
          {/* idea section */}
          {(() => {
            if (selectedRadio == 'IDEA') {
              return <StartupFormIdea register={register} errors={errors} />;
            } else {
              return <div></div>;
            }
          })()}

          {/* MVP section */}

          {(() => {
            if (selectedRadio == 'MVP') {
              return (
                <StartupFormMVP
                  register={register}
                  errors={errors}
                  handleBusinessPlanFileChange={handleBusinessPlanFileChange}
                  handlePitchDeckFileChange={handlePitchDeckFileChange}
                  handleFinancialFileChange={handleFinancialFileChange}
                />
              );
            } else {
              return <div></div>;
            }
          })()}

          {(() => {
            if (selectedRadio == 'FisrtSale') {
              return (
                <StartupFormFirstSale
                  register={register}
                  errors={errors}
                  handleBusinessPlanFileChange={handleBusinessPlanFileChange}
                  handlePitchDeckFileChange={handlePitchDeckFileChange}
                  handleFinancialFileChange={handleFinancialFileChange}
                />
              );
            } else {
              return <div></div>;
            }
          })()}

          {(() => {
            if (selectedRadio == 'SaleDevelopment') {
              return (
                <StartupFormSaleDevelopment
                  register={register}
                  errors={errors}
                  handleBusinessPlanFileChange={handleBusinessPlanFileChange}
                  handlePitchDeckFileChange={handlePitchDeckFileChange}
                  handleFinancialFileChange={handleFinancialFileChange}
                />
              );
            } else {
              return <div></div>;
            }
          })()}
          <div className="text-center">
            <button
              disabled={Boolean(!selectedRadio)}
              type="submit"
              className="mt-3 btn btn-wide bg-[#AA8453] hover:bg-[#94744a] dark:hover:bg-[#21282f] dark:bg-[#2b333d] text-white dark:text-current"
            >
              {Send ? 'Submiting ....' : 'Submit'}
            </button>
          </div>
          <NotificationSendForm
            submitting={isSubmitting}
            success={isSuccess}
            sendStatus={Send}
            show={showNotification}
          />
        </form>
      </div>
    </>
  );
}
