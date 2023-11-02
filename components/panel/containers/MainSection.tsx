'use client';

import React from 'react';

export default function MainSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-14 overflow-x-auto mx-auto mt-10">
      {children}
    </div>
  );
}