import Image from 'next/image';

export default function NewYearCard() {
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='flex flex-col'>
        <Image
          src='https://ford-new-year-card-bucket.s3.ap-northeast-2.amazonaws.com/20231230160549captured-image%2520(6).png'
          alt='New Year Image'
          width={700}
          height={700}
        />
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            새해 복 많이 받으세요!
          </div>
          <a
            href='#'
            className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
          >
            테일윈드로 만든 신년 카드
          </a>
          <p className='mt-2 text-gray-500'>
            모든 분들에게 행복과 건강이 가득한 새해가 되시길 바랍니다.
          </p>
        </div>
      </div>
    </div>
  );
}
