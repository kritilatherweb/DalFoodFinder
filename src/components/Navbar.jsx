import React from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div>
        <img src="" alt="" />
        <ul>
            <a href="#Header" className='cursor-pointer hover:text-grey-400'>Home</a>
 <a href="#Header" className='cursor-pointer hover:text-grey-400'>About</a>
 <a href="#Header" className='cursor-pointer hover:text-grey-400'>Food Corners</a>

        </ul>

    <button className='hidden md:block bg-white'>Signup</button>


      </div>
    </div>
  )
}

export default Navbar
