import React from 'react'

const AboutImg = () => {
  return (
    <div id='img-cont' className='flex items-end absolute left-[32.8vw] top-[10vw]'>
      <div id='img-4' className='bg-red-400 h-[20vh] w-[13.5vw] z-[2] right-[]'><img src="../public/image 5.png" alt="" /></div>
      <div id='img-3' className='bg-white h-[38vh] bottom-[2vw] w-[18vw] relative right-[] z-[1] '><img src="../public/image 6.png" alt="" /></div>
      <div id='img-2' className='bg-red-400 h-[27vh] w-[27vh]z-[2] right-[]'><img src="../public/image 4.png" alt="" /></div>
      <div id='img-1' className='bg-white h-[38vh] w-[17vw]  right-[] bottom-[3vw] z-[1] '><img src="../public/image 2.png" alt="" /></div>
    </div>
  )
}

export default AboutImg