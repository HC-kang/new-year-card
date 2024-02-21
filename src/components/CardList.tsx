'use client';

import { ImageDataType } from '@/types/imageDataType';
import Card from './ui/Card';

type Props = {
  cards: ImageDataType[] | null;
};

export default function CardList({ cards }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {cards && cards.map(({ id, url}) => (
          <Card key={id} imageUrl={baseUrl + url} />
        ))}
      </div>
    </div>
  );
}
