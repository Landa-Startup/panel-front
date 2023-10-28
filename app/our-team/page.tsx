import React, { useCallback } from 'react';
import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import TeamPersons from '@/components/our-team/TeamPersons';

export const metadata: Metadata = {
  title: 'Landa Holding | Our Team',
  description:
    'Meet the dedicated and talented individuals who make up the Landa Holding team. Learn about their expertise, passion, and commitment to excellence. Get to know the driving force behind our success.',
};

export default function TeamPage() {
  return (
    <div>
      <Banner image="/static/images/our-team/Header.png " title="Our Team" />
      <TeamPersons />
    </div>
  );
}
