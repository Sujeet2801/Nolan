import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowRightIcon, CameraIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        name: 'Daniel Farag',
        position: 'Actor | Producer | Writer',
        text1: 'So far when I use NolanAi , I feel like I have stepped into the future.',
        text2: 'Basically a one stop tool for writers/directors/producers..from aspiring to veteran. ',
        text3: 'With a few clicks and in some cases in seconds, I get coverage, script notes, story boards even a shooting schedule.',
        image: 'https://www.nolanai.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ff1ifj4j3qw5p%2F2vtrzkGMHFHaT8o1fHddnf%2Fc200ae5a3721287bb9eec924e93a70cc%2Fmike_profile.jpg&w=640&q=75',
        imdb: 'https://www.nolanai.app/images/icons/imdb.svg',
        instagram: 'https://www.nolanai.app/images/icons/instagram.svg'
    },
    {
        name: 'Sean Kaul',
        position: 'Actor | Writer | Producer',
        text1: 'I saw posts about NolanAI on Instagram and did the free trial to give it a try. So far it’s been fantastic especially if I’m stuck with writing. The coverage has helped me with trying to figure out plot holes in my screenplays. The feature I have been most impressed with is the pitch deck builder. What usually takes me weeks now takes a day. ',
        text2: 'The amount of time it has saved me has been game changing.',
        text3: '',
        image: 'https://www.nolanai.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ff1ifj4j3qw5p%2F6BcxzVh1sZg0tGMqtd8KWl%2F15a747a2ec734028a116b251ff3d518f%2FScreenshot_2024-08-05_at_3.42.20_PM.png&w=640&q=75',
        imdb: 'https://www.nolanai.app/images/icons/imdb.svg',
        instagram: 'https://www.nolanai.app/images/icons/instagram.svg'
    },


];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    //     }, 4000); // Change slide every 4 seconds

    //     return () => clearInterval(interval); // Cleanup interval on component unmount
    // }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const { name, text1, text2, text3, position, image, imdb, instagram } = testimonials[currentIndex];

    return (
        <div className="flex items-center justify-center w-full relative text-white mt-40">

            < ArrowLeftCircleIcon onClick={handlePrev} className='w-16 cursor-pointer' />

            <div className="w-4/5 p-6 rounded-lg flex items-center
            justify-center transition-all duration-500 ease-in-out opacity-100 transform">

                <div className="flex items-center w-[635px] h-[200px]:">


                    <div className='w-80 absolute left-0'>
                    <svg viewBox="0 0 455 450" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="IndustryProfessionals_frame__re2Jn"><g opacity="0.2"
                        filter="url(#frame_svg__filter0_f_3945_84773)"><circle cx="220" cy="230"
                        r="121" fill="#0B5ACB"></circle></g><circle cx="220" cy="235" r="111"
                        fill="url(#frame_svg__pattern0_3945_84773)"></circle><circle cx="220"
                        cy="235" r="110.5" stroke="#fff" stroke-opacity="0.08"></circle><circle
                        cx="220" cy="235" r="110.5" stroke="#fff" stroke-opacity="0.08">
                        </circle><circle cx="220" cy="235" r="130.5" stroke="#fff" stroke-opacity="0.08">
                        </circle><circle cx="220" cy="235" r="151.5" stroke="#fff" stroke-opacity="0.08">
                        </circle><defs><filter id="frame_svg__filter0_f_3945_84773" x="-31" y="0" width="942"
                        height="942" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                        </feBlend><feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_3945_84773">
                        </feGaussianBlur></filter></defs>
                    </svg>
                    </div>

                    <img src={image} alt={name} className="absolute w-36 h-40 rounded-full left-20" />

                    <div className="flex-1 absolute left-72">
                        <h3 className="text-2xl font-bold">{name}</h3>
                        <p className="text-base opacity-45 mb-3">{position}</p>

                        <div className="flex space-x-4 mb-7">
                            <a className='' href="https://www.instagram.com/thedanielfarag/">
                                <img className='w-9' src={imdb} alt="Imdb Icon" />
                            </a>
                            <a className='' href="https://www.instagram.com/thedanielfarag/">
                                <img className='w-10' src={instagram} alt="Instagram Icon" />
                            </a>
                        </div>

                        <p className="mb-3">{text1}</p>
                        <p className="mb-3">{text2}</p>
                        <p className="">{text3}</p>
                    </div>

                </div>


            </div>

            <ArrowRightCircleIcon
                onClick={handleNext}
                className="absolute w-16 right-8  p-2 rounded-full cursor-pointer"
            />

            <div className='absolute flex justify-center items-center top-48 '>
                <button className='flex justify-center rounded-full font-bold tracking-wider 
                bg-blue-600 items-center w-56 px-5 py-2'>
                    All Testimonials
                    <ArrowRightIcon className='bg-blue-600 font-bold w-5 flex justify-center items-center 
                    ml-3'/>
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
