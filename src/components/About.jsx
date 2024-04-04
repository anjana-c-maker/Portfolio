import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max=w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-700'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Anjana , nice to meet you.Please take a look around </p>
                </div>
                <div>
                    <p style={{ fontSize: '18px' }}>Hello! I'm Anjana, a dedicated MSC Computer Science student with an insatiable passion for web development. 
                        With every line of code, I'm crafting the digital future, blending creativity with cutting-edge technology.
                        Join me on this exhilarating journey as we redefine online experiences,
                        one webpage at a time.</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About