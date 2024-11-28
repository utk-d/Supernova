import React from 'react'

const About = () => {
  return (
    <div className='bg-red-400 h-[35vh] w-[92%] relative left-[2vh]' id='about-us'>
      <div id='about-text' className='bg-yellow-700 '>
        <div id='about-text-data' className='bg-green-400 h-[] w-[]'>
          <h1 className=' text-[#767676]'>ABOUT US :</h1>
          <p className='text-[#494209]'>Supernova Surgicals, established in 2016, has become a trusted leader in Madhya Pradesh’s healthcare industry. We are dedicated to providing high-quality medical and surgical supplies, delivering reliable products that healthcare professionals depend on every day.</p>
        </div>
        <div id='shop-wp-buttons' className='text-[#494209] font-montserrat relative gap-4 bg-blue-400 flex top-[17vw]'>
            <button className='border-2 border-[#767676] flex gap-1 items-center justify-center hover:bg-[#494209] hover:text-[#ece9bb] shadow-xl shadow-[#c9c994] transition-all ease-in p-2 h-[5.5vh] w-[15vh]'>Shop <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png" alt="expand-arrow--v1"/></button>
            <button className='border-2 border-[#767676] flex gap-4 items-center justify-center hover:bg-[#494209] hover:text-[#ece9bb] shadow-xl shadow-[#c9c994] transition-all ease-in  p-5 h-[5.5vh]'>Whatsapp<img width="24" height="24" src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1"/></button>
      </div>
      </div>
    </div>
  )
}

export default About