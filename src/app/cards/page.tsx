import CardList from '@/components/CardList';
import { fetchImagesData } from '@/service/images';

export default async function CardsPage() {
  const cards = await fetchImagesData();
  return (
    <section>
      <CardList cards={cards} />
    </section>
  );
}
