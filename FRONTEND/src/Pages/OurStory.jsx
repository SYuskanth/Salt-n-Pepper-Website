import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import { OurStoryImage } from "../assets/assests";

const OurStory = () => {
  const [typedText, setTypedText] = useState("");
  const storyTitle = "Our Story....";

  useEffect(() => {
    if (typedText.length < storyTitle.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(storyTitle.slice(0, typedText.length + 1));
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [typedText, storyTitle]);

  // Smooth scroll to hero when URL has #hero
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#hero") {
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="w-full">
      {/* Main Section */}
      <div id="hero" className="w-full py-12 sm:py-14 lg:py-16 xl:py-18">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center min-h-[60vh] lg:min-h-[70vh]">
            <div className="w-full order-2 lg:order-1 flex justify-center items-center">
              <img
                src={OurStoryImage}
                alt="Our Story"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full h-auto object-contain"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2 flex flex-col justify-center">
              <h1
                aria-label="Our Story"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight"
              >
                <span
                  className={
                    typedText.length === storyTitle.length ? "" : "cursor-blink"
                  }
                >
                  {typedText}
                </span>
              </h1>
              <div className="w-full">
                <p className="text-gray-600 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-justify max-w-prose">
                  Welcome to Salt n Pepper, where our passion for culinary
                  excellence meets heartwarming hospitality. Since our
                  establishment, we've been dedicated to serving authentic
                  flavors and creating memorable dining experiences for our
                  valued guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Content Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 space-y-6 sm:space-y-8">
        <div className="max-w-none sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
              The Roots
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed text-justify">
              Matthew Charles Longfoot's roots lie in a farming family in
              Caster, England, where five generations worked Morrison's Farm in
              Morborne to supply crops that fed the nation. Hospitality became
              his passion early on — starting work at 13, training as a chef at
              16, moving into catering by 27, and owning and modernising
              restaurants from 29. These ventures were successfully sold,
              marking a track record of turning concepts into profitable
              businesses. After extensive travel and work across Europe —
              including Spain, Catalunya, Switzerland, France, and Sweden —
              Matthew chose to focus his expertise on England, Sweden, and
              Barcelona. Since shifting focus at 37, his career has centred on
              consultancy and contract chef services, applying systems inspired
              by molecular gastronomy to improve kitchen operations with
              precision and efficiency.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
              About Salt n Pepper
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed text-justify">
              Salt n Pepper was established to deliver expert business and
              kitchen consultancy tailored to the food and hospitality sectors
              across these key markets. Specialising in England, Sweden, and
              Barcelona, Salt n Pepper focuses on:
            </p>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-4 sm:ml-6">
              <li className="text-sm sm:text-base lg:text-lg text-gray-600">
                Business consultancy and development
              </li>
              <li className="text-sm sm:text-base lg:text-lg text-gray-600">
                Finance & strategy
              </li>
              <li className="text-sm sm:text-base lg:text-lg text-gray-600">
                Bar consultancy and hotel consultancy
              </li>
              <li className="text-sm sm:text-base lg:text-lg text-gray-600">
                Brand design and concept creation, particularly for fast casual
                restaurants
              </li>
              <li className="text-sm sm:text-base lg:text-lg text-gray-600">
                Menu development and menu engineering
              </li>
              <li className="text-sm sm:text-base lg:text-lg text-gray-600">
                Operational audits and restaurant marketing
              </li>
              <li className="text-sm sm:text-base lg:text-lg text-gray-600">
                Social media marketing
              </li>
              <li className="text-sm sm:text-base lg:text-lg text-gray-600">
                Contract chef services
              </li>
            </ul>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed text-justify">
              With a clear emphasis on modernising food businesses, Salt n
              Pepper helps restaurants, cafés, bars, catering companies, and
              hospitality businesses optimise performance, scale efficiently,
              and prepare for future growth or sale. Matthew's hands-on
              experience at high-profile events such as the America's Cup,
              Champions League, the Swiss Consulate in Barcelona, and the Fira
              Expo in Barcelona underpins the consultancy's commitment to
              operational excellence and practical results.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurStory;
