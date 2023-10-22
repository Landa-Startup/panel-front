import React from 'react';
import LatestStartupsCard from './LatestStartupsCard';

export default function LatestStartups() {
  const cardData = [
    {
      image: '/static/images/Home/Startups/trip.png',
      title: 'LANDA TRIP',
      description:
        'Landa trip is an innovative start-up company that creates, promotes, and runs useful educational courses for all interested people and businesses.',
      link: 'https://landatrip.com/',
    },

    {
      image: '/static/images/Home/Startups/diaco.png',
      title: 'DIACO',
      description:
        'Diaco is an open innovation platform which acts as an intermediary between technology seekers and providers to fulfill their technological demands.',
      link: 'https://irdiaco.ca/',
    },
    {
      image: '/static/images/Home/Startups/vision-raft.png',
      title: 'VISION RAFT',
      description:
        'This is Vision Raft, a VR platform focused on education and entertainment of the young ones which acts to enhance their learning quality.',
      link: 'https://invigorated-drop-231359.framer.app',
    },
  ];

  return (
    <div>
      <div className="flex flex-col p-5 bg-whiteGold items-center text-center">
        <div className="flex-col justify-start items-start md:ml-44 md:self-start">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-neutral-800 text-sm md:text-base font-normal tracking-[3.5px] md:tracking-[5.60px] font-condensed ps-1">
              LANDA HOLDING
            </div>
            <div className="text-primary text-4xl md:text-[44px] font-normal font-condensed tracking-[3.5px] md:tracking-[5.60px] md:mt-3">
              LATEST STARTUPS
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2 ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-3 md:gap-10 mt-3 md:mt-10 ">
            {cardData.map((data, index) => (
              <LatestStartupsCard
                key={index}
                title={data.title}
                image={data.image}
                description={data.description}
                link={data.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
