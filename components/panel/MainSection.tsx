// 'use client';
// import React, { useEffect, useState } from 'react';
// import { parseCookies } from 'nookies';
// import { DecodedToken } from 'app/types/global';
// import { useRouter } from 'next/navigation';
// import Table from './Table';
// import { fetchData } from '@/utils/fetchData';

// interface TableData {
//   first_name: string;
//   last_name: string;
//   start_time: string;
//   end_time: string;
//   status: string;
// }

// export default function MainSection() {
//   const cookies = parseCookies();
//   const currentUser: DecodedToken | null = JSON.parse(cookies.currentUser);

//   const [allData, setAllData] = useState<TableData[]>([]);
//   const [employee, setEmployee] = useState<TableData[]>([]);
//   const getAllData = () => {
//     fetchData('http://localhost:8000/panel/get-vacation-forms')
//       .then((result) => {
//         setAllData(result);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   };
//   const employeeData = () => {
//     // employee data
//     fetchData('http://localhost:8000/panel/staff-vacation-form')
//       .then((result) => {
//         setEmployee(result);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   const fetchMyData = () => {
//     // my data
//     fetchData('http://localhost:8000/panel/my-vacation-forms')
//       .then((result) => {
//         setMyData(result);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   };
//   const [myData, setMyData] = useState<TableData[]>([]);
//   useEffect(() => {
//     if (currentUser?.role == 'manager') {
//       // employer data
//       employeeData();
//       getAllData();
//     } else if (currentUser?.role == 'mentor') {
//       employeeData();
//       fetchMyData();
//     }
//   }, []);

//   return (
//     <div className="flex flex-col gap-14 overflow-x-auto mx-auto mt-10">
//       {(() => {
//         if (currentUser?.role === 'manager') {
//           return (
//             <Table
//               header="Employees leave permissions"
//               tableHead={[
//                 'No.',
//                 'Employee Name',
//                 'Employer Name',
//                 'Type Of Leave',
//                 'Date',
//                 'Time',
//                 'Status',
//               ]}
//               tableData={allData}
//             />
//           );
//         } else {
//           return <div></div>;
//         }
//       })()}

//       {(() => {
//         if (currentUser?.role == 'manager' || currentUser?.role == 'mentor') {
//           return (
//             <Table
//               header="Employers leave permissions"
//               tableHead={[
//                 'No.',
//                 'Employee Name',
//                 'Employer Name',
//                 'Type Of Leave',
//                 'Date',
//                 'Time',
//                 'Status',
//               ]}
//               tableData={employee}
//             />
//           );
//         } else {
//           return <div></div>;
//         }
//       })()}

//       {(() => {
//         if (currentUser?.role === 'staff' || currentUser?.role === 'mentor') {
//           return (
//             <Table
//               header="Employers leave permissions"
//               tableHead={[
//                 'No.',
//                 'Employee Name',
//                 'Employer Name',
//                 'Type Of Leave',
//                 'Date',
//                 'Time',
//                 'Status',
//               ]}
//               tableData={myData}
//             />
//           );
//         } else {
//           return <div></div>;
//         }
//       })()}
//       <LeaveForm />
//     </div>

//   );
// }
