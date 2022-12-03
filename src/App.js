import React from 'react'
import  About  from './components/about/About'
import ScrollToTop from "react-scroll-to-top";
import  {Home } from './components/Home/Home'
import  Navbar  from './components/Navbar/Navbar'
import { Service } from './components/service/Service'
import Testimonial from './components/testimonial/Testimonial'
import Subscription from './components/subscriptions/Subscription'
import Footer from './components/footer/Footer';

import Team from './components/Team/Team';
import Feedback from './components/feedback/Feedback';
import Contact from './components/Contact/Contact';


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Testimonial />
      <Feedback />
      <Subscription />
      <Team />
      <Contact/>
      <Footer />
      <ScrollToTop smooth
        height='20'
        width='20'
        style={{ borderRadius: "90px" }} />
    </>

  )
}

export default App