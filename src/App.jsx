import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeatureBar from './components/FeatureBar'
import Gallery from './components/Gallery'
import About from './components/About'
import Capacity from './components/Capacity'
import Pricing from './components/Pricing'
import Reservation from './components/Reservation'
import MapSection from './components/MapSection'
import Trips from './components/Trips'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureBar />
        <Gallery />
        <About />
        <Capacity />
        <Pricing />
        <Reservation />
        <MapSection />
        <Trips />
      </main>
      <Footer />
    </>
  )
}
