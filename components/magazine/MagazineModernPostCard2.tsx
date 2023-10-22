import React from 'react';
import Image from 'next/image';

export default function MagazineModernPostCard2() {
  return (
    <div className='px-16'>
      <div className='mb-7 mx-20 py-4'>
        {/* Date */}
        <div className="flex flex-col justify-start">
          <h2 className="text-slate-950 text-2xl font-bold mt-1">
            12 DECEMBER 2022
          </h2>
          <br />
          {/* Title */}
          <h2 className="text-yellow-600 text-2xl font-bold mt-1">
            Newspaper Created as a Hobby
          </h2>
        </div>

        {/* Description */}
        <div className="flex flex-col justify-start">
          {/* Paragraph 1 */}
          <p className="text-justify my-5 text-slate-950 font-bold">
            Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel.
            Morbi consequat risus consequat, porttitor orci sit amet, iaculis
            nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus.
            Sed a imperdiet erat. Duis eu est dignissim lacus...
          </p>

          {/* Paragraph 2 */}
          <p className="text-justify my-5 text-slate-950 font-bold">
            Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel.
            Morbi consequat risus consequat, porttitor orci sit amet, iaculis
            nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus.
            Sed a imperdiet erat. Duis eu est dignissim lacus...
          </p>

          {/* Paragraph 3 */}
          <p className="text-justify my-5 text-slate-950 font-bold">
            Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel.
            Morbi consequat risus consequat, porttitor orci sit amet, iaculis
            nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus.
            Sed a imperdiet erat. Duis eu est dignissim lacus...
          </p>
        </div>
      </div>
    </div>
  );
}
