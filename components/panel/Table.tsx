import React from 'react';
import ClipboardData from '../icons/Panel/ClipboardData';
import AdDateToJalaliDate from '@/services/AdDateToJalaliDate';
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

export default function Table({
  header,
  tableHead,
  tableData,
  tableType,
}: {
  header: string;
  tableHead: string[];
  tableData: TableData[];
  tableType: string;
}) {
  return (
    <div>
      <div className="flex gap-2 font-medium text-3xl border-b-2 border-black pb-4 mb-6">
        <ClipboardData />
        <span>{header}</span>
      </div>
      <table className="table table-sm md:table-md lg:table-lg table-zebra overflow-x-auto max-w-screen-sm">
        {/* head */}
        <thead>
          <tr className="bg-tableHeader text-stone-500">
            {tableHead.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(() => {
            if (tableType == 'employee') {
              return (
                <>
                  {' '}
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {/* Add this line to display the row number */}
                      <td>{data.user.first_name} {data.user.last_name}</td>
                      <td>{data.vacation_status}</td>
                      <td>{AdDateToJalaliDate(data.end_time)}</td>
                      <td>{AdDateToJalaliDate(data.start_time)}</td>
                      <td
                        className={`badge badge-${
                          data.status === 'Approved'
                            ? 'success'
                            : data.status === 'Pending'
                            ? 'info'
                            : 'error'
                        } md:mt-2.5`}
                      >
                        {data.status}
                      </td>
                    </tr>
                  ))}
                </>
              );
            } else if (tableType == 'my') {
              return (
                <>
                  {' '}
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {/* Add this line to display the row number */}
                      {/* <td>{data.first_name}</td>
                      <td>{data.last_name}</td> */}
                      {/* <td>{data.typeOfLeave}</td> */}
                      <td>{AdDateToJalaliDate(data.end_time)}</td>
                      <td>{AdDateToJalaliDate(data.start_time)}</td>
                      <td
                        className={`badge badge-${
                          data.status === 'Approved'
                            ? 'success'
                            : data.status === 'Pending'
                            ? 'info'
                            : 'error'
                        } md:mt-2.5`}
                      >
                        {data.status}
                      </td>
                    </tr>
                  ))}
                </>
              );
            } else if (tableType == 'all') {
              return (
                <>
                  {' '}
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {/* Add this line to display the row number */}
                      <td>{data.user.first_name} {data.user.last_name}</td>
                      <td>{data.user.employer.first_name} {data.user.employer.last_name}</td>
                      <td>{data.vacation_status}</td>
                      <td>{AdDateToJalaliDate(data.end_time)}</td>
                      <td>{AdDateToJalaliDate(data.start_time)}</td>
                      <td
                        className={`badge badge-${
                          data.status === 'Approved'
                            ? 'success'
                            : data.status === 'Pending'
                            ? 'info'
                            : 'error'
                        } md:mt-2.5`}
                      >
                        {data.status}
                      </td>
                    </tr>
                  ))}
                </>
              );
            } else {
              return <></>;
            }
          })()}

        </tbody>
      </table>
    </div>
  );
}
