import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import ParticlesContainer from './ParticlesContainer'

const Hero = () => {
    return (
        <div className="sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 lg:pt-36 lg:pb-20 overflow-hidden" id='home'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]  ' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw] ' fill='blue' />

            </div>

            {/* Static Grid Background */}
            <div className="h-screen w-full  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 overflow-hidden ">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                <div className="absolute top-0 h-full">

                    <ParticlesContainer />
                </div>
            </div>

            <div className="flex justify-center relative ">
                <div className="max-w-[89vw] my-20 z-50 md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100'>Dynamic Web Magic with 2.0 and AI </h2>

                    <TextGenerateEffect className='text-center text-5xl lg:text-8xl font-anton' words='LAIBA ASIF' />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'> A MERN Stack developer based in Pakistan .</p>
                    <a href="#projects">
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Hero
