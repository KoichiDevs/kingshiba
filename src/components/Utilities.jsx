import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Utilities = () => {

    const [currentIndex, setIndex] = useState(0)

    const utility = [
        {
            title: "LOREM IPSUM",
            image: "/icon.webp",
            label:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "LOREM IPSUM",
            image: "/icon.webp",
            label:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "LOREM IPSUM",
            image: "/icon.webp",
            label:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "LOREM IPSUM",
            image: "/icon.webp",
            label:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },

    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        beforeChange: (current, next) => setIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,

                }
            }
        ]
    };

    const options = {
        triggerOnce: true,
        threshold: 0.9
    }

    const [lineRef, lineView] = useInView(options)


    return (
        <section className='w-full h-auto py-32 bg-myred relative' id="utility">
            <img src="/heroline.webp" alt="Line" className="absolute bottom-0 left-0 z-0" />

            <div className="w-full max-w-[1600px] md:px-14 px-8 mx-auto">

                <div className="uppercase text-header font-king w-full lg:text-8xl md:text-7xl text-5xl flex items-center md:gap-x-10 gap-x-3 mx-auto">
                    <div className="w-0 h-[2px] bg-header mt-8 origin-right transition-all ease-in-out duration-[1.5s]" style={ lineView ? {width: "100%"} : {}} ref={lineRef}></div>
                    <motion.p whileInView={{rotate: [0, -20, 0], scale: [1, 1.2, 1.2, 1]}} transition={{duration: 1, delay: 0.3}} className='text-shadow-tshad text-center mx-auto'>UTILITIES</motion.p>
                    <div className="w-0 h-[2px] bg-header mt-8 origin-left transition-all ease-in-out duration-[1.5s]" style={ lineView ? {width: "100%"} : {}}></div>

                </div>

                <div className='lg:max-w-[90rem] 2xl:max-w-[95rem] max-w-[40rem] w-full h-auto mx-auto mt-20'>
                    <Slider {...settings} className="w-full">
                        {utility.map((items, index) => {
                            return (
                                <div className={`max-w-[40rem] 2xl:max-w-[50rem] mt-20 p-4 md:px-10 px-5 w-full mb-8 border-4 border-black bg-white h-auto py-10 transition-all relative ease-in-out duration-300 ${index === currentIndex ? "scale-100 opacity-100 shadow-glow2" : "scale-50 opacity-50"} `} key={index}>

                                    <img src={items.image} alt="Icon" className="absolute md:w-[11rem] w-[9rem] -top-20 -left-6 z-10" />
                                    <p className='mt-4 text-right font-king md:text-4xl text-2xl'>
                                        {index + 1}. LOREM IPSUM

                                    </p>
                                    <p className='text-center 2xl:text-lg sm:text-sm text-xs mt-3'>
                                        {items.label}
                                    </p>
                                </div>
                            )
                        })}

                    </Slider>

                </div>
            </div>
        </section>
    )
}

export default Utilities