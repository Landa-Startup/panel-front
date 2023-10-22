import React from 'react';
import GalleryImageCard from './GalleryImageCard';

export default function GalleryImageCardContainer() {
  const images = [
    {
      src: '/static/images/Academy/gallery/all/1.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/2.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/3.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/4.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/5.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/6.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/7.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/8.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/9.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/10.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/11.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/12.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/13.png',
    },
    {
      src: '/static/images/Academy/gallery/all/14.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/15.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/16.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/17.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/18.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/19.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/20.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/21.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/22.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/23.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/24.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/25.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/26.png',
    },
    {
      src: '/static/images/Academy/gallery/all/27.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/28.jpg',
    },
  ];
  return (
    <div
      className="grid
   grid-cols-2 gap-24 mx-32 pb-7"
    >
      {images.map((image, index) => (
        <GalleryImageCard key={index} src={image.src} />
      ))}
    </div>
  );
}
