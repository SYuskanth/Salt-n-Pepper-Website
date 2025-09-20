import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LandingPageButton from "../Components/LandingPageButton";
import {
  LandingPageImage01,
  LandingPageImage02,
  LandingPageImage03,
  BusinessDevelopmentImage,
  BusinessSalesImage,
  KitchenImage,
  LatestProjectImage1,
  LatestProjectImage2,
  LatestProjectImage3,
  LatestProjectImage4,
} from "../assets/assests";
import { ContactBgVideo } from "../assets/assests";
import Footer from "../Components/Footer";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider data - you can add more slides here
  const slides = [
    {
      id: 1,
      title: "Expert Restaurant Consultancy & Business Growth Strategies",
      description:
        "We provide industry-leading consultancy services to help food and hospitality businesses grow fast — don't waste time, contact us today and start seeing real results.",
      image: LandingPageImage01,
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "Transform Your Restaurant Business Today",
      description:
        "Unlock your restaurant's potential with our proven strategies. From menu optimization to staff training, we'll help you achieve sustainable growth and increased profitability.",
      image: LandingPageImage02,
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "Professional Food Service Solutions",
      description:
        "Take your food business to the next level with our comprehensive consultancy services. We specialize in operational efficiency, cost reduction, and customer satisfaction.",
      image: LandingPageImage03,
      buttonText: "Learn More",
    },
  ];

  // Card content
  const cardContent = [
    {
      title: "Hospitality Business Development & Strategy",
      description:
        "Helping fast casual restaurants and hospitality businesses grow with expert market research, operational audits, and restaurant marketing to optimise performance and customer experience.",
      image: BusinessDevelopmentImage,
    },
    {
      title: "Business Sale Preparation",
      description:
        "Preparing restaurants and hospitality brands for sale through strategic finance & strategy, business development, and brand design to maximise value and attract the right buyers.",
      image: BusinessSalesImage,
    },
    {
      title: "Kitchen & Menu Modernisation for Restaurant Success",
      description:
        "Specialising in menu development, menu engineering, and operational audits to modernise kitchens and optimise workflows, helping fast casual restaurants reduce costs, improve efficiency, and elevate food quality.",
      image: KitchenImage,
    },
  ];

  // Latest Projects content
  const latestProjects = [
    {
      title: "Mcmanus Pub Group",
      description:
        "Modernised The McManus kitchens with streamlined workflows and a 4-on/3-off rota. Cut food waste 10%+ via portion control and vacuum-sealing, boosting speed and quality.",
      image: LatestProjectImage1,
    },
    {
      title: "The Sea Garden",
      description:
        "Used molecular gastronomy to optimise processes and portions. Introduced rotas to boost morale and reduce waste. Improved service speed, food quality, and consistency during busy events.",
      image: LatestProjectImage2,
    },
    {
      title: "Global Seafood",
      description:
        "Consulted on Fira Expo kitchen modernisation with efficient workflows, vacuum-packed storage, and rotating shifts to reduce waste and boost service quality.",
      image: LatestProjectImage3,
    },
    {
      title: "The Champions League",
      description:
        "Consulted for Champions League match in Geneva. Improved prep, portion control, and team rotations to ensure smooth, quality service under pressure.",
      image: LatestProjectImage4,
    },
  ];

  //client testimonial content
  const testimonials = [
    {
      name: "Ian Simmons",
      feedback:
        "I am very honoured to recommend Matthew Longfoot of Salt n Pepper for his exceptional freelance work as a skilled chef. Since the sale of his second restaurant 28th March 2022 Matthew Longfoot has been assisting me and my team during busy periods of the year, staff holidays and general changes.",
      company: "Montague Arms",
    },
    {
      name: "Justin Capp",
      feedback:
        "We are thrilled to recommend Matthew Longfoot of Salt n Pepper for his exceptional freelance work as a chef. Since March 28, 2022, I have had the pleasure of collaborating with Matt on an as-needed basis, and his contributions have been invaluable.",
      company: "Paella Nostra",
    },
    {
      name: "Tom Mcmanus",
      feedback:
        "We highly recommend Matthew Longfoot of Salt n Pepper for his outstanding kitchen modernisation consultation. Since April 15, 2025, Matt has provided expert support that’s helped transform our kitchen operations—streamlining workflow, improving efficiency, and bringing real value to our business.",
      company: "Mcmanus Pub Group",
    },
  ];

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

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="pt-20">
      {/* Landing Page Slider */}
      <div
        id="hero"
        className="mt-6 mb-15 w-full h-full relative overflow-hidden "
      >
        {/* Slider Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-full flex items-center mx-auto"
            >
              {/* Two Column Layout */}
              <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
                  {/* Left Column - Text Content */}
                  <div className="flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex justify-center lg:justify-start">
                      <LandingPageButton text={slide.buttonText} />
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="flex justify-center items-center order-1 lg:order-2">
                    <img
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover  shadow-lg border-radius bg-no-repeat rounded-2xl overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* the landing page End */}

      {/* Our Services Section */}
      <div className="my-16 px-4 lg:px-8 w-full h-full">
        <div>
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">
            Our Services
          </h1>
          <p className="text-center text-gray-600">
            Discover our range of services designed to elevate your culinary
            experience.
          </p>
        </div>
        {/* the card contents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 cursor-pointer ">
          {cardContent.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border hover:border-gray-200"
            >
              <div className="relative h-20">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-20 h-20 object-cover items-center mx-auto mt-6 border-4 border-white  hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center mt-5">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-center mt-5">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Services Section End */}

      {/* Our Latest Projects Start */}
      <div className="my-16 px-4 lg:px-8 w-full h-full mt-30 mb-30">
        <div>
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">
            Our latest Projects
          </h1>
          <p className="text-center text-gray-600 w-3/5 mx-auto">
            Recent projects include restaurant consultancy, menu engineering,
            and hospitality consulting across England and Spain. From restaurant
            marketing to business development, we deliver practical, tailored
            solutions that help food businesses grow.
          </p>
        </div>
        {/* 4 cards of the projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 ">
          {latestProjects.map((latestProject, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border hover:border-gray-200"
            >
              <div className="relative h-70 group">
                <img
                  src={latestProject.image}
                  alt={latestProject.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gray-800 bg-opacity-70 
  opacity-70 md:opacity-0 md:group-hover:opacity-60 
  transition-opacity duration-300 flex flex-col justify-center p-4"
                >
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    {latestProject.title}
                  </h3>
                  <p className="text-white text-sm text-center">
                    {latestProject.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Latest Projects End */}

      {/* See What Our Clients Say section Start */}
      <div className="my-16 px-4 lg:px-8 w-full">
        <div>
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">
            See What Our Clients Say
          </h1>
          <p className="text-center text-gray-600 w-3/5 mx-auto">
            Here's what our clients have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer h-full min-h-[300px]"
            >
              {/* Feedback Message */}
              <p className="text-gray-600 mb-6 text-center flex-grow">
                {testimonial.feedback}
              </p>
              {/* Client Info */}
              <div className="border-t border-gray-300 my-4"></div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* See What Our Clients Say section End */}

      {/* Contact Us Section Start */}
      <section className="relative h-screen overflow-hidden">
        {/* Fixed Video Background */}
        <video
          key="background-video"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={ContactBgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full  bg-opacity-50 text-white p-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">Let’s Connect</h2>
          <p className="text-lg mb-6 max-w-xl text-black">
            Have a question or a project in mind? Reach out and let’s make
            something great together.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition"
          >
            Contact Us
          </button>
        </div>
      </section>
      {/* Contact Us Section End */}
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
