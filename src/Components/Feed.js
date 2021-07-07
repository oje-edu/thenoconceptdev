import React, { useState, useEffect } from 'react'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption'
import Post from './Post'
import { db } from '../firebase'
import firebase from 'firebase'

function Feed () {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    ))
  }, [])

  const sendPost = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      name: '†hør s†en',
      description: 'nurn YO',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__inputContainer__input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type='text' />
            <button onClick={sendPost} type='submit'>Senden</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Foto' color='#0a66c2' />
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
          <InputOption Icon={EventNoteIcon} title='Veranstaltungen' color='#c0cbcd' />
          <InputOption Icon={CalendarViewDayIcon} title='Beitrag verfassen' color='#7fc15e' />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  )
}

export default Feed
