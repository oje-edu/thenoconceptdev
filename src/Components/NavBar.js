import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../assets/img/avatar.jpg'

function NavBar () {
  return (
    <div className='NavBar'>
      <nav className='nav'>
        <div className='profile'>
          <img src={avatar} alt='yome' />
        </div>
        <ul className='nav-items'>
          <li className='nav-item'>
            <NavLink to='/about' exact activeClassName='active'>
              Über
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/portfolio' exact activeClassName='active'>
              Schaufenster
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/blog' exact activeClassName='active'>
              Beiträge
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact' exact activeClassName='active'>
              Kontakt
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/' exact activeClassName='active'>
              Start
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer className='footer'>
        <p>
          @2021 till now - the.noconcept.dev - modified the Original from<a href='https://github.com/Maclinz/youtube-portfolio-tutorial' target='_blank' rel='noopener noreferrer'> Maclinz</a>
        </p>
      </footer>
    </div>
  )
}

export default NavBar
