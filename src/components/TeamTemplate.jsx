import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaCrown } from 'react-icons/fa'


const TeamTemplate = ({ pos, name, image, link }) => {
    return (
        <div className="relative">
            
            {name === "Latino" ? <FaCrown className='text-center text-3xl text-header absolute -top-10 left-0 right-0 mx-auto' /> : null}

            <div className="w-[16rem] h-[24rem] bg-white border-white shadow-team clip-div relative flex items-center justify-center z-10">
                <div className="w-[98%] h-[98%] bg-black clip-div relative">
                    <div className="h-[4.6rem] px-4 flex items-center justify-center">
                        <h1 className='font-poppins text-center text-[15px] relative left-0 right-0 mx-auto text-header font-bold'>{pos}</h1>

                    </div>
                    <div className="w-[90%] mx-auto h-[15rem] relative">
                        <img src={`/${image}.webp`} alt="Latino" className="absolute w-full h-full object-cover" />
                    </div>

                    <div className="w-[98.5%] h-[4rem] p-2 flex items-center justify-center">
                        <div className="w-full h-full flex justify-between">
                            <div className="font-poppins flex items-center justify-center w-full">
                                <p className="text-center w-full font-semibold">
                                    {name}

                                </p>
                            </div>

                            <a href={link} target="_blank" rel="noopener noreferrer" className="w-[14rem]">
                                <button className="w-full h-[90%] bg-[#28A5E5] clip-div3 cursor-pointer flex items-center rounded-lg">
                                    <FaTelegramPlane className='text-3xl ml-7' />
                                </button>
                            </a>

                        </div>
                    </div>
                </div>

            </div>

            <div className="w-[16rem] h-[24rem] bg-white border-white shadow-team clip-div2 flex items-center justify-center absolute top-5 left-5 z-0">
                <div className="w-[98%] h-[98%] bg-hero clip-div2"></div>
            </div>
        </div>
    )
}

export default TeamTemplate