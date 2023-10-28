import React from 'react';

export default function Badge({ data }: { data: any }) {
  const getStatusBadge = () => {
    switch (data.status) {
      case 'Approved':
        return {
          className: 'bg-green-50 text-green-700 ring-green-600/20',
          label: 'Approved',
        };
      case 'Pending':
        return {
          className: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
          label: 'Pending',
        };
      default:
        return {
          className: 'bg-red-50 text-red-700 ring-red-600/10',
          label: 'Rejected',
        };
    }
  };

  const { className, label } = getStatusBadge();

  return (
    <td
      className={`inline-flex items-center text-xs font-medium ${className} ring-1 ring-inset rounded-full my-1`}
    >
      {label}
    </td>
  );
}
