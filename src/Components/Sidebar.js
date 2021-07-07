import { Avatar } from '@material-ui/core'
import React from 'react'

function Sidebar () {
  const recentItem = (topic) => (
    <div className='linkedin__sidebar__recentItem'>
      <span className='linkedin__sidebar__recentItem__hash'>#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className='linkedin__sidebar'>
      <div className='linkedin__sidebar__top'>
        <img src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&isid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80' alt='' />
        <Avatar className='linkedin__sidebar__top__avatar' />
        <h2>†hør s†en</h2>
        <h4>&#105;&#110;&#102;&#111;&#064;&#110;&#111;&#099;&#111;&#110;&#099;&#101;&#112;&#116;&#046;&#100;&#101;&#118;</h4>
      </div>
      <div className='linkedin__sidebar__stats'>
        <div className='linkedin__sidebar__stats__stat'>
          <p>Profilansichten</p>
          <p className='linkedin__sidebar__stats__stat__statNumber'>1.345</p>
        </div>
        <div className='linkedin__sidebar__stats__stat'>
          <p>Beitragsansichten</p>
          <p className='linkedin__sidebar__stats__stat__statNumber'>900</p>
        </div>
      </div>
      <div className='linkedin__sidebar__bottom'>
        <p>Letzte Beiträge</p>
        {recentItem('reactjs')}
        {recentItem('nodejs')}
        {recentItem('webdesign')}
      </div>
    </div>
  )
}

export default Sidebar
