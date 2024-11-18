import React from 'react'
import MbnvList from './MbnvList'

const NvlLeftMb = () => {
  const [disMenu, setDisMenu] = React.useState(false)

  return (
    <div className='md:hidden'>
        <button onClick={() => setDisMenu(!disMenu)}>
          {!disMenu && <img width="30" height="30" src="https://img.icons8.com/plumpy/24/menu--v5.png" alt="menu--v5" className='relative top-8 z-[4]'/>}
        </button>
        {disMenu && <button onClick={() => setDisMenu(!disMenu)}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" alt="delete-sign" className='relative top-8 z-[3]'/></button>}
        {disMenu && <MbnvList/>}
    </div>
  )
}

export default NvlLeftMb