import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Apifetch() {
  const [data,setData]=useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/quotes")
      .then(res => {
        setData(res.data.quotes);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  
  return (
    <>
    <table className='border-2 mx-auto mt-25'>
      <thead className='border-2 bg-green-300'>
        <tr>
          <th className='pl-125'>Quotes</th>
          <th>Author</th>
          </tr>
      </thead>
      <tbody>
        
          {
            data.map((value)=>{
              return(
              <>
              <tr>
                <td className='border-2 bg-blue-200'>{value.quote}</td>
                <td className='border-2 bg-blue-200'>{value.author}</td>
              </tr>
              </>)
            })
          }
        
      </tbody>

    </table>
    </>
  )
}

