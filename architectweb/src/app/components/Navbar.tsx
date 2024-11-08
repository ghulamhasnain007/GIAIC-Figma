import Image from 'next/image';
import Link from 'next/link'; // Import Link
import React from 'react';
import logo from '../../../public/mainlogo.png';

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center py-4 px-8 mr-20 sticky">
      {/* Logo Section */}
      <div className="flex items-center pr-50">
        <Image src={logo} alt="Logo" width={50} height={50} />
        {/* <span className="font-bold tracking-wide text-xs text-gray-500">NAME / LOGO</span> */}
      </div>

      
      <ul className="flex space-x-12 text-sm font-semibold tracking-widest text-gray-700">
        <li className="relative group">
          <Link href="/" className="hover:text-gray-900 transition">
            MAIN
          </Link>
          <div className="absolute left-0 w-full h-0.5 bg-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </li>
        <li className="relative group">
          <Link href="/gallery" className="hover:text-gray-900 transition">
            GALLERY
          </Link>
          <div className="absolute left-0 w-full h-0.5 bg-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </li>
        <li className="relative group">
          <Link href="/projects" className="hover:text-gray-900 transition">
            PROJECTS
          </Link>
          <div className="absolute left-0 w-full h-0.5 bg-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </li>
        <li className="relative group">
          <Link href="/certifications" className="hover:text-gray-900 transition">
            CERTIFICATIONS
          </Link>
          <div className="absolute left-0 w-full h-0.5 bg-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </li>
        <li className="relative group">
          <Link href="/contact" className="hover:text-gray-900 transition">
            CONTACTS
          </Link>
          <div className="absolute left-0 w-full h-0.5 bg-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </li>
      </ul>
    </nav>
  );
}
