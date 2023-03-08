import React, { useState, useEffect } from 'react'
import { FaCrown } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTelegramPlane } from 'react-icons/fa'
import TeamTemplate from './TeamTemplate'

const Roadmap = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.9
    }

    const [lineRef, lineView] = useInView(options)

    const memberList = [
        // {
        //     pos: 'Project Management and Marketing',
        //     name: 'Latino',
        //     img: 'Latino',
        //     link: 'https://t.me/LATINKING19'
        // },
        {
            pos: 'Smart Contracts & dApps',
            name: 'Hatmonke',
            img: 'hatmonke',
            link: 'https://t.me/Hatmonke'
        },
        {
            pos: 'Graphic Design',
            name: 'S_0',
            img: 's_0',
            link: 'https://t.me/S_0Zero'
        },
        {
            pos: 'Graphic Design',
            name: 'Joker',
            img: 'joker',
            link: 'https://t.me/cryptojokerx'
        },
        {
            pos: 'Game Development',
            name: 'Niel',
            img: 'niels',
            link: 'https://t.me/NielBeanQuest'
        },
        {
            pos: 'Bot Development',
            name: 'Bogdanoff',
            img: 'bog',
            link: 'https://t.me/Zero_the_One'
        },
        {
            pos: 'Community Management',
            name: 'Michael',
            img: 'michael',
            link: 'https://t.me/Michaeloneday'
        },
        {
            pos: 'Community Management',
            name: 'Luigi',
            img: 'luigi',
            link: 'https://t.me/Luigi_safu'
        },
        {
            pos: 'Site Listings',
            name: '0xDead',
            img: '0x',
            link: 'https://t.me/ledlrr'
        },


    ]

    return (
        <section className='w-full h-auto py-20  text-black relative flex items-center' id="team">

            <div className="w-full max-w-[1500px] px-10 mx-auto relative z-10">
                <div className="uppercase text-header font-king w-full lg:text-8xl md:text-7xl text-5xl flex items-center md:gap-x-10 gap-x-3 mx-auto">
                    <div className="w-0 h-[2px] bg-header mt-8 origin-right transition-all ease-in-out duration-[1.5s]" style={lineView ? { width: "100%" } : {}} ref={lineRef}></div>
                    <motion.p whileInView={{ rotate: [0, -15, 0], scale: [1, 1.1, 1.1, 1] }} transition={{ duration: 1, delay: 0.3 }} className='text-shadow-tshad text-center mx-auto'>TEAM</motion.p>
                    <div className="w-0 h-[2px] bg-header mt-8 origin-left transition-all ease-in-out duration-[1.5s]" style={lineView ? { width: "100%" } : {}}></div>
                </div>

                <div className="w-fit mx-auto mt-24 text-white font-poppins">
                    <TeamTemplate pos="Project Management and Marketing" name="Latino" image="Latino" link="https://t.me/LATINKING19" />

                </div>


                <div className='mt-24 text-white flex-wrap flex gap-20 mx-auto w-fit items-center justify-center'>

                    {memberList.map((items, i) => {
                        return (
                            <TeamTemplate key={i} pos={items.pos} name={items.name} image={items.img} link={items.link} />
                        )
                    })}

                </div>

                <div className="w-full flex justify-center items-center mt-[8rem]">
                    <a href="" target="_blank" rel="noopener noreferrer" className="">
                        <button className='font-king text-myred bg-white px-10 py-4 rounded-xl shadow-glow hover:shadow-glow2 transition-all ease-in-out duration-300'>
                            <p className='mt-[-5px] text-lg xl:text-2xl'>WHITEPAPER</p>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Roadmap