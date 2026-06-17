import React from 'react'
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link tp="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}/>
        <Route path="/about" element={<AboutPage></AboutPage>}/>
        <Route path="/contact" element={<ContactPage></ContactPage>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App