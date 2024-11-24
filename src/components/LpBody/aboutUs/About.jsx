import React from 'react'

const About = () => {
  return (
    <div className='lg:h-[52vh] lg:w-[92%] flex relative lg:left-[7.6vh] md:left-[4vh] lg:bg-[#DFDDC3] md:h-[42.3vh] md:w-[91%] sm:h-[35vh]' id='about-us'>
      <div id='about-text' className='lg:w-[40vw] lg:h-[50vh] md:w-[65vw] md:h-[40vw] sm:w-[50vh] relative sm:top-[4vw] md:top-[0vw] md:left-[0vw] sm:left-[3vw] text-left lg:flex-col '>
        <div id='about-text-data' className='lg:h-[20vh] lg:w-[73vh] font-tomorrow relative lg:top-[8vh] md:top-[6vh] flex flex-col lg:left-0 gap-4 '>
          <h1 className=' text-[#767676]'>ABOUT US :</h1>
          <p className='text-[#494209] lg:text-2xl sm:text-[2vw] md:text-[2.3vw]  '>Supernova Surgicals, established in 2016, has become a trusted leader in Madhya Pradesh’s healthcare industry. We are dedicated to providing high-quality medical and surgical supplies, delivering reliable products that healthcare professionals depend on every day.</p>
        </div>
        <div id='shop-wp-buttons' className='tab:w-[30vw] text-[#494209] tab:text-[1.28vw] font-montserrat h-[5.6vh] relative lg:top-[15vh] md:w-[40vw] md:top-[10vh] lg:flex lg:flex-row md:flex md:flex-row justify-between sm:top-[6vw] sm:flex sm:justify-start sm:gap-[6vw] lg:w-[25vw] '>
            <button className='border-2 border-[#767676] tab:w-[10vw] tab:h-[100%] flex gap-1 items-center justify-center hover:bg-[#494209] hover:text-[#ece9bb] shadow-xl shadow-[#c9c994] transition-all ease-in md:w-[18vw] md:h-[80%] sm:w-[15vw] p-2'>Shop <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png" alt="expand-arrow--v1"/></button>
            <button className='border-2 border-[#767676] tab:w-[12vw] tab:h-[100%] flex gap-4 items-center justify-center hover:bg-[#494209] hover:text-[#ece9bb] shadow-xl shadow-[#c9c994] transition-all ease-in md:w-[18vw] md:h-[80%] sm:w-[20vw] p-5'>Whatsapp<img width="24" height="24" src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1"/></button>
      </div>
      </div>
    </div>
  )
}

export default About