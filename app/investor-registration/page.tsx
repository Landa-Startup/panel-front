import React from 'react';
import Banner from '@/components/common/Banner';
import InvestorRegistrationForm from '@/components/investor-registration/InvestorRegistrationForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Holding | Investors',
  description:
    'Explore the Landa Holding Investor Center, your gateway to comprehensive financial information, reports, and updates. Stay informed about our financial performance and investment opportunities.',
};

export default function InvestorRegistrationPage() {
  return (
    <>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title="INVESTOR CENTER"
      />
      <InvestorRegistrationForm />
    </>
  );
}
