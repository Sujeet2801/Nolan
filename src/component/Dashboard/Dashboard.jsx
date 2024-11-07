import React, { useState } from 'react';
import { ArrowRightIcon, HandThumbUpIcon, HomeIcon, PlusCircleIcon, ShareIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { FolderIcon } from '@heroicons/react/24/outline';
import Dashboard_Header from './Dashboard_Header';
import Image_Generator from './Image_Generator';
import Untitled_Project from './Untitled_Project';


const Dashboard = () => {
  
  return (
    <div className="relative w-[1255px] bg-slate-200">

      <Dashboard_Header/>

      {/* Second Row */}
      <div className="flex space-x-2 mb-4">
        <button className="flex text-black px-4 py-2  rounded hover:bg-gray-300">
          <FolderIcon className="w-6" />
          <p className="w-24">My Project</p>
        </button>
        <button className="flex text-black px-4 py-2 rounded hover:bg-gray-300">
          <ShareIcon className="mr-2 w-6" />
          Shared With Me
        </button>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-2 bg-slate-400 ">

        <div className="flex items-center shadow">
          <div className=' relative left-5 flex p-5 bg-slate-200 w-[560px] rounded-lg'>
            <HandThumbUpIcon className="flex w-10 h-10 text-blue-500 
            mt-5 mr-4 justify-center" />
            <div>
              <p className="text-lg font-bold">Leave Feedback</p>
              <p className="text-sm text-gray-600">Help us make NolanAI even better!</p>
              <button className="flex mt-2 bg-blue-500 text-white px-3 
              py-1 rounded hover:bg-blue-600">
                Take Survey
                <ArrowRightIcon className="w-5 h-7 ml-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center p-4 shadow">
          <div className="flex bg-slate-200 p-5 w-[550px] rounded-lg">
            <PlusCircleIcon className="w-16 h-16 text-blue-500 mr-4" />
            <div>
              <p className="text-lg font-bold">Join us on Discord!</p>
              <p className="text-sm text-gray-600">
                Check out our Discord page to be a part of the NolanAI community
              </p>
              <button className="flex mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                Join group
                <ArrowRightIcon className="w-5 h-7 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
