import React from 'react'
import McData from '../McData'

const Sec2 = () => {
  return (
    <div className=' h-[18vh] w-[92vw] flex relative -bottom-[1vh] gap-[2.5vw]'>
      <McData h={"10vh"} w={"30vw"}
          titleText="WHO IS IT FOR :"
          contentText="Our solutions are designed for public and private hospitals, nursing homes, and healthcare professionals. Supernova Surgicals is committed to serving those who dedicate their lives to healing, ensuring they have access to the best tools for their mission."
          fontSize={"0.96vw"}
        />
        <McData h={"10vh"} w={"30vw"}
        titleText="HOW DO WE EMPOWER OUR CUSTOMERS :"
        contentText="Supernova Surgicals goes beyond supplying products; we empower healthcare providers by offering expert guidance, reliable support, and customized solutions tailored to their needs. Our team is dedicated to ensuring that our clients can confidently deliver high-quality medical care."
        fontSize={"0.96vw"}
        />
        <McData h={"10vh"} w={"30vw"}
      titleText="THE BRAND :"
      contentText="Supernova Surgicals values integrity, professionalism, and customer-focused service. Our mission is to be a dependable and a trusted healthcare partner, delivering advanced, high-quality solutions to those who care for others and support medical professionals, being a name that healthcare providers trust the most."
      fontSize={"0.96vw"}
        />
    </div>
  )
}

export default Sec2