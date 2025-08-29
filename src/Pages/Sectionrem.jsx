import React, { useState } from 'react';

const Section8 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
          Turn Screen time to shared time.
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-12 text-center">
          How it works
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center mr-4 mt-1">
              <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-700">
              Discover that neighbour who quietly passes by through their tiles on your feed
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center mr-4 mt-1">
              <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-700">
              Choose from a rotating catalogue of films
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center mr-4 mt-1">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-700">
              Invite or Request to join the a movie hangout
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center mr-4 mt-1">
              <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-700">
              Stay Connected, Keep the spark alive
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center mr-4 mt-1">
              <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-700">
              Become more outside of PLAYLANE
            </p>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

const Section9 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Become A Cultural Connector
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center">
          You're joining a global, community-powered cinema movement, where social walls fall away and connection feels effortless. Your space becomes the spark for unforgettable moments.
        </p>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-8">
          Early Hosts will be able to
        </h2>
        
        <ul className="space-y-4 text-lg md:text-xl text-gray-700">
          <li className="flex items-start">
            <span className="text-purple-600 mr-2 font-bold">•</span>
            <span>Unlock a layered and exclusive reward system</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-2 font-bold">•</span>
            <span>Vote titles they would like to see on the catalogue</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-2 font-bold">•</span>
            <span>Collaborate directly with filmmakers</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-2 font-bold">•</span>
            <span>Export cultural moments</span>
          </li>
        </ul>
        
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md">
            Join as Early Host
          </button>
        </div>
      </div>
    </section>
  );
};

const Section10 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Beta Host Invitation Section
        </h1>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-300 mb-12">
          <p className="text-2xl md:text-3xl font-light">Build with us.</p>
          <p>This winter, a select few will host the very first PlayLane screenings.</p>
          <p>Be there when the first titles drop. Help shape the future of connection.</p>
        </div>
        
        <button className="px-8 py-4 bg-[#fff257] text-gray-900 text-lg font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-md mb-6">
          become a founding host
        </button>
        
        <p className="text-gray-400 text-sm">UK Only</p>
      </div>
    </section>
  );
};

const Section12 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join the waitlist to Launch at 100,000
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Claim Your Number. Unveil the movement. Break the silence
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="firstName" className="block text-gray-700 text-left mb-2">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="lastName" className="block text-gray-700 text-left mb-2">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-8">
            <label htmlFor="email" className="block text-gray-700 text-left mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
};

export { Section8, Section9, Section10, Section12 };