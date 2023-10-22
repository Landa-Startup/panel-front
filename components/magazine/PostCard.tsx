import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';
import Link from 'next/link';

export default function PostCard({
  index,
  image,
  date,
  title,
  description,
}: {
  index: string;
  image: string;
  date: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        className="object-cover rounded-sm"
        src={image}
        alt="Landa magazine post"
        width={850}
        height={384}
      />

      <span className="text-primary font-condensed tracking-[2.4px]">
        {date}
      </span>
      <Link
        href={`/magazine/${index}`}
        className="font-gilda text-xl tracking-[2.8px] hover:text-primary"
      >
        {title}
      </Link>
      <p className="font-barlow text-justify text-[#6B6B6B]">{description}</p>
      <Button
        goto={`/magazine${index}`}
        text="Read More"
        size="notVisit"
        bgColor="Primary"
        addedClass="self-start"
      />
    </div>
  );
}
