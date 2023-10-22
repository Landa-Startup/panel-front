import { DecodedToken } from 'app/types/global';
import { parseCookies } from 'nookies';

export async function postData(url: string, body: object): Promise<Response> {
  const cookies = parseCookies();
  const currentUser: DecodedToken | null = JSON.parse(cookies.currentUser);
  const jwt = currentUser?.jwt;
  try {
    const fetchResponse = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!fetchResponse.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await fetchResponse.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
