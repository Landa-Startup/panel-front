import React from 'react';
import SeoCourses from '@/components/academy/SeoCourses';
import Hero from '@/components/home/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Academy | Seo Course',
  description: '',
};

export default function SeoCoursesPage() {
  return (
    <div className="bg-white">
      {/* Hero component with SEO course details */}
      <Hero
        showLanda={false}
        titles={["SEO COURSE"]}
        subTitle="Upgrade yourself! SEO Strategies for Modern Businesses"
        buttonBg="#FDD30A"
        backgroundImage="586df33bf776763ec00a0ed6ea0528cb.jpg"
        leftImage=""
      />

      {/* Render the SeoCourses component */}
      <SeoCourses />
    </div>
  );
}
