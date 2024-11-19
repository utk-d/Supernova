import React from 'react'
import Nvmore from './Nvmore'

const NvLeftList = () => {
    const [disMore, setDisMore] = React.useState(false)
  return (
    <div className='h-[100%] w-[55vw] font-tomorrow hidden md:flex gap-4 items-end relative top-[3vh] left-[3vh] md:left-[1vh] md:w-[100%]'>
      <a href=""><p className='hover:underline'>HOME</p></a>
      <a href=""><p className='hover:underline'>SHOP</p></a>
      <a href=""><p className='hover:underline'>INSTALLATION</p></a>
      <a href=""><p className='hover:underline'>ABOUT US</p></a>
      <a href=""><p className='hover:underline'>MORE</p></a>
        <button onClick={() => setDisMore(!disMore)}>
        {!disMore && <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/sort-down.png" alt="sort-down" className='relative right-[1vh] bottom-[0.5vh] z-[4]'/>}
      </button>
      {disMore && <button onClick={() => setDisMore(!disMore)}><img width="11" height="11" src="https://img.icons8.com/ios-filled/50/sort-up.png" alt="sort-up" className='relative right-[2.8vh] bottom-[0.6vh] z-[2]'/>
      </button> } 
      {disMore && <Nvmore/>} 
    </div>
  )
}

export default NvLeftList