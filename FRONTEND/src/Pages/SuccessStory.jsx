import React from "react";
import { SucssStoryImage } from "../assets/assests";
import Footer from "../Components/Footer";

const SuccessStory = () => {
  const successStories = [
    {
      id: 1,
      title: "The Dykes End, Reach",
      description:
        "Led business development and modernisation, streamlining operations, refining menu engineering, and enhancing guest experience for sustainable growth and profitability.",
    },
    {
      id: 2,
      title: "The Tapastry, England",
      description:
        "Founded, developed, and sold the startup. Oversaw brand design, menu development, operational audits, and exit strategy leading to a profitable sale.",
    },
    {
      id: 3,
      title: "Fira Barcelona – Global Seafood Exhibition",
      description:
        "Provided consultancy and contract chef services, optimising kitchen operations and menu engineering for high-volume seafood hospitality.",
    },
    {
      id: 4,
      title: "Champions League Hospitality, Girona",
      description:
        "Managed hospitality for players’ families and executives, delivering operational excellence and bespoke menu customisation under pressure.",
    },
    {
      id: 5,
      title: "Swiss Consulate, Barcelona",
      description:
        "Provided bespoke culinary consultancy and chef services, enhancing catering quality and efficiency for official events.",
    },
    {
      id: 6,
      title: "The Sea Garden & Americas Cup, Barcelona",
      description:
        "Supported restaurant and Americas Cup hospitality with kitchen modernisation and scalable menu development for a nine-week event.",
    },
    {
      id: 7,
      title: "McManus PB Group, England",
      description:
        "Delivered specialist contract chef services across locations, driving consistent quality improvements and operational efficiency.",
    },
    {
      id: 8,
      title: "Barcelona Quality Services, Barcelona",
      description:
        "Provided contract chef services, enhancing kitchen operations and supporting high hospitality standards across projects.",
    },
  ];

  return (
    <div className="w-full pt-24">
      {/* Hero Image Section */}
      <div id="hero" className="w-full bg-gray-50">
        <div className="w-full flex justify-center items-center min-h-[60vh] sm:min-h-[70vh] px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            {/* Laptop Screen */}
            <div className="bg-gray-50 rounded-xl border border-gray-300 shadow-2xl mx-auto p-3 sm:p-5">
              <img
                src={SucssStoryImage}
                alt="Success Story"
                className="w-full h-[45vh] sm:h-[60vh] object-contain bg-gray-70 rounded-lg"
              />
            </div>
            {/* Laptop Base */}
            <div className="mx-auto w-48 sm:w-64 h-2 bg-gray-300 rounded-b-xl mt-2 shadow"></div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="w-full py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 text-center leading-tight">
              Success Stories
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto px-2">
              Discover how Salt n Pepper has helped transform businesses and
              create lasting success stories in the food and hospitality
              industry.
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 cursor-pointer">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:border hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-center font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4 leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-center text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SuccessStory;
