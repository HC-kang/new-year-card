'use client';

import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <section>
      <div>
        <button
          className='w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'
          onClick={() => signIn('kakao', { callbackUrl: '/' })}
        >
          kakao login
        </button>
      </div>
    </section>
  );
}
