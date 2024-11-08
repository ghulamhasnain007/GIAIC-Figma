'use client'

import Image from 'next/image';
import React from 'react';
import main from '../../../public/main.png';

export default function Hero() {
  return (
    <div className="flex justify-around w-full items-center">
      {/* Text Section */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">LOREM</h1>
        <h1 className="text-4xl font-semibold">PROJECT</h1>
      </div>
      
      {/* Image Section with Hover Button */}
      <div className="relative group">
        {/* Image */}
        <Image src={main} alt="Main Image" className="w-full h-auto" />
        
        {/* Button (only visible on hover) */}
        <button className="bg-white text-2xl text-black px-4 py-5 absolute bottom-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          VIEW PROJECTS
        </button>
      </div>
    </div>
  );
}
