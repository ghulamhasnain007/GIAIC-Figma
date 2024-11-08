import Image from 'next/image'
import React from 'react'
import first from '../../../public/about-1.png'
import second from '../../../public/about-2.png'
import third from '../../../public/about-3.png'


export default function About() {
  return (
    <div className='flex justify-evenly items-start m-20 space-x-20 bg-[#fbfbfb] min-w-fit'>
        <div className='flex mt-20 max-w-[800px]'>
            <div className='flex-col p-5'>
                <div className='p-3'>
                    <Image src={first} alt='About-1 Image'/>
                </div>
                <div className='p-3'>
                    <Image src={third} alt='About-3 Image'/>
                </div>
            </div>
            
            <div className='mt-20'>
                <Image src={second} alt='About-2 Image'/>
            </div>
            
        </div>
        <div className='mt-24 w-1/2'>
        <div className='mb-20 font-thin'>
            <h1 className='text-7xl text-gray-400 font-extralight pb-10'>About</h1>
            <p className='text-3xl w-35 text-left mr-20 font-extralight pl-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit Perspiciatis cumque facere expedita,
                natus nisi impedit asperiores exercitationem eveniet! Natus, quod eos laborum veniam neque ab reiciendis eum quam
                sit fugiat.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit Perspiciatis cumque facere expedita,
                natus nisi impedit asperiores exercitationem eveniet! Natus, quod eos laborum veniam neque ab reiciendis eum quam
                sit fugiat.
            </p>
            <button className="bg-white text-2xl text-black p-10">
                READ MORE
            </button>
        </div>
            
        </div>
    </div>
  )
}
