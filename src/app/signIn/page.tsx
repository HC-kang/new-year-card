import SignIn from '@/components/SignIn';
import { redirect } from 'next/navigation';

export default function SignInPage() {
  const isSignedIn = false;
  if (isSignedIn) {
    redirect('/');
  }

  return <SignIn />;
}
