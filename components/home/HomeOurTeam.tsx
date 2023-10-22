'use client';
import React, { useEffect, useState } from 'react';
import PersonalTab from '@/components/common/PersonalTab';
import Link from 'next/link';

interface Person {
  image: string;
  name: string;
  position: string;
  linkedIn: string;
}

export default function HomeOurTeam() {
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
      position: 'Back-end',
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

  const [randomPersons, setRandomPersons] = useState<Person[]>([]);

  useEffect(() => {
    const shuffled = persons.sort(() => 0.5 - Math.random());
    setRandomPersons(shuffled.slice(0, 8));
  }, []);

  return (
    <div className="w-full  mb-16 bg-white flex-col justify-start items-center relative gap-9 inline-flex ">
      <div className="ml-5 xl:ml-40 lg:self-start flex flex-col items-center">
        <span className="text-black text-base font-normal tracking-[5.60px] font-condensed">
          Landa Holding
          <br />
        </span>
        <span className="text-5xl font-normal tracking-widest text-black font-condensed ">
          Our Team
        </span>
      </div>
      <div className="flex items-center justify-center">
        <p className="md:container md:mx-auto md:px-16 text-center md:text-left">
          Our team of experts is comprised of professionals who are passionate
          about their work, and have an extensive background in a wide variety
          of applications, and are willing to help at any time.
        </p>
        {/* <Link href={"/our-team"}>
                    <button className=" justify-items-center mx-auto bg-[#AA8453] text-white md:mt-24 mt-8  flex px-10 py-2 font-barlow">
                        View More
                    </button>
                </Link> */}
      </div>
      <div className="hidden md:block">
        <div className="grid grid-cols-1  gap-5 xl:grid-cols-4 mx-5 md:grid-cols-2 lg:grid-cols-2 ">
          {randomPersons.map((person, index) => (
            <PersonalTab
              key={index}
              image={person.image}
              name={person.name}
              position={person.position}
              linkedIn={person.linkedIn}
            />
          ))}
        </div>
      </div>
      <Link href={'/our-team'}>
        <button className=" justify-items-center mx-auto bg-[#AA8453] text-white md:mt-8 flex px-10 py-2 font-barlow">
          View More
        </button>
      </Link>
    </div>
  );
}
