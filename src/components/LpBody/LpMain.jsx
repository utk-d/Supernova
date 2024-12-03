import React from 'react'
import About from './aboutUs/About'
import LpBtn from './aboutUs/LpBtn'
import Us4main from './aboutUs-4/Us4main'


export const LpMain = () => {
  return (
    <div className='flex flex-col sm: bg-[#DFDDC3] lg:h-[98vh] md:h-[100vh] '>
        <About/>
        <div className="btns  h-[14vw] w-[92vw] relative left-[3vw] mt-[5vw] flex gap-[10vw] text-[#494209] font-montserrat text-[3.5vw] justify-center">
        <LpBtn bttext="Shop" iconImg={<img width="20" height="20" src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png" alt="expand-arrow--v1"/>}/>
        <LpBtn gap="0.6vw" bttext="Whatsapp" iconImg={<img width="20" height="20" src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1"/>} />
        </div>
        {/* <AboutImg/> */}
        <Us4main/>  
    </div>
  )
}

export default LpMain
