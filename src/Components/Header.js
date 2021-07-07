import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HeaderOption from './HeaderOption'
import avatar from '../assets/img/avatar.jpg'

function Header () {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' alt='' />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Start' />
        <HeaderOption Icon={SupervisorAccountIcon} title='Netzwerk' />
        <HeaderOption Icon={BusinessCenterIcon} title='Stellen' />
        <HeaderOption Icon={ChatIcon} title='Chat' />
        <HeaderOption Icon={NotificationsIcon} title='Nachrichten' />
        <HeaderOption avatar={avatar} title='Profil' />
      </div>
    </div>
  )
}

export default Header
