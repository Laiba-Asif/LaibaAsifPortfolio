'use client';
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
// import GlobeDemo from './GridGlobe'

// Also install this npm i --save-dev @types/react-lottie
// import Lottie from "react-lottie";

import { cn } from "@/utils/cn";


// import { BackgroundGradientAnimation } from "./GradientBg";
// import GridGlobe from "./GridGlobe";
import animationData from "@/data/confettie.json";
import MagicButton from "./MagicButton";
import { BackgroundGradientAnimation } from "./GradientBg";
// import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    //   remove unecessary things here
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {

    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('laibasif36@gmail.com')
        setCopied(true)
    }

    return (
        <div
            className={cn(

                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            {/* add img divs */}
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className={"object-cover object-center w-full h-full "}
                        />
                    )}
                </div>

                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
                        } `}
                >

                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation >
                    </BackgroundGradientAnimation >
                )}


                <div
                    className={cn(
                        titleClassName,
                        `group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 `
                    )}
                >
                    {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                        {description}
                    </div>
                    <div
                        className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
                    >
                        {title}
                    </div>

                    {/* Tech stack list div */}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3 lg:gap-4">
                                {['NestJs', 'MERN', 'AI'].map((item) => (
                                    <span key={item} className="py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">{item}</span>

                                ))}
                                <span className="py-4 px-3 roundedd-lg text-center bg-[#10132e]" />
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-4">
                                <span className="py-4 px-3 roundedd-lg text-center bg-[#10132e]" />
                                {['React Native', 'NoSql', 'NextJs'].map((item) => (
                                    <span key={item} className="py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">{item}</span>

                                ))}

                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidyMid slice'
                                    }
                                }} />
                            </div>
                            <MagicButton title={copied ? 'Email Copied' : 'Copy My Email'}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="bg-[#161a31]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}


                </div>
            </div>
        </div>
    );
};
