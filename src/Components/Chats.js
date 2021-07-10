import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import { db } from '../firebase'
import Chat from './Chat'

function Chats () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    }))))
  }, [])

  return (
    <div className='snap__chats'>
      <div className='snap__chats__header'>
        <Avatar className='snap__chats__avatar' />
        <div className='snap__chats__search'>
          <SearchIcon />
          <input type='text' placeholder='Freunde' />
        </div>
        <ChatBubbleIcon className='snap__chats__chatIcon' />
      </div>
      <div className='snap__chats__posts'>
        {posts.map(({ id, data: { profilePic, username, timestamp, imageUrl, read } }) => (
          <Chat
            key={id}
            id={id}
            username={username}
            timestamp={timestamp}
            imageUrl={imageUrl}
            read={read}
          />
        ))}
      </div>
    </div>
  )
}

export default Chats
