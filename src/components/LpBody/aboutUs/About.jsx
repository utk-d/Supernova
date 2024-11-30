import React from 'react'
import LpBtn from './LpBtn'
import Rimg from './Rimg'

const About = () => {
  return (
    <div className='bg-red- h-[35vh] w-[92%] relative left-[4vw] top-[2vw]' id='about-us'>
      <div id='about-text' className='bg-yellow '>
        <div id='about-text-data' className='bg-green- w-[27vh] h-[30vw]'>
          <h1 className=' text-[#767676]'>ABOUT US :</h1>
          <p className='text-[#494209] text-[4vw]'>Supernova Surgicals, established in 2016, has become a trusted leader in Madhya Pradesh’s healthcare industry.<span className='invisible'>We are dedicated to providing high-quality medical and surgical supplies, delivering reliable products that healthcare professionals depend on every day.</span></p>
        </div>
        <Rimg left={"27.687vh"} top={"0vh"} im={<img src="../public/image 2.png" alt="" />}/>
        <div className='bg-purple- w-[26.5vh] relative left-[14.5vh] top-[2.5vh] text-right'>
          <p className='text-[#494209] text-[4vw]'>We are dedicated to providing high-quality medical and surgical supplies, delivering reliable products that healthcare professionals depend on each and every day.</p>
        </div>
        <Rimg left={"-0.5vh"} top={"16vh"} im={<img src="../public/image 2.png" alt="" />}/>

        {/* <div id='shop-wp-buttons' className='text-[#494209] font-montserrat relative gap-4 flex top-[17vw] w-[25%] text-xl justify-between'>
          <LpBtn bttext="Shop" iconImg={<img width="20" height="20" src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png" alt="expand-arrow--v1"/>} width={"9vw"}/>

          <LpBtn gap="0.6vw" bttext="Whatsapp" iconImg={<img width="24" height="24" src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1"/>} width={"11vw"}/>
        </div> */}
      </div>
    </div>
  )
}

export default About