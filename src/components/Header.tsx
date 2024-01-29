import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-white shadow-md p-4'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <Link
          href='/'
          className='text-xl md:text-3xl font-bold text-gray-800 hover:text-gray-600'
        >
          Happy New Year
        </Link>
        <nav className='flex gap-4'>
          <Link href='/' className='text-gray-600 hover:text-indigo-500'>
            Home
          </Link>
          <Link href='/new' className='text-gray-600 hover:text-indigo-500'>
            New
          </Link>
          <Link href='/signIn' className='text-gray-600 hover:text-indigo-500'>
            SignIn
          </Link>
        </nav>
      </div>
    </header>
  );
}
