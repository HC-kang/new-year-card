import CardList from '@/components/CardList';
import { authOptions } from '@/server/auth';
import { fetchImagesData } from '@/service/images';
import { getServerSession } from 'next-auth';

export default async function CardsPage() {
  const session = await getServerSession(authOptions);
  console.log('card page session: ', session);
  // const cards = await fetchImagesData();
  const cards: any = [];
  return (
    <section>
      <CardList cards={cards} />
    </section>
  );
}
