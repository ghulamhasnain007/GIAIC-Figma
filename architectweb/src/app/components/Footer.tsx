import Image from 'next/image';
import React from 'react';
import logo from '../../../public/white-logo.png';
import fb from '../../../public/icons/fb.png'
import twitter from '../../../public/icons/twitter.png'
import linkedin from '../../../public/icons/linkedin.png'
import pinterest from '../../../public/icons/pinterest.png'

export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 mb-5 md:space-y-5 md:space-x-8">

        <div className="flex-shrink-0">
          <Image src={logo} alt="LOGO" width={150} height={50} className="object-contain" />
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>Information</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>ABC</li>
            <li>512.33.455</li>
            <li>sample@email.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-center">Social Media</h4>
          <ul className="flex space-x-8">
            <li><Image src={fb} alt='fb'/></li>
            <li><Image src={twitter} alt='twitter'/></li>
            <li><Image src={linkedin} alt='linkedin'/></li>
            <li><Image src={pinterest} alt='pinterest'/></li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className='text-gray-400 text-center pt-5'>All Right Reserved</p>
    </footer>
  );
}

