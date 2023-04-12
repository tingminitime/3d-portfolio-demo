import { useState } from 'react'
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from '@/components'

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <About></About>
      <Experience></Experience>
      <Tech></Tech>
      <Works></Works>
      <Feedbacks></Feedbacks>
      <div className="relative z-0">
        <Contact></Contact>
        <StarsCanvas></StarsCanvas>
      </div>
    </div>
  )
}

export default App
