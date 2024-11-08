import Image from 'next/image'
import React from 'react'
import image from '../../../public/image.png'

export default function page() {
  return (
    <div className='flex flex-row sm:flex-col m-20'>
        <div className='m-20 space-y-10 w-1/2'>
            <div className=''>
            <h1 className='text-6xl text-gray-400 text-thin'>COPMANY</h1>
            <h1 className='text-6xl text-black text-bold'>Information</h1>
            </div>
            <div>
                <h1 className='text-lg font-bold'>Company Name</h1>
                <p className='text-lg'>1234 Sample Company Texas</p>
            </div>
            <div>
                <h1 className='text-lg font-bold'>512-333-222</h1>
            </div>
            <div>
                <p>sample@gmai.com</p>
            </div>
            <div className=''>
                <button className='p-6 w-1/2 bg-gray-700 text-white'>Contact</button>
            </div>
        </div>
        <div className='m-10 sm:w-full'>
            <Image src={image} alt='Map'/>
        </div>
    </div>
  )
}
