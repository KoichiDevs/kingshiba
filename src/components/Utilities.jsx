import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Ecoleft, Ecoright } from '../templates/Eco';

const Utilities = () => {

    const utility = [
        {
            title: "LOREM IPSUM",
            image: "/icon.webp",
            desc:
                <>
                    <p>The Shib Army NFTs represent the community of King Shiba. What will you be? A knight, a wizard, or both? Shib Army NFTs were created by our artists with the goal of bringing King Shiba's medieval fantasy theme to reality through the blockchain.</p>

                    <p className='mt-4'>Holders of Shib Army NFTs will automatically receive rewards from NFT mints and token transactions. Rewards are initially stored as BONE, which is used to buy KSHIB when rewards are claimed, and then send it to NFT holders. This creates buybacks on the King Shiba token chart and potentially multiplies the value of NFT holders' rewards!</p>
                </>

        },
        {
            title: "LOREM IPSUM",
            image: "/icon.webp",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "LOREM IPSUM",
            image: "/icon.webp",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "LOREM IPSUM",
            image: "/icon.webp",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },

    ]

    const options = {
        threshold: 0.8,
        triggerOnce: true
    }

    const [lineRef, lineView] = useInView(options)

    return (
        <section className='w-full h-auto py-32 bg-myred relative' id="utility">
            <img src="/heroline.webp" alt="Line" className="absolute bottom-0 left-0 z-0" />

            <div className="w-full max-w-[1600px] md:px-14 px-8 mx-auto">

                <div className="uppercase text-header font-king w-full lg:text-8xl md:text-7xl text-5xl flex items-center md:gap-x-10 gap-x-3 mx-auto">
                    <div className="w-0 h-[2px] bg-header mt-8 origin-right transition-all ease-in-out duration-[1.5s]" style={lineView ? { width: "100%" } : {}} ref={lineRef}></div>
                    <motion.p whileInView={{ rotate: [0, -20, 0], scale: [1, 1.2, 1.2, 1] }} transition={{ duration: 1, delay: 0.3 }} className='text-shadow-tshad text-center mx-auto'>UTILITIES</motion.p>
                    <div className="w-0 h-[2px] bg-header mt-8 origin-left transition-all ease-in-out duration-[1.5s]" style={lineView ? { width: "100%" } : {}}></div>
                </div>

                <div className=" w-fit mx-auto mt-28">
                    <Ecoleft title="1. NFTs" desc={utility[0].desc} img="icon" link=""/>
                    {/* <Ecoright title="2. Lorem Ipsum" desc={utility[1].desc} img="icon" />
                    <Ecoleft title="3. Lorem Ipsum" desc={utility[2].desc} img="icon" />
                    <Ecoright title="4. Lorem Ipsum" desc={utility[3].desc} img="icon" /> */}


                </div>

            </div>
        </section>
    )
}

export default Utilities