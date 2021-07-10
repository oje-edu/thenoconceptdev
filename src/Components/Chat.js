import React from 'react'
import ReactTimeago from 'react-timeago'
import { selectImage } from '../features/appSlice'
import { Avatar } from '@material-ui/core'
import StopRoundedIcon from '@material-ui/icons/StopRounded'
import { useDispatch } from 'react-redux'

function Chat ({ id, username, timestamp, read, imageUrl, profilePic }) {
  const dispatch = useDispatch()
  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl))
    }
  }
  return (
    <div className='snap__chat' onClick={open}>
      <Avatar className='snap__chat__avatar' src={profilePic} />
      <div className='snap__chat__info'>
        <h4>{username}</h4>
        <p>
          Zum anzeigen klicken -{' '}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>
      {!read && <StopRoundedIcon className='snap__chat__readIcon' />}
    </div>
  )
}

export default Chat
