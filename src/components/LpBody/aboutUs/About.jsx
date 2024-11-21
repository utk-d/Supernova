import React from 'react'

const About = () => {
  return (
    <div className='lg:h-[52vh] lg:w-[92%] flex relative lg:left-[7.6vh] md:left-[4vh] md:bg-red-300 lg:bg-[#DFDDC3] md:h-[42.3vh]' id='about-us'>
      <div id='about-text' className='lg:w-[40vw] lg:h-[50vh] md:w-[65vw] md:h-[40vw] lg:text-left lg:flex-col bg-blue-300'>
        <div id='about-text-data' className='lg:h-[20vh] lg:w-[73vh] font-tomorrow relative lg:top-[8vh] md:top-[6vh] flex flex-col lg:left-0 gap-4 '>
          <h1 className=' text-[#767676]'>ABOUT US :</h1>
          <p className='text-[#494209] lg:text-2xl md:text-[2.3vw]  '>Supernova Surgicals, established in 2016, has become a trusted leader in Madhya Pradesh’s healthcare industry. We are dedicated to providing high-quality medical and surgical supplies, delivering reliable products that healthcare professionals depend on every day.</p>
        </div>
        <div id='shop-wp-buttons' className='w-[25vw] text-[#494209] text-[1.28vw] font-montserrat h-[5.6vh] relative lg:top-[15vh] md:top-[10vh] lg:flex lg:flex-row md:flex md:flex-row justify-between'>
            <button className='border-2 border-[#767676] w-[10vw] h-[100%] flex gap-1 items-center justify-center hover:bg-[#494209] hover:text-[#ece9bb] shadow-xl shadow-[#c9c994] transition-all ease-in'>Shop <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png" alt="expand-arrow--v1"/></button>
            <button className='border-2 border-[#767676] w-[12vw] h-[100%] flex gap-4 items-center justify-center hover:bg-[#494209] hover:text-[#ece9bb] shadow-xl shadow-[#c9c994] transition-all ease-in'>Whatsapp<img width="24" height="24" src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1"/></button>
      </div>
      </div>
    </div>
  )
}

export default About