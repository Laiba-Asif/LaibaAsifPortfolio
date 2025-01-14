'use client'
import React from 'react'
import { myProjects } from '@/data'
import { fadeIn } from '@/data/motion'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

const RecentProjects = () => {
    return (
        <div className='md:py-20 md:container' id='projects'>
            <h1 className="heading">
                A small selection of {''}
                <span className='text-purple'>Recent Projects</span>
            </h1>
            <div className=" py-4 mt-10 w-full  mx-auto">
                {
                    myProjects.map((projects) => (
                        <div key={projects.id} className='flex flex-col gap-4 mb-4'>

                            <div className="flex items-center  gap-4">
                                <span className="h-[2px] w-[50px] bg-purple  opacity-[70%]"></span>
                                <p className='uppercase text-base tracking-most text-white'>{projects.category}</p>


                            </div>
                            {/* projects */}

                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 ">
                                {projects.projects.map((project, idx) => (
                                    <motion.div
                                        variants={fadeIn("up", "spring", idx * 0.5, 0.75)}
                                        key={idx}
                                        className="flex"
                                    >
                                        <Tilt
                                            options={{ max: 45, scale: 1, speed: 450 }}
                                            className="bg-tertiary p-5 rounded-2xl w-full z-10 flex flex-col"
                                        >
                                            <div className="relative w-full h-[230px]">
                                                <img
                                                    src={project.img}
                                                    alt={project.name}
                                                    className="w-full h-full object-cover rounded-2xl"
                                                />
                                                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                                                    <div
                                                        onClick={() => window.open(project.github, "_black")}
                                                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                                                    >
                                                        <img
                                                            src="/github.png"
                                                            alt="github"
                                                            className="w-1/2 h-1/2 object-contain"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-5 flex-1">
                                                <h3 className="text-white font-bold text-[24px]">{project.name}</h3>

                                                <div className="relative group">
                                                    <p className="mt-2 text-white-200 text-[14px]">

                                                        <span className="hidden lg:inline">
                                                            {project.des.length > 120 ? project.des.slice(0, 120) + "..." : project.des}
                                                        </span>
                                                        <span className="inline lg:hidden">{project.des}</span>
                                                    </p>
                                                    {project.des.length > 120 && (
                                                        <div
                                                            className="absolute left-1/2 top-6 z-[9999] w-full p-4 pt-6 text-sm text-white bg-gradient-to-r from-indigo-500/30 via-purple-600 to-indigo-700/20 backdrop-blur-md rounded-lg shadow-xl transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out text-center hidden lg:block"
                                                            style={{
                                                                clipPath: "polygon(50% -10px, 55% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 45% 0%, 50% -10px)",
                                                            }}
                                                        >
                                                            {project.des}
                                                        </div>

                                                    )}


                                                </div>





                                            </div>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {project.tags.map((tag, index) => {
                                                    // Check if tag is defined
                                                    if (!tag) return null;

                                                    return (
                                                        <p
                                                            key={`${tag.name}-${index}`}
                                                            onClick={() => window.open(tag.link || "#", "_blank")}
                                                            className={`text-14px cursor-pointer ${tag.color || "default-color"}`}
                                                        >
                                                            #{tag.name}
                                                        </p>
                                                    );
                                                })}
                                            </div>


                                        </Tilt>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    ))
                }
            </div >



        </div >
    )
}

export default RecentProjects