import React from 'react'
import NvLogo from './NvLogo'
import NvLeft from './NvLeft'

const NvMain = () => {
  return (
    <div id='navbarMain' className='h-24 relative flex justify-center'>
        <div className='border-div h-[70%] w-[92%] relative top-[1.5vw] right-[0.1vw] border-b-[2px] border-[#7f7d7d] flex justify-between'>
          <NvLeft/>
          <NvLogo/>
        </div>
    </div>
  )
}

export default NvMain