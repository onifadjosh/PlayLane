import React from 'react';

const Section5 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Image/Visual Content */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center p-8">
              <div className="text-white text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Shared Experiences</h3>
                <p className="text-blue-100">Transforming how neighbors connect through cinema</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-yellow-400 opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-indigo-400 opacity-30"></div>
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
              
              <p className="font-semibold text-indigo-700">
                It's being surrounded by people and still feeling invisible.
              </p>
              
              <p>
                The stories we never share.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-yellow-400 rounded-lg shadow-lg">
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
            
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-8">
              How it works
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                </div>
                <p className="text-lg text-gray-700">
                  Discover that neighbour who quietly passes by through their tiles on your feed
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                </div>
                <p className="text-lg text-gray-700">
                  Choose from a rotating catalogue of films
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                </div>
                <p className="text-lg text-gray-700">
                  Invite or Request to join a movie hangout
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                </div>
                <p className="text-lg text-gray-700">
                  Stay Connected, Keep the spark alive
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                </div>
                <p className="text-lg text-gray-700">
                  Become more outside of PLAYLANE
                </p>
              </div>
            </div>
          </div>
          
          {/* Combined CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex-1">
              Get Started
            </button>
            <button className="px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-md flex-1">
              Join the Movement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;