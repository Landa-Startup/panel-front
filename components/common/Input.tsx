import React from 'react';

export default function Input({ title }: { title: string }) {
  return (
    <div className="mb-4">
      <label className="block text-black font-medium">
        {title} <span className="text-stone-500">*</span>
      </label>
      <input
        className="w-full h-10 px-4 py-2 bg-stone-100 shadow-md"
        type="text"
        placeholder="First Name"
      />
    </div>
  );
}
