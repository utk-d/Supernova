import React from 'react'
import { useState, useEffect } from 'react'


const Rimg = ({left, top, im}) => {
    const [isWide, setIsWide] = useState(window.innerWidth >= 768);
    useEffect(() => {
      const handleResize = () => {
        setIsWide(window.innerWidth >= 768);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <>
        {!isWide && <div className='absolute z-40 h-[13.4vh] w-[14vh] rounded-xl bg-white overflow-hidden' style={{left: `${left}`, top: `${top}`}}>
        {im}
    </div>}
      </>
    );

}

export default Rimg






