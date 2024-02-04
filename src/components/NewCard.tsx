'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './ui/Button';
import { useAuth } from '@/context/AuthContext';

export default function NewCard() {
    const [inputValue, setInputValue] = useState('');

    const auth = useAuth();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        console.log('Submitted value:', inputValue);
        
        fetch('http://localhost:3000/api/v1/cards').then(
          (res) => res.text()
        ).then(
          (data) => {
            console.log(data);
          }
        )
      };
    const handleSubmit2 = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        console.log('Submitted value:', inputValue);
        
        fetch('http://localhost:3000/api/v1/cards/hello', {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth.accessToken}` 
          }
        }).then(
          (res) => res.text()
        ).then(
          (data) => {
            console.log(data);
          }
        )
      };
    
      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value); 
      };
  
    return (
      <section>
        <div className='bg-gray-100 flex flex-col justify-center items-center h-screen'>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="mt-4 p-2 border border-gray-300 rounded"
              placeholder="여기에 입력하세요"
            />
            <Button className="mt-4">
                제출
            </Button>
          </form>
          <form onSubmit={handleSubmit2} className="flex flex-col items-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="mt-4 p-2 border border-gray-300 rounded"
              placeholder="여기에 입력하세요"
            />
            <Button className="mt-4">
                제출
            </Button>
          </form>
        </div>
      </section>
    );
}
