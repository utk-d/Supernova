import React from 'react'
import McData from '../McData'


const Sec1 = () => {
  return (
    <div className=' h-[18vh] w-[92vw] flex gap-[2vw]'>
      <McData w={"61vw"}
          titleText="WHAT PROBLEMS ARE WE SOLVING :"
          contentText="We understand the critical need for trustworthy, high-performance medical equipment that supports patient safety and healthcare excellence. By offering rigorously tested devices and comprehensive support, we’re helping healthcare providers deliver the best possible care."
        />
        <McData h={"10vh"} w={"29vw"}
          titleText="LIMITATIONS AND TECHNICAL REQUIREMENTS :"
          contentText="While our products are suited for a range of medical environments, compatibility with existing hospital or mobile healthcare units is essential. We work closely with clients to ensure seamless integration and functionality of our equipment."
          fontSize={"0.96vw"}
        />
    </div>
  )
}

export default Sec1