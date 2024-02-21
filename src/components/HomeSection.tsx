'use client';

import Link from 'next/link';
import NewYearCard from './NewYearCard';
import Button from './ui/Button';
import ArrowRight from './ui/icons/ArrowRight';

export default function HomeSection() {
  return (
    <section>
        <div className='bg-gray-100 flex flex-col justify-center items-center h-screen'>
      <NewYearCard />
      {/* <Button
        onClick={() => console.log('Click!!')}
        className='mt-10'
      >
        <Link
          className='flex justify-center items-center ml-[10px] mr-[-5px]'
          href='/new'
        >
          새 이미지 생성하러 가기
          <ArrowRight className='ml-2' />
        </Link>
      </Button> */}
      </div>
    </section>
  );
}
