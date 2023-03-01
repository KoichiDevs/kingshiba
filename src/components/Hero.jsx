import React, { useEffect } from 'react'
import Nav from './Nav'
import { GiBroadsword } from 'react-icons/gi'
import { useAnimation, motion } from 'framer-motion'

const Hero = () => {

    const animation = useAnimation()

    async function sequence() {
        await animation.start({ opacity: 1, y: 20, transition: { duration: 1 } })
        animation.start({
            y: [20, -20],
            transition: {
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
                duration: 1.5
            }
        })
    }

    useEffect(() => {
        sequence()
    }, [])

    const variant = {
        initial: {

        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const child = {
        initial: {
            x: -100,
            y: 130,
            opacity: 0
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 100,
            transition: {
                duration: 0.9
            }
        }
    }

    return (
        <section className='w-full h-screen bg-gradient-to-b from-black to-myred flex items-center justify-center relative'>
            <img src="/heroline.webp" alt="Line" className="absolute bottom-0 left-0 z-0" />

            <Nav />
            <div className='max-w-[1500px] w-full h-auto md:px-12 px-10 flex items-center justify-between relative z-10'>

                <motion.div variants={variant} initial="initial" animate="animate" className="w-full h-full relative z-[11]">
                    <div className="overflow-hidden">
                        <motion.div variants={child} className="flex xl:gap-x-10 gap-x-7">
                            <h1 className='text-header xl:text-8xl md:text-7xl text-5xl font-king'>KING SHIBA</h1>
                            <GiBroadsword className='xl:text-9xl md:text-8xl text-6xl text-header rotate-45' />
                        </motion.div>
                    </div>

                    <div className="overflow-hidden">
                        <motion.p variants={child} className='font-poppins text-white max-w-[35rem] mt-0 text-sm md:text-lg'>King Shiba is the king of all Shibas, and Shibarium is his kingdom! With the help of the Shib Army, King Shiba will defeat the Bears, bringing peace to Shibarium and prosperity to his army.</motion.p>
                    </div>

                    <div className="">
                        <motion.div variants={child} className="mt-10 flex gap-x-4 sm:items-center sm:flex-row flex-col gap-y-4 items-start">
                            <button className='font-king text-myred bg-white px-10 py-4 rounded-xl shadow-glow hover:shadow-glow2 transition-all ease-in-out duration-300'>
                                <p className='mt-[-5px] text-lg'>BUY TOKEN</p>
                            </button>

                            <button className='font-king text-white border-white border-2 px-10 py-4 rounded-xl hover:bg-white hover:text-myred hover:shadow-glow2 transition-all ease-in-out duration-300'>
                                <p className='mt-[-5px] text-lg'>CHART</p>
                            </button>
                        </motion.div>
                    </div>

                </motion.div>

                <div className="flex items-center justify-center w-full h-full lg:relative absolute bottom-0 right-0 z-10 opacity-20 lg:opacity-100">
                    <motion.img initial={{ opacity: 0 }} animate={animation} src="/hero.webp" alt="King Shiba Image" className="w-[80vh] mt-20" />
                </div>
            </div>

        </section>
    )
}

export default Hero