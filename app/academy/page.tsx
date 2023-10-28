import React from 'react';
import RoadmapContainer from '@/components/academy/Roadmap/RoadmapContainer';
import PromoteCourse from '@/components/academy/PromoteCourse';
import Gallery from '@/components/academy/Gallery';
import ContactUs from '@/components/academy/ContactUs';
import ScrollMenu from '@/components/academy/ScrollMenu';
import { Metadata } from 'next';
import Hero from '@/components/academy/Hero';
import Video from '@/components/academy/Video';

export const metadata: Metadata = {
  title: 'Landa Academy',
  description: '',
};

export default function SeoCoursePage() {
  return (
    <div className="bg-[#F1F8EC]  ">
      {/* Hero Section */}
      
      <Hero
        showLanda={false}
        title="Landa Academy"
        subTitle="Landa Academy was founded with the mission of fostering the potential of individuals, especially young minds. We believe that investing in adolescents guarantees a bright future and a better tomorrow."
        buttonBg="#FDD30A"
        backgroundImage="586df33bf776763ec00a0ed6ea0528cb.jpg"
        leftImage="academy.png"
      />


      {/* Roadmap Section */}
      <RoadmapContainer />

      {/* Promote Course Section
      <PromoteCourse image="/static/images/Academy/Frame 37625.png" /> */}

      {/* Scroll Section */}
      <ScrollMenu />

      {/* Video Section */}
      <Video />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  );
}
