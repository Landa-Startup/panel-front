import LeftSection from '@/components/panel/containers/LeftSection';
import MainSection from '@/components/panel/containers/MainSection';
import Navbar from '@/components/panel/containers/Navbar';
import PageContainer from '@/components/panel/containers/PageContainer';
import RightSection from '@/components/panel/containers/RightSection';
import { Metadata } from 'next';
import React from 'react';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Landa Holding | Panel (Manager)',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default function page() {
  return (
    <>
      <PageContainer />
    </>
  );
}
