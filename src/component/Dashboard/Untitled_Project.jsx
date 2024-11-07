import React, { useState } from 'react'
import { FilmIcon } from '@heroicons/react/24/outline'
import { CalendarIcon, ClockIcon, MagnifyingGlassIcon, PencilIcon, PhotoIcon, TrashIcon } from '@heroicons/react/24/solid'

function Untitled_Project() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editButton, setEditButton] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const toggleEditButton = () => {
        setEditButton(!editButton)
    }

    return (
        <div >
            <div className='flex relative ml-[390px] h-52'>
                <div className='pl-1 w-[500px]'>
                    <p className='text-4xl font-semibold mb-2 '>Untitled Project</p>
                    <p className='text-[10px] opacity-40 mb-2 ml-1'>
                        Last Edited 1 day ago
                    </p>
                    <p className='mb-2 ml-1 font-normal text-[13px]'>Synopsis:</p>

                    <div className='flex ml-1'>
                        <FilmIcon className='w-5 opacity-45' />
                        <p className='ml-3 text-[12px] font-normal opacity-50'>
                            Feature Film
                        </p>
                    </div>
                </div>
                <div>
                    <button onClick={toggleEditButton}>
                        <PencilIcon className='absolute right-8 w-5 opacity-30' />
                    </button>

                    {editButton && (
                        <div className="flex flex-col absolute right-5 top-12 bg-white 
                        text-black bg-opacity-50 rounded-lg z-50">

                            <button className='flex gap-2 px-2 border-2 hover:bg-slate-300
                            rounded-md'>
                                <PencilIcon className='flex relative items-center 
                                justify-center w-4 opacity-30 py-2'/>
                                <p className='py-1'>Edit</p>
                            </button>

                            <button className='flex px-2 border-2 text-red-800 font-medium
                             hover:bg-red-300 rounded-md'>
                                <TrashIcon className='flex relative items-center 
                                justify-center w-4 opacity-30 py-2 text-red-800 
                                '/>
                                <p className='py-1 ml-1'>Delete Project</p>
                            </button>

                            
                        </div>
                    )}
                </div>
            </div>

            <div className='flex flex-col justify-center items-center
            relative bg-slate-300 '>
                <div className='flex border-4 border-black w-24 h-24 
                rounded-full justify-center opacity-25 mt-12'>
                </div>

                <FilmIcon className=' absolute top-[72px] transform rotate-90
                text-blue-500 w-12'/>

                <p className='mt-8 text-2xl font-bold tracking-wide 
                opacity-80'>
                    UNTITLED PROJECT
                </p>
                <p className='my-4 text-base font-medium opacity-70 tracking-wide'>
                    What’s your first move? Select a feature
                    to kick off your project.
                </p>
            </div>

            <div className='flex flex-col justify-center items-center
            gap-5 text-white bg-slate-300'>

                <div className="flex gap-5 mt-5 font-bold">
                    <button className='flex bg-blue-600 px-12  py-2 rounded-full
                items-center' onClick={togglePopup}>
                        <PencilIcon className='w-5' />
                        <button className='flex  ml-1'> Screenplay</button>
                    </button>
                    <button className='flex bg-blue-600 px-12  py-2 rounded-full
                items-center' onClick={togglePopup}>
                        <CalendarIcon className='w-5' />
                        <button className='flex  ml-1'> Breakdown</button>
                    </button>
                    <button className='flex bg-blue-600 px-12 py-2 rounded-full
                items-center'>
                        <ClockIcon className='w-5' />
                        <button className='flex  ml-1'> Scheduling</button>
                    </button>

                    {isPopupOpen && (
                        <div className="flex bg-black bg-opacity-50 z-50">
                            <div className=" w-96 right-56 absolute flex flex-col 
                            bg-white p-6 rounded shadow-lg">
                                <h2 className="text-base font-semibold mb-4">
                                    Cover Description
                                </h2>

                                <input type='text'
                                    placeholder='Describe how you want the cover photo'
                                    className="text-sm placeholder-opacity-75 mb-4 
                                    border-2 h-16 w-80 text-black font-light">
                                </input>

                                <div className='flex justify-end'>
                                    <button
                                        className="bg-white text-black border-2 
                    font-normal px-4 py-1 rounded"
                                        onClick={togglePopup}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        className="bg-blue-500 text-white px-4 py-1 rounded
                    hover:bg-blue-600 ml-5"
                                        onClick={() => { imageGenerator() }}
                                    >
                                        Generate
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex gap-5 mt-5 font-bold">
                    <button className='flex bg-blue-600 px-5 py-2 rounded-full
                items-center'>
                        <PhotoIcon className='w-5' />
                        <button className='flex  ml-1'> Storyboard</button>
                    </button>
                    <button className='flex bg-blue-600 px-5 py-2 rounded-full
                items-center'>
                        <FilmIcon className='w-5' />
                        <button className='flex  ml-1'> Deck</button>
                    </button>
                    <button className='flex bg-blue-600 px-5 py-2 rounded-full
                items-center'>
                        <MagnifyingGlassIcon className='w-5' />
                        <button className='flex  ml-1'> Plot Hole</button>
                    </button>
                </div>

                <div className="flex gap-5 mt-5 mb-32 font-bold">
                    <button className='flex bg-blue-600 px-5 py-2 rounded-full
                items-center'>
                        <CalendarIcon className='w-5' />
                        <button className='flex ml-1'>
                            Script Coverage
                        </button>
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Untitled_Project