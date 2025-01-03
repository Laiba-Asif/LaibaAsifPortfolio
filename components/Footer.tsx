'use client';
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data/index'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full py-10 mb-[100px] md:mb-5 container' id='contact'>
            <div className='w-full absolute left-0 md:-bottom-72 min-h-90'>
                <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
            </div>
            <div className="flex flex-col items-center " >
                <h1 className='heading lg:max-w-[45vw]'>Empower <span className="text-purple">Your</span> Team with a Skilled <span className="text-purple">Software Developer</span></h1>
                <p className='text-white-200 md:mt-10 my-5 text-center md:text-md'>Let&apos;s connect and explore how my expertise in React, Next.js, and innovative web solutions can drive success for your projects. With a knack for quick learning and seamless adaptability, I am ready to contribute to your team&apos;s goals and create impactful digital experiences</p>
                <a
                    href="https://mail.google.com/mail/?view=cm&to=laibae.awan@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className='flex mt-16 gap-3 md:flex-row flex-col justify-between items-center '>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright &copy; 2024 Laiba</p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border border-black-300 rounded-lg'>
                            <Link href={profile.link} target="_blank"><img src={profile.img} alt='img' width={20} height={20} /></Link>

                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer