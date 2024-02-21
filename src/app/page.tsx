import { getServerSession } from 'next-auth';
import HomeSection from '../components/HomeSection';
import { authOptions } from '@/server/auth';

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  console.log('session: ', session);
  return (
    <>
      <HomeSection />
    </>
  );
}
