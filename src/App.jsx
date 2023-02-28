import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import Utilities from './components/Utilities'


const App = () => {
    
    return (
        <div className='relative bg-myred' >  
            <div className='absolute top-0 left-0 h-2 w-2 bg-transparent' id="home"></div>
            <Hero />
            <About />
            <Utilities />
            <Tokenomics />
            <Roadmap />
            <Footer/>
        </div>
    )
}

export default App