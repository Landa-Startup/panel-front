"use client"
import { parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';
import { DecodedToken } from 'app/types/global';

export default function Dashboard() {
  // redirect to login page if user is not logged in
  const router = useRouter();
  const cookies = parseCookies();
  const currentUser: DecodedToken = cookies.currentUser ? JSON.parse(cookies.currentUser) : null;
  const token = cookies.token;
  // if (token === undefined) {
  //   router.push('/auth/login');
  // }
  // else {
  //   router.push(`/dashboard/${currentUser?.role}`)
  // }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )

}
