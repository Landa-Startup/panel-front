import React from 'react';
import CompaniesCard from './CompaniesCard';

export default function CompaniesContainer() {
  const companies = [
    {
      name: 'LANDA TRIP',
      logo: '1.png',
      link: "https://landatrip.com/"
    },
    {
      name: 'IRIMMIGRATION',
      logo: '2.png',
      link: "https://irimmigration.com/"
    },
    {
      name: 'ACADEMY',
      logo: '3.png',
      link: 'https://landaholding.com/academy'
    },
    {
      name: 'TOLU ROSHAN',
      logo: '4.png',
      link: 'https://landaholding.com/acceleration'
    },
    {
      name: 'DIACO',
      logo: '5.png',
      link: 'https://irdiaco.ca/',
    },
    {
      name: 'VISION RAFT',
      logo: '6.png',
      link: 'https://invigorated-drop-231359.framer.app',
    },
    {
      name: 'FARAZAMAN',
      logo: '7.png',
      link: 'https://landaholding.com/acceleration'
    },
    {
      name: 'HANDI CRAFTS',
      logo: '8.png',
      link: '#'
    },
    {
      name: 'FOROUGH',
      logo: '9.png',
      link: '#'
    },
    {
      name: 'LANDA GENE',
      logo: '10.png',
      link: '#'
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-14">
      {companies.map((company, index) => (
        <CompaniesCard key={index} name={company.name} logo={company.logo} link={company.link} />
      ))}
    </div>
  );
}
