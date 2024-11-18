import React from 'react'

const MbnvList = () => {
  return (
    <div className='bg-[#c7c4a0] h-[30vh] w-[45vw] relative top-6 left-8 shadow-gray-500 shadow-xl font-tomorrow flex flex-col gap-2 p-3 pt-5 bottom-2'>
      <a href=""><p>HOME</p></a>
      <a href=""><p>SHOP</p></a>
      <a href=""><p>ABOUT US</p></a>
      <a href=""><p>INSTALLATION</p></a>
      {/* <p>MORE <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/sort-down.png" alt="sort-down" className='relative bottom-4 left-[14vw]'/></p> */}
      <a href=""><p>CERTIFICATES</p></a>
      <a href=""><p>TESTIMONIALS</p></a>
    </div>
  )
}

export default MbnvList