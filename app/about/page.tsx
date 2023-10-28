import React from 'react';
import AboutUsLandaHolding from '@/components/about/AboutUsLandaHolding';
import AboutUsProfile from '@/components/about/AboutUsProfile';
import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import SubsidiaryCompanies from '@/components/about/SubsidiaryCompanies';
import StoryOfLanda from '@/components/about/StoryOfLanda';
import KeyDifferentiating from '@/components/KeyDifferentiating';

export const metadata: Metadata = {
  title: 'Landa Holding | About',
  description:
    'Learn about Landa Holding, a forward-thinking company dedicated to innovation and excellence. Discover our mission, values, and the team behind our success. Join us on our journey towards a brighter future.',
};

export default function Page() {
  const cards = [
    {
      title: 'Investment Center',
      text: 'We assist startups by providing their investments to help them grow and transition their businesses into the business markets to expand them internationally. We collaborate with a group of international investors who invest in various projects and businesses based on their investment priorities. At Landa Investment Center, all the required investments for starting and developing your business will be provided, allowing you to prosper and achieve profitability as soon as possible.',
      image: '/static/images/About/card1.png',
      reverse: true,
      link: '/investor-registration',
    },
    {
      title: 'Acceleration Center',
      text: 'After completing the mentioned stages, the Landa Acceleration Center comes into action. This center has been established with the aim of accelerating your startup. The purpose of founding this center is to undertake all necessary actions for the growth and acceleration of your business until reaching ultimate success. One of the initial steps of the Landa Acceleration Center is analyzing and checking competitors. One of our initiatives at Landa Academy is creating a co-working space for both internal and external startups. Our co-working space is designed to foster teamwork, allowing startups to collaborate directly with existing startups and also hold brainstorming sessions together for projects.',
      image: '/static/images/About/card2.png',
      reverse: false,
      link: '/StartupsForm',
    },
    {
      title: 'Academy',
      text: "The first step after joining the Landa Academy is to discover each individual's interests. We believe that in order to progress, every person should take steps in their interested field because pursuing one's passions always brings better results. With the help of our experienced and specialized staff, we can identify each person's interests and train them according to their passion. The most up-to-date method of education in the world is mentoring. This method of education is both theoretical and practical, providing specialized training to individuals based on their skills and interests. By selecting the best mentors, we offer the best education to teenagers. Additionally, after assessing their interests, teenagers can actively participate and gain experience in the relevant profession within our organization.",
      image: '/static/images/About/card3.png',
      reverse: true,
      link: '/academy',
    },
  ];

  return (
    <div>
      <Banner
        title="About Us"
        image="/static/images/a52.jpeg"
      />
      <AboutUsLandaHolding />
      <SubsidiaryCompanies />
      <StoryOfLanda />
      {/* <AboutUsCooperation /> */}
      {/* <div className="bg-whiteGold md:my-20 md:mx-12">
        {cards.map((card, index) => (
          <AboutUsCard
            reverse={card.reverse}
            key={index}
            text={card.text}
            title={card.title}
            image={card.image}
            description={''}
            link={card.link}
          />
        ))}
      </div> */}
      <KeyDifferentiating />
      <AboutUsProfile />
    </div>
  );
}
