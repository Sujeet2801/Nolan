import React from 'react'

function Secure() {
    return (
        <div className="flex items-center p-6">

            <div className="">
                <img src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fshield.webp&w=640&q=75" 
                 alt="Secure" className="w-[348px] h-auto" />
            </div>

            <div className="flex-1 ml-5 text-white relative mt-[35px] font-light">
                <h2 className="text-[40px] font-bold">Secure</h2>

                <p className='text-[24px] mb-4'>
                    Don’t worry, your data is secure and encrypted with NolanAI.
                </p>

                <p className="text-base font-light">
                    We take your privacy 
                    and the ownership of your work very seriously. We respect your creative content 
                    and have no rights over it. We do not use your work for training our models or 
                    for any other purposes without your explicit consent. Your scripts and content 
                    remain your intellectual property. So, when you create/upload or edit content 
                    using our software, you retain full ownership of the intellectual property.
                    We do not claim any rights to your scripts or any other content you produce.
                    Your creative work is yours and yours alone.
                </p>
            </div>
        </div>
    )
}

export default Secure