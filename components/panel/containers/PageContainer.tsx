'use client';
import React, { useState } from 'react';
import Navbar from './Navbar';
import LeftSection from './LeftSection';
import MainSection from './MainSection';
import LeaveForm from './LeaveForm';
import TableContainer from './TableContainer';

export default function PageContainer() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const handleMenuClick = (menu: any) => {
    setActiveMenu(menu);
  };
  return (
    <div className="">
      <Navbar />
      <div className="w-[calc(100vh)-5px] h-screen flex space-x">
        <LeftSection
          activeMenu={activeMenu}
          handleMenuClick={handleMenuClick}
        />

        {activeMenu === 'dashboard' && (
          <MainSection>
            <TableContainer />
          </MainSection>
        )}
        {activeMenu === 'leave' && (
          <MainSection>
            <LeaveForm />
          </MainSection>
        )}

        {/* <RightSection /> */}
      </div>
    </div>
  );
}
