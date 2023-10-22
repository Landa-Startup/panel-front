// utils/fetchData.ts

import { DecodedToken } from 'app/types/global';
import { parseCookies } from 'nookies';

export async function fetchData(url: string) {
  const cookies = parseCookies();
  const currentUser: DecodedToken | null = JSON.parse(cookies.currentUser);
  const jwt = currentUser?.jwt;
  url = `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}${url}`;
  console.log(url)
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
