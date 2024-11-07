import React from 'react';
import { BoltIcon, PlayIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';


const Productivity_Section = () => {
    return (
        <div className="p-8 text-white">
            <h1 className="text-[40px] font-bold text-center mb-8">Skyrocket your productivity</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="flex flex-col justify-center items-center p-4 rounded">

                    <div className="flex justify-center items-center mb-5">

                        <PlayIcon className="w-10 absolute text-yellow-500 bg-zinc-700 rounded-full"/>

                        <svg width="90" height="90" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="SkyRocketProductivity_frame__Hm8aP">
                        <path d="M45 .5C20.423.5.5 20.423.5 45S20.423 89.5 45 89.5 89.5 69.577 89.5 45 
                        69.577.5 45 .5z" 
                        stroke="#fff" stroke-opacity="0.08">
                        </path><path d="M45 11c-18.778 0-34 15.222-34 34s15.222 34 34 34 34-15.222 
                        34-34-15.222-34-34-34z" stroke="#fff" stroke-opacity="0.08" stroke-width="4">
                        </path>
                        </svg>
                    </div>
                    <p className="text-5xl font-bold mb-6">90% faster</p>
                    <p className="text-2xl text-center opacity-70">Speed Through Project Completion</p>
                </div>

                <div className="flex flex-col justify-center items-center p-4 rounded">

                    <div className="flex justify-center items-center mb-5">

                        <BoltIcon className="w-10 absolute text-yellow-500 bg-zinc-700 rounded-full"/>

                        <svg width="90" height="90" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="SkyRocketProductivity_frame__Hm8aP">
                        <path d="M45 .5C20.423.5.5 20.423.5 45S20.423 89.5 45 89.5 89.5 69.577 89.5 45 
                        69.577.5 45 .5z" 
                        stroke="#fff" stroke-opacity="0.08">
                        </path><path d="M45 11c-18.778 0-34 15.222-34 34s15.222 34 34 34 34-15.222 
                        34-34-15.222-34-34-34z" stroke="#fff" stroke-opacity="0.08" stroke-width="4">
                        </path>
                        </svg>
                    </div>
                    <p className="text-5xl font-bold mb-6">90% faster</p>
                    <p className="text-2xl text-center opacity-70">Speed Through Project Completion</p>
                </div>

                <div className="flex flex-col justify-center items-center p-4 rounded">

                    <div className="flex justify-center items-center mb-5">

                        <RocketLaunchIcon className="w-10 absolute text-yellow-500 bg-zinc-700 rounded-full"/>

                        <svg width="90" height="90" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="SkyRocketProductivity_frame__Hm8aP">
                        <path d="M45 .5C20.423.5.5 20.423.5 45S20.423 89.5 45 89.5 89.5 69.577 89.5 45 
                        69.577.5 45 .5z" 
                        stroke="#fff" stroke-opacity="0.08">
                        </path><path d="M45 11c-18.778 0-34 15.222-34 34s15.222 34 34 34 34-15.222 
                        34-34-15.222-34-34-34z" stroke="#fff" stroke-opacity="0.08" stroke-width="4">
                        </path>
                        </svg>
                    </div>
                    <p className="text-5xl font-bold mb-6">90% faster</p>
                    <p className="text-2xl text-center opacity-70">Speed Through Project Completion</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default Productivity_Section;
