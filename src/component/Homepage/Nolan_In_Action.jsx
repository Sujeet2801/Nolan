import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Nolan_In_Action = () => {
    return (
        <div className="flex items-center p-6">
            <div className="flex-1 p-4 text-white">

                <h2 className="font-bold mb-2 text-[70px]">NolanAI in
                    <span className='absolute mt-24 left-10'>Actions</span>
                </h2>

                <p className="text-2xl font-light mt-28 opacity-45 mb-4">Meet Bryce</p>

                <p className="text-base mb-4 w-[400px] leading-6">
                    An independent filmmaker who is utilizing the full power of NolanAI to break
                    down scripts, create pitch decks and storyboards, and reach his ultimate goal.
                </p>

                <p className="text-base w-[500px] leading-6">
                    With its AI-powered features and user-friendly interface, it can help you
                    bring your stories to life in the most efficient and effective way possible,
                    while respecting your unique creative voice.
                </p>

                <button className="flex items-center bg-blue-500 text-white px-6 py-4 rounded-3xl
                 hover:bg-blue-600 mt-10">
                    <span className='bg-blue-500 font-bold'>View premium plans</span>

                    <ArrowRightIcon className="w-5 h-5 ml-2 bg-blue-500 font-bold text-xl" />
                </button>
            </div>

            <div className="flex-1 p-4 bg-black">
                <video
                    width="100%"
                    height="100%"
                    controls
                    poster="/images/poster.webp"
                    preload="none"
                    playsInline
                    style={{ borderRadius: '20px' }}
                >
                    <source src="https://nolan-space.sfo3.cdn.digitaloceanspaces.com/assets/meet_bryce.mp4"
                        type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Nolan_In_Action;
