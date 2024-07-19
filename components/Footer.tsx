import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data/index'

const Footer = () => {
    return (
        <footer className='w-full pb-10 mb-[100px] md:mb-5 ' id='contact'>
            <div className='w-full absolute left-0 md:-bottom-72 min-h-96'>
                <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
            </div>
            <div className="flex flex-col items-center " >
                <h1 className='heading lg:max-w-[45vw]'>Ready to take <span className="text-purple">Your</span> digital presence to next level?</h1>
                <p className='text-white-200 md:mt-10 my-5 text-center md:text-md'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
                <a href="mailto:laibasif36@gmail.com">
                    <MagicButton title='Let&apos;s get in touch' icon={<FaLocationArrow />} position="right" />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center '>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright &copy; 2024 Laiba</p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border border-black-300 rounded-lg'>
                            <img src={profile.img} alt='img' width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer