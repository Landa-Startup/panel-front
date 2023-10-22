import React from 'react';
import CoursesCard from './CoursesCard';

export default function CoursesCardContainer() {
  const courses = [
    {
      title: 'SEO course',
      image: '/static/images/Academy/CoursesCards/1.jpg',
      date: '27/Dec/2023',
    },
    {
      title: 'Digital Marketing',
      image: '/static/images/Academy/CoursesCards/2.jpg',
      date: '27/Dec/2023',
    },
    {
      title: 'AI webinar',
      image: '/static/images/Academy/CoursesCards/3.jpg',
      date: '27/Dec/2023',

      active: true,
    },
    {
      title: 'Python course',
      image: '/static/images/Academy/CoursesCards/4.jpg',
      date: '27/Dec/2023',
    },
    {
      title: 'Icdl workshop',
      image: '/static/images/Academy/CoursesCards/5.jpg',
      date: '27/Dec/2023',
    },
    {
      title: 'UX Workshop',
      image: '/static/images/Academy/CoursesCards/6.jpg',
      date: '27/Dec/2023',
    },
    {
      title: 'Front-end course',
      image: '/static/images/Academy/CoursesCards/7.jpg',
      date: '27/Dec/2023',
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-16 justify-items-center px-32">
      {courses.map((course, index) => (
        <CoursesCard
          key={index}
          title={course.title}
          isActive={course.active}
          backgroundImage={course.image}
        />
      ))}
    </div>
  );
}
