import React, { useState, useEffect } from 'react'
import { FaCrown } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Roadmap = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.9
    }

    const [lineRef, lineView] = useInView(options)

    const phase = [
        {
            label:
                <>
                    <p className="">⦿ Lorem Ipsum 1</p>
                    <p className="">⦿ Lorem Ipsum 2</p>
                    <p className="">⦿ Lorem Ipsum 3</p>
                    <p className="">⦿ Lorem Ipsum 4</p>
                    <p className="">⦿ Lorem Ipsum 5</p>
                    <p className="">⦿ Lorem Ipsum 6</p>
                    <p className="">⦿ Lorem Ipsum 7</p>

                </>
        },
        {
            label:
                <>
                    <p className="">⦿ Lorem Ipsum 1</p>
                    <p className="">⦿ Lorem Ipsum 2</p>
                    <p className="">⦿ Lorem Ipsum 3</p>
                    <p className="">⦿ Lorem Ipsum 4</p>
                </>
        },
        {
            label:
                <>
                    <p className="">⦿ Lorem Ipsum 1</p>
                    <p className="">⦿ Lorem Ipsum 2</p>
                    <p className="">⦿ Lorem Ipsum 3</p>
                    <p className="">⦿ Lorem Ipsum 4</p>
                </>
        },

    ]

    const [current, setCurrent] = useState(0)

    const onEnter = (e) => {
        setCurrent(e)
    }

    const onLeave = () => {
        setCurrent(0)
    }

    return (
        <section className='w-full h-auto py-20  text-black relative flex items-center' id="roadmap">

            {/* <img src="/roadmapbg.webp" alt="roadmapbgb" className="absolute top-0 left-0 w-full h-full cover" /> */}

            {/* <img src="/heroline.webp" alt="Line" className="absolute bottom-20 left-0 z-0 opacity-50" /> */}

            <div className="w-full max-w-[1500px] px-10 mx-auto relative z-10">
                <div className="uppercase text-header font-king w-full lg:text-8xl md:text-7xl text-5xl flex items-center md:gap-x-10 gap-x-3 mx-auto">
                    <div className="w-0 h-[2px] bg-header mt-8 origin-right transition-all ease-in-out duration-[1.5s]" style={lineView ? { width: "100%" } : {}} ref={lineRef}></div>
                    <motion.p whileInView={{ rotate: [0, -15, 0], scale: [1, 1.1, 1.1, 1] }} transition={{ duration: 1, delay: 0.3 }} className='text-shadow-tshad text-center mx-auto'>ROADMAP</motion.p>
                    <div className="w-0 h-[2px] bg-header mt-8 origin-left transition-all ease-in-out duration-[1.5s]" style={ lineView ? {width: "100%"} : {}}></div>

                </div>

                <div className='overflow-x-scroll lg:overflow-x-hidden mt-20 text-white'>
                    <div className="flex max-w-[50rem] mx-auto mt-12 gap-x-4 min-w-[35rem] pb-10">
                        {phase.map((items, index) => {
                            return (
                                <div className={`h-auto bg-black ite flex flex-col items-center py-14 relative transition-all rounded-2xl ease-in-out duration-300 ${current === index ? " opacity-100 border-2 border-white bg-pattern" : "opacity-50"}`} key={index} style={current === index ? { flexGrow: "3" } : {}} onMouseEnter={() => { onEnter(index) }} onMouseLeave={onLeave}>

                                    <FaCrown className='text-3xl text-header transition-all ease-in-out duration-300 shadow-glowroad bg-[#493b14]' style={current === index ? { scale: "1" } : { scale: "0" }} />
                                    <div className={`font-king transition-all ease-in-out duration-300 ${current === index ? "text-3xl 2xl:text-4xl" : "text-sm"}`} >Phase {index + 1}</div>
                                    <div className='mt-6 flex flex-col gap-y-4 transition-all ease-in-out duration-300 origin-top font-poppins 2xl:text-xl' style={current === index ? { scale: "1" } : { scale: "0" }}>
                                        {items.label}
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Roadmap