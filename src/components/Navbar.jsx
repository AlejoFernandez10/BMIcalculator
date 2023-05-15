import React from 'react'

import Image from 'next/image'
import {SiWorldhealthorganization} from 'react-icons/si'


const Navbar = () => {
  return (
    <header className='w-full  fixed flex justify-center mx-2'>

      <nav className='w-full max-w-[460px] pt-10 lg:max-w-[1100px]'>
        <ul>
          <li className='flex gap-3 items-center'><SiWorldhealthorganization className='text-5xl' /> <span className='text-xl'><span className='font-semibold text-blue-500'>BMI</span> Calculator</span> </li>
        </ul>
      </nav>

    </header>
  )
}

export default Navbar