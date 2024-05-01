import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Homepage from './pages/Homepage'
import About from './pages/About'
import Teachers from './pages/Teachers'
import Admissions from './pages/Admissions'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about-us' element={<About /> } />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/admissions' element={<Admissions />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}