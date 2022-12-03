import React from 'react'
import { About } from './components/about/About'

import { Home } from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { Service } from './components/service/Service'
import Testimonial from './components/testimonial/Testimonial'
import Subscription from './subscriptions/Subscription'

const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
    <About/>
    <Service/>
    <Testimonial/>
    <Subscription/>
    </>

  )
}

export default App