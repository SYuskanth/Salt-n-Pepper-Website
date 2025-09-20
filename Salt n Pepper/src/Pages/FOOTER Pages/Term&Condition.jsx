import React, { useEffect } from 'react'
import Footer from '../../Components/Footer'

const TermsConditions = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="terms-page" className="pt-20">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content Section */}
      <div className="w-full py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Effective Date */}
            <div className="mb-8 text-center">
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                <strong>Effective Date:</strong> 20/06/2025
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                This Agreement sets out the Terms and Conditions under which Mejorlo LTD, trading as Salt n Pepper (saltnpepper.uk / saltnpepper.es) and Odeo.app, provides consultation and related services to its clients.
              </p>
            </div>

            {/* Section 1: Parties */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                1. Parties
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>1.1.</strong> Mejorlo LTD is a company registered in the United Kingdom and trades under the names Salt n Pepper and Odeo.app.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>1.2.</strong> The Director of Mejorlo LTD is Matthew Longfoot, who is legally authorised to provide services remotely and in person from both the United Kingdom and Spain.
                </p>
              </div>
            </div>

            {/* Section 2: Scope of Services */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                2. Scope of Services
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>2.1.</strong> Services provided by Mejorlo LTD are consultation and/or contractual consultational help relating to food business consultancy, chef services, business modernisation, marketing, and related areas.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>2.2.</strong> The Consultant provides recommendations, advice, and operational support based on professional knowledge and experience.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>2.3.</strong> Implementation and outcomes of any recommendations or services are the sole responsibility of the Client.
                </p>
              </div>
            </div>

            {/* Section 3: Payment Terms */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                3. Payment Terms
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>3.1.</strong> Payment terms are agreed on a per-project basis or according to the Client's payment arrangements.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>3.2.</strong> For larger projects, Mejorlo LTD may require a 50% deposit upfront, with the remaining balance payable upon completion or according to agreed milestones.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>3.3.</strong> For ongoing services, invoices are generally issued weekly or monthly, depending on Client preferences.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>3.4.</strong> All payments are due within 14 calendar days of invoice date, unless otherwise agreed in writing.
                </p>
              </div>
            </div>

            {/* Section 4: No Guarantee of Business Outcomes */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                4. No Guarantee of Business Outcomes
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>4.1.</strong> Mejorlo LTD provides consultation and related services in good faith, based on experience and knowledge.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>4.2.</strong> However, Mejorlo LTD does not guarantee any specific results, profit increases, business success, or sale of the Client's business.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>4.3.</strong> The Client acknowledges that business outcomes depend on many factors beyond the Consultant's control.
                </p>
              </div>
            </div>

            {/* Section 5: Legal Partnerships and Business Acquisitions */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                5. Legal Partnerships and Business Acquisitions
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>5.1.</strong> Mejorlo LTD works in partnership with Legal Vision, who are our recommended legal advisors for any business acquisitions or related legal services.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>5.2.</strong> While Mejorlo LTD may introduce or refer Clients to Legal Vision, the Client remains responsible for engaging Legal Vision directly and for all legal decisions.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>5.3.</strong> Mejorlo LTD does not provide legal advice and accepts no liability for any legal matters or outcomes arising from business acquisitions or other legal services.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>5.4.</strong> Clients are advised to seek independent legal advice as necessary.
                </p>
              </div>
            </div>

            {/* Section 6: Confidentiality */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                6. Confidentiality
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>6.1.</strong> Both parties agree to keep confidential all commercially sensitive or proprietary information disclosed during the course of the engagement.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>6.2.</strong> Materials and intellectual property created specifically for the Client become the Client's property upon full payment. Reusable templates, methodologies, and general intellectual property remain the Consultant's sole property.
                </p>
              </div>
            </div>

            {/* Section 7: Liability */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                7. Liability
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>7.1.</strong> Mejorlo LTD will provide services with reasonable skill and care but disclaims any liability for losses or damages arising directly or indirectly from the use of its services.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>7.2.</strong> The Consultant's liability, whether in contract, tort, or otherwise, shall not exceed the total fees paid by the Client under this Agreement.
                </p>
              </div>
            </div>

            {/* Section 8: Termination */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                8. Termination
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>8.1.</strong> Either party may terminate this Agreement with seven (7) days' written notice.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>8.2.</strong> The Client remains responsible for payment of all work completed up to the termination date.
                </p>
              </div>
            </div>

            {/* Section 9: Independent Contractor Status */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                9. Independent Contractor Status
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>9.1.</strong> Mejorlo LTD acts solely as an independent contractor and not as an employee, partner, or agent of the Client.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>9.2.</strong> This Agreement does not create any joint venture, partnership, or employment relationship.
                </p>
              </div>
            </div>

            {/* Section 10: Governing Law and Jurisdiction */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                10. Governing Law and Jurisdiction
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>10.1.</strong> This Agreement is governed by the laws of England and Wales or Spain, depending on the Consultant's or Client's relevant location.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>10.2.</strong> Any disputes arising under or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts in the applicable country.
                </p>
              </div>
            </div>

            {/* Section 11: General Provisions */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                11. General Provisions
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>11.1.</strong> This Agreement may only be amended or supplemented by written agreement signed by both parties.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>11.2.</strong> If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall remain in full effect.
                </p>
              </div>
            </div>

            {/* Acceptance Section */}
            <div className="mb-8 bg-blue-50 p-6 rounded-lg">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Acceptance
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                By instructing Mejorlo LTD to provide services, the Client acknowledges and agrees to these Terms and Conditions.
              </p>
            </div>

            {/* Contact Information */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                If you have any questions about these Terms & Conditions, please contact us.
              </p>
              <button
                onClick={() => window.location.href = '/ContactUs'}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
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

export default TermsConditions