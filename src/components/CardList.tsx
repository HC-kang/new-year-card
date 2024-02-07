'use client';

import Card from './ui/Card';

type CardType = {
  id: string;
  imageUrl: string;
};

export default function CardList() {
  const cards: CardType[] = [
    {
      id: '1',
      imageUrl:
        'https://ford-new-year-card-bucket.s3.ap-northeast-2.amazonaws.com/20231230160549captured-image%2520(6).png',
    },
    {
      id: '2',
      imageUrl:
        'https://ford-new-year-card-bucket.s3.ap-northeast-2.amazonaws.com/20231230160549captured-image%2520(6).png',
    },
    {
      id: '3',
      imageUrl:
        'https://ford-new-year-card-bucket.s3.ap-northeast-2.amazonaws.com/20231230160549captured-image%2520(6).png',
    },
    {
      id: '4',
      imageUrl:
        'https://ford-new-year-card-bucket.s3.ap-northeast-2.amazonaws.com/20231230160549captured-image%2520(6).png',
    },
    {
      id: '5',
      imageUrl:
        'https://ford-new-year-card-bucket.s3.ap-northeast-2.amazonaws.com/20231230160549captured-image%2520(6).png',
    },
    {
      id: '6',
      imageUrl:
        'https://ford-new-year-card-bucket.s3.ap-northeast-2.amazonaws.com/20231230160549captured-image%2520(6).png',
    },
    {
      id: '7',
      imageUrl:
        'https://ford-new-year-card-bucket.s3.ap-northeast-2.amazonaws.com/20231230160549captured-image%2520(6).png',
    },
    {
      id: '8',
      imageUrl:
        'https://ford-new-year-card-bucket.s3.ap-northeast-2.amazonaws.com/20231230160549captured-image%2520(6).png',
    },
    {
      id: '9',
      imageUrl:
        'https://ford-new-year-card-bucket.s3.ap-northeast-2.amazonaws.com/20231230160549captured-image%2520(6).png',
    },
    {
      id: '10',
      imageUrl:
        'https://ford-new-year-card-bucket.s3.ap-northeast-2.amazonaws.com/20231230160549captured-image%2520(6).png',
    },
  ];
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {cards.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
}
