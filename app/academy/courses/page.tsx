import CoursesCardContainer from '@/components/academy/CoursesCardContainer';
import SearchInput from '@/components/academy/SearchInput';
import Banner from '@/components/common/Banner';
import Pagination from '@/components/common/Pagination';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Landa Holding | Courses',
  description:
    'Meet the dedicated and talented individuals who make up the Landa Holding team. Learn about their expertise, passion, and commitment to excellence. Get to know the driving force behind our success.',
};

export default function page() {
  return (
    <div>
      <Banner
        image="/static/images/Academy/Banner/Courses.jpg"
        title="Our Courses"
      />
      <SearchInput />
      <CoursesCardContainer />
      <Pagination />
    </div>
  );
}
