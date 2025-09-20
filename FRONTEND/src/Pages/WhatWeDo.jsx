import { WhatWeDoImage } from "../assets/assests";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const WhatWeDo = () => {
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
    <div className="w-full pt-20">
      {/* Place 1 */}
      <div id="hero">
        <div className="overflow-hidden rounded-lg mt-12 mx-4 sm:mx-8 lg:mx-16 xl:mx-32">
          <img
            src={WhatWeDoImage}
            alt="A descriptive alt text for what we do"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover transition-transform duration-3000 ease-in-out animate-pulse hover:scale-110"
            style={{
              animation: "zoomInOut 4s ease-in-out infinite",
            }}
          />
        </div>
        <p className="text-justify mt-6 mx-4 sm:mx-8 lg:mx-16 xl:mx-32 text-sm sm:text-base lg:text-lg text-gray-700">
          We analyse kitchen workflows, equipment use, and operational
          efficiency to improve productivity and reduce costs. Our kitchen
          consultation services identify bottlenecks and provide actionable
          recommendations for modernising facilities to meet today’s fast-paced
          hospitality demands. This includes technology integration, layout
          optimisation, and compliance with hygiene and safety standards.
        </p>
      </div>
      {/* Place 2 */}
      <div className="mt-12 mx-4 sm:mx-8 lg:mx-16 xl:mx-32">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
          Kitchen Consultation & Modernisation
        </h2>
        <p className="text-justify text-sm sm:text-base lg:text-lg text-gray-700">
          We analyse kitchen workflows, equipment use, and operational
          efficiency to improve productivity and reduce costs. Our kitchen
          consultation services identify bottlenecks and provide actionable
          recommendations for modernising facilities to meet today’s fast-paced
          hospitality demands. This includes technology integration, layout
          optimisation, and compliance with hygiene and safety standards.
        </p>
      </div>
      <div className="mt-12 mx-4 sm:mx-8 lg:mx-16 xl:mx-32">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
          Business Consultancy & Development
        </h2>
        <p className="text-justify text-sm sm:text-base lg:text-lg text-gray-700">
          Our business consultancy services help hospitality operators align
          strategy with operational execution. We specialise in business
          development that increases profitability and scalability—whether you
          operate a fast casual restaurant, bar, hotel, or catering business. We
          focus on finance & strategy, market research, and operational audits
          to deliver clear pathways for growth.
        </p>
      </div>
      <div className="mt-12 mx-4 sm:mx-8 lg:mx-16 xl:mx-32">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
          Menu Development & Engineering
        </h2>
        <p className="text-justify text-sm sm:text-base lg:text-lg text-gray-700">
          Effective menus are essential to customer satisfaction and business
          success. We offer menu development and menu engineering services that
          balance creativity with commercial viability. Through careful analysis
          of food costs, customer preferences, and operational capacity, we
          create menus designed to maximise margins while maintaining quality
          and brand integrity.
        </p>
      </div>
      <div className="mt-12 mx-4 sm:mx-8 lg:mx-16 xl:mx-32">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
          Concept Creation & Brand Design{" "}
        </h2>
        <p className="text-justify text-sm sm:text-base lg:text-lg text-gray-700">
          Launching or refreshing a hospitality concept requires clarity and
          strong brand identity. We assist with concept creation and brand
          design that align your food offering with your target market. Whether
          you’re opening a new fast casual restaurant or repositioning an
          existing venue, we ensure your concept stands out and connects with
          customers.
        </p>
      </div>
      <div className="mt-12 mx-4 sm:mx-8 lg:mx-16 xl:mx-32">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
          Marketing & Digital Strategy
        </h2>
        <p className="text-justify text-sm sm:text-base lg:text-lg text-gray-700">
          We provide restaurant marketing and social media marketing strategies
          that boost visibility and customer engagement. Our approach uses
          data-driven insights and targeted campaigns tailored to hospitality
          businesses, ensuring your brand reaches the right audience
          effectively.
        </p>
      </div>
      <div className="mt-12 mx-4 sm:mx-8 lg:mx-16 xl:mx-32">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
          Contract Chef Services
        </h2>
        <p className="text-justify text-sm sm:text-base lg:text-lg text-gray-700">
          Salt n Pepper offers experienced contract chef services to support
          your kitchen operations with flexibility and professionalism. Whether
          you need cover for staff shortages, project-based chefs for events or
          menu launches, or ongoing culinary expertise, we provide reliable,
          hands-on support tailored to your needs. This service complements our
          consultancy by ensuring operational excellence on the ground.
        </p>
      </div>

      <div className="mt-12 mx-4 sm:mx-8 lg:mx-16 xl:mx-32">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
          Scalability & Exit Strategy
        </h2>
        <p className="text-justify text-sm sm:text-base lg:text-lg text-gray-700">
          We help food businesses build scalable models for sustainable growth
          and successful exits. From operational improvements to financial
          planning, we provide guidance on how to prepare your business for
          expansion or sale.
        </p>
      </div>
      <div className="mt-12 mx-4 sm:mx-8 lg:mx-16 xl:mx-32">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
          Why Work With Us?
        </h2>
        <p className="text-justify text-sm sm:text-base lg:text-lg text-gray-700">
          Matt Longfoot leads Salt n Pepper with over 25 years’ experience as a
          contract chef, restaurateur, and hospitality consultant. With projects
          spanning the UK, Spain, and Europe—including major events like the
          America’s Cup and Fira Expo Barcelona—our approach is practical,
          data-driven, and focused on delivering measurable results.
        </p>
      </div>
      <div className="mt-16 ">
        <Footer className="w-full" />
      </div>
    </div>
  );
};

export default WhatWeDo;
