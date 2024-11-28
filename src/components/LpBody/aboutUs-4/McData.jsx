import React from 'react'

const Title = ({text}) => {
    return (
        <h1 className=' text-[#767676] mt-3 font-tomorrow'>{text}</h1>
    );
};

const Content = ({text, fontSize}) => {
    return (
    <p className='text-[#494209] lg:text-[1.25vw] mt-2' style={{fontSize: `${fontSize}`}} > {text}</p>
    )
}
const McData = ({titleText, contentText, fontSize ,h , w}) => {
  return (
    <div className='tab:h-[18vh] tab:w-[60vw] border-t-[1px] border-[#605B5B]' style={{height: `${h}`, width: `${w}`}}> 
        <Title text={titleText}/>
        <Content text={contentText} fontSize={fontSize}/>
    </div>
  )
}

export default McData