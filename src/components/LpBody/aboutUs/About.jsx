import React from 'react'
import LpBtn from './LpBtn'

const About = () => {
  return (
    <div className='bg-red-400 h-[35vh] w-[92%] relative left-[4vw]' id='about-us'>
      <div id='about-text' className='bg-yellow-700 '>
        <div id='about-text-data' className='bg-green-400'>
          <h1 className=' text-[#767676]'>ABOUT US :</h1>
          <p className='text-[#494209]'>Supernova Surgicals, established in 2016, has become a trusted leader in Madhya Pradesh’s healthcare industry. We are dedicated to providing high-quality medical and surgical supplies, delivering reliable products that healthcare professionals depend on every day.</p>
        </div>

        <div id='shop-wp-buttons' className='text-[#494209] font-montserrat relative gap-4 flex top-[17vw] w-[25%] text-xl justify-between'>
          <LpBtn bttext="Shop" iconImg={<img width="20" height="20" src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png" alt="expand-arrow--v1"/>} width={"9vw"}/>

          <LpBtn gap="0.6vw" bttext="Whatsapp" iconImg={<img width="24" height="24" src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1"/>} width={"11vw"}/>
        </div>
        

      </div>
    </div>
  )
}

export default About