import React from 'react';
import HomeCardsLeft from './HomeCardsLeft';
import HomeCardsRight from './HomeCardsRight';

interface HomeCardsProps {
  titles: string;
  text: string;
  images: Array<{ src: string; alt: string }>;
  reverse?: boolean;
  addedClass?: string;
  link: string;
}

export default function HomeCards({
  titles,
  text,
  images,
  reverse = false, // Added a default value for the "reverse" prop
  addedClass,
  link,
}: HomeCardsProps) {
  // Determine the flex direction based on the "reverse" prop
  const flexDirectionClass = reverse
    ? 'flex-col md:flex-row'
    : 'flex-col md:flex-row-reverse';

  return (
    <div
      className={` ${flexDirectionClass} border-b-2 md:border-none last:border-none border-primary flex justify-between items-center px-9 md:px-32 py-5 md:py-28`}
    >
      <HomeCardsLeft text={text} addedClass={addedClass} link={link} />
      <HomeCardsRight images={images} titles={titles} link={link} />
    </div>
  );
}
