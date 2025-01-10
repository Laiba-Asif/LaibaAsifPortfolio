"use client";
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const mouseMove = (e: { clientX: any; clientY: any }) => {
            setPosition({ x: e.clientX, y: e.clientY })


        }

        window.addEventListener('mousemove', mouseMove);

        return () => { window.removeEventListener('mousemove', mouseMove) }
    }, [])
    console.log(position)
    return (
        <motion.div className='w-[40px] h-[40px] rounded-full border-[1px] border-white fixed z-[9999] bg-black-200/40' animate={{ x: position.x, y: position.y }}></motion.div>
    )
}

export default cursor