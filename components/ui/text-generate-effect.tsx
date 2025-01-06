"use client";
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
            { color: '#73d2b7', class: 'text-[#73d2b7]' },  // minty green
            { color: '#753db5', class: 'text-[#753db5]' },  // purple
            { color: '#9b59b6', class: 'text-[#9b59b6]' },  // light purple
            { color: '#8e44ad', class: 'text-[#8e44ad]' },  // purple shade 2
            { color: '#b357d0', class: 'text-[#b357d0]' },  // pink-purple
            { color: '#3498db', class: 'text-[#3498db]' },  // bright blue
            { color: '#2980b9', class: 'text-[#2980b9]' },  // blue shade 2
            { color: '#ef20a1', class: 'text-[#ef20a1]' },  // neon pink
            { color: '#ab47bc', class: 'text-[#ab47bc]' },  // medium purple
            { color: '#9c27b0', class: 'text-[#9c27b0]' },  // vibrant purple
            { color: '#ba68c8', class: 'text-[#ba68c8]' },  // soft purple
            { color: '#5c6bc0', class: 'text-[#5c6bc0]' },  // muted blue
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
                <div className="dark:text-white text-black tracking-wider">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
