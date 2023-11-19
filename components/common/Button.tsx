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
          ? 'mt-[19px] h-[32px] w-[135px] pb-4 pl-[72px] pr-[71px] pt-[15px] md:h-[60px] md:w-[219px]'
          : 'mt-[19px] hidden h-11 pb-4 pl-[72px] pr-[71px] pt-[15px] md:flex'
      } ${
        bgColor === 'Primary' ? 'bg-primary' : 'bg-[#FDD30A]'
      } relative inset-0 flex items-center justify-center overflow-hidden border border-white px-10 py-5 text-center font-condensed text-base font-normal uppercase leading-none tracking-wider text-white hover:text-white ${addedClass}`}
      type={type}
    >
      <span className="absolute inset-0 bg-black"></span>
      <span className="absolute inset-0 flex items-center justify-center text-center font-condensed text-base font-medium leading-none text-white">
        {text}
      </span>
      {isVisitSize && (
        <span className="absolute inset-0 flex items-center justify-center text-center font-condensed text-base font-medium leading-none text-white">
          {text}
        </span>
      )}
    </button>
  );
}
