import React, { useState, useEffect, useRef } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import Utilities from './components/Utilities'

import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.birds.min'
import DOTS from 'vanta/dist/vanta.dots.min'



const App = () => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(DOTS({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x161616,
                color1: 0xff3b00,
                color2: 0x823838

            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className='bg-black'>
            <div className="w-full h-screen fixed z-0" ref={myRef}>

            </div>
            <div className='relative z-10' >
                <div className='absolute top-0 left-0 h-2 w-2 bg-transparent' id="home"></div>
                <Hero />
                <About />
                <Utilities />
                <Tokenomics />
                <Roadmap />
                <Footer />
            </div>
        </div>

    )
}

export default App
