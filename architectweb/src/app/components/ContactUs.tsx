import Image from 'next/image'
import React from 'react'
import contact from '../../../public/contact.png'

export default function ContactUs() {
  return (
    // <div className='ml-40'>
    //     <div>
    //         <h1 className='text-6xl text-gray-400 text-thin'>Contact Us</h1>
    //         <div className='flex justify-around items-center w-3/4'>
    //             {/* <div> */}
    //                 <form method='POST' className='border-2 border-black'><br/>
    //                     <input placeholder='Name' type="text" className='bg-gray-500 mb-3' /><br/>
    //                     <input placeholder='Phone Number' type="number" className='bg-gray-500 mb-3'/><br/>
    //                     <input placeholder='Email' type="email" className='bg-gray-500 mb-3'/><br/>
    //                     <input placeholder='Interested In' type="text" className='bg-gray-500 mb-3'/><br/>
    //                     <textarea placeholder='Message' className='bg-gray-500 mb-3'/><br/>
    //                 </form>
    //             {/* </div> */}
    //             <div className='border-2 border-black'>
    //                 <Image src={contact} alt='Contact' />
    //             </div>
    //         </div>
    //     </div>
    // </div>
        // <div className="flex justify-between items-start gap-5">
        //     <div className="w-1/2">
        //         <form method="POST" className="flex flex-col gap-4">
        //             <input type="text" name="name" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
        //             <input type="email" name="email" placeholder="Email" required className="w-full p-2 border border-gray-300 rounded" />
        //             <input type="tel" name="contact" placeholder="Contact" required className="w-full p-2 border border-gray-300 rounded" />
        //             <input type="text" name="interest" placeholder="Interest" className="w-full p-2 border border-gray-300 rounded" />
        //             <textarea name="message" placeholder="Message" className="w-full p-2 border border-gray-300 rounded resize-y"></textarea>
        //             <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
        //         </form>
        //     </div>
        //     <div className="w-1/2">
        //         <Image src={contact} alt="contact" className="w-full h-auto" />
        //     </div>
        // </div>
        <div className='m-40'>
            <div className='ml-20'>
                <h1 className='text-6xl font-thin text-gray-300'>Contact Us</h1>
                <div className='flex justify-center mt-20'>
                    <div>
                        <form method='POST' className='flex flex-col gap-4 pt-5 pr-10 w-[400px]'>
                            <input type="text" placeholder='Name' className='w-full h-[60px] p-3 border-2 border-gray-700'/>
                            <input type="email" placeholder='Email' required className='w-full h-[60px] p-3 border-2 border-gray-700'/>
                            <input type="text" placeholder='Contact No' required className='w-full h-[60px] p-3 border-2 border-gray-700'/>
                            <input type="text" placeholder='Interest' className='w-full p-3 border-2 h-[60px] border-gray-700'/>
                            <textarea placeholder='Message' className='w-full p-3 border-2 h-[60px] border-gray-700'/>
                            <div className='pt-10'>
                                <button className='text-xl w-1/2 bg-gray-600 text-white p-7'>SEND EMAIL</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <Image src={contact} alt='Contact'/>
                    </div>
                </div>
            </div>
        </div>


  )
}
