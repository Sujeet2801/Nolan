import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Ethical_Ai() {
  return (
    <div className='text-white text-center'>

        <h4 className='text-4xl font-extralight'>

            Leading the charge in 

            <span className='font-bold ml-2'> 
            Ethical AI 
            </span>
        </h4>

        <div className="flex justify-center items-center my-6">

            <p className="text-2xl w-[1100px] text-center">
                At NolanAI, we prioritize the ethical implications of AI in the 
                creative industry. We believe in AI-powered tools that enhance human-driven 
                storytelling.
            </p>
        </div>


        <div className="flex justify-center items-center">
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600">
          <span className='bg-blue-500 font-bold'>Learn More</span>

          <ArrowRightIcon className="w-5 h-5 ml-2 bg-blue-500 font-bold text-xl" />
          </button>
        </div>
      </div>
    )
  }

export default Ethical_Ai