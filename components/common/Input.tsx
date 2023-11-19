import React from 'react';

export default function Input({ title }: { title: string }) {
  return (
    <div className="mb-4">
      <label className="block font-medium text-black">
        {title} <span className="text-stone-500">*</span>
      </label>
      <input
        className="h-10 w-full bg-stone-100 px-4 py-2 shadow-md"
        type="text"
        placeholder="First Name"
      />
    </div>
  );
}
