import React from 'react';
import ClipboardData from '../icons/Panel/ClipboardData';
import AdDateToJalaliDate from '@/services/AdDateToJalaliDate';
import Badge from './Badge';
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
      <div className="mb-6 flex items-center gap-2 border-b-2 border-black pb-4 text-xl font-medium md:text-3xl">
        <ClipboardData size={32} />
        <span>{header}</span>
      </div>
      <div className="w-[300px] overflow-auto md:w-full">
        <table className="table table-zebra table-sm overflow-x-auto whitespace-nowrap md:table-md lg:table-lg">
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
                    {tableData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        {/* Add this line to display the row number */}
                        <td>
                          {data.user.first_name} {data.user.last_name}
                        </td>
                        <td>{data.vacation_status}</td>
                        <td>{AdDateToJalaliDate(data.start_time)}</td>
                        <td>{AdDateToJalaliDate(data.end_time)}</td>
                        <Badge data={data} />
                      </tr>
                    ))}
                  </>
                );
              } else if (tableType == 'my') {
                return (
                  <>
                    {tableData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        {/* Add this line to display the row number */}
                        <td>{AdDateToJalaliDate(data.start_time)}</td>
                        <td>{AdDateToJalaliDate(data.end_time)}</td>
                        <td>{data.vacation_status}</td>
                        <Badge data={data} />
                      </tr>
                    ))}
                  </>
                );
              } else if (tableType == 'all') {
                return (
                  <>
                    {tableData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        {/* Add this line to display the row number */}
                        <td>
                          {data.user.first_name} {data.user.last_name}
                        </td>
                        <td>
                          {data.user.employer.first_name}{' '}
                          {data.user.employer.last_name}
                        </td>
                        <td>{data.vacation_status}</td>
                        <td>{AdDateToJalaliDate(data.start_time)}</td>
                        <td>{AdDateToJalaliDate(data.end_time)}</td>

                        <Badge data={data} />
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
    </div>
  );
}
