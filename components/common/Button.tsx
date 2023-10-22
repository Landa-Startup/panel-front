'use client';
import { useRouter } from 'next/navigation';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

// Define the ButtonProps type
type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string;
  size: string;
  type?: 'button' | 'reset' | 'submit';
  addedClass?: string;
  bgColor?: 'Primary' | 'Yellow';
  goto: string;
};

export default function Button({
  text,
  size,
  type = 'button',
  addedClass,
  bgColor,
  goto,
}: ButtonProps) {
  // Determine the button size and apply appropriate styles
  const isVisitSize = size === 'visit';

  const router = useRouter();

  return (
    <button
      onClick={() => router.push(goto || '/')}
      className={`btn2 ${
        isVisitSize
          ? 'w-[135px] md:w-[219px] h-[32px] md:h-[60px] pl-[72px] pr-[71px] pt-[15px] pb-4 mt-[19px]'
          : 'hidden md:flex h-11 pl-[72px] pr-[71px] pt-[15px] pb-4 mt-[19px]'
      } ${
        bgColor === 'Primary' ? 'bg-primary' : 'bg-[#FDD30A]'
      } px-10 py-5 relative border border-white uppercase tracking-wider leading-none overflow-hidden inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-normal hover:text-white ${addedClass}`}
      type={type}
    >
      <span className="absolute inset-0 bg-black"></span>
      <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-medium leading-none">
        {text}
      </span>
      {isVisitSize && (
        <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-medium leading-none">
          {text}
        </span>
      )}
    </button>
  );
}
