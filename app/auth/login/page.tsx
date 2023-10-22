// pages/login.js
import LoginForm from '@/components/auth/login/LoginForm';
import { Metadata } from 'next';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Landa Holding | Login',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
