import React from 'react';
import LandaMagazineCard from '../magazine/LandaMagazineCard';
import Button from '../common/Button';

export default function LandaMagazine() {
  const cardData = [
    {
      title: 'Benefits of Spa Treatments',
      image:
        '/static/images/Home/Magazine/annie-spratt-hWJsOnaWTqs-unsplash 1.png',
      type: 'Acceleration',
      date: 'apr 27',
    },
    {
      title: 'Fitness Center',
      image:
        '/static/images/Home/Magazine/remy_loz-3S0INpfREQc-unsplash (1) 1.png',
      type: 'Investment',
      date: 'apr 27',
    },
    {
      title: 'Benefits of Spa Treatments',
      image:
        '/static/images/Home/Magazine/emile-perron-xrVDYZRGdw4-unsplash 1.png',
      type: 'Investment',
      date: 'apr 27',
    },
  ];

  return (
    // TODO: create commponent for show repeated parts. because codes are almost same and just written few times
    <div className="hidden md:block">
      {/* hide component on mobile */}
      <div className="bg-neutral-800 flex justify-center py-5">
        <div className="flex flex-col">
          <div className="text-white text-3xl my-10 md:text-[64px] font-normal font-gilda md:ml-16">
            LANDA MAGAZINE
          </div>
          <div className="flex flex-row items-center justify-center">
            <button className="flex items-center justify-center w-12 h-12 mr-3 border border-white rounded-full">
              {/* Left Arrow */}
              <svg
                className="w-6 h-6 text-white transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="grid overflow-auto grid-cols-3 gap-4 h-[570px]">
              {cardData.map((data, index) => (
                <LandaMagazineCard
                  key={index}
                  title={data.title}
                  image={data.image}
                  type={data.type}
                  date={data.date}
                />
              ))}
            </div>
            <button className="flex items-center justify-center w-12 h-12 ml-3 border border-white rounded-full">
              {/* Right Arrow */}
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <Button text="Read More" size="visit" addedClass='self-center' goto='/'/>
        </div>
      </div>
    </div>
  );
}
