'use client';
import Table from '../Table';
import React, { ReactNode, useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { DecodedToken } from 'app/types/global';
import { fetchData } from '@/utils/fetchData';
import { getStatusString, getTypeOfLeaveString } from '@/services/ParseStatus';

interface employer {
  first_name: string;
  last_name: string;
  code: string;
  email: string;
  id_number: string;
  phone_number: string;
}
interface user {
  first_name: string;
  last_name: string;
  email: string;
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
  vacation_status: string;
}
const cookies = parseCookies();
const currentUser: DecodedToken | null = cookies.currentUser ? JSON.parse(cookies.currentUser) : null;
export default function TableContainer() {
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
    } else if (currentUser?.role == 'staff') {
      fetchMyData();
    }
  }, []);
  return (
    <div className="flex flex-col gap-14 overflow-x-auto mx-2 md:mx-auto mt-10">
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
                'Start Time',
                'End Time',
                'Status',
              ]}
              tableData={allData.map((data, index) => ({
                ...data,
                // Map the status and type of leave to strings
                status: getStatusString(parseInt(data.status)),
                vacation_status: getTypeOfLeaveString(
                  parseInt(data.vacation_status)
                ), // Add this line
              }))}
              tableType="all"
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
              <Table
                header="Employers leave permissions"
                tableHead={[
                  'No.',
                  'Employer Name',
                  'Type Of Leave',
                  'Start Time',
                  'End Time',
                  'Status',
                ]}
                tableData={employee.map((data, index) => ({
                  ...data,
                  // Map the status and type of leave to strings
                  status: getStatusString(parseInt(data.status)),
                  vacation_status: getTypeOfLeaveString(
                    parseInt(data.vacation_status)
                  ), // Add this line
                }))}
                tableType="employee"
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
                  'Start Time',
                  'End Time',
                  'Type Of Leave',
                  'Status',
                ]}
                tableData={myData.map((data, index) => ({
                  ...data,
                  // Map the status and type of leave to strings
                  status: getStatusString(parseInt(data.status)),
                  vacation_status: getTypeOfLeaveString(
                    parseInt(data.vacation_status)
                  ), // Add this line
                }))}
                tableType="my"
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
