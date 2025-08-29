const Sectionend = () => {
    return (
      <section className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          {/* Left Column - Waitlist Form */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join the waitlist to Launch at <span className="text-[#fff257]">100,000th</span> - #
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Claim Your Number. Unveil the movement. Break the silence
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium mb-2">First name</label>
                  <input 
                    type="text" 
                    id="first-name" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium mb-2">Last name</label>
                  <input 
                    type="text" 
                    id="last-name" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#fff257]  text-black font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                Join Waitlist
              </button>
            </form>
          </div>
          
          {/* Right Column - PlayLane Description */}
          <div className="w-full md:w-1/2 md:pl-8 md:border-l md:border-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Films Stop Streaming and Start Bringing People Together
            </h2>
            
            <div className="h-1 w-16 bg-[#fff257] mb-6"></div>
            
            <p className="text-lg text-gray-300 mb-6">
              <strong>On PLAYLANE, your film is not buried in a feed or lost in a catalogue it's the reason people gather.</strong>
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              PlayLane isn't a dumping ground for forgotten titles, it's a curated stage for exceptional independent films. We champion only filmmakers whose stories are built to outlive trends and films that deserve a long life in the hearts and conversations of audiences.
            </p>
            
            <p className="text-lg text-gray-300">
              Our winter catalogue showcase will feature only 20 handpicked films, each rotated for maximum visibility.
            </p>
            
            <div className="mt-8 flex items-center">
              <div className="bg-[#fff257] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-[#fff257] font-semibold">Limited spots available</span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Sectionend;