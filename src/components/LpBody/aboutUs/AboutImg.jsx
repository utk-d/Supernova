import React from 'react'

const AboutImg = () => {
  return (
    <div id='img-cont' className='hidden im:flex items-end absolute left-[32.8vw] top-[9vw]'>
      <div id='img-4' className='h-[20vh] w-[13.5vw] relative top-5 z-[2] '><img src="../public/image 5.png" alt="" /></div>
      <div id='img-3' className=' h-[38vh] bottom-[2vw] w-[18vw] relative right-[] z-[1] '><img src="../public/image 6.png" alt="" /></div>
      <div id='img-2' className='h-[27vh] w-[27vh]z-[2] right-[]'><img src="../public/image 4.png" alt="" /></div>
      <div id='img-1' className=' h-[38vh] w-[17vw] bottom-[3vw] z-[1] '><img src="../public/image 2.png" alt="" /></div>
    </div>
  )
}

export default AboutImg