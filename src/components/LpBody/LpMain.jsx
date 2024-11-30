import React from 'react'
import About from './aboutUs/About'
// import AboutImg from './aboutUs/AboutImg'
import Us4main from './aboutUs-4/Us4main'

export const LpMain = () => {
  return (
    <div className='flex flex-col sm: bg-[#DFDDC3] lg:h-[98vh] md:h-[100vh] '>
        <About/>
        {/* <AboutImg/> */}
        {/* <Us4main/> */}
    </div>
  )
}

export default LpMain
