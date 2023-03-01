import React from 'react'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.6 })
    return (
        <section className='h-auto w-full overflow-hidden py-20 pb-[10rem] relative'>
            {/* <img src="/aboutline.webp" alt="lines" className="absolute bottom-0 right-0" /> */}
            <div className="max-w-[1500px] w-full mx-auto mt-32 px-8">
                <div className="font-king text-center md:w-[80%] w-[70%] mx-auto ">
                    <h2 className='uppercase text-white md:text-xl text-lg sm:-mb-3'>About Kingshiba</h2>
                    <div className="uppercase text-header lg:text-8xl md:text-7xl text-5xl flex items-center md:gap-x-10 gap-x-3 mx-auto w-fit">
                        <img src="/crowngif.gif" alt="crown" className="md:h-20 h-10 m:mt-8 mt-4 sm:block hidden" />
                        <motion.p initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }} className='text-shadow-tshad'>KINGSHIBA</motion.p>
                        <img src="/crowngif.gif" alt="crown" className="md:h-20 h-10 md:mt-8 mt-4 sm:block hidden" />
                    </div>
                </div>
                <div className="border-2 border-white p-4 mx-auto relative w-full max-w-[60rem] mt-10">
                    <div className="flex w-full relative">

                        <motion.div initial={{ opacity: 0 }} animate={inView ? { scale: [0.5, 1], opacity: 100 } : {}} transition={{ duration: 0.7 }} className="relative w-full h-auto min-h-[22rem] font-poppins" ref={ref}>
                            <div className="w-full h-full bg-white opacity-50 absolute z-0"></div>
                            <div className="w-full h-full p-5 px-8 z-10 relative flex flex-col md:flex-row">
                                <div className="text-center md:text-left">

                                    <p className='text-white mt-8 md:max-w-[56%] text-lg'><span className='font-bold'>King Shiba</span> is not just an ordinary meme coin. It aims to establish itself as the leading Shibarium project by delivering a multitude of utilities, with the goal of supporting the growth of the project, the community, Shiba Inu and the entire Shibarium.</p>
                                </div>

                                <img src="/kingchair.webp" alt="KingShiba" className="right-0 w-[22rem] -bottom-14 md:absolute relative left-0 mx-auto md:mx-0 md:left-auto" />
                            </div>
                        </motion.div>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default About