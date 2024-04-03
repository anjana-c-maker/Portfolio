import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex items-center justify-between px-4 bg-[#070c22] text-gray-300'>
        <div>
            <img src={Logo} alt='Image' style={{width: '78px'}} />
        </div>

        {/* Menu */}
        <div > 
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </div>

        {/*Handburger */}
        <div className='hidden'> 
          <FaBars />
        </div>

        {/* Mobile menu */}
        <ul className='hidden'>
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Contact</li>
        </ul>
        {/* Social Media */}
        <div></div>
    </div>
  )
}

export default Navbar
