import Image from 'next/image'
import React from 'react'
import project1 from '../../../public/projects/project-1.png'
import project2 from '../../../public/projects/project-2.png'
import project3 from '../../../public/projects/project-3.png'
export default function page() {
  return (
    <div className='m-40'>
        <div>
            <h1 className='text-8xl text-gray-400 text-thin'>Our</h1>
            <h1 className='text-8xl text-black text-bold'>Projects</h1>
        </div>
        <div className='mt-20 space-y-20'>
            <div className='flex flex-row'>
                <div>
                    <Image src={project1} alt='Project1'/>
                </div>
                <div className='space-y-20 ml-10'>
                    <div>
                        <h1 className='text-4xl text-gray-400 pt-10'>Sample Project 1</h1>
                    </div>
                    <div>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eius reiciendis eum voluptatum id aspernatur itaque esse, sed necessitatibus quibusdam vel.
                             Repudiandae alias cumque, libero ducimus perferendis cum voluptas saepe!</p>
                    </div>
                    <div>
                        <button className='p-3 text-lg'>View More</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div>
                    <Image src={project2} alt='Project1'/>
                </div>
                <div className='space-y-20 ml-10'>
                    <div>
                        <h1 className='text-4xl text-gray-400 pt-10'>Sample Project 2</h1>
                    </div>
                    <div>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eius reiciendis eum voluptatum id aspernatur itaque esse, sed necessitatibus quibusdam vel.
                             Repudiandae alias cumque, libero ducimus perferendis cum voluptas saepe!</p>
                    </div>
                    <div>
                        <button className='p-3 text-lg'>View More</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div>
                    <Image src={project3} alt='Project1'/>
                </div>
                <div className='space-y-20 ml-10'>
                    <div>
                        <h1 className='text-4xl text-gray-400 pt-10'>Sample Project 3</h1>
                    </div>
                    <div>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eius reiciendis eum voluptatum id aspernatur itaque esse, sed necessitatibus quibusdam vel.
                             Repudiandae alias cumque, libero ducimus perferendis cum voluptas saepe!</p>
                    </div>
                    <div>
                        <button className='p-3 text-lg'>View More</button>
                    </div>
                </div>
            </div>
            
            {/* <div>
                <div>
                    <Image src={project2} alt='Project2'/>
                </div>
                <div></div>
            </div>
            <div>   
                <div>
                    <Image src={project3} alt='Project3'/>
                </div>
                <div></div>
            </div> */}
        </div>
    </div>
  )
}   