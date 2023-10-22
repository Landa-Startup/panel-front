import React from 'react';
import ContactUsForm from '@/components/contact/ContactUsForm';
import ContactUsDescription from '@/components/common/ContactUsDescription';
import Banner from '@/components/common/Banner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Holding | Contact',
  description:
    'Contact Landa Holding to get in touch with our dedicated team. Whether you have questions, inquiries, or partnership opportunities, we are here to assist you. Reach out to us today.',
};

export default function ContactUsPage() {
  // Renamed the component for better naming
  return (
    <div>
      {/* Banner Component */}
      <Banner
        image="/static/images/Contact/37b76f28c1c41b4ea18163cf2fba85ab.png"
        title="Contact Us"
      />

      {/* Main Content Grid */}
      <div className="container grid grid-cols-1 gap-6 mx-auto px-5 lg:px-28 py-28 md:grid-cols-2 bg-[#FAFAFA] text-black">
        {/* ContactUsDescription Component */}
        <ContactUsDescription />

        {/* ContactUsForm Component */}
        <ContactUsForm />
      </div>
    </div>
  );
}
