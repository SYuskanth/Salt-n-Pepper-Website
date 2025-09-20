import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  CourseLinkImage,
  AppStoreImage,
} from '../assets/assests';

const FloatingAppWidget = () => {
  const location = useLocation();
  
  // Hide the floating widget on admin pages
  if (location.pathname === '/admin') {
    return null;
  }

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
      {/* Udemy Course Link */}
      <a
        href="https://www.udemy.com/course/using-odeo-a-guide-to-buying-and-selling-food-businesses/?referralCode=571A210038FDB1EFB77B"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <div className="bg-white rounded-lg shadow-lg p-2 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <img
            src={CourseLinkImage}
            alt="Udemy Course"
            className="h-8 w-auto"
          />
        </div>
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Udemy Course
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
        </div>
      </a>

      {/* Play Store App Link */}
      <a
        href="https://play.google.com/store/apps/details?id=com.odeo.app&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <div className="bg-white rounded-lg shadow-lg p-2 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <img
            src={AppStoreImage}
            alt="Play Store App"
            className="h-8 w-auto"
          />
        </div>
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Play Store App
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
        </div>
      </a>
    </div>
  );
};

export default FloatingAppWidget;