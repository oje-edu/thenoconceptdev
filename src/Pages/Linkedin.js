import React from 'react'
import Feed from '../Components/Feed'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Linkedin () {
  return (
    <div className='linkedin'>
      <Header />
      <div className='linkedin__body'>
        <Sidebar />
        <Feed />
      </div>
      <h1>In Bearbeitung</h1>
    </div>
  )
}

export default Linkedin
