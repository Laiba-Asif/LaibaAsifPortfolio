"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e: { clientX: any; clientY: any }) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);


    return (
        <motion.div
            className=" fixed z-[9999] "
            animate={{ x: position.x, y: position.y }}
        >
            <Image src='/cursor/cursor.png' alt="Lock Top" width={60} height={60} className='animate-spin   ' style={{ animationDuration: '3s' }} />
        </motion.div>
    );
};

export default Cursor;
