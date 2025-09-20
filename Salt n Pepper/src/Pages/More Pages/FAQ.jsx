import React, { useState, useEffect } from 'react';
import Footer from '../../Components/Footer';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What is the best way to modernise my restaurant kitchen?",
      answer: "Modernisation involves streamlining workflows, upgrading equipment, and implementing operational audits to improve efficiency and reduce costs."
    },
    {
      question: "How can I improve my menu profitability?",
      answer: "Menu engineering and development focused on high-margin items and customer preferences will boost profit while maintaining quality."
    },
    {
      question: "What licenses do I need to open a bar or restaurant in the UK or Spain?",
      answer: "Licensing requirements vary by location but typically include food hygiene, alcohol licenses, and health & safety certifications."
    },
    {
      question: "How can a hospitality consultant help my business grow?",
      answer: "Consultants provide expertise in business development, finance & strategy, market research, and operational efficiency to optimise your business."
    },
    {
      question: "What are the key factors to consider before selling my food business?",
      answer: "Valuation, exit strategy, operational audits, and ensuring the business is financially attractive to buyers are essential."
    },
    {
      question: "How do I create a successful social media marketing strategy?",
      answer: "Identify your target audience, create engaging content, and use analytics to refine campaigns for maximum impact."
    },
    {
      question: "What is involved in a restaurant operational audit?",
      answer: "An in-depth review of kitchen processes, staff performance, supply chain management, and financial controls to identify improvement areas."
    },
    {
      question: "How can I scale my fast casual restaurant effectively?",
      answer: "Focus on concept creation, brand consistency, operational systems, and market research to support expansion."
    },
    {
      question: "What are the costs involved in opening a new café or takeaway?",
      answer: "Costs include property rental, equipment, licenses, staff wages, marketing, and initial inventory, varying by location and size."
    },
    {
      question: "How do I attract investment for my hospitality business?",
      answer: "Prepare a comprehensive investor pack showcasing market research, financial forecasts, concept uniqueness, and growth potential."
    },
    {
      question: "What is the role of brand design in a food business?",
      answer: "Strong brand design creates identity, builds customer loyalty, and differentiates you in a competitive market."
    },
    {
      question: "How can I reduce food waste and control costs?",
      answer: "Menu engineering, portion control, supplier negotiation, and staff training are key strategies to minimise waste."
    },
    {
      question: "What digital tools can help run my restaurant more efficiently?",
      answer: "POS systems, inventory management software, social media marketing platforms, and scheduling tools improve operational control."
    },
    {
      question: "How important is market research in hospitality?",
      answer: "Critical for understanding customer demographics, competitor analysis, and identifying new opportunities for growth."
    },
    {
      question: "What is menu engineering and why does it matter?",
      answer: "Menu engineering analyses item popularity and profitability to optimise offerings and maximise revenue."
    },
    {
      question: "How can I use finance & strategy to improve my food business?",
      answer: "Budgeting, forecasting, and strategic planning enable sustainable growth and informed decision-making."
    },
    {
      question: "What should I consider when developing a new food concept?",
      answer: "Customer needs, brand identity, location, menu development, and operational feasibility are vital."
    },
    {
      question: "How can contract chef services benefit my kitchen operations?",
      answer: "They provide flexible, skilled culinary support, helping maintain quality and consistency during peak periods or transitions."
    },
    {
      question: "What social media platforms are best for restaurant marketing?",
      answer: "Instagram and Facebook are essential, with LinkedIn and TikTok offering niche marketing opportunities."
    },
    {
      question: "How do I prepare my food business for sale?",
      answer: "Ensure clean financials, documented systems, operational audits, and strong branding to maximise business value."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 ">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="w-full py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Answers to common questions about running, modernising, and growing food businesses. 
              Get clarity on operational challenges, finance, marketing, and legal essentials.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="w-full py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  aria-expanded={openItems[index] || false}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 pr-4 leading-relaxed">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 transition-transform duration-200 ${
                        openItems[index] ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openItems[index] 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-600 text-white">
        <div className="w-full py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Still Have Questions?
            </h2>
            <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;