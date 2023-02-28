import React from 'react'
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa'
import { HiEnvelope } from 'react-icons/hi2'
import { AiFillYoutube } from 'react-icons/ai'
import { SiLinktree } from 'react-icons/si'

const Footer = () => {
    return (
        <section className='w-full h-[20rem] py-16 bg-black px-20 text-white relative'>
            <a href="#home" rel="no">
                <img src="/logo.webp" alt="Logo" className="w-32 mx-auto cursor-pointer" />
            </a>

            <div className='mx-auto w-fit mt-4 flex gap-x-6 md:text-4xl text-xl'>
                <a href="" target="_blank">
                    <SiTwitter className='hover:scale-[1.1] cursor-pointer transition-all ease-in-out' />
                </a>

                <a href="" target="_blank">
                    <FaTelegramPlane className='hover:scale-[1.1] cursor-pointer transition-all ease-in-out' />
                </a>


            </div>

            <p className='text-center absolute mx-auto left-0 right-0 bottom-4 text-xs font-poppins'>COPYRIGHT KINGSHIBA. 2023. ALL RIGHT RESERVED</p>

        </section>
    )
}

export default Footer