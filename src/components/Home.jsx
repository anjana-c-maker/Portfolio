import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home'  className = 'w-full h-screen bg-[#0a192f]'>
     {/*container */}
     <div className='max-w-[800px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]' > Anjana </h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]' style={{ fontSize: '20px' }} >As a web developer, I specialize in crafting engaging online experiences by utilizing my expertise in programming languages like HTML, CSS, and JavaScript.
            I merge technical prowess with creativity to build visually stunning websites and
            web applications that cater to user needs and preferences.</p>
      </div> 
    </div>
  )
}

export default Home