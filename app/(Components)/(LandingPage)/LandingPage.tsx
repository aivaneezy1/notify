import React from 'react'
import NavbarComponent from './Navbar'
import HeaderComponent from './Header'
import HeroCompoment from './Hero'
import { Footer } from './Footer'
const LandingPageComponent = () => {
    return (
        <div className='flex flex-col h-full'>
            <NavbarComponent />
            <div className='flex flex-col justify-center items-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 mt-20 '>
                <HeaderComponent />
                <HeroCompoment />

            </div>
            <Footer />
        </div>
    )
}

export default LandingPageComponent
