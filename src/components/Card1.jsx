import React from 'react'

export default function Card1({data}) {
  return (
    <>
    <div className='border-2 border-gray-500 w-64 p-5 flex flex-col items-center'>
        
        <img src="{data.Imgurl}" alt="image" />
        <h2 className='text-2xl font-semibold uppercase'>{data.name}</h2>
        <h2 className='text-center opacity-70'>{data.description}</h2>



        <h2 className='font-semibold text-2xl text-blue-500'>${data.price}</h2>
        </div> 

        <button className='bg-blue w-90 h-1 font-semibold '>
          Add to Cart
        </button>
      
   </>
  );
}
