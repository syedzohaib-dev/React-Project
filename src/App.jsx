import React from 'react'
import NavigationBar from './Components/NavigationBar'
import ProductSection from './Components/ProductSection'
import ContactSection from './Components/ContactSection'

function App() {
  return (
    <>
      <NavigationBar companyName="Hello Tech" ownerName="Syed Zohaib" />
      <ProductSection sectionTitel="Head phone" />
      <ProductSection sectionTitel="Mobile phone" sectionPic="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fHww&w=1000&q=80" />
      <ContactSection />
    </>
  )
}

export default App
