import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export const Ecoleft = ({ title, desc, img, link }) => {

    const [ref, inView] = useInView({ triggerOnce: true, thershold: 1 })

    return (
        <div className='h-auto max-w-[65rem] w-full flex items-center lg:flex-row flex-col text-white relative z-10'>
            <div className="relative w-full h-[18rem] flex items-center justify-center">
                <Parallax translateY={[35, -35]} className="w-full h-full flex items-center justify-center">
                    <img src={`/${img}.webp`} alt={img} className="object-cover h-full drop-shadow-util rounded-2xl bg-none" />
                </Parallax>
            </div>
            <motion.div className="w-full mt-14 lg:mt-0" ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 100 } : {}} transition={{ duration: 0.7 }}>
                <h3 className="text-header font-king text-2xl">{title}</h3>
                <div className="font-poppins text-sm md:text-md mt-2">{desc}</div>

                <a href={link} target="_blank" rel="noreferrer noopener">
                    <button className='font-king text-white border-white border-[1px] px-7 py-3 rounded-xl hover:bg-white hover:text-myred hover:shadow-glow2 transition-all ease-in-out duration-300 mt-5'>
                        <p className='mt-[-5px]'>Visit website</p>
                    </button>
                </a>
            </motion.div>


        </div>
    )
}

export const Ecoright = ({ title, desc, img, link }) => {

    const [ref, inView] = useInView({ triggerOnce: true, thershold: 0.8 })


    return (
        <div className='h-auto max-w-[65rem] w-full flex items-center lg:flex-row flex-col-reverse text-white relative z-10'>

            <motion.div className="w-full mt-14 lg:mt-0" ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 100 } : {}} transition={{ duration: 0.7 }}>
                <h3 className="text-header font-king text-right text-2xl">{title}</h3>
                <div className="font-poppins text-right text-sm md:text-md mt-2">{desc}</div>

                <a href={link} target="_blank" rel="noreferrer noopener">
                    <button className='font-king text-white border-white border-[1px] px-7 py-3 rounded-xl hover:bg-white hover:text-myred hover:shadow-glow2 transition-all ease-in-out duration-300 mt-5 block ml-auto'>
                        <p className='mt-[-5px]'>Visit website</p>
                    </button>
                </a>

            </motion.div>
            <div className="relative w-full h-[18rem] flex items-center justify-center">
                <Parallax translateY={[35, -35]} className="w-full h-full flex items-center justify-center">
                    <img src={`/${img}.webp`} alt={img} className="object-cover h-full drop-shadow-util rounded-2xl" />
                </Parallax>
            </div>
        </div>
    )
}


