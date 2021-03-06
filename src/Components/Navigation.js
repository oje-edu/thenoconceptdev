import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import avatar from '../img/avatar.jpg'

function Navigation() {
  return (
    <NavigationStyled>
      <div className='avatar'>
        <img src={ avatar } alt='' />
      </div>
      <ul className='nav-items'>
        <li className='nav-item'>
          <NavLink to='/' activeClassName='active-class' exact>Start</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' activeClassName='active-class' exact>Über</NavLink>
        </li>
        {/* <li className='nav-item'>
          <NavLink to='/chats' activeClassName='active-class' exact>Chat</NavLink>
        </li> */}
        <li className='nav-item'>
          <NavLink to='/resume' activeClassName='active-class' exact>Lebenslauf</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/portfolios' activeClassName='active-class' exact>Schaukasten</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/blogs' activeClassName='active-class' exact>Beiträge</NavLink>
        </li>
        <li className='nav-item'>
          <a href='https://chat.noconcept.dev' target='_blank' rel='noopener noreferrer' activeClassName='active-class'>Chat</a>
        </li>
        <li className='nav-item'>
          <NavLink to='/contact' activeClassName='active-class' exact>Kontakt</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/impressum' activeClassName='active-class' exact>Impressum</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/datenschutz' activeClassName='active-class' exact>Datenschutz</NavLink>
        </li>
      </ul>
      <footer className='footer'>
        <p>@2021-jetzt{ ' ' }<b>Der mit ohne Plan</b></p>
      </footer>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;

    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;

    .active-class {
      background-color: var(--primary-color-light);
      color: white;
    }

    li {
      display: block;
      a {
        display: block;
        padding: .45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all .4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;

        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }

        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var( --primary-color);
          transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
          opacity: 0.21;
          z-index: -1;
        }
        &:hover::before {
          width: 100%;
          height: 100%;
        }
      }
    }
    .rechtliches {
      font-size: 0.8rem !important;
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;

    p {
      padding: 1.3rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`
export default Navigation
