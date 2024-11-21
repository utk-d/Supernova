import React from 'react'

const About = () => {
  return (
    <div className='h-[52vh] w-[92%] flex relative lg:left-[7.6vh] md:bg-red-300 lg:bg-[#DFDDC3]' id='about-us'>
      <div id='about-text' className='lg:w-[40vw] md:h-[40vh] lg:h-[50vh] md:w-[70vh] md:text-center lg:text-left md:flex lg:flex-col md:gap-[5vw]'>
        <div id='about-text-data' className='lg:h-[20vh] md:h-[34vh] md:w-[50vh]  lg:w-[73vh] font-tomorrow relative lg:top-[8vh] md:top-[2vh] flex flex-col md:left-[3vh] lg:left-0 gap-4 '>
          <h1 className=' text-[#767676]'>ABOUT US :</h1>
          <p className='text-[#494209] text-2xl '>Supernova Surgicals, established in 2016, has become a trusted leader in Madhya Pradesh’s healthcare industry. We are dedicated to providing high-quality medical and surgical supplies, delivering reliable products that healthcare professionals depend on every day.</p>
        </div>
        <div id='shop-wp-buttons' className='w-[25vw] text-[#494209] text-2xl font-montserrat h-[5.6vh] relative top-[10vh] lg:flex lg:flex-row md:flex-col justify-between'>
            <button className='border-2 border-[#767676] w-[10vw] h-[100%] flex gap-1 items-center justify-center hover:bg-[#494209] hover:text-[#ece9bb] shadow-xl shadow-[#c9c994] transition-all ease-in'>Shop <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png" alt="expand-arrow--v1"/></button>
            <button className='border-2 border-[#767676] w-[12vw] h-[100%] flex gap-4 items-center justify-center hover:bg-[#494209] hover:text-[#ece9bb] shadow-xl shadow-[#c9c994] transition-all ease-in'>Whatsapp<img width="24" height="24" src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1"/></button>
      </div>
      </div>
    </div>
  )
}

export default About