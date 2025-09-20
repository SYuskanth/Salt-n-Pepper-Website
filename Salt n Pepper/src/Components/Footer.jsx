import React from "react";
import { Link } from "react-router-dom";
import {
  CourseLinkImage,
  AppStoreImage,
  InstagramImage,
  FacebookImage,
  TiktokImage,
  LinkedInImage,
} from "../assets/assests";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="footer-column">
            <h3 className="text-xl font-bold mb-4">Contacts & Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms&conditions" className="hover:text-gray-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-gray-300">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@saltnpepper.es"
                  className="hover:text-gray-300"
                >
                  info@saltnpepper.es
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/newsroom" className="hover:text-gray-300">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="text-xl font-bold mb-4">Our Apps</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.udemy.com/course/using-odeo-a-guide-to-buying-and-selling-food-businesses/?referralCode=571A210038FDB1EFB77B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={CourseLinkImage}
                  alt="Udemy Course"
                  className="h-10"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.odeo.app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={AppStoreImage}
                  alt="Play Store App"
                  className="h-10"
                />
              </a>
            </div>
            <h1 className="text-xl font-bold mt-4">Social Media</h1>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com/saltnpepperconsultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <img src={FacebookImage} alt="Facebook" className="h-10" />
              </a>
              <a
                href="https://www.instagram.com/saltnpepperconsultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <img src={InstagramImage} alt="Instagram" className="h-10" />
              </a>
              <a
                href="https://www.linkedin.com/company/saltnpepper"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <img src={LinkedInImage} alt="LinkedIn" className="h-10" />
              </a>
              <a
                href="https://www.tiktok.com/@saltnpepperconsultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <img src={TiktokImage} alt="TikTok" className="h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>
          Copyright © 2025 | Powered by Salt n Pepper | In partnership with{" "}
          <a
            href="https://odeo.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Odeo.app
          </a>{" "}
          | and{" "}
          <a
            href="https://legalvision.manchester"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Legal Vision Manchester
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
