import React from 'react';
import MagazineStartUps from '@/components/magazine/MagazineStartUps';
import MagazineModernPost from '@/components/magazine/MagazineModernPost';
import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import PostCard from '@/components/magazine/PostCard';
import SearchInput from '@/components/magazine/SearchInput';
import CategoriesContainer from '@/components/magazine/CategoriesContainer';
import TagsContainer from '@/components/magazine/TagsContainer';
import Landa from '@/components/icons/magazine/Landa';

export const metadata: Metadata = {
  title: 'Landa Holding | Magazine',
  description: '',
};

const cardData = [
  {
    image: '/static/images/Magazine/cdc3059047142494426bf3fce2268a9e.png',
    date: 'MONDAY/ APRIL 25, 2022',
    title:
      'Microsoft: A Drop-out Success Story you’ll Embrace, Cherish, and Remember!',
    description:
      'Microsoft could be one of the first successful dropout stories I have ever heard of. A Harvard College dropout, Bill Gates, and his childhood friend Paul Allen established the bedrock for Microsoft in 1975, which has become the biggest software company in the world. Have you ever wondered how it reached the position it is in right now? It is well-known for the Windows Operating System Software and Office Application Suites. Although iPhone and Android dominate the market, what makes Microsoft a leader in the tech world?',
  },
  {
    image: '/static/images/Magazine/7a7627bf397a24443c4db785b11746f5.png',
    date: 'StudySmarter.uk',
    title: 'Business planning definition',
    description:
      'Simply put, business planning is the process of developing a roadmap aimed at achieving a business goal. It involves key stakeholders coming together to brainstorm ideas and strategies and collating them into a formal, written document known as a business plan.',
  },
  {
    image: '/static/images/Magazine/8b89146ed02cb7dbefda6b358f094e29.jpg',
    date: 'By Lisa Magloff Updated February 04, 2019',
    title: 'What Are the Benefits of Teamwork in Business?',
    description:
      'Teamwork involves different people and different groups across your business working together to maximize their efficiency and reach a common goal. There are many ways of organizing teams – some teams are organized around a particular product that is being developed, while others are organized around a process, such as manufacturing or research. In addition to providing team members with experience, benefits of teamwork include increased efficiency, financial savings, innovation and morale.',
  },
];

export default function MagazinePage() {
  return (
    <div className="relative">
      <Banner image="/static/images/Magazine/hero.png" title="Magazine" />
      <div className="grid grid-cols-3 my-32 mx-28 gap-20">
        <div className="flex flex-col gap-16 col-span-2">
          {cardData.map((card, index) => (
            <PostCard
              index={(index + 1).toString()}
              key={index}
              image={card.image}
              date={card.date}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="flex flex-col gap-12 col-span-1">
          <SearchInput />
          <CategoriesContainer />
          <TagsContainer />
        </div>
      </div>
      <Landa />
    </div>
  );
}
