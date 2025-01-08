// "use client";
// import React, { useState, useEffect } from "react";
// import { cn } from "@/utils/cn";

// export const TextGenerateEffect = ({
//     words,
//     className,
// }: {
//     words: string;
//     className?: string;
// }) => {
//     const wordsArray = words.split(" ");

//     // Function to return a random color
//     const randomColor = () => {
//         const colors = [
//             "#73d2b7", // minty green
//             "#753db5", // purple
//             "#9b59b6", // light purple
//             "#8e44ad", // purple shade 2
//             "#b357d0", // pink-purple
//             "#3498db", // bright blue
//             "#2980b9", // blue shade 2
//             "#ef20a1", // neon pink
//             "#ab47bc", // medium purple
//             "#9c27b0", // vibrant purple
//             "#ba68c8", // soft purple
//             "#5c6bc0", // muted blue
//         ];

//         return colors[Math.floor(Math.random() * colors.length)];
//     };

//     // State to manage colors of each letter
//     const [letterColors, setLetterColors] = useState<string[][]>(
//         wordsArray.map((word) => word.split("").map(() => randomColor()))
//     );

//     // Function to update colors periodically
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setLetterColors(
//                 wordsArray.map((word) =>
//                     word.split("").map(() => randomColor())
//                 )
//             );
//         }, 1000); // Change colors every 1 second

//         return () => clearInterval(interval); // Cleanup interval on component unmount
//     }, [wordsArray]);

//     // Function to render each word with different colored letters
//     const renderWords = () => {
//         return (
//             <div>
//                 {wordsArray.map((word, wordIdx) => (
//                     <span key={`word-${wordIdx}`}>
//                         {word.split("").map((letter, letterIdx) => (
//                             <span
//                                 key={`letter-${wordIdx}-${letterIdx}`}
//                                 style={{
//                                     color: letterColors[wordIdx]?.[letterIdx] || "inherit",
//                                 }}
//                                 className="text-[40px] md:text-[60px] lg:text-[70px] scale-letter"
//                             >
//                                 {letter}
//                             </span>
//                         ))}
//                         {" "}
//                     </span>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <div className={cn("font-bold", className)}>
//             <div className="my-4">
//                 <div className="dark:text-white text-black tracking-wider">
//                     {renderWords()}
//                 </div>
//             </div>
//         </div>
//     );
// };


"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const wordsArray = words.split(" ");

    // Function to return a random color
    const randomColor = () => {
        const colors = [
            "#73d2b7", // minty green
            "#753db5", // purple
            "#9b59b6", // light purple
            "#8e44ad", // purple shade 2
            "#b357d0", // pink-purple
            "#3498db", // bright blue
            "#2980b9", // blue shade 2
            "#ef20a1", // neon pink
            "#ab47bc", // medium purple
            "#9c27b0", // vibrant purple
            "#ba68c8", // soft purple
            "#5c6bc0", // muted blue
        ];

        return colors[Math.floor(Math.random() * colors.length)];
    };

    // State to manage colors of each letter
    const [letterColors, setLetterColors] = useState<string[][]>(
        wordsArray.map((word) => word.split("").map(() => randomColor()))
    );

    // Function to update colors periodically
    useEffect(() => {
        const interval = setInterval(() => {
            setLetterColors(
                wordsArray.map((word) =>
                    word.split("").map(() => randomColor())
                )
            );
        }, 1000); // Change colors every 1 second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [wordsArray]);

    // Function to render each word with combined effects
    const renderWords = () => {
        return (
            <div>
                {wordsArray.map((word, wordIdx) => (
                    <span
                        key={`word-${wordIdx}`}
                        className="animate-fadeIn"
                        style={{
                            animationDelay: `${wordIdx * 0.1}s`, // Stagger the fade-in animation
                        }}
                    >
                        {word.split("").map((letter, letterIdx) => (
                            <span
                                key={`letter-${wordIdx}-${letterIdx}`}
                                style={{
                                    color: letterColors[wordIdx]?.[letterIdx] || "inherit",
                                }}
                                className={cn(
                                    "text-[40px] md:text-[60px] lg:text-[70px] scale-letter",
                                    "animate-scaleEffect", // Add scaling effect
                                    "transition-transform duration-300" // Smooth scaling
                                )}
                            >
                                {letter}
                            </span>
                        ))}
                        {" "}
                    </span>
                ))}
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
