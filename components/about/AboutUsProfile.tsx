import React from 'react';
import AboutUsProfileCard from './AboutUsProfileCard';
import AboutusPersonalTabs from '../atoms/cards/AboutusPersonalTabs';

export default function AboutUsProfile() {
  const cardsData = [
    {
      image: '/static/images/our-team/Personals/a1.png',
      name: 'Rasoul Moradimehr',
      position: ' CEO',
      links: {
        linkedin: 'https://www.linkedin.com/in/rasoul-moradi-mehr/',
        whatsapp: 'wa.me/+989134233863',
        email: 'mailto:rasoulmoradimehr@gmail.com',
        website: 'https://moradimehr.com/',
        instagram: 'https://instagram.com/dr.moradimehr.rasoul?igshid=MzRlODBiNWFlZA==',
      },
    },
     {
      image: '/static/images/4-1.png',
      name: 'MORTEZA JAFARI',
      position: 'International Relations',
      links: {
        linkedin: 'https://www.linkedin.com/in/morteza-jafari-5b40b63a',
        whatsapp: 'https://api.whatsapp.com/send?phone=+14705199691',
        email: 'mailto:morteza_jafari49@yahoo.com',
        website: 'https://mortezajafari.ca/',
        instagram: 'https://instagram.com/jafari.irimmigration.ca?igshid=MzRlODBiNWFlZA==',
      },
    },
    {
      image: '/static/images/our-team/Personals/a2.png',
      name: 'Hadi Hasanpour',
      position: 'COTB',
      links: {
        linkedin: 'https://www.linkedin.com/in/hadi-hasanpour',
        whatsapp: 'https://wa.me/+12892693933',
        email: 'mailto:hadihasanpor@gmail.com',
        website: 'https://www.hadihasanpour.ca/',
        instagram: 'https://instagram.com/dr.hadihasanpour?igshid=MzRlODBiNWFlZA==',
      },
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col ml-8 lg:ml-64 mx-8 py-5 text-black justify-items-center">
        <h2 className="text-xl font-normal leading-normal tracking-widest font-condensed md:text-2xl">
          PROFESSIONALS
        </h2>
        <h1 className="text-3xl font-normal leading-normal font-gilda md:text-4xl">
          Board of Directors
        </h1>
      </div>

      <div className="lg:flex lg:flex-row lg:ml-64 lg:gap-3 lg:pb-28 grid grid-cols-1  mx-auto pb-16 ml-8 md:space-x-12 space-y-20 mb-8">
        {cardsData.map((card, index) => (
          <AboutusPersonalTabs
            key={index}
            image={card.image}
            name={card.name}
            position={card.position}
            linkedIn={card.links.linkedin}
            email={card.links.email}
            website={card.links.website}
            instagram={card.links.instagram}
          />
        ))}
      </div>
    </div>
  );
}
