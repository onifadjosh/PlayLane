import React from "react";
import lonely from "../assets/lonely.png"
import vid from "../assets/vid.mp4"

const Section3 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Visual Content */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Section 3 Content */}
            <div className="bg-gray-900 rounded-2xl shadow-xl p-8 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                The World Got Louder
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mt-2 leading-tight">
                We Got Lonelier
              </h2>
              {/* <div className="mt-6 h-1 bg-yellow-400 w-3/4">

              
              </div> */}

              <img src={lonely} alt="" />
            </div>
            
            {/* Visual representation */}
            <div className="relative aspect-video rounded-xl shadow-lg overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-[#fff257] font-semibold">Shared cinematic experiences</p>
        </div>
      </div>
    </div>
          </div>
        </div>
        
        {/* Right Column - Combined Content */}
        <div className="space-y-8">
          {/* Section 5 Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Neighbourhood Silence Is Deadly.
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Loneliness isn't always loud. Sometimes it's the empty seat next to you, the
                neighbour you've never spoken to, it isn't just scrolling at a phone,
              </p>
              
              <p className="font-semibold text-gray-900">
                It's being surrounded by people and still feeling invisible.
              </p>
              
              <p>
                The stories we never share.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-[#fff257] rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                PLAYLANE by default changes that.
              </h3>
              
              <p className="text-xl md:text-2xl text-gray-800 text-center">
                One film, One living room, One connection at a time.
              </p>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-300 my-8"></div>
          
          {/* Section 8 Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Turn Screen time to shared time.
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">
              How it works
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-500"></div>
                </div>
                <p className="text-lg text-gray-700">
                  Discover that neighbour who quietly passes by through their tiles on your feed
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-500"></div>
                </div>
                <p className="text-lg text-gray-700">
                  Choose from a rotating catalogue of films
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-yellow-500 flex items-center justify-center mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                </div>
                <p className="text-lg text-gray-700">
                  Invite or Request to join a movie hangout
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-500"></div>
                </div>
                <p className="text-lg text-gray-700">
                  Stay Connected, Keep the spark alive
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-500"></div>
                </div>
                <p className="text-lg text-gray-700">
                  Become more outside of PLAYLANE
                </p>
              </div>
            </div>
          </div>
          
          {/* Combined CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-md flex-1">
              Get Started
            </button>
            <button className="px-8 py-4 bg-[#fff257] text-gray-900 text-lg font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-md flex-1">
              Join the Movement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;