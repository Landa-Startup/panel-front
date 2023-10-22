import React from 'react';

export default function PromoteCourse({ image }: { image: string }) {
  return (
    <div
      className="flex flex-col items-center h-[640px]"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full text-7xl bg-[#FDD30A] flex justify-center items-center py-2 text-white">
        Seo Course
      </div>
      <div className="flex flex-col items-center w-[990px] text-white text-4xl font-medium leading-10 tracking-widest mt-16">
        <br />
        Elevate your online impact with our SEO course at Landa Academy! Master
        search engine optimization, from keywords to cutting-edge strategies.
        Join us now and amplify your digital presence!
        <br />
        <button className="btn bg-white text-black border-none rounded-sm px-8 mt-10">
          Register Now
        </button>
      </div>
    </div>
  );
}
