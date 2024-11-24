import React, { useState } from 'react'

const Hero = () => {

  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try{
      const responce = await fetch('http://localhost:5000/')
      const data = await responce.json()
      setMessage(data.message)
    } catch(error) {
      console.error(error)
      setMessage("error fetching message: "+ error)
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-[3rem]'>This is Hero Page</h1>
      <button className='p-2 bg-gray-800 w-fit m-4 rounded' onClick={fetchMessage}>Click me to fetch data from backend</button>
      <p className='p-8 bg-gray-800 w-fit m-4 rounded'>{message}</p>
    </div>
  )
}

export default Hero
