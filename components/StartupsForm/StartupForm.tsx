// 'use client';
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import TextArea from '../atoms/TextArea';
// import UploadInput from '../atoms/UploadInput';
// import RadioButton from '../atoms/RadioButton';
// import TwoOptionRadio from '../atoms/TwoOptionRadio';
// import Button from '../atoms/Button';
// import Input from './base/Input';
// import { startupsFormData } from '../../app/types/global';
// import NotificationSendForm from './base/NotificationSendForm';

// // enum Type {
// //   IDEA = 'IDEA',
// //   MVP = 'MVP',
// //   TRIAL = 'TRIAL',
// //   FisrtScale = 'FisrtScale',
// //   SaleDevelopment = 'SaleDevelopment',
// // }

// // enum Level {
// //   basicPrinciple = 'basicPrinciple',
// //   technologyConcept = 'technologyConcept',
// //   exprimentalProof = 'exprimentalProof',
// //   confirmedTechnologyLab = 'confirmedTechnologyLab',
// //   confirmedTechnologyEnv = 'confirmedTechnologyEnv',
// //   presentedTechnologyEnv = 'presentedTechnologyEnv',
// //   systemPrototypeInMvp = 'systemPrototypeInMvp',
// //   realisticSystem = 'realisticSystem',
// //   qualifiedSystem = 'qualifiedSystem',
// // }

// // const StartupForm = () => {
// //   const initialFormData: startupsFormData = {
// //     firstName: '',
// //     lastName: '',
// //     birthDate: new Date(),
// //     email: '',
// //     countryOfResidence: '',
// //     provinceOfResidence: '',
// //     type: Type.IDEA,
// //     ideaExplanation: '',
// //     getToKnowUs: '',
// //     pitchDeck: true,
// //     pitchDeckFile: null as File | null,
// //     businessPlan: true,
// //     businessPlanFile: null as File | null,
// //     productName: '',
// //     siteAddress: '',
// //     customerProblem: '',
// //     solution: '',
// //     productLevel: Level.basicPrinciple,
// //     scalable: '',
// //     monetizationOfYourPlan: '',
// //     structureOfYourSales: '',
// //     financialModelFile: null as File | null,
// //     cooperatedWithInvestors: '',
// //     financial: true,
// //     financialFile: null as File | null,
// //     customerCharacteristic: '',
// //     currentCustomers: '',
// //     estimatedMarketSize: '',
// //     totalTamSamSom: '',
// //     startupRevenue: '',
// //     monthlyIncome: '',
// //     currentInterestRate: '',
// //     currentRaisedFunding: '',
// //     neededCapital: '',
// //   };

// +6
// 3666666666

// <<<<<<< HEAD
// //   const [selectedRadio, setSelectedRadio] = useState('');

// //   const handleRadioChange = (radioValue: string) => {
// //     setSelectedRadio(radioValue);
// //   };

// //   const renderForm = (radioValue: string) => {
// //     if (selectedRadio === radioValue) {
// //       return <form>{/* Form content */}</form>;
// //     }
// //     return null;
// //   };

// //   const [send, setSend] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [isSuccess, setIsSuccess] = useState(false);
// //   const [filePost, setFilePost] = useState<{ pitch: File | null }>({
// //     pitch: null,
// //   });
// //   const [formData, setFormData] = useState<startupsFormData>(initialFormData);
// =======
//   const [selectedOption, setSelectedOption] = useState('');

//   // const handleRadioChange = (radioValue: string) => {
//   //   setSelectedRadio(radioValue);
//   // };

//   const handleRadioChange = (event:React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedOption(event.target.value);
//   };



//   const [filePost, setFilePost] = useState<{ businessPlanFile: File | null }>({
//     businessPlanFile: null,
//   });
//   const [filePost2, setFilePost2] = useState<{ pitchDeckFile: File | null }>({
//     pitchDeckFile: null,
//   });
//   const [formData, setFormData] = useState<startupsFormData>(initialFormData);
// >>>>>>> feature/send-startups-form

// //   // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //   //   if (e.target.name === 'pitch') {
// //   //     if (e.target.files && e.target.files.length > 0) {
// //   //       setFilePost({ pitch: e.target.files[0] });
// //   //     }
// //   //     console.log(e.target.files);
// //   //   }
// //   //   setFormData({ ...formData, [e.target.name]: e.target.value });
// //   // };

//   const handlePitchDeckFileChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const pitchDeckFile = event.target.files && event.target.files[0];
//     if (event.target.files && event.target.files.length > 0) {
//       setFilePost2({ pitchDeckFile: event.target.files[0] });
//     }
//   };

//   const handleBusinessPlanFileChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setFilePost({ businessPlanFile: event.target.files[0] });
//     }
    
//     // const businessPlanFile = event.target.files && event.target.files[0];
//     // setFilePost({businessPlanFile: event.target.files[0]})
//   };

// //   // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //   //   const { name, value } = event.target;
// //   //   setFormData({ ...formData, [name]: value });
// //   // };

//   const onSubmit = async (formData: startupsFormData) => {


//     const sendFormData = new FormData();

//     // TODO: fix this condition for other field
//     if (filePost.businessPlanFile) {
//       sendFormData.append('businessPlanFile', filePost.businessPlanFile, filePost.businessPlanFile.name);
//     }
//     if(filePost2.pitchDeckFile){
//       sendFormData.append('pitchDeckFile',filePost2.pitchDeckFile,filePost2.pitchDeckFile.name);
//     }
    
//     sendFormData.append('firstName', formData.firstName);
//     sendFormData.append('lastName', formData.lastName);
//     sendFormData.append('email', formData.email);
//     sendFormData.append('countryOfResidence', formData.countryOfResidence);
//     sendFormData.append('provinceOfResidence', formData.provinceOfResidence);
//     sendFormData.append('type', formData.type);
//     sendFormData.append('birthDate', String(formData.birthDate));
//     sendFormData.append('ideaExplanation', formData.ideaExplanation);
//     sendFormData.append('getToKnowUs', formData.getToKnowUs);
//     sendFormData.append('pitchDeck', String(formData.pitchDeck));
//     // sendFormData.append('pitchDeckFile', formData.pitchDeckFile as Blob);
//     sendFormData.append('businessPlan', String(formData.businessPlan));
//     // sendFormData.append('businessPlanFile', formData.businessPlanFile as Blob);
//     sendFormData.append('productName', formData.productName);
//     sendFormData.append('siteAddress', formData.siteAddress);
//     sendFormData.append('customerProblem', formData.customerProblem);
//     sendFormData.append('solution', formData.solution);
//     sendFormData.append('productLevel', formData.productLevel);
//     sendFormData.append('scalable', formData.scalable);
//     sendFormData.append(
//       'monetizationOfYourPlan',
//       formData.monetizationOfYourPlan
//     );
//     sendFormData.append('structureOfYourSales', formData.structureOfYourSales);
//     sendFormData.append(
//       'financialModelFile',
//       formData.financialModelFile as Blob
//     );
//     sendFormData.append(
//       'cooperatedWithInvestors',
//       formData.cooperatedWithInvestors
//     );
//     sendFormData.append('financial', String(formData.financial));
//     sendFormData.append('financialFile', formData.financialFile as Blob);
//     sendFormData.append(
//       'customerCharacteristic',
//       formData.customerCharacteristic
//     );
//     sendFormData.append('currentCustomers', formData.currentCustomers);
//     sendFormData.append('estimatedMarketSize', formData.estimatedMarketSize);
//     sendFormData.append('totalTamSamSom', formData.totalTamSamSom);
//     sendFormData.append('startupRevenue', formData.startupRevenue);
//     sendFormData.append('monthlyIncome', formData.monthlyIncome);
//     sendFormData.append('currentInterestRate', formData.currentInterestRate);
//     sendFormData.append('currentRaisedFunding', formData.currentRaisedFunding);
//     sendFormData.append('neededCapital', formData.neededCapital);
//     try {
//       const response = await fetch('/api/upload-startups-form', {
//         method: 'POST',
//         body: sendFormData,
//       });

// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }

//       // setIsSuccess(true);
//       // setSend(false);
//       reset(initialFormData); // Reset the form after successful submission
//       console.log('Form data sent successfully!');
//     } catch (error) {
//       // setSend(false);
//       // setIsSuccess(false);
//       console.error('Error sending form data:', error);
//     }
//   };

// //   return (
// //     <>
// //       <div className="container m-16 p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
// //         <div className="flex flex-col justify-center mx-40 bg-whiteGold p-14">
// //           <div className="w-[559px] h-[186px] flex flex-col items-center mx-auto">
// //             <div className="text-black text-[64px] font-normal">
// //               STARTUPS FORM
// //             </div>
// // <<<<<<< HEAD
// //             <div className="text-center text-black text-[32px] font-normal">
// //               Let’s Talk About Your Project
// //             </div>
// //           </div>
// //           <form onSubmit={handleSubmit(onSubmit)}>
// //             <div>
// //               <div className="text-black text-[35px] font-normal">
// //                 Personal Information
// // =======
// //             <Input
// //               register={register}
// //               errors={errors}
// //               nameInput="streetAddress"
// //               type="text"
// //               label=""
// //               required="Street Address is Required."
// //               placeholder="Enter your Street Address"
// //               className="w-[275px] h-[31px] relative bg-stone-100 shadow"
// //               labelClass="text-[#6b6b6b] dark:text-current"
// //               patternValue={''}
// //               patternMessage={''}
// //             />
// //           </div>
// //           <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
// //             <div className="h-[17px]">
// //               <span className="text-base font-normal text-black">
// //                 Last Name
// //               </span>
// //               <span className="text-base font-normal text-stone-500">*</span>
// //             </div>
// //             <Input
// //               register={register}
// //               errors={errors}
// //               nameInput="lastName"
// //               type="text"
// //               label=""
// //               required="Street Address is Required."
// //               placeholder="Enter your Street Address"
// //               className="w-[275px] h-[31px] relative bg-stone-100 shadow"
// //               labelClass="text-[#6b6b6b] dark:text-current"
// //               patternValue={''}
// //               patternMessage={''}
// //             />
// //           </div>
// //           <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
// //             <div className="h-[17px]">
// //               <span className="text-base font-normal text-black">Birthday</span>
// //               <span className="text-base font-normal text-stone-500">*</span>
// //             </div>
// //             <Input
// //               register={register}
// //               errors={errors}
// //               nameInput="birthDate"
// //               type="text"
// //               label=""
// //               required="Street Address is Required."
// //               placeholder="Enter your Street Address"
// //               className="w-[275px] h-[31px] relative bg-stone-100 shadow"
// //               labelClass="text-[#6b6b6b] dark:text-current"
// //               patternValue={''}
// //               patternMessage={''}
// //             />
// //           </div>
// //           <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
// //             <div className="h-[17px]">
// //               <span className="text-base font-normal text-black">
// //                 Last Name
// //               </span>
// //               <span className="text-base font-normal text-stone-500">*</span>
// //             </div>
// //             <Input
// //               register={register}
// //               errors={errors}
// //               nameInput="aaa"
// //               type="email"
// //               label=""
// //               required="Email Address is Required."
// //               placeholder="Enter your Street Address"
// //               className="w-[275px] h-[31px] bg-stone-100 shadow"
// //               labelClass="text-black text-base font-normal"
// //               patternValue={''}
// //               patternMessage={''}
// //             />
// //           </div>
// //           <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
// //             <div className="h-[17px]">
// //               <span className="text-base font-normal text-black">
// //                 Country of Residence
// //               </span>
// //               <span className="text-base font-normal text-stone-500">*</span>
// //             </div>
// //             <Input
// //               register={register}
// //               errors={errors}
// //               nameInput="countryOfResidence"
// //               type="text"
// //               label=""
// //               required="countryOfResidence is Required."
// //               placeholder="Enter your countryOfResidence"
// //               className="w-[275px] h-[31px] relative bg-stone-100 shadow"
// //               labelClass="text-[#6b6b6b] dark:text-current"
// //               patternValue={''}
// //               patternMessage={''}
// //             />
// //           </div>
// //           <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
// //             <div className="h-[17px]">
// //               <span className="text-base font-normal text-black">
// //                 City Of Residence
// //               </span>
// //               <span className="text-base font-normal text-stone-500">*</span>
// //             </div>
// //             <Input
// //               register={register}
// //               errors={errors}
// //               nameInput="provinceOfResidence"
// //               type="text"
// //               label=""
// //               required="provinceOfResidence is Required."
// //               placeholder="Enter your Street Address"
// //               className="w-[275px] h-[31px] relative bg-stone-100 shadow"
// //               labelClass="text-[#6b6b6b] dark:text-current"
// //               patternValue={''}
// //               patternMessage={''}
// //             />
// //           </div>
// //         </div>

// <<<<<<< HEAD
// //         <div>
// //           <div className="text-black text-[35px] font-normal">
// //             Grows and Scale Up
// //           </div>
// //           <div className="divide-y-2"></div>
// //         </div>
// =======
//         <div className="grid grid-cols-3">
//           <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
//             <div className="h-[17px]">
//               <span className="text-base font-normal text-black">
//                 First Name
//               </span>
//               <span className="text-base font-normal text-stone-500">*</span>
//             </div>
//             <Input
//               register={register}
//               errors={errors}
//               nameInput="firstName"
//               type="text"
//               label=""
//               required=""
//               placeholder="Enter your Street Address"
//               className="w-[275px] h-[31px] relative bg-stone-100 shadow"
//               labelClass="text-[#6b6b6b] dark:text-current"
//               patternValue={''}
//               patternMessage={''}
//             />
//           </div>

//           {/* <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
//             <div className="h-[17px]">
//               <span className="text-base font-normal text-black">
//                 File 
//               </span>
//               <span className="text-base font-normal text-stone-500">*</span>
//               <input type="file" className='w-[275px] h-[31px] relative bg-stone-100 shadow' value={formData.businessPlanFile?.name}
//                       {...register("businessPlanFile", {
//                         required: '',
//                       })}
//               onChange={handleBusinessPlanFileChange} // must use onChange event handler after register
//               />
//             </div>
//           </div> */}
          
//           <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
//             <div className="h-[17px]">
//               <span className="text-black text-base font-normal">
//                 Last Name
//               </span>
//               <span className="text-stone-500 text-base font-normal">*</span>
//             </div>
//             <Input
//               register={register}
//               errors={errors}
//               nameInput="lastName"
//               type="text"
//               label=""
//               required=""
//               placeholder="Enter your Street Address"
//               className="w-[275px] h-[31px] relative bg-stone-100 shadow"
//               labelClass="text-[#6b6b6b] dark:text-current"
//               patternValue={''}
//               patternMessage={''}
//             />
//           </div>
//           <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
//             <div className="h-[17px]">
//               <span className="text-black text-base font-normal">Birthday</span>
//               <span className="text-stone-500 text-base font-normal">*</span>
//             </div>
//             <Input
//               register={register}
//               errors={errors}
//               nameInput="birthDate"
//               type="text"
//               label=""
//               required=""
//               placeholder="Enter your Street Address"
//               className="w-[275px] h-[31px] relative bg-stone-100 shadow"
//               labelClass="text-[#6b6b6b] dark:text-current"
//               patternValue={''}
//               patternMessage={''}
//             />
//           </div>



//           <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
//             <div className="h-[17px]">
//               <span className="text-base font-normal text-black">
//                 Last Name
//               </span>
//               <span className="text-base font-normal text-stone-500">*</span>
//             </div>
//             <Input
//               register={register}
//               errors={errors}
//               nameInput="aaa"
//               type="email"
//               label=""
//               required=""
//               placeholder="Enter your Street Address"
//               className="w-[275px] h-[31px] bg-stone-100 shadow"
//               labelClass="text-black text-base font-normal"
//               patternValue={''}
//               patternMessage={''}
//             />
//           </div>
//           <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
//             <div className="h-[17px]">
//               <span className="text-base font-normal text-black">
//                 Country of Residence
//               </span>
//               <span className="text-base font-normal text-stone-500">*</span>
//             </div>
//             <Input
//               register={register}
//               errors={errors}
//               nameInput="countryOfResidence"
//               type="text"
//               label=""
//               required=""
//               placeholder="Enter your countryOfResidence"
//               className="w-[275px] h-[31px] relative bg-stone-100 shadow"
//               labelClass="text-[#6b6b6b] dark:text-current"
//               patternValue={''}
//               patternMessage={''}
//             />
//           </div>
//           <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
//             <div className="h-[17px]">
//               <span className="text-base font-normal text-black">
//                 City Of Residence
//               </span>
//               <span className="text-base font-normal text-stone-500">*</span>
//             </div>
//             <Input
//               register={register}
//               errors={errors}
//               nameInput="provinceOfResidence"
//               type="text"
//               label=""
//               required=""
//               placeholder="Enter your Street Address"
//               className="w-[275px] h-[31px] relative bg-stone-100 shadow"
//               labelClass="text-[#6b6b6b] dark:text-current"
//               patternValue={''}
//               patternMessage={''}
//             />
//           </div>
//         </div>
// >>>>>>> feature/send-startups-form

// //         {/* Radio buttons */}
// //         <div className="flex items-center space-x-4">
// //           <RadioButton text="Idea" handleRadioChange={handleRadioChange} />
// //         </div>
// //         {/* Form with text areas */}

// <<<<<<< HEAD
// //         <div className="grid grid-cols-2">
// //           <TextArea
// //             title="Explain your idea in 5 lines?*"
// //             halfSize={false}
// //             register={register}
// //             errors={errors}
// //             placeholder="Explain your idea in 5 lines?"
// //             nameTextArea="ideaExplanation"
// //             patternMessage=''
// //             patternValue=''
// //             required=''
// //           />
// //                     <TextArea
// //             title="How did you hear about us?*"
// //             halfSize={false}
// //             register={register}
// //             errors={errors}
// //             placeholder="Explain your idea in 5 lines?"
// //             nameTextArea="getToKnowUs"
// //             patternMessage=''
// //             patternValue=''
// //             required=''
// //           />

//         <div className="grid grid-cols-2">
//           <TextArea
//             title="Explain your idea in 5 lines?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="ideaExplanation"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//           <TextArea
//             title="How did you hear about us?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="getToKnowUs"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//         </div>

// //             <div className="grid grid-cols-3">
// //               <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
// //                 <div className="h-[17px]">
// //                   <span className="text-base font-normal text-black">
// //                     First Name
// //                   </span>
// //                   <span className="text-base font-normal text-stone-500">
// //                     *
// //                   </span>
// //                 </div>
// //                 <Input
// //                   register={register}
// //                   errors={errors}
// //                   nameInput="streetAddress"
// //                   type="text"
// //                   label="Street Address"
// //                   required="Street Address is Required."
// //                   placeholder="Enter your Street Address"
// //                   className="w-[275px] h-[31px] relative bg-stone-100 shadow"
// //                   labelClass="text-[#6b6b6b] dark:text-current"
// //                   patternValue={''}
// //                   patternMessage={''}
// //                 />
// //               </div>
// //               <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
// //                 <div className="h-[17px]">
// //                   <span className="text-base font-normal text-black">
// //                     Last Name
// //                   </span>
// //                   <span className="text-base font-normal text-stone-500">
// //                     *
// //                   </span>
// //                 </div>
// //                 <Input
// //                   register={register}
// //                   errors={errors}
// //                   nameInput="aaa"
// //                   type="text"
// //                   label="First Name"
// //                   required="Street Address is Required."
// //                   placeholder="Enter your Street Address"
// //                   className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex"
// //                   labelClass="text-[#6b6b6b] dark:text-current"
// //                   patternValue={''}
// //                   patternMessage={''}
// //                 />
// //               </div>
// //               <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
// //                 <div className="h-[17px]">
// //                   <span className="text-base font-normal text-black">
// //                     Birthday
// //                   </span>
// //                   <span className="text-base font-normal text-stone-500">
// //                     *
// //                   </span>
// //                 </div>
// //                 <Input
// //                   register={register}
// //                   errors={errors}
// //                   nameInput="aaa"
// //                   type="text"
// //                   label="First Name"
// //                   required="Street Address is Required."
// //                   placeholder="Enter your Street Address"
// //                   className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex"
// //                   labelClass="text-[#6b6b6b] dark:text-current"
// //                   patternValue={''}
// //                   patternMessage={''}
// //                 />
// //               </div>
// //               <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
// //                 <div className="h-[17px]">
// //                   <span className="text-base font-normal text-black">
// //                     Email
// //                   </span>
// //                   <span className="text-base font-normal text-stone-500">
// //                     *
// //                   </span>
// //                 </div>
// //                 <Input
// //                   register={register}
// //                   errors={errors}
// //                   nameInput="aaa"
// //                   type="email"
// //                   label="Email"
// //                   required="Street Address is Required."
// //                   placeholder="Enter your Street Address"
// //                   className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex"
// //                   labelClass="text-[#6b6b6b] dark:text-current"
// //                   patternValue={''}
// //                   patternMessage={''}
// //                 />
// //               </div>
// //               <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
// //                 <div className="h-[17px]">
// //                   <span className="text-base font-normal text-black">
// //                     Country of Residence
// //                   </span>
// //                   <span className="text-base font-normal text-stone-500">
// //                     *
// //                   </span>
// //                 </div>
// //                 <Input
// //                   register={register}
// //                   errors={errors}
// //                   nameInput="productName"
// //                   type="text"
// //                   label="Country"
// //                   required="Street Address is Required."
// //                   placeholder="Enter your Street Address"
// //                   className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex"
// //                   labelClass="text-[#6b6b6b] dark:text-current"
// //                   patternValue={''}
// //                   patternMessage={''}
// //                 />
// //               </div>
// //               <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
// //                 <div className="h-[17px]">
// //                   <span className="text-base font-normal text-black">
// //                     City Of Residence
// //                   </span>
// //                   <span className="text-base font-normal text-stone-500">
// //                     *
// //                   </span>
// //                 </div>
// //                 <Input
// //                   register={register}
// //                   errors={errors}
// //                   nameInput="aaa"
// //                   type="text"
// //                   label="Province"
// //                   required="Street Address is Required."
// //                   placeholder="Enter your Street Address"
// //                   className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex"
// //                   labelClass="text-[#6b6b6b] dark:text-current"
// //                   patternValue={''}
// //                   patternMessage={''}
// //                 />
// //               </div>
// // <<<<<<< HEAD
// // =======
// //               <input type="file" onChange={handlePitchDeckFileChange} />
// // >>>>>>> origin/develop
// //             </div>
// =======
//         {/* Radio buttons */}
//         <div className="flex items-center space-x-4">
//           {/* <RadioButton text="Idea" handleRadioChange={handleRadioChange} /> */}
//           <input type="radio" value={'Idea'} checked={selectedOption === 'Idea'} onChange={handleRadioChange}/>
//         </div>
//         {/* Form with text areas */}
        
//         <div>
//         {(() => {
//         if (selectedOption === "Idea") {
//           return(
//             <div className="grid grid-cols-2">
//             <TextArea
//               title="Explain your idea in 5 lines?*"
//               halfSize={false}
//               register={register}
//               errors={errors}
//               placeholder="Explain your idea in 5 lines?"
//               nameTextArea="ideaExplanation"
//               patternMessage=''
//               patternValue=''
//               required=''
//             />
//                       <TextArea
//               title="How did you hear about us?*"
//               halfSize={false}
//               register={register}
//               errors={errors}
//               placeholder="Explain your idea in 5 lines?"
//               nameTextArea="ideaExplanation"
//               patternMessage=''
//               patternValue=''
//               required=''
//             />
  
//           </div>
//           )
//         } else {
//           return null;
//         }
//       })()}

//         </div>

//         <div className="flex items-center space-x-4">
//           {/* <RadioButton text="hi" handleRadioChange={handleRadioChange} /> */}
//         </div>
//         {/* Form for Minimal Valuable Product */}
//         <div className="w-1/2">
//           <div className="flex space-x-3">
//             <div className="flex flex-col">
//               <div className="text-lg font-medium">
//                 Do you have Pitch deck?*
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Input
//                   register={register}
//                   errors={errors}
//                   nameInput="productName"
//                   type="radio"
//                   label="Product Name"
//                   required=""
//                   placeholder="Enter your Street Address"
//                   className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex"
//                   labelClass="text-[#6b6b6b] dark:text-current"
//                   patternValue={''}
//                   patternMessage={''}
//                 />
//                 <label htmlFor="pitchDeckYes" className="text-lg font-medium">
//                   Yes
//                 </label>
//                 <input
//                   type="radio"
//                   id="pitchDeckNo"
//                   name="pitchDeckOption"
//                   value="no"
//                   className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//                 />
//                 <label htmlFor="pitchDeckNo" className="text-lg font-medium">
//                   No
//                 </label>
//               </div>
//               <input type="file" className='w-[275px] h-[31px] relative bg-stone-100 shadow' value={formData.pitchDeckFile?.name}
//                       {...register("pitchDeckFile", {
//                         required: '',
//                       })}
//               onChange={handlePitchDeckFileChange} // must use onChange event handler after register
//               />
//             </div>
//             <div className="flex flex-col">
//               <div className="text-lg font-medium">
//                 Do you have Business Plan?*
//               </div>
//               <div className="flex items-center space-x-4">
//                 <input
//                   type="radio"
//                   id="pitchDeckYes"
//                   name="pitchDeckOption"
//                   value="yes"
//                   className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//                 />
//                 <label htmlFor="pitchDeckYes" className="text-lg font-medium">
//                   Yes
//                 </label>
//                 <input
//                   type="radio"
//                   id="pitchDeckNo"
//                   name="pitchDeckOption"
//                   value="no"
//                   className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//                 />
//                 <label htmlFor="pitchDeckNo" className="text-lg font-medium">
//                   No
//                 </label>
//               </div>
// >>>>>>> feature/send-startups-form

//               <input type="file" className='w-[275px] h-[31px] relative bg-stone-100 shadow' value={formData.businessPlanFile?.name}
//                       {...register("businessPlanFile", {
//                         required: '',
//                       })}
//               onChange={handleBusinessPlanFileChange} // must use onChange event handler after register
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-2">
//             <div className="h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
//               <div className="h-[17px]">
//                 <span className="text-base font-normal text-black">
//                   Product Name
//                 </span>
//                 <span className="text-base font-normal text-stone-500">*</span>
//               </div>
//               <input
//                 className="h-[31px] relative bg-stone-100 shadow"
//                 placeholder="Product"
//               ></input>
//             </div>
//             <div className="h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
//               <div className="h-[17px]">
//                 <span className="text-base font-normal text-black">
//                   Site Address
//                 </span>
//                 <span className="text-base font-normal text-stone-500">*</span>
//               </div>
//               <input
//                 className="h-[31px] relative bg-stone-100 shadow"
//                 placeholder="Product"
//               ></input>
//             </div>
//           </div>
//         </div>
//         <div className="w-1/2">
//           <span className="text-black">Problems</span>
//           <div className="mt-4">
//             <label className="text-lg font-medium">
//               Describe the customer problem you want to solve with your product
//               or service.*
//             </label>
//             <textarea
//               className="w-full h-24 p-2 border-2 rounded-lg border-stone-100 focus:outline-none focus:border-gold"
//               placeholder="Your description..."
//             />
//           </div>
//         </div>
//         <div className="w-1/2">
//           <span className="text-black">Solutions</span>
//           <div className="mt-4">
//             <label className="text-lg font-medium">
//               Describe the customer problem you want to solve with your product
//               or service.*
//             </label>
//             <textarea
//               className="w-full h-24 p-2 border-2 rounded-lg border-stone-100 focus:outline-none focus:border-gold"
//               placeholder="Your description..."
//             />
//           </div>
//         </div>
//         <div className="w-1/2">
//           <div className="mt-4">
//             <label className="text-lg font-medium">
//               What is your unique value proposition (innovation)? What is new
//               about what you do?*
//             </label>
//             <textarea
//               className="w-full h-24 p-2 border-2 rounded-lg border-stone-100 focus:outline-none focus:border-gold"
//               placeholder="Your description..."
//             />
//           </div>
//         </div>
//         <div className="mt-4">
//           <div className="flex flex-col">
//             <div className="text-lg font-medium">
//               How much is the level of your product and technology preparation?
//             </div>
//             <div className="flex">
//               <input
//                 type="radio"
//                 id="basicPrinciple"
//                 name="technologyLevel"
//                 value="basicPrinciple"
//                 className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//               />
//               <label htmlFor="basicPrinciple" className="text-lg">
//                 The basic principle has been observed
//               </label>
//             </div>
//             <div className="flex">
//               <input
//                 type="radio"
//                 id="basicPrinciple"
//                 name="technologyLevel"
//                 value="basicPrinciple"
//                 className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//               />
//               <label htmlFor="basicPrinciple" className="text-lg">
//                 Experimental proof of concept.
//               </label>
//             </div>
//             <div className="flex">
//               <input
//                 type="radio"
//                 id="basicPrinciple"
//                 name="technologyLevel"
//                 value="basicPrinciple"
//                 className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//               />
//               <label htmlFor="basicPrinciple" className="text-lg">
//                 The confirmed technology in laboratory.
//               </label>
//             </div>
//             <div className="flex">
//               <input
//                 type="radio"
//                 id="basicPrinciple"
//                 name="technologyLevel"
//                 value="basicPrinciple"
//                 className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//               />
//               <label htmlFor="basicPrinciple" className="text-lg">
//                 The confirmed technology in the environmental conditions
//               </label>
//             </div>
//             <div className="flex">
//               <input
//                 type="radio"
//                 id="basicPrinciple"
//                 name="technologyLevel"
//                 value="basicPrinciple"
//                 className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//               />
//               <label htmlFor="basicPrinciple" className="text-lg">
//                 The presented technology in the environmental conditions
//               </label>
//             </div>
//             <div className="flex">
//               <input
//                 type="radio"
//                 id="basicPrinciple"
//                 name="technologyLevel"
//                 value="basicPrinciple"
//                 className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//               />
//               <label htmlFor="basicPrinciple" className="text-lg">
//                 Show the system prototype in the mvp operating environment.
//               </label>
//             </div>
//             <div className="flex">
//               <input
//                 type="radio"
//                 id="basicPrinciple"
//                 name="technologyLevel"
//                 value="basicPrinciple"
//                 className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//               />
//               <label htmlFor="basicPrinciple" className="text-lg">
//                 The proved realistic system in the operating environment.
//               </label>
//             </div>
//             <div className="flex">
//               <input
//                 type="radio"
//                 id="basicPrinciple"
//                 name="technologyLevel"
//                 value="basicPrinciple"
//                 className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//               />
//               <label htmlFor="basicPrinciple" className="text-lg">
//                 A complete and qualified system.
//               </label>
//             </div>
//             <TextArea
//               title="Briefly explain how your technology is scalable?*"
//               halfSize={false}
//               register={register}
//               errors={errors}
//               placeholder="Explain your idea in 5 lines?"
//               nameTextArea="scalable"
//               patternMessage=""
//               patternValue=""
//               required=""
//             />
//             How did you hear about us?*
//             <span className="text-black">Business model</span>
//             <TextArea
//               title="Describe the method of monetization of your plan?*"
//               halfSize={false}
//               register={register}
//               errors={errors}
//               placeholder="Explain your idea in 5 lines?"
//               nameTextArea="monetizationOfYourPlan"
//               patternMessage=""
//               patternValue=""
//               required=""
//             />
//             <TextArea
//               title="Please clearly mention the structure of your sales cycle from contact to delivery.*"
//               halfSize={false}
//               register={register}
//               errors={errors}
//               placeholder="Explain your idea in 5 lines?"
//               nameTextArea="structureOfYourSales"
//               patternMessage=""
//               patternValue=""
//               required=""
//             />
//           </div>
//           <UploadInput title="If your plan has a financial model, please upload it." />
//           <TextArea
//             title="Have you previously cooperated with investors or accelerators?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="cooperatedWithInvestors"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//           <TextArea
//             title="How did you hear about us?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="getToKnowUs"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//           {/* <RadioButton
//             text="First Sale"
//             // handleRadioChange={handleRadioChange}
//           /> */}
//           <div className="flex justify-around">
//             <TwoOptionRadio title="Do you have Pitch deck?*" hasUpload />
//             <TwoOptionRadio title="Do you have Business Plan?*" hasUpload />
//             <TwoOptionRadio title="Do you have Financial?*" hasUpload />
//           </div>
//           <Input
//             register={register}
//             errors={errors}
//             nameInput="productName"
//             type="text"
//             label="Product Name"
//             required=""
//             placeholder="Enter your Street Address"
//             className="w-[275px] h-[31px] relative bg-stone-100 shadow"
//             labelClass="text-[#6b6b6b] dark:text-current"
//             patternValue={''}
//             patternMessage={''}
//           />
//           <Input
//             register={register}
//             errors={errors}
//             nameInput="productName"
//             type="text"
//             label="Site Address"
//             required="Street Address is Required."
//             placeholder="Enter your Street Address"
//             className="w-[275px] h-[31px] relative bg-stone-100 shadow"
//             labelClass="text-[#6b6b6b] dark:text-current"
//             patternValue={''}
//             patternMessage={''}
//           />
//           <span className="text-black">Problems</span>
//           <TextArea
//             title="Describe the customer problem you want to solve with your product or service. *"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="customerProblem"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//           <span className="text-black">Solutions</span>
//           <TextArea
//             title="What is your unique value proposition (innovation)? What is new about what you do?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="solution"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//           <div className="text-lg font-medium">
//             How much is the level of your product and technology preparation?
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               The basic principle has been observed
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               Experimental proof of concept.
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               The confirmed technology in laboratory.
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               The confirmed technology in the environmental conditions
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               The presented technology in the environmental conditions
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               Show the system prototype in the mvp operating environment.
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               The proved realistic system in the operating environment.
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               A complete and qualified system.
//             </label>
//           </div>
//           <TextArea
//             title="Briefly explain how your technology is scalable?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="scalable"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//           <span className="text-black">Business model</span>
//           <TextArea
//             title="Describe the method of monetization of your plan?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="monetizationOfYourPlan"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//           <TextArea
//             title="Please clearly mention the structure of your sales cycle from contact to delivery.*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="structureOfYourSales"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <UploadInput title="If your plan has a financial model, please upload it." />

//           <TextArea
//             title="Have you previously cooperated with investors or accelerators?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="cooperatedWithInvestors"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="How did you hear about us?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="getToKnowUs"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />


//           <TextArea
//             title="Based on what characteristics do you decide who are your customers and who are not?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="nameTextArea"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="Who are your current customers? How many customers have you had so far?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="currentCustomers"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="How have you estimated the size of the market?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="estimatedMarketSize"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="How much is the total (TAM market accessible serviceable) (SAM market accessible) (SOM market addressable)?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="totalTamSamSom"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <span className="text-black">Property</span>
//           <TextArea
//             title="How much revenue has your startup made since its inception?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="startupRevenue"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="How much is your monthly income?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="monthlyIncome"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="What is your current interest rate?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="currentInterestRate"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="How much current funding did you raise before starting your business?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="currentRaisedFunding"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="How much capital do you need to start your project?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
// <<<<<<< HEAD
//             nameTextArea="neededCapital"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

// =======
//             nameTextArea="scalable"
//             patternMessage=''
//             patternValue=''
//             required=''
//           />  
// {/* 
// >>>>>>> feature/send-startups-form
//           <RadioButton
//             text="Sale Development"
//             // handleRadioChange={handleRadioChange}
//           /> */}
//           <TwoOptionRadio title="Do you have Pitch deck?*" hasUpload={false} />
//           <Input
//             register={register}
//             errors={errors}
//             nameInput="productName"
//             type="text"
//             label="Product Name"
//             required=""
//             placeholder="Enter your Street Address"
//             className="w-[275px] h-[31px] relative bg-stone-100 shadow"
//             labelClass="text-[#6b6b6b] dark:text-current"
//             patternValue={''}
//             patternMessage={''}
//           />
//           <Input
//             register={register}
//             errors={errors}
//             nameInput="productName"
//             type="text"
//             label="Site Address"
//             required="Street Address is Required."
//             placeholder="Enter your Street Address"
//             className="w-[275px] h-[31px] relative bg-stone-100 shadow"
//             labelClass="text-[#6b6b6b] dark:text-current"
//             patternValue={''}
//             patternMessage={''}
//           />
//           <span className="text-black">Problems</span>
//           <TextArea
//             title="Describe the customer problem you want to solve with your product or service. *"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="customerProblem"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <span className="text-black">Solutions</span>
//           <TextArea
//             title="What is your unique value proposition (innovation)? What is new about what you do?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="solution"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="What is your unique value proposition (innovation)? What is new about what you do?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="scalable"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//           <div className="text-lg font-medium">
//             How much is the level of your product and technology preparation?
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               The basic principle has been observed
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               Experimental proof of concept.
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               The confirmed technology in laboratory.
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               The confirmed technology in the environmental conditions
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               The presented technology in the environmental conditions
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               Show the system prototype in the mvp operating environment.
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               The proved realistic system in the operating environment.
//             </label>
//           </div>
//           <div className="flex">
//             <input
//               type="radio"
//               id="basicPrinciple"
//               name="technologyLevel"
//               value="basicPrinciple"
//               className="w-5 h-5 border-2 rounded-full text-gold border-gold focus:outline-none focus:border-gold"
//             />
//             <label htmlFor="basicPrinciple" className="text-lg">
//               A complete and qualified system.
//             </label>
//           </div>

//           <TextArea
//             title="Briefly explain how your technology is scalable?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="scalable"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//           <span className="text-black">Business model</span>

//           <TextArea
//             title="Describe the method of monetization of your plan?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="monetizationOfYourPlan"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//           <TextArea
//             title="Please clearly mention the structure of your sales cycle from contact to delivery.*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="structureOfYourSales"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <UploadInput title="If your plan has a financial model, please upload it." />
//           <TextArea
//             title="Have you previously cooperated with investors or accelerators?*"
//             halfSize={false}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="cooperatedWithInvestors"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="How did you hear about us?*"
//             halfSize={true}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="getToKnowUs"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TwoOptionRadio title="Do you have Financial?*" hasUpload={false} />
//           <TextArea
//             title="Based on what characteristics do you decide who are your customers and who are not?*"
//             halfSize={true}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="customerCharacteristic"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="Who are your current customers? How many customers have you had so far?*"
//             halfSize={true}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="currentCustomers"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="How have you estimated the size of the market?*"
//             halfSize={true}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="estimatedMarketSize"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="How much is the total (TAM market accessible serviceable) (SAM market accessible) (SOM market addressable)?*"
//             halfSize={true}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="totalTamSamSom"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <span className="text-black">Property</span>
//           <TextArea
//             title="How much revenue has your startup made since its inception?*"
//             halfSize={true}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="startupRevenue"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="How much is your monthly income?*"
//             halfSize={true}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="monthlyIncome"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="What is your current interest rate?*"
//             halfSize={true}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="currentInterestRate"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//           <TextArea
//             title="How much current funding did you raise before starting your business?*"
//             halfSize={true}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="currentRaisedFunding"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />

//           <TextArea
//             title="How much capital do you need to start your project?*"
//             halfSize={true}
//             register={register}
//             errors={errors}
//             placeholder="Explain your idea in 5 lines?"
//             nameTextArea="neededCapital"
//             patternMessage=""
//             patternValue=""
//             required=""
//           />
//           <Button text="SEND" size="" type="submit" />
//         </div>
//       </form>
//       <NotificationSendForm submitting={isSubmitting} success={isSuccess} />
//     </div>
//   );
// };


// // <TextArea
// //             title="How much is your monthly income?*"
// //             halfSize={true}
// //             register={register}
// //             errors={errors}
// //             placeholder="Explain your idea in 5 lines?"
// //             nameTextArea="monthlyIncome"
// //             patternMessage=''
// //             patternValue=''
// //             required=''
// //           />

// //           <TextArea
// //             title="What is your current interest rate?*"
// //             halfSize={true}
// //             register={register}
// //             errors={errors}
// //             placeholder="Explain your idea in 5 lines?"
// //             nameTextArea="currentInterestRate"
// //             patternMessage=''
// //             patternValue=''
// //             required=''
// //           />
// //           <TextArea
// //             title="How much current funding did you raise before starting your business?*"
// //             halfSize={true}
// //             register={register}
// //             errors={errors}
// //             placeholder="Explain your idea in 5 lines?"
// //             nameTextArea="currentRaisedFunding"
// //             patternMessage=''
// //             patternValue=''
// //             required=''
// //           />

// //                     <TextArea
// //             title="How much capital do you need to start your project?*"
// //             halfSize={true}
// //             register={register}
// //             errors={errors}
// //             placeholder="Explain your idea in 5 lines?"
// //             nameTextArea="neededCapital"
// //             patternMessage=''
// //             patternValue=''
// //             required=''
// //           />
// //           <Button text="SEND" size="" type="submit" />
// //         </div>
// //       </form>
// //     </div>
// // >>>>>>> origin/develop
// //   );
// // };

// // export default StartupForm;
