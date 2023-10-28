import React from 'react';
import Banner from '@/components/common/Banner';
import PersonalTab from '@/components/common/PersonalTab';
import { Metadata } from 'next';
import TeamRolesContainer from 'app/academy/our-team/TeamRolesContainer';

export const metadata: Metadata = {
  title: 'Landa Holding | Our Team',
  description:
    'Meet the dedicated and talented individuals who make up the Landa Holding team. Learn about their expertise, passion, and commitment to excellence. Get to know the driving force behind our success.',
};

export default function TeamPage() {
  const jobLinks = [
    'all',
    'Manager',
    'Word Press Developer',
    'Programmer',
    'Graphic Designer',
    'Content Creator',
    'Accountant',
    'Public Relations Officer',
    'Digital Marketer',
    'CEO',
    'COTB',
    'Secretary',
    'CTO',
    'Full stack',
    'Manager',
    'Case Manager',
    'UX/UI Designer',
    'Junior Back-end',
    'Application Developer',
    'UI designer',
    'Front-end',
    'Back-end',
  ];

  const persons = [
    {
      image: '/static/images/our-team/Personals/a1.png',
      position: 'CEO',
      name: 'Dr.Rasoul Moradimehr',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a2.png',
      position: 'COTB',
      name: 'Dr.Hadi Hasanpour',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a10.png',
      position: 'Manager',
      name: 'Mehrnoosh Heibati',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a11.png',
      position: 'Case Manager',
      name: 'Mahsa Esmaili',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a3.png',
      position: 'Secretary',
      name: 'Lida Parvizi',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a4.png',
      position: 'Public Relations Officer',
      name: 'Kholod Hariri',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a5.png',
      position: 'Accountant',
      name: 'Ali Solaimani',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a6.png',
      position: 'CTO',
      name: 'Iman Nasr',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a7.png',
      position: 'Full stack',
      name: 'Sajad Momeni',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a8.png',
      position: 'Full Stack',
      name: 'Amin Asgarian',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a9.png',
      position: 'Digital Marketer',
      name: 'Ehsan Aliakbari',
      linkedIn: '',
    },

    {
      image: '/static/images/our-team/Personals/a12.png',
      position: 'Content Creator',
      name: 'Maryam Eskandari',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a13.png',
      position: 'UX/UI Designer',
      name: 'Ariana Shafie',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a14.png',
      position: 'UX/UI Designer',
      name: 'Arshia Nasiri',
      linkedIn: '',
    },

    {
      image: '/static/images/our-team/Personals/a15.png',
      position: 'Junior Back-end',
      name: 'Fateme Safi',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a16.png',
      position: 'Full Stack',
      name: 'Sobhan Emami',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a17.png',
      position: 'Front-end',
      name: 'Fahime Sajadie',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a18.png',
      position: 'Front-end',
      name: 'Saman Karchegani',
      linkedIn: '',
    },

    {
      image: '/static/images/our-team/Personals/a19.png',
      position: 'Front-end',
      name: 'Mohsen Kiani',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a20.png',
      position: 'Application Developer',
      name: 'Ali Khavari',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a21.png',
      position: 'Graphic Designer',
      name: 'Hoda Mehdi',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a22.png',
      position: 'Graphic Designer',
      name: 'Aynaz Reisi',
      linkedIn: '',
    },

    {
      image: '/static/images/our-team/Personals/a23.png',
      position: 'Content Creator',
      name: 'Mahtab Hafizi',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a24.png',
      position: 'UI designer',
      name: 'Saba Mokhtari',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a25.png',
      position: 'Content Creator',
      name: 'Tiam Safarian',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a26.png',
      position: 'Word Press Developer',
      name: 'Roham Arablo',
      linkedIn: '',
    },

    {
      image: '/static/images/our-team/Personals/a27.png',
      position: 'Full Stack',
      name: 'Meraj Bighamian',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a28.png',
      position: 'Front-end',
      name: 'Mahdi Salmanzade',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a29.png',
      position: 'Front-end',
      name: 'Mahrokh Lotfi',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a30.png',
      position: 'Front-end',
      name: 'Ramtin Foroozani',
      linkedIn: '',
    },

    {
      image: '/static/images/our-team/Personals/a31.png',
      position: 'Front-end',
      name: 'Barad Dehghani',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a32.png',
      position: 'Front-end',
      name: 'matin Janghorbani',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a33.png',
      position: 'Public Relations Officer',
      name: 'Gelareh Bahrami',
      linkedIn: '',
    },
    {
      image: '/static/images/our-team/Personals/a34.png',
      position: 'Graphic Designer',
      name: 'Faezeh Khani',
      linkedIn: '',
    },
  ];

  return (
    <div>
      <Banner
        image="/static/images/Academy/Banner/OurTeam.jpg"
        title="Our Team"
      />
      {/* <TeamRolesContainer /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center md:px-32 py-5 bg-[#FAFAFA] lg:grid-cols-3 xl:grid-cols-4 ">
        {/* map over personals. */}
        {persons.map((person, index) => (
          <PersonalTab
            key={index}
            image={person.image}
            position={person.position}
            name={person.name}
            linkedIn={person.linkedIn}
          />
        ))}
      </div>
    </div>
  );
}
