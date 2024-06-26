import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png';


const Navbar = () => {

  const [nav,setNav] =  useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex items-center justify-between px-4 bg-[#070c22] text-gray-300'>
        <div>
            <img src={Logo} alt='Image' style={{width: '78px'}} />
        </div>

        {/* Menu */}
        
            <ul className=' hidden md:flex font-semibold '>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
       
        {/*Handburger */}
        <div onClick ={handleClick}className=' md:hidden z-10'> 
          { !nav? <FaBars />: <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 h-screen w-full bg-[#070c22] flex flex-col justify-center items-center'} >
              <li className='py-6 text-4xl'>Home</li>
              <li className='py-6 text-4xl'>About</li>
              <li className='py-6 text-4xl'>Skills</li>
              <li className='py-6 text-4xl'>Contact</li>
        </ul>
        {/* Social Media  */}
        <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul style={{ marginBottom: '5px' }}>
            <li className='w-[168px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'> 
              <a className='flex justify-between items-center w-full text-gray-300'
              href='/'>
                Linkdein <FaLinkedin  size={25}/>

              </a>
            </li>
          </ul>

          <ul style={{ marginBottom: '5px' }}>
            <li className='w-[168px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'> 
              <a className='flex justify-between items-center w-full text-gray-300'
              href='/'>
              Github <FaGithub size={25}/>

              </a>
            </li>
          </ul>

          <ul style={{ marginBottom: '5px' }}>
            <li className='w-[168px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'> 
              <a className='flex justify-between items-center w-full text-gray-300'
              href='/'>
               Email <HiOutlineMail size={25}/>

              </a>
            </li>
          </ul>

          <ul style={{ marginBottom: '5px' }}>
            <li className='w-[168px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'> 
              <a className='flex justify-between items-center w-full text-gray-300'
              href='/'>
              Resume <BsFillPersonLinesFill  size={25}/>

              </a>
            </li>
          </ul>
        </div>
       
         


 
    </div>
  )
}

export default Navbar
