import React from 'react'
import { useSelector } from 'react-redux'
import Feed from '../Components/Feed'
import Header from '../Components/Header'
import Login from '../Components/Login'
import Sidebar from '../Components/Sidebar'

function Linkedin() {
  const user = useSelector(state => state.state)
  return (
    <div className='linkedin'>
      <Header />
      {
        !user ? (
          <Login />
        ) : (
          <div className='linkedin__body'>
            <Sidebar />
            <Feed />
          </div>
        )
      }

      <h1>In Bearbeitung</h1>
    </div>
  )
}

export default Linkedin
