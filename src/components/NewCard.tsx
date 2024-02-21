'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './ui/Button';

export default function NewCard() {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        console.log('Submitted value:', inputValue);
        
        fetch('http://localhost:3000/api/v1/cards', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..PKCkCPMVQPBG9b3I.jUOJWruxppK7-9CxxyCK3VSui_Ev6o-JMSFNS4hGwxfnB0M5PNKn1SaV2zk3LXMwNCGlGEwiQxYLmJXnEhMJ-wTlUUFisliteVFE1ELRxV6gZB5v22dss9keLVk3QR8tEX6EBQygdDg5bdLJsJEcI5t331GUsCksivTxMJxtgDSQ7wJ1-_dVgnGC4WLHwBrWVe6rq6yi6ix9oBsLX6otXMXPlrRhesF7aasvITJdolF8NvgQNiaxv4ljToX33VjAOLEOrkJXl4H0sVqFpIhOT35VzrxmtKpeoKE-KL_MkhiH7zaMXVj0_UgPl5vaaUZdMtkBAtbbz33uTemIgsEvi7qhQY6_gA.nKhhJ9ZW_YB_56WG63ouBQ',
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
        </div>
      </section>
    );
}
