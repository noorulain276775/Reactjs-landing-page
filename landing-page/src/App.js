import React from 'react'
import { AboutUs, Cart, Feature, Footer, Header, Menu } from './container'
import { Brand, Cta, Features, Food, Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <AboutUs />
      <Menu />
      <Cart />
      <Features />
      <Feature />
      <Brand />
      <Food />
      <Cta />
      <Footer />
    </div>
  )
}

export default App

