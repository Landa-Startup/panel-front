import React from 'react';
import { useState, useEffect } from 'react';
import Check from '@/components/icons/common/Check';

export default function NotificationSendForm({
  submitting,
  success,
  sendStatus,
  show,
}: {
  submitting: boolean;
  success: boolean;
  sendStatus: boolean;
  show: boolean;
}) {
  return (
    <div className="w-64 mx-auto mt-5 lg:w-96">
      {success && submitting && !sendStatus && show && (
        <div className="alert alert-success">
          <Check />
          <span>Form Submitted Successfully.</span>
        </div>
      )}

      {!success && submitting && !sendStatus && show && (
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>An error occurred. Please Contact Support.</span>
        </div>
      )}
    </div>
  );
}
