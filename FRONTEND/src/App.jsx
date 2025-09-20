import React from "react";
import "./index.css";
import Home from "./Pages/Home";
import OurStory from "./Pages/OurStory";
import Navbar from "./Components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import WhatWeDo from "./Pages/WhatWeDo";
import SuccessStory from "./Pages/SuccessStory";
import MeetTheTeam from "./Pages/Team";
import ContactUs from "./Pages/ContactUs";
import TermsConditions from "./Pages/FOOTER Pages/Term&Condition";
import CookiePolicy from "./Pages/FOOTER Pages/Cookie Policy";
import PrivacyPolicy from "./Pages/FOOTER Pages/Privacy Policy";
import NewsRoom from "./Pages/More Pages/News Room";
import FAQ from "./Pages/More Pages/FAQ";
import FloatingAppWidget from "./Components/FloatingAppWidget";
import Admin from "../../ADMIN/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <FloatingAppWidget />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/WhatWeDo" element={<WhatWeDo />} />
        <Route path="/SuccessStories" element={<SuccessStory />} />
        <Route path="/MeetTheTeam" element={<MeetTheTeam />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/terms&conditions" element={<TermsConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/newsroom" element={<NewsRoom />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/admin" element={<Admin />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
