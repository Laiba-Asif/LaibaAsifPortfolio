"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';


const EncryptionLoader = () => {
    const slideInFromTop = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.5,
            },
        },
    };
    return (
        <div className="flex flex-row relative items-center justify-center w-full h-full">
            <div className="absolute w-auto h-auto top-0 z-[5]">
                <motion.div
                    variants={slideInFromTop}
                    className="text-[40px] font-medium text-center text-gray-200"
                >
                    Performance <span className="text-gradient">&</span> Security
                </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto ">
                <div className="flex flex-col items-center group cursor pointer w-auto h-auto">
                    <Image src='/loader/LockTop.png' alt="Lock Top" width={50} height={50} className='translate-y-5 transition-all duration-200 group-hover:translate-y-11 mb-10' />

                    <Image src='/loader/LockMain.png' alt="Lock Top" width={70} height={70} className='z-10' />
                </div>
            </div>

            <div className='w-full flex items-start justify-center absolute'>
                <video loop muted autoPlay playsInline preload='false' className="w-full h-auto" src='/loader/encryption.webm' />
            </div>
        </div>
    )
}

export default EncryptionLoader