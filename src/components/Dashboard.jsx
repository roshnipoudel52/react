import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <section className='grid grid-cols-12 border-2 border-gray-500 h-screen'>
        <div className='flex flex-col gap-10 border-r-2 border-white text-white bg-slate-950 font-light text-2xl pt-5 h-screen col-span-2 pl-10 pr-10 py-4'>
          <h1 className='font-extrabold text-3xl'>TABELA</h1>
          <h2 className='hover:bg-gray-900'>Dashboard</h2>
          <h2 className='hover:bg-gray-900'>Tables</h2>
          <h2 className='hover:bg-gray-900'>Reservation</h2>
          <h2 className='hover:bg-gray-900'>Waiters</h2>
          <h2 className='hover:bg-gray-900'>Menu</h2>
          <h2 className='hover:bg-gray-900'>Customers</h2>
        </div>
        <div className='bg-white-200 text-1xl text-white-800 font-light  bg-white col-span-10 text-1xl text-light flex  gap-20'>
          <span className='text-3xl font-semibold'>Dashboard</span>
          <div className='flex flex-row justify-end w-full pr-10 gap-6'>

            <input type="search" name="" id="" style={{
              // Hide the clear (cancel) button for WebKit browsers
              WebkitAppearance: "none",
              MozAppearance: "textfield",
            }} className='w-96 h-12 text-xl pl-7 pb-2 border-2 rounded-3xl focus:border-none  focus:border-blue-700 border-gray-400 mt-2 pr-4 ' placeholder='search here' />
            <h1 className='text-2xl mt-3 font-light'>Monday,January</h1>
          </div>
        </div>
      </section>
    </div>
  )
}
