import React, { useEffect } from 'react'
import Footer from '../../Components/Footer'

const CookiePolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="cookie-policy-page" className="pt-20">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-br from-blue-50 to-emerald-100 py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              Cookie Policy
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn how we use cookies and similar technologies on our websites to enhance your experience.
            </p>
          </div>
        </div>
      </div>

      {/* Cookie Policy Content Section */}
      <div className="w-full py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Applicable Sites & Effective Date */}
            <div className="mb-8 text-center">
              <p className="text-sm sm:text-base text-gray-600 font-medium mb-2">
                <strong>Applicable to:</strong> https://saltnpepper.uk and https://saltnpepper.es
              </p>
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                <strong>Effective Date:</strong> 20/06/2025
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
                This Cookie Policy explains how Salt n Pepper ("we", "us", or "our") uses cookies and similar technologies on our websites https://saltnpepper.uk and https://saltnpepper.es (collectively, the "Sites"). It also outlines your choices regarding these technologies.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                By using either of our websites, you consent to the use of cookies as described below, unless you opt out or disable them via your browser settings or our cookie banner.
              </p>
            </div>

            {/* Section 1: What Are Cookies? */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                1. What Are Cookies?
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Cookies are small data files that are placed on your device (computer, tablet, smartphone) when you visit a website. They are widely used to ensure websites function correctly, to remember user preferences, and to gather data for analytics and marketing.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  There are different types of cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li className="text-sm sm:text-base text-gray-700"><strong>First-party cookies:</strong> Set directly by the website you visit.</li>
                  <li className="text-sm sm:text-base text-gray-700"><strong>Third-party cookies:</strong> Set by external platforms integrated into the website (e.g. Google, YouTube, Facebook).</li>
                  <li className="text-sm sm:text-base text-gray-700"><strong>Session cookies:</strong> Temporary and removed when you close your browser.</li>
                  <li className="text-sm sm:text-base text-gray-700"><strong>Persistent cookies:</strong> Stay on your device for a set duration or until you delete them.</li>
                </ul>
              </div>
            </div>

            {/* Section 2: Cookies We Use */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                2. Cookies We Use
              </h2>

              {/* Essential Cookies */}
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                  a) Essential Cookies
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  These are necessary for the operation of our websites and cannot be disabled. They include:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li className="text-sm sm:text-base text-gray-700">Cookie consent storage</li>
                  <li className="text-sm sm:text-base text-gray-700">Login and session cookies (if applicable)</li>
                  <li className="text-sm sm:text-base text-gray-700">Language or region selection</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>Examples:</strong> cookieConsentAccepted, PHPSESSID, languagePreference
                </p>
              </div>

              {/* Performance & Analytics Cookies */}
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                  b) Performance & Analytics Cookies
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  We use these to monitor site traffic, visitor behaviour, and technical performance to improve the functionality of our Sites.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                  <strong>Tools Used:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li className="text-sm sm:text-base text-gray-700">Google Analytics</li>
                  <li className="text-sm sm:text-base text-gray-700">Microsoft Clarity or Hotjar (if enabled)</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  <strong>Examples:</strong> _ga, _gid, _gat – used to identify visitors, count sessions, and track user behaviour (anonymous).
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                  These are only activated if you consent via our cookie banner.
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                  c) Functional Cookies
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  These enhance your experience by remembering choices you've made (e.g., language or location) and enabling enhanced features.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>Examples:</strong> langPref, visitedPages
                </p>
              </div>

              {/* Marketing & Third-Party Cookies */}
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                  d) Marketing & Third-Party Cookies
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  These cookies are set through our Sites by third-party platforms to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li className="text-sm sm:text-base text-gray-700">Display targeted advertisements</li>
                  <li className="text-sm sm:text-base text-gray-700">Track marketing campaigns</li>
                  <li className="text-sm sm:text-base text-gray-700">Embed third-party content such as videos or maps</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                  <strong>May include cookies from:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                  <li className="text-sm sm:text-base text-gray-700">Google Ads / YouTube</li>
                  <li className="text-sm sm:text-base text-gray-700">Meta (Facebook/Instagram) Pixel</li>
                  <li className="text-sm sm:text-base text-gray-700">LinkedIn Insight Tag</li>
                  <li className="text-sm sm:text-base text-gray-700">WhatsApp web chat links</li>
                  <li className="text-sm sm:text-base text-gray-700">Udemy integrations</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  These cookies may process your personal data and transmit it outside the UK/EU under lawful safeguards (e.g. Standard Contractual Clauses). You'll only be tracked if you consent.
                </p>
              </div>
            </div>

            {/* Section 3: Cookie Lifespan */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                3. Cookie Lifespan
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm sm:text-base font-semibold text-gray-800">Cookie Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm sm:text-base font-semibold text-gray-800">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base text-gray-700">Session cookies</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base text-gray-700">Until browser is closed</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base text-gray-700">Persistent cookies</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base text-gray-700">Between 1 day and 2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base text-gray-700">Analytics cookies</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base text-gray-700">Up to 730 days (varies)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base text-gray-700">Marketing cookies</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base text-gray-700">Typically 90–365 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4: Managing Cookies */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                4. Managing Cookies
              </h2>

              {/* Via Cookie Banner */}
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                  a) Via Our Cookie Banner
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  You can accept or reject non-essential cookies using the cookie consent banner that appears on your first visit. You can change these settings at any time via a "Cookie Settings" link in the site footer (where available).
                </p>
              </div>

              {/* Via Browser */}
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                  b) Via Your Browser
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  You can manage or disable cookies through your browser settings:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li className="text-sm sm:text-base text-gray-700">Chrome</li>
                  <li className="text-sm sm:text-base text-gray-700">Firefox</li>
                  <li className="text-sm sm:text-base text-gray-700">Safari</li>
                  <li className="text-sm sm:text-base text-gray-700">Microsoft Edge</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                  Note: Disabling essential cookies may impact how the site functions.
                </p>
              </div>
            </div>

            {/* Section 5: Third-Party Cookies & Data Transfers */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                5. Third-Party Cookies & Data Transfers
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Some cookies on our Sites are served by third-party providers and may collect data about your browsing behaviour, location, or device. These third parties may operate outside the UK or European Economic Area (EEA).
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                We recommend reviewing their individual policies:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="text-sm sm:text-base text-gray-700">Google Privacy Policy</li>
                <li className="text-sm sm:text-base text-gray-700">Meta/Facebook Cookie Policy</li>
                <li className="text-sm sm:text-base text-gray-700">LinkedIn Cookie Policy</li>
                <li className="text-sm sm:text-base text-gray-700">YouTube Terms & Privacy</li>
              </ul>
            </div>

            {/* Section 6: Changes to This Cookie Policy */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                6. Changes to This Cookie Policy
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We may update this policy to reflect changes in our cookie practices or legal requirements. Changes will be posted on this page with a revised "Effective Date".
              </p>
            </div>

            {/* Section 7: Contact Us */}
            <div className="mb-8 bg-blue-50 p-6 rounded-lg">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                7. Contact Us
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                If you have any questions or concerns about our use of cookies, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-gray-700">
                  <strong>Salt n Pepper</strong>
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  📧 Email: info@saltnpepper.uk or info@saltnpepper.es
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  🌐 Websites: https://saltnpepper.uk | https://saltnpepper.es
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                Have questions about our cookie practices? We're here to help.
              </p>
              <button
                onClick={() => window.location.href = '/ContactUs'}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default CookiePolicy