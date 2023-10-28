'use client';
import React, { useState, useEffect } from 'react';
import FetchBlogData from '@/utils/FetchBlogData';
export default function MagazineCardContainer({ url }: { url: string }) {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Inside the useEffect, fetch the data and update the state
    async function fetchData() {
      try {
        const data = await FetchBlogData(`/blog/details/${url}/?format=json`);
        setCardData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // The empty dependency array ensures this runs only on component mount

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <span>title:</span>
          <span>{cardData.title}</span>
        </div>
      </div>
    </div>
  );
}
