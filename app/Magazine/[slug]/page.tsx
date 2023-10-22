import React from 'react';

export default function page({ params }: { params: { slug: string } }) {
  // fetch post from backend
  //...
  
  return <div>page: {params.slug}</div>;
}
