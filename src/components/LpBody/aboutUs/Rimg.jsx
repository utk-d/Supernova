import React from 'react'

const Rimg = ({left, top, im}) => {
  return (
    <div className='absolute z-40 h-[13.4vh] w-[14vh] rounded-xl bg-white overflow-hidden' style={{left: `${left}`, top: `${top}`}}>
        {im}
    </div>
  )
}

export default Rimg