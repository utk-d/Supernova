import React from 'react'

const About = () => {
  return (
    <div className='about-sec bg-[#c0bba0] border-t-[2px] border-[#7f7d7d] h-[62vw] w-[100%] relative mt-[5vw]' >
      <div className="aboutUsTitle h-[12vw] w-[40vw] font-tomorrow text-[7vw] text-[#767676] flex justify-center items-center relative top-[4vw] left-[2vw]"><h1>ABOUT US :</h1></div>
      <div className="imgText flex h-[40vw] w-[100%]">
      <div className="aboutUsImgPhone h-[40vw] w-[30vw] pink-400 relative top-[6vw] left-[2vw]"><img src="../public/image 2.png" alt="" /></div>
      <div className="aboutUsText h-[40vw] w-[62vw] white relative left-[3vw] top-[6vw]">
      <p className='text-[#494209] font-tomorrow text-[3.4vw] text-right'>Supernova Surgicals, established in 2016, has become a trusted leader in Madhya Pradesh’s healthcare industry.We are dedicated to providing high-quality medical and surgical supplies, delivering reliable products that healthcare professionals depend on every day.</p>
      </div>
      </div>
    </div>
  )
}

export default About
