import React, { useEffect } from 'react'
import { TeamImage } from '../assets/assests'
import LandingPageButton from '../Components/LandingPageButton'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

const Team = () => {
  const navigate = useNavigate();

  // Scroll to top 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Navigation functions
  const handleContactUs = () => {
    navigate('/ContactUs');
    // Ensure scroll to top/hero section after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleLearnOurStory = () => {
    navigate('/OurStory');
    // Ensure scroll to top/hero section after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  // Team members data
  const teamMembers = [
    {
      name: "Matthew Charles Longfoot",
      position: "Founder & Food Business Consultant",
      description: "Matthew brings 25+ years of combined culinary and business expertise, specialising in kitchen modernisation, menu development, and operational audits. He has worked across the UK, Spain, Sweden, and Europe, delivering business consultancy, brand design, and strategy focused on scalability and profitability for fast casual restaurants, bars, cafés, and catering businesses.",
      type: "core"
    },
    {
      name: "Lance Perkins",
      position: "Business Development & Operational Specialist",
      description: "With a background in hospitality management and extensive experience in business consultancy, Lance drives operational audits, finance & strategy, and business development projects. He supports clients in optimising processes and expanding hospitality ventures with practical, data-driven solutions.",
      type: "core"
    },
    {
      name: "Marina Pinos",
      position: "Interior & Brand Designer",
      description: "Marina is an experienced interior designer and brand specialist, focusing on creating cohesive brand environments that enhance guest experiences. She brings expertise in concept creation, brand design, and market research for hospitality venues across restaurants, bars, and hotels.",
      type: "core"
    },
    {
      name: "Emma Ford",
      position: "Freelance Consultant",
      description: "Emma specialises in menu engineering and kitchen efficiency audits, helping fast casual and hospitality businesses optimise menus and improve profitability.",
      type: "freelance"
    },
    {
      name: "Claire Morgan",
      position: "Freelance Consultant",
      description: "Claire focuses on market research, concept creation, and restaurant marketing, assisting clients with brand positioning and launch strategies.",
      type: "freelance"
    }
  ];

  // Partnership data
  const partnerships = [
    {
      name: "Odeo.app",
      description: "We partner with Odeo.app to offer advanced digital tools for hospitality operations, enhancing efficiency and customer engagement.",
      type: "technology"
    },
    {
      name: "Legal Vision Solicitors",
      description: "For legal and compliance matters including contracts and licensing, we collaborate with Legal Vision Solicitors to provide clear and practical advice.",
      type: "legal"
    }
  ];

  return (
    <div className="pt-20">
      {/* Team Hero Section */}
      <div className="mt-6 mb-15 w-full h-full relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-12">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Meet Our Expert Team
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Our diverse team of hospitality professionals brings decades of combined experience in restaurant consultancy, business development, and operational excellence. Together, we transform food businesses across the UK and Europe.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={handleContactUs}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center items-center order-1 lg:order-2">
              <img
                src={TeamImage}
                alt="Salt n Pepper Team"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover shadow-lg border-radius bg-no-repeat rounded-2xl overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Core Team Section */}
      <div className="my-16 px-4 lg:px-8 w-full h-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Our Core Team
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who lead our consultancy services and drive innovation in the hospitality industry.
          </p>
        </div>

        {/* Core Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.filter(member => member.type === 'core').map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border hover:border-gray-200 transition-all duration-300 h-full"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.position}
                  </p>
                </div>
                <p className="text-gray-600 text-center flex-grow leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Freelance Consultants Section */}
      <div className="my-16 px-4 lg:px-8 w-full h-full bg-gray-50 py-16">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Freelance Consultants
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Our network of specialist freelance consultants brings additional expertise to support your specific business needs.
          </p>
        </div>

        {/* Freelance Consultants Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {teamMembers.filter(member => member.type === 'freelance').map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border hover:border-gray-200 transition-all duration-300 h-full"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-4">
                    {member.position}
                  </p>
                </div>
                <p className="text-gray-600 text-center flex-grow leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partnerships Section */}
      <div className="my-16 px-4 lg:px-8 w-full h-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Our Partnerships
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading partners to provide comprehensive solutions for your hospitality business.
          </p>
        </div>

        {/* Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {partnerships.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border hover:border-gray-200 transition-all duration-300 h-full"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 ${partner.type === 'technology' ? 'bg-gradient-to-br from-orange-500 to-red-600' : 'bg-gradient-to-br from-purple-500 to-indigo-600'} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white text-lg font-bold">
                      {partner.name.split(' ')[0].substring(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {partner.name}
                  </h3>
                  <p className={`${partner.type === 'technology' ? 'text-orange-600' : 'text-purple-600'} font-medium mb-4 capitalize`}>
                    {partner.type} Partner
                  </p>
                </div>
                <p className="text-gray-600 text-center flex-grow leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="my-16 px-4 lg:px-8 w-full h-full bg-blue-50 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Ready to Work With Us?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Our team is ready to help transform your hospitality business. Get in touch today to discuss your specific needs and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleContactUs}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Contact Our Team
            </button>
            <button 
              onClick={handleLearnOurStory}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Learn Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default Team
