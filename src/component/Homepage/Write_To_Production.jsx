import React from 'react';

const Write_To_Production = () => {
    return (
        <div className="space-y-8 text-white mt-12">
            <div className="flex justify-center items-center">
                <h1 className="text-center text-[40px] font-extralight w-[760px]">
                    From <span className='font-bold'>screen writing</span> to <span className="font-bold">
                    pre-production,</span> we got you covered!
                </h1>
            </div>

            {/* First Div */}
            <div className="flex items-center p-6">
            
                <div className='w-2 ml-40'>
                <svg width="486" height="632" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#writerFrame_svg__filter0_f_3945_84654)"><rect width="413" height="300" rx="24" transform="matrix(.86603 -.5 0 1 64 261.5)" fill="#1D6EE3" fill-opacity="0.4"></rect></g><rect x="0.433" y="0.25" width="412" height="299" rx="23.5" transform="matrix(.86603 -.5 0 1 64.058 261.717)" stroke="#fff" stroke-opacity="0.08"></rect><rect x="0.433" y="0.25" width="412" height="299" rx="23.5" transform="matrix(.86603 -.5 0 1 52.058 249.717)" stroke="#fff" stroke-opacity="0.08"></rect><path d="M76 297.5c0-13.255 9.306-29.373 20.785-36L412.884 79c11.479-6.627 20.784-1.255 20.784 12v252c0 13.255-9.305 29.373-20.784 36l-316.1 182.5C85.307 568.127 76 562.755 76 549.5v-252z" fill="url(#writerFrame_svg__pattern0_3945_84654)"></path><defs><filter id="writerFrame_svg__filter0_f_3945_84654" x="0" y="0.161" width="485.668" height="616.177" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_3945_84654"></feGaussianBlur></filter></defs></svg>
                </div>

                <div className=" flex-1 left-12 translate-x-20">
                    <div className="skew-x-12">
                        <img 
                        src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fuser-personas%2Fwriter.webp&w=640&q=75" 
                        alt="Tilted Image" className="w-80 " />
                    </div>
                </div>

                <div className="flex-1 p-4">
                    <p className="text-base mb-2">Paragraph 1 for first div.</p>
                    <p className="text-base mb-4">Paragraph 2 for first div.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Button 1
                    </button>
                </div>
            </div>

            {/* Second Div */}
            <div className="flex items-center p-6">
                <div className="flex-1 p-4">
                    <p className="text-base mb-2">Paragraph 1 for second div.</p>
                    <p className="text-base mb-4">Paragraph 2 for second div.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Button 2
                    </button>
                </div>
                <div className="flex-1">
                    <img src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fuser-personas%2Fproducer.webp&w=640&q=75"
                        alt="Image 2" className="w-full h-auto" />
                </div>
            </div>

            {/* Third Div */}
            <div className="flex items-center p-6">
                <div className="flex-1">
                    <img src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fuser-personas%2Fdirector.webp&w=640&q=75"
                        alt="Image 3" className="w-full h-auto" />
                </div>
                <div className="flex-1 p-4">
                    <p className="text-base mb-2">Paragraph 1 for third div.</p>
                    <p className="text-base mb-4">Paragraph 2 for third div.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Button 3
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Write_To_Production;
