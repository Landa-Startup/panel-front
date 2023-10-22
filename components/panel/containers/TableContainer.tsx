'use client';
import Table from '../Table';
import React, { ReactNode, useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { DecodedToken } from 'app/types/global';
import { fetchData } from '@/utils/fetchData';


interface employer {
  first_name: string;
  last_name: string;
  code: string;
  email:string;
  id_number: string;
  phone_number: string;
}
interface user {
  first_name: string;
  last_name: string;
  email:string;
  code: string;
  id_number: string;
  phone_number: string;
  employer: employer;
}


interface TableData {
  user: user;
  start_time: string;
  end_time: string;
  status: string;
  vacation_status:string;
}

export default function TableContainer() {
  const cookies = parseCookies();
  const currentUser: DecodedToken | null = JSON.parse(cookies.currentUser);

  const [allData, setAllData] = useState<TableData[]>([]);
  const [employee, setEmployee] = useState<TableData[]>([]);
  const [myData, setMyData] = useState<TableData[]>([]);
  const getAllData = () => {
    fetchData('panel/get-vacation-forms')
      .then((result) => {
        setAllData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  const employeeData = () => {
    // employee data
    fetchData('panel/staff-vacation-form')
      .then((result) => {
        setEmployee(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const fetchMyData = () => {
    // my data
    fetchData('panel/my-vacation-form')
      .then((result) => {
        setMyData(result);
        console.log('mentor');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    if (currentUser?.role == 'manager') {
      // employer data
      employeeData();
      getAllData();
    } else if (currentUser?.role == 'mentor') {
      employeeData();
      fetchMyData();
      console.log('haha');
    }
  }, []);
  return (
    <div className="flex flex-col gap-14 overflow-x-auto mx-auto mt-10">
      {(() => {
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
              tableType='all'
            />
          );
        } else {
          return <div></div>;
        }
      })()}
      {(() => {
        if (currentUser?.role === 'manager' || currentUser?.role === 'mentor') {
          return (
            <div>
              {' '}
              <Table
                header="Employers leave permissions"
                tableHead={[
                  'No.',
                  'Employer Name',
                  'Type Of Leave',
                  'Date',
                  'Time',
                  'Status',
                ]}
                tableData={employee}
                tableType='employee'
              />
            </div>
          );
        } else {
          return <div></div>;
        }
      })()}
      {(() => {
        if (currentUser?.role === 'staff' || currentUser?.role === 'mentor') {
          return (
            <div>
              {' '}
              <br />
              <Table
                header="My leave permissions"
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
                tableType='my'
              />
            </div>
          );
        } else {
          return <div></div>;
        }
      })()}
    </div>
  );
}
