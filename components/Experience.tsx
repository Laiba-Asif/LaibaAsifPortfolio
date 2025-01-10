"use client"
import React from 'react';
import { workExperience } from '@/data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';

const Experience = () => {
    return (
        <div className="py-10 w-full" id="experience">
            <h1 className="heading">
                Work <span className="text-purple">Experience</span>
            </h1>
            <div className="mt-20 flex flex-col items-center justify-center">
                <VerticalTimeline>
                    {workExperience.map((experience, index) => (
                        <VerticalTimelineElement key={index}
                            contentStyle={{ background: "#1d1836", color: "#fff" }}
                            contentArrowStyle={{ borderRight: "7px solid #232631" }}
                            date={experience.date}
                            iconStyle={{ background: experience.iconBg }}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <Image src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' width={24} height={24} />
                                </div>
                            }
                        >
                            <div >
                                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                                <p className='text-purple text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
                            </div>
                            <ul
                                className='mt-5 list-disc ml-5 space-y-2'
                            >
                                {experience.points.map((point, index) => (
                                    <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience