import React from 'react';
import HomeCards from './HomeCards';
import Lines from '../icons/Home/Lines';

export default function HomeCardsContainer() {
  // Define data for the text card containers
  const cardData = [
    {
      title: 'Investment',
      text: 'At Landa Investment Center, we typically focus on investing in innovative, scalable startups with international market potential and the valuation of up to $5 million. We are a group of angel investors who can help you build your team, define your business model, and increase the value of your startup in global markets. With initial investment, capital raising, and access to a network of global investors, we will assist you in achieving success and increasing your business development.',
      reverse: false,
      show: true,
      index: 1,
      link: '/investor-registration',
      addedClass: '',
      images: [
        {
          src: '/static/images/Home main/male-female-business-people-working-tablet-office.png',
          alt: 'Investment',
        },
        {
          src: '/static/images/Home main/Rectangle 1412.png',
          alt: 'Investment',
        },
      ],
    },
    {
      title: 'Acceleration',
      text: 'At Landa Acceleration Center, entrepreneurs are provided with a dynamic and nurturing environment designed to foster creativity and collaboration. The acceleration center boasts useful facilities, cutting-edge resources, experienced mentors, and professional experts, which will all help individuals to accelerate their own businesses and expand their new creative startups. Landa Holding understand that the challenges startups face. Therefore, we offer comprehensive programs that address business development, and market expansion.',
      reverse: true,
      show: true,
      index: 2,
      link: '/acceleration',
      addedClass: 'mb-28',
      images: [
        {
          src: '/static/images/Home/Acceleration/1.png',
          alt: 'Acceleration Center',
        },
        {
          src: '/static/images/Home/Acceleration/2.png',
          alt: 'Acceleration Center',
        },
      ],
    },
    {
      title: 'Academy',
      text: 'At Landa Academy, we provide individuals with a nurturing place to discover and grow their interests and skills efficiently. Our academy operates as a dynamic place that identifies and evaluates the potential of talented individuals, particularly youth, and invests in their development and creative ideas. By providing comprehensive programs and resources and through a combination of mentoring, skill-building workshops, and exposure to various opportunities, Landa Academy equips participants with the tools and knowledge necessary to thrive and succeed in their chosen fields.',
      reverse: false,
      show: false,
      index: 3,
      link: '#',
      addedClass: 'mb-36',
      images: [
        {
          src: '/static/images/Home main/3390782c4ef216a1fb0b67f2cc41660d 1.png',
          alt: 'Academy',
        },
        {
          src: '/static/images/Home main/a38.jpeg',
          alt: 'Academy',
        },
      ],
    },
  ];

  return (
    <div className="relative bg-whiteGold text-black" id="LandaHolding">
      <Lines />
      {/* Map over cardData to create HomeTextCardContainers */}
      {cardData.map((data, index) => (
        <HomeCards
          key={index}
          titles={data.title}
          text={data.text}
          images={data.images}
          reverse={data.reverse}
          addedClass={data.addedClass}
          link={data.link}
        />
      ))}
    </div>
  );
}
