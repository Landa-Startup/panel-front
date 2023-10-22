import React from 'react';
import MagazineModernPostCard from './MagazineModernPostCard';
import MagazineModernPostCard2 from './MagazineModernPostCard2';
import MagazineModernPostCard3 from './MagazineModernPostCard3';
import MagazineModernPostBottomSpace from './MagazineModernPostBottomSpace';

export default function MagazineModernPost() {
  return (
    <div>
      <h1 className="text-slate-950 text-4xl text-left mt-5 ml-20 px-16">
        MODERN POST
      </h1>
      <div className="text-slate-950 text-1xl mt-5 px-36 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        commodi iste nobis est voluptatem voluptates ratione provident eos
        culpa, neque unde ab minima harum! Autem veniam similique laboriosam
        dolorem mollitia.
      </div>
      <MagazineModernPostCard />
      <hr className="horizontal-rule" />
      <MagazineModernPostCard2 />
      <hr className="horizontal-rule" />
      <MagazineModernPostCard3 />
      <hr className="horizontal-rule" />
      <div className="text-slate-950 text-3xl text-bold mt-5 px-24 mb-6 text-justify">
        12 DECEMBER 2022
      </div>
      <MagazineModernPostBottomSpace />
    </div>
  );
}
