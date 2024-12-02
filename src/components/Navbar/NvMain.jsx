import React from 'react'
import NvLogo from './NvLogo'
import NvLeft from './NvLeft'

const NvMain = () => {
  return (
    <div id='navbarMain' className='relative flex justify-center'>
        <div className='border-div h-[93%] w-[100%] relative top-[1.5vw] right-[0.1vw] flex justify-center flex-col  sm: bg-[#DFDDC3]'>
          <NvLeft/>
          <NvLogo/>
        </div>
    </div>
  )
}

export default NvMain