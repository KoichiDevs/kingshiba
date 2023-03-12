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
            title: "NFTs",
            image: "icon",
            desc:
                <>
                    <p>The Shib Army NFTs represent the community of Shib King. What will you be? A knight, a wizard, or both? Shib Army NFTs were created by our artists with the goal of bringing Shib King's medieval fantasy theme to reality through the blockchain.</p>

                    <p className='mt-4'>Holders of Shib Army NFTs will automatically receive rewards from NFT mints and token transactions. Rewards are initially stored as BONE, which is used to buy KSHIB when rewards are claimed, and then send it to NFT holders. This creates buybacks on the Shib King token chart and potentially multiplies the value of NFT holders' rewards!</p>
                </>

        },
        {
            title: "STAKING",
            image: "staking",
            desc:
                <>
                    <p className="">Shib King staking allows people to stake their tokens, locking them for a set amount of time in order to gradually receive bonus tokens. </p>

                    <p className="mt-4">The amount of tokens you can stake is determined by the amount of NFTs you hold in your wallet. Having more NFTs allows holders to stake large amounts of supply!</p>

                    <p className="mt-4">Owning rare NFTs allows holders to partecipate to staking pools with higher APY.</p>
                </>
        },
        {
            title: "STAKING PARTNERS",
            image: "bone",
            desc:
                <>
                    <p className="">The Shib King staking partnership program allows developers of other projects on Shibarium to freely use our advanced dApps in order to freely launch their own staking pools.
                    </p>

                    <p className="mt-4">
                        Taking part to the staking partnership program also grants them a spotlight on their project, increasing their reach by being officially endorsed by the Shib King team.
                    </p>

                    <p className="mt-4">
                        In order to become staking partners, developers of projects will have to reserve a part of their token's supply, and offer it to Shib King stakers, which will automatically receive supply of various tokens on top of KSHIB rewards, expanding the kingdom of Shib King.
                    </p>
                </>
        },
        {
            title: "P2E GAME",
            image: "P2E",
            desc:
                <>
                    <p className="">
                        Holders of Shib Army NFTs will also be able to partecipate to the very first P2E game on Shibarium, developed by the experienced programmers of the Shib King team. Take part in the battle against Bears and help Shib King in his quest to free the kingdom of Shibarium!
                    </p>

                    <p className="mt-4">
                        Start a new game by choosing one of your NFTs and send it to explore dangerous dungeons in order to search for KSHIB token rewards. Face powerful foes in classic turn-based RPG battles, acquire experience points and increase the stats of your character to make it stronger.
                    </p>

                    <p className="mt-4">
                        Your starting stats are determined by the traits of your NFT. Rarer NFTs start off more powerful than others!
                    </p>
                </>
        },

    ]

    const options = {
        threshold: 0.8,
        triggerOnce: true
    }

    const [lineRef, lineView] = useInView(options)

    return (
        <section className='w-full h-auto py-32 relative' id="utility">
            {/* <img src="/heroline.webp" alt="Line" className="absolute bottom-0 left-0 z-0" /> */}

            <div className="w-full max-w-[1600px] md:px-14 px-8 mx-auto">

                <div className="uppercase text-header font-king w-full lg:text-8xl md:text-7xl text-5xl flex items-center md:gap-x-10 gap-x-3 mx-auto">
                    <div className="w-0 h-[2px] bg-header mt-8 origin-right transition-all ease-in-out duration-[1.5s]" style={lineView ? { width: "100%" } : {}} ref={lineRef}></div>
                    <motion.p whileInView={{ rotate: [0, -20, 0], scale: [1, 1.2, 1.2, 1] }} transition={{ duration: 1, delay: 0.3 }} className='text-shadow-tshad text-center mx-auto'>UTILITIES</motion.p>
                    <div className="w-0 h-[2px] bg-header mt-8 origin-left transition-all ease-in-out duration-[1.5s]" style={lineView ? { width: "100%" } : {}}></div>
                </div>

                <div className=" w-fit mx-auto mt-28 flex flex-col gap-y-24">

                    {utility.map((items, i) => {
                        return (
                            i % 2 === 0 ?
                                <Ecoleft title={items.title} desc={items.desc} img={items.image} link="" key={i}/>
                                :
                                <Ecoright title={items.title} desc={items.desc} img={items.image} link=""  key={i}/>
                        )
                    })}


                </div>

            </div>
        </section>
    )
}

export default Utilities
