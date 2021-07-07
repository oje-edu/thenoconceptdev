import React from 'react'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption'

function Feed () {
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__inputContainer__input'>
          <CreateIcon />
          <form>
            <input type='text' />
            <button type='submit'>Senden</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Foto' color='#0a66c2' />
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
          <InputOption Icon={EventNoteIcon} title='Veranstaltungen' color='#c0cbcd' />
          <InputOption Icon={CalendarViewDayIcon} title='Beitrag verfassen' color='#7fc15e' />
        </div>
      </div>
    </div>
  )
}

export default Feed
