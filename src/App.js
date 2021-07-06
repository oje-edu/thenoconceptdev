import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import PortfolioPage from './Pages/PortfolioPage'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/ContactPage'
import './App.scss'
import Linkedin from './Pages/Linkedin'

function App () {
  const [navToggle, setNavToggle] = useState(false)

  const navClick = () => {
    setNavToggle(!navToggle)
  }

  return (
    <div className='app'>
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className='nav-btn' onClick={navClick}>
        <div className='lines-1' />
        <div className='lines-2' />
        <div className='lines-3' />
      </div>
      <div className='main-content'>
        <div className='content'>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/about' exact>
              <AboutPage />
            </Route>
            <Route path='/linkedin' exact>
              <Linkedin />
            </Route>
            <Route path='/portfolio' exact>
              <PortfolioPage />
            </Route>
            <Route path='/blog' exact>
              <BlogPage />
            </Route>
            <Route path='/contact' exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
