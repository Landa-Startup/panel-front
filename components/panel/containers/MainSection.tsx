'use client';

import React from 'react';

export default function MainSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-10 flex flex-col gap-14 overflow-x-auto">
      {children}
    </div>
  );
}