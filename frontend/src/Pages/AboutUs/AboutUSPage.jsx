import React from "react";

import OurJourney from "./OurJourney.jsx";
import Header from "./Header.jsx";
import JourneySection from "./Journey.jsx";
import WhyUsSection from "./Section.jsx";
import ServicesSection from "./Service.jsx";
import EventsSection from "./Events.jsx";
import TeamSection from "../../components/Home/TeamSection.jsx";
import Contact from "../../components/Footer/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
const AboutUSPage = () => {
  return (
    <div>
      {/* <OurJourney/> */}
      <Header />
      <JourneySection />
      <WhyUsSection />
      <ServicesSection />
      <EventsSection />
      <TeamSection/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default AboutUSPage;
