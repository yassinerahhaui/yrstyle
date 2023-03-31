import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import Details from './pages/Details/Details'

const Myrouter = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/about`} element={<About />} />
      <Route path={`/contact`} element={<Contact />} />
      <Route path={`/blog`} element={<Blog />} />
      <Route path={`/details`} element={<Details />} />
    </Routes>
  )
}

export default Myrouter