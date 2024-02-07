import Image from 'next/image';

type Props = {
  imageUrl?: string;
};

export default function Card({
  imageUrl = 'https://ford-new-year-card-bucket.s3.ap-northeast-2.amazonaws.com/20231230160549captured-image%2520(6).png',
}: Props) {
  return (
    <div className='max-w-sm bg-white rounded-xl shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex justify-center'>
        <Image
          src={imageUrl}
          alt='card image'
          width={640} // 원하는 기본 너비 설정
          height={360} // 비율에 맞는 높이 설정
          objectFit='cover' // 이미지가 컨테이너를 채우도록 조정
          className='rounded-t-lg'
        />
      </div>
    </div>
  );
}
