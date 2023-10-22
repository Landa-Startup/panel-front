import React from 'react';
import Image from 'next/image';

export default function MagazineModernPostCard() {
  return (
    <div className="px-16">
      <div className="py-10 mx-20 mb-8">
        {/* Image */}
        <div className="flex flex-col justify-center">
          <Image
            loading="lazy"
            className=""
            src={'/static/images/Magazine/Rectangle 2880.png'}
            alt="Landa"
            width={800}
            height={300}
          />
        </div>

        {/* Date */}
        <div className="flex flex-col justify-start">
          <h2 className="mt-5 text-2xl text-slate-950 font-bold">
            12 DECEMBER 2022
          </h2>

          {/* Title */}
          <h2 className="mt-1 text-2xl text-yellow-600 font-bold">
            Creating a Newspaper as a Hobby
          </h2>
        </div>

        {/* Description */}
        <div className="flex justify-start">
          <p className="text-justify text-slate-950 font-bold">
            Quisque pretium fermentum quam, sit amet cursus ante sollicitudin
            vel. Morbi consequat risus consequat, porttitor orci sit amet,
            iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet
            id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus...
          </p>
        </div>
      </div>
    </div>
  );
}
