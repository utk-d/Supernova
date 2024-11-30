import React from 'react'


const LpBtn = ({bttext, iconImg , width, gap}) => {
    return (
        <button className='border-2 border-[#767676] hover:bg-[#494209] hover:text-[#ece9bb] shadow-xl shadow-[#c9c994] transition-all ease-in p-2 h-[5.5vh] w-[15vh] md:w-[20vh] md:text-[2.5vw] text-[4vw] flex gap-1 items-center justify-center' style={{width: `${width}`, gap: `${gap}`}}>{bttext}{iconImg}</button>
    );
};

export default LpBtn
