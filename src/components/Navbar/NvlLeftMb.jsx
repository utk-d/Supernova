import React from 'react'
import MbnvList from './MbnvList'

const NvlLeftMb = () => {
  const [disMenu, setDisMenu] = React.useState(false)

  return (
    <div className='md:hidden'>
        <button onClick={() => setDisMenu(!disMenu)}>
          {!disMenu && <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/474625/menu--v6.png" alt="menu--v5" className='relative top-8 z-[4]'/>}
        </button>
        {disMenu && <button onClick={() => setDisMenu(!disMenu)}><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/474625/multiply.png" alt="delete-sign" className='relative top-8 z-[3]'/></button>}
        {disMenu && <MbnvList/>}
    </div>
  )
}

export default NvlLeftMb
