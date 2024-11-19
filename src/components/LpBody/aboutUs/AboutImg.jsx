import React from 'react'

const AboutImg = () => {
  return (
    <div id='img-cont' className='flex items-end'>
      <div id='img-4' className='bg-red-400 h-[22vh] w-[15.5vw] absolute z-[2] right-[50vw]'><img src="../public/image 5.png" alt="" /></div>
      <div id='img-3' className='bg-white h-[40vh] bottom-[2vw] w-[20vw] relative right-[15.5vw] z-[1] '><img src="../public/image 6.png" alt="" /></div>
      <div id='img-2' className='bg-red-400 h-[27vh] w-[27vh] absolute z-[2] right-[22vw]'><img src="../public/image 4.png" alt="" /></div>
      <div id='img-1' className='bg-white h-[41vh] w-[18vw] relative right-[5.6vw] bottom-[3vw] z-[1] '><img src="../public/image 2.png" alt="" /></div>
    </div>
  )
}

export default AboutImg