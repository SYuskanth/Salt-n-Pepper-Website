import React, { useEffect } from 'react'
import Footer from '../../Components/Footer'

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="privacy-policy-page" className="pt-20">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn how we collect, use, and protect your personal information when you visit our website.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content Section */}
      <div className="w-full py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Effective Date */}
            <div className="mb-8 text-center">
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                <strong>Effective Date:</strong> 20/06/2025
              </p>
            </div>

            {/* Who We Are */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Who we are
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Our website address is: https://saltnpepper.uk.
              </p>
            </div>

            {/* Comments */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Comments
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.
                </p>
              </div>
            </div>

            {/* Media */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Media
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Cookies
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                </p>
              </div>
            </div>

            {/* Embedded content from other websites */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Embedded content from other websites
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
                </p>
              </div>
            </div>

            {/* Who we share your data with */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Who we share your data with
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                If you request a password reset, your IP address will be included in the reset email.
              </p>
            </div>

            {/* How long we retain your data */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                How long we retain your data
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
                </p>
              </div>
            </div>

            {/* What rights you have over your data */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                What rights you have over your data
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
              </p>
            </div>

            {/* Where your data is sent */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Where your data is sent
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Visitor comments may be checked through an automated spam detection service.
              </p>
            </div>

            {/* Data Protection Rights */}
            <div className="mb-8 bg-blue-50 p-6 rounded-lg">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Your Data Protection Rights
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Under data protection law, you have rights including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li className="text-sm sm:text-base text-gray-700"><strong>Your right of access</strong> - You have the right to ask us for copies of your personal information.</li>
                  <li className="text-sm sm:text-base text-gray-700"><strong>Your right to rectification</strong> - You have the right to ask us to rectify personal information you think is inaccurate.</li>
                  <li className="text-sm sm:text-base text-gray-700"><strong>Your right to erasure</strong> - You have the right to ask us to erase your personal information in certain circumstances.</li>
                  <li className="text-sm sm:text-base text-gray-700"><strong>Your right to restriction of processing</strong> - You have the right to ask us to restrict the processing of your personal information in certain circumstances.</li>
                  <li className="text-sm sm:text-base text-gray-700"><strong>Your right to object to processing</strong> - You have the right to object to the processing of your personal information in certain circumstances.</li>
                  <li className="text-sm sm:text-base text-gray-700"><strong>Your right to data portability</strong> - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.</li>
                </ul>
              </div>
            </div>

            {/* How to Contact Us */}
            <div className="mb-8 bg-blue-50 p-6 rounded-lg">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                How to Contact Us
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us:
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

            {/* Updates to This Policy */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Updates to This Policy
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Effective Date" at the top of this policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                Have questions about how we handle your personal data? We're here to help.
              </p>
              <button
                onClick={() => window.location.href = '/ContactUs'}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300"
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

export default PrivacyPolicy