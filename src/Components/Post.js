import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'

function Post ({ name, description, message, photoUrl }) {
  return (
    <div className='feed__post'>
      <div className='feed__post__header'>
        <Avatar />
        <div className='feed__post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='feed__post__body'>
        <p>{message}</p>
      </div>

      <div className='feed__post__buttons'>
        <InputOption Icon={ThumbUpAltOutlinedIcon} title='Mag ich' color='#0a66c2' />
        <InputOption Icon={ChatOutlinedIcon} title='Kommentar' color='#0a66c2' />
        <InputOption Icon={ShareOutlinedIcon} title='Teilen' color='#0a66c2' />
        <InputOption Icon={SendOutlinedIcon} title='Senden' color='#0a66c2' />
      </div>
    </div>
  )
}

export default Post
