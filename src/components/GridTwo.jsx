import React from 'react'

export default function GridTwo() {
  return (
    <div>
      <section className='grid grid-cols-12 border-2 border-gray-500 h-screen '>
            <div className='border-r-2 border-gray-500 col-span-2 flex flex-col gap-10 text-blue-500 bg-blue-100 font-semibold text-2xl pt-5 '>
                <h2 className='font-bold text-3xl ml-10 animate-bounce'>Dashboard</h2>
                <h2 className='hover:bg-blue-300 hover:text-blue-700 pl-10 py-4 hover:border-l-8 hover:border-solid hover:border-blue-800 '>Analytics</h2>
                <h2 className='hover:bg-blue-300 hover:text-blue-700 pl-10 py-4 hover:border-l-8 hover:border-solid hover:border-blue-800'>Commerce </h2>
                <h2 className='hover:bg-blue-300 hover:text-blue-700 pl-10 py-4 hover:border-l-8 hover:border-solid hover:border-blue-800'>sales</h2>
                <h2 className='hover:bg-blue-300 hover:text-blue-700 pl-10 py-4 hover:border-l-8 hover:border-solid hover:border-blue-800'>Minimals</h2>
            </div>
        <div className='bg-blue-200 col-span-10 text-4xl text-blue-800 flex  items-center justify-center  '>
            <h2>This is dashboard overview </h2>
        </div>
      </section>
    </div>
  )
}

