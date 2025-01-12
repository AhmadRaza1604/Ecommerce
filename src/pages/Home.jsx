import React,{ useEffect, useState } from 'react'

const Home = () => {
  const [loading, setLoading] = useState(true)
  return (
    <>
             <div className='w-full flex flex-row justify-center items-center'>
             <img src='/assets/1.jpg' className='w-full px-4  object-fill max-h-svh pb-24'/>
             <h1 className='absolute md:text-4xl md:py-1 text-lg bg-black opacity-60 w-full -mt-24  text-center  text-white font-semibold '>Ecommerce</h1>
    </div>
    </>
  )
};


export default Home;