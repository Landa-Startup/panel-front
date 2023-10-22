'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { DecodedToken } from 'app/types/global';
import { useRouter } from 'next/navigation';
import Table from '../Table';
import { fetchData } from '@/utils/fetchData';
import LeaveForm from './LeaveForm';

interface TableData {
  first_name: string;
  last_name: string;
  start_time: string;
  end_time: string;
  status: string;
}

export default function MainSection({ children }: { children: ReactNode }) {

  return (
    <div className="flex flex-col gap-14 overflow-x-auto mx-auto mt-10">
      {/* {(() => {
        if (currentUser?.role === 'manager') {
          return (
            <Table
              header="Employees leave permissions"
              tableHead={[
                'No.',
                'Employee Name',
                'Employer Name',
                'Type Of Leave',
                'Date',
                'Time',
                'Status',
              ]}
              tableData={allData}
            />
          );
        } else {
          return <div></div>;
        }
      })()}

      {(() => {
        if (currentUser?.role == 'manager') {
          return (
            <Table
              header="Employers leave permissions"
              tableHead={[
                'No.',
                'Employee Name',
                'Employer Name',
                'Type Of Leave',
                'Date',
                'Time',
                'Status',
              ]}
              tableData={employee}
            />
          );
        } else {
          return <div></div>;
        }
      })()}

      {(() => {
        if (currentUser?.role === 'staff' || currentUser?.role === 'mentor') {
          return (
            <Table
              header="Employers leave permissions"
              tableHead={[
                'No.',
                'Employee Name',
                'Employer Name',
                'Type Of Leave',
                'Date',
                'Time',
                'Status',
              ]}
              tableData={myData}
            />
          );
        } else {
          return <div></div>;
        }
      })()} */}

      {/* <LeaveForm /> */}

      {children}
    </div>
  );
}
