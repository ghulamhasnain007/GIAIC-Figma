import React from 'react'
import Navbar from '../components/Navbar'
import photo1 from '../../../public/gallery/photo-1.png'
import photo2 from '../../../public/gallery/photo-2.png'
import photo3 from '../../../public/gallery/photo-3.png'
import photo4 from '../../../public/gallery/photo-4.png'
import photo5 from '../../../public/gallery/photo-5.png'
import photo6 from '../../../public/gallery/photo-6.png'
import photo7 from '../../../public/gallery/photo-7.png'
import photo8 from '../../../public/gallery/photo-8.png'
import photo9 from '../../../public/gallery/photo-9.png'
import photo10 from '../../../public/gallery/photo-10.png'
import Image from 'next/image'


export default function page() {
  return (
    <div className='m-40'>
        {/* <Navbar/> */}
        <div>
            <h1 className='text-8xl text-gray-400 text-thin'>Photo</h1>
            <h1 className='text-8xl text-black text-bold'>Gallery</h1>
        </div>
        <div className='mt-20'>
            <div className='flex flex-row space-x-5 mb-20'>
                <div><Image src={photo1} alt='Photo1'/></div>
                <div><Image src={photo2} alt='Photo2'/></div>
                <div><Image src={photo3} alt='Photo3'/></div>
                <div><Image src={photo4} alt='Photo4'/></div>
                <div><Image src={photo5} alt='Photo5'/></div>
            </div>
            <div className='flex flex-row space-x-5'>
                <div><Image src={photo6} alt='Photo6'/></div>
                <div><Image src={photo7} alt='Photo7'/></div>
                <div><Image src={photo8} alt='Photo8'/></div>
                <div><Image src={photo9} alt='Photo9'/></div>
                <div><Image src={photo10} alt='Photo10'/></div>
            </div>
        </div>

    </div>
  )
}
