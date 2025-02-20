'use client';
import { certification } from '@/data';
import React from 'react'
import { Button } from './ui/MovingBorders'
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const Certification = () => {
    return (
        <div className="py-10 w-full md:container">
            <h1 className="heading">
                My <span className="text-purple">Certification</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {certification.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",

                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex flex-col sm:flex-row  sm:items-center p-5 lg:p-10 gap-2">
                            <img
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className=" md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                                {/* Add a unique id to the element for anchoring the tooltip */}
                                <h1
                                    id="verify-tooltip" // Assign a unique id
                                    onClick={() => window.open(card.link, "_blank")}
                                    className="text-start text-xl md:text-2xl font-bold cursor-pointer"
                                >
                                    {card.title}
                                </h1>

                                {/* Tooltip component referencing the same id */}
                                <Tooltip
                                    anchorId="verify-tooltip"
                                    content="Verify"
                                    place="bottom"
                                    style={{ backgroundColor: "black", color: "white", fontSize: "12px" }}
                                />

                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.desc}
                                </p>
                            </div>

                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Certification