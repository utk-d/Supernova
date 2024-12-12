import React from 'react'
import NvMain from './components/Navbar/NvMain.jsx'
import LpMain from './components/LpBody/LpMain.jsx'



const App = () => {
  return (
    <div id='main' className='sm: bg-[#DFDDC3] h-[100vh] w-[100vw]'>
      <NvMain/>
      <LpMain/>
    </div>  
  )
}
export default App