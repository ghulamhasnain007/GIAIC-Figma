import Image from 'next/image'
import React from 'react'
import project1 from '../../../public/sub-p1.png'
import project2 from '../../../public/sub-p2.png'
import project3 from '../../../public/sub-p3.png'
import project4 from '../../../public/sub-p4.png'
import project5 from '../../../public/sub-p5.png'

export default function SampleProjects() {
  return (
    <div className='m-20'>
        <div className='p-20'>
            <h1 className='text-6xl font-thin text-gray-400 ml-20'>Our Projects</h1>
            <div className='p-20'>
                <div className='flex justify-evenly space-x-10'>
                    <div className='pb-10'>
                        <Image src={project1} alt='First Project'/>
                    </div>
                    <div>
                        <Image src={project2} alt='First Project'/>
                    </div>
                </div>
                <div className='flex justify-center space-x-8'>
                    <div><Image src={project3} alt='First Project'/></div>
                    <div><Image src={project4} alt='First Project'/></div>
                    <div><Image src={project5} alt='First Project'/></div>
                </div>
            </div>
            <div className='float-end mr-20'>
                <button className='text-xl bg-gray-600 text-white p-7'>ALL PROJECTS</button>
            </div>
        </div>
    </div>
  )
}
