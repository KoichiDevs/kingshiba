import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MdCopyAll } from 'react-icons/md'

const Tokenomics = () => {

    const [contractAddress, setContract] = useState('0x000000000000000000000000000')
    const [clicked, setClicked] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress)
        setClicked(true)

        setTimeout(() => {
            setClicked(false)

        }, 1000);

    }

    return (
        <section className='w-full min-h-screen py-32 relative' id="tokenomics">

            {/* <img src="/aboutline.webp" alt="Lines" className="absolute right-0 bottom-0" /> */}

            <div className="max-w-[1500px] w-full mx-auto px-10 relative z-10">

                <div className="uppercase text-header lg:text-8xl md:text-7xl text-5xl flex items-center font-king md:gap-x-10 gap-x-3 mx-auto w-fit">
                    <div className="w-20 h-20 mt-10 relative  items-center justify-center sm:flex hidden">
                        <img src="/tokenheader.webp" alt="Coin" className="" />
                        <img src="/sparkling.gif" alt="Sparkle" className="absolute w-20 h-20 object-cover" />
                    </div>
                    <motion.p whileInView={{ rotate: [0, 15, 0], scale: [1, 1.1, 1.1, 1] }} transition={{ duration: 1, delay: 0.3 }} className='text-shadow-tshad'>TOKENOMICS</motion.p>
                    <div className="w-20 h-20 mt-10 relative  items-center justify-center sm:flex hidden">
                        <img src="/tokenheader.webp" alt="Coin" className="" />
                        <img src="/sparkling.gif" alt="Sparkle" className="absolute w-20 h-20 object-cover" />
                    </div>
                </div>

                <div className="w-full gap-10 flex h-auto justify-center mx-auto mt-20 lg:max-w-[60rem] lg:flex-row flex-col max-w-[30rem]">

                    <div className="hover:shadow-glow transition-all ease-in-out duration-300 rounded-lg drop-shadow-xl p-7 w-full mx-auto flex items-center bg-black">
                        <div className="text-white font-saira text-4xl text-center mx-auto">
                            <h2 className="font-king">For Tax</h2>
                            <div className="mt-5 text-3xl">
                                <h2 className="">5% Total tax</h2>
                            </div>
                        </div>
                    </div>

                    <div className="hover:shadow-glow transition-all ease-in-out duration-300 rounded-lg drop-shadow-xl p-7 w-full min-h-full mx-auto flex flex-col items-center gap-y-3 bg-black justify-center">
                        <div className="text-white font-saira text-md text-center max-w-[15rem] sm:max-w-full">
                            <h2 className="truncate">{contractAddress}</h2>
                        </div>

                        <button className='font-king text-myred bg-white flex items-center gap-x-3 px-10 py-4 rounded-xl hover:shadow-glow2 transition-all ease-in-out duration-300' onClick={handleCopy}>
                            <MdCopyAll className='text-xl'/>
                            <p className='mt-[-5px] text-'>{clicked ? "Copied to clipboard!" : "Copy address" }</p>
                        </button>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Tokenomics