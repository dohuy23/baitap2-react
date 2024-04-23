import React from 'react'
import Navigation from './component/navigation/Navigation'
import Header from './component/header/Header'
import Section from './component/product/Section'
import Footer from './component/footer/Footer'
// import
import "./assets/styles.css"




const App = () => {
  return (
   <>
    <Navigation/>
    <Header/>
    <Section />
    <Footer/>
   </>
  );
}

export default App