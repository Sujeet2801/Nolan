import React, { useState } from 'react';
import Photo1 from '../assets/pen.png'; // Example image, replace with actual paths

function Up_your_Game() {
  const [selectedRole, setSelectedRole] = useState('Screenwriters');

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const screenwritersContent = [
    {
      imgSrc: Photo1,
      text: "Write and experiment for free script editor with affordable Premium plans.",
      icon: "💡",
    },
    {
      imgSrc: Photo1,
      text: "Avoid writers’s blocks with AI-powered suggestions.",
      icon: "🧠",
    },
    {
      imgSrc: Photo1,
      text: "Brainstorm with AI to develop story beats and test out scene and character concepts.",
      icon: "💼",
    },
    {
      imgSrc: Photo1,
      text: "Create scripts that look and feel professional without stressing out about the technicalities.",
      icon: "📑",
    },
    {
      imgSrc: Photo1,
      text: "Cut down on tedious tasks such as formatting with Built-in automated script formatting.",
      icon: "🖥️",
    },
    {
      imgSrc: Photo1,
      text: "Collaborate with your team, get suggestions and feedback from your peers and colleagues.",
      icon: "💡",
    },
  ];

  const producersContent = [
    {
      imgSrc: Photo1,
      text: "Quickly import and work on existing scripts, streamlining the pre-production process.",
      icon: "list",
    },
    {
      imgSrc: Photo1,
      text: "Generate comprehensive production schedules in seconds based on automatic script breakdowns.",
      icon: "newspaper",
    },
    {
      imgSrc: Photo1,
      text: "Save on multiple tools by getting script scoring and coverage directly within the platform.",
      icon: "movie_filter",
    },
    {
      imgSrc: Photo1,
      text: "Easily create compelling pitch decks that are directly linked to your script, enhancing the pitch process.",
      icon: "photo_size_select_actual",
    },
    {
      imgSrc: Photo1,
      text: "Access a vast library of film industry images, including posters and cast member photos, to find the perfect visual representation for your projects.",
      icon: "workspaces",
    },
    {
      imgSrc: Photo1,
      text: "Reduce expenses by consolidating several production tools into one efficient platform, cutting down on overhead and increasing productivity.",
      icon: "workspaces",
    },
  ];

  const directorsContent = [
    {
      imgSrc: Photo1,
      text: "Streamline your preparation with our automated breakdown, saving days of manual work and allowing more time for creative decisions.",
      icon: "list",
    },
    {
      imgSrc: Photo1,
      text: "Benefit from scheduling that's directly linked to your script breakdown, with seamless adjustments as script changes occur, ensuring constant alignment with your production team.",
      icon: "schedule",
    },
    {
      imgSrc: Photo1,
      text: "Utilize our impressive storyboard features that assist with detailed camera directions and render high-quality AI-generated images to visualize scenes vividly.",
      icon: "developer_board",
    },
    {
      imgSrc: Photo1,
      text: "Gain deep insights with advanced analytics that review your script to identify any gaps or elements that might be missing, enhancing the narrative and technical robustness.",
      icon: "newspaper",
    },
    {
      imgSrc: Photo1,
      text: "Facilitate effective communication and instant feedback within your team through an integrated platform designed to keep everyone updated and engaged.",
      icon: "workspaces",
    },
    {
      imgSrc: Photo1,
      text: "Maintain artistic integrity while leveraging technology to refine scenes, enhance pacing, and perfect shot compositions with intuitive tools that support your directorial vision.",
      icon: "thumb_up",
    },
  ];

  const getContent = () => {
    switch (selectedRole) {
      case 'Producers':
        return producersContent;
      case 'Directors':
        return directorsContent;
      default:
        return screenwritersContent;
    }
  };

  return (
    <div className="text-white mt-16 mb-12">

      <div className='flex justify-center items-center'>
        <div className="text-center p-4 ">
          <h1 className="text-3xl font-light mb-4 text-[64px]">
            <span className='font-bold'>Up your Game</span> with NolanAI
          </h1>
          <p className="text-2xl my-8 w-[1100px]">
            NolanAI is the ultimate tool for any screenwriter looking to improve their
            craft. With its AI-powered features and user-friendly interface, it can
            help you bring your stories to life in the most efficient and
            effective way possible, while respecting your unique creative voice.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">

        <div className="flex space-x-4 text-4xl">
          <button
            onClick={() => handleRoleChange('Screenwriters')}
            className={`px-4 py-2 rounded ${selectedRole === 'Screenwriters' ? 
                'text-blue-700 font-bold border-b-4 border-blue-700' : 'text-white'}`}
          >
            Screenwriters
          </button>
          <button
            onClick={() => handleRoleChange('Producers')}
            className={`px-4 py-2 rounded ${selectedRole === 'Producers' ? 
                'text-blue-700 font-bold border-b-4 border-blue-700' : 'text-white'}`}
          >
            Producers
          </button>
          <button
            onClick={() => handleRoleChange('Directors')}
            className={`px-4 py-2 rounded ${selectedRole === 'Directors' ? 
                'text-blue-700 font-bold border-b-4 border-blue-700' : 'text-white'}`}
          >
            Directors
          </button>
        </div>

        <hr className=' relative text-white top-[-17px] mt-0  w-[1100px] opacity-45'/>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {getContent().map((content, index) => (
            <div key={index} className="flex items-center p-4  rounded shadow">
              <img
                src={content.imgSrc}
                alt="Example"
                className="w-16 h-16 mr-4"
              />
              <p className="text-base">
                {content.text}
                <br />
                {/* <span role="img" aria-label="icon">{content.icon}</span> */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Up_your_Game;
