import React from 'react';

export default function ButtonArrow() {
  return (
    <svg
      className="absolute text-white transition duration-1000 ease-in-out group-hover:bg-black group-hover:text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
