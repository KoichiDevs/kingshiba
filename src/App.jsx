import React, { useState, useEffect, useRef } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import Utilities from './components/Utilities'

import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.birds.min'


const App = () => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color2: 0xfffe00,
                birdSize: 0.70,
                separation: 61.00,
                alignment: 16.00,
                cohesion: 3.00,
                quantity: 4.00,
                backgroundAlpha: 0.00

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
