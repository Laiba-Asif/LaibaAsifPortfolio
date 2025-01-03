"use client";
import { useEffect } from "react";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    let wordsArray = words.split(" ");

    // Function to return a random color
    const randomColor = () => {
        const colors = [
            { color: '#73d2b7', class: 'text-[#73d2b7]' },
            { color: '#753db5', class: 'text-[#753db5]' },
            "text-green-500",
            { color: '#4acce7', class: 'text-[#4acce7]' },
            { color: '#ea89b7', class: 'text-[#ea89b7]' },
            "text-indigo-300",
            "text-purple",
            { color: '#ef20a1', class: 'text-[#ef20a1]' },
        ];

        const randomIndex = Math.floor(Math.random() * colors.length);
        const color = colors[randomIndex];

        // Check if it's an object with a 'class' property or just a Tailwind class
        return typeof color === 'object' ? color.class : color;
    };

    // Function to render each word with different colored letters
    const renderWords = () => {
        return (
            <div>
                {wordsArray.map((word, idx) => {
                    return (
                        <span key={word + idx}>
                            {word.split("").map((letter, letterIdx) => (
                                <span
                                    key={letter + letterIdx}
                                    className={`${randomColor()
                                        } text-[40px] md:text-[60px] lg:text-[70px] scale-letter`}
                                >
                                    {letter}
                                </span>
                            ))}
                            {" "}
                        </span>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="my-4">
                <div className="dark:text-white text-black leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
