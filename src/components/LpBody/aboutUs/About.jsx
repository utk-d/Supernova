import React from 'react'
import LpBtn from './LpBtn'
import Rimg from './Rimg'

const About = () => {
  return (
    <div className='bg-red- h-[32%] w-[92%] relative left-[4vw] top-[2vw] md:top-[7vw]' id='about-us'>
      <div id='about-text' className='bg-yellow- md:h-[40vw] md:w-[65vw] '>
        <div id='about-text-data' className='bg-green- w-[100%] h-[70%]'>
          <h1 className=' text-[#767676]'>ABOUT US :</h1>
          <p className='text-[#494209] md:text-[2.7vw]'>Supernova Surgicals, established in 2016, has become a trusted leader in Madhya Pradesh’s healthcare industry. <span className='invisible md:visible'>We are dedicated to providing high-quality medical and surgical supplies, delivering reliable products that healthcare professionals depend on every day.</span></p>
        </div>
        <Rimg left={"27.987vh"} top={"0vh"} im={<img src="../public/image 2.png" alt="" />}/>
        <div className=' bg-purple- md:hidden w-[26.5vh] relative left-[14.5vh] top-[2.5vh] text-right'>
          <p className='text-[#494209] text-[4vw]'>We are dedicated to providing the high-quality medical and surgical supplies, delivering reliable products that healthcare professionals depend on each and every day.</p>
        </div>
        <Rimg left={"-0.5vh"} top={"16vh"} im={<img src="../public/image 2.png" alt="" />} wiw={"900"}/>
        <div className='bg-purple-700 invisible md:visible relative top-[-22.7vh] left-[53.8vh]  md:h-[38vw] md:w-[26vw] '>
        </div>
        <div id='shop-wp-buttons' className='text-[#494209] font-montserrat relative gap-5 flex top-[17vw] w-[100%] text-xl  justify-start bg-pink- md:top-[-36vw]'>
          <LpBtn bttext="Shop" iconImg={<img width="20" height="20" src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png" alt="expand-arrow--v1"/>}/>

          <LpBtn gap="0.6vw" bttext="Whatsapp" iconImg={<img width="20" height="20" src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1"/>} />
        </div>
      </div>
    </div>
  )
}

export default About