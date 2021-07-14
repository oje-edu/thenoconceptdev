import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'

import styled from 'styled-components'

const Chats = () => {
  const history = useHistory()
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)

  const handleLogout = async () => {
    await auth.signOut()
    history.push('/login')
  }

  const getFile = async (url) => {
    const response = await fetch(url)
    const data = await response.blob()

    return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' })
  }

  useEffect(() => {
    if (!user) {
      history.push('/login')
      return
    }
    axios.get('https://api.chatengine.io/users/me', {
      headers: {
        'project-id': process.env.REACT_APP_CHATENGINE_ID,
        'user-name': user.email,
        'user-secret': user.uid
      }
    }).then(() => {
      setLoading(false)
    }).catch(() => {
      let formData = new FormData()
      formData.append('email', user.email)
      formData.append('username', user.email)
      formData.append('secret', user.uid)

      getFile(user.photoURL).then((avatar) => {
        formData.append('avatar', avatar, avatar.name)
        axios.post('https://api.chatengine.io/users',
          formData,
          { headers: { 'private-key': process.env.REACT_APP_CHATENGINE_KEY } }
        ).then(() => setLoading(false)).catch((error) => console.log(error))
      })
    })
  }, [user, history])

  if (!user || loading) return 'Lade...'

  const ChatsStyled = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;

    &__nav-bar {
      width: 100%;
      height: 66px;
      background-color: #002766;

      &__logo-tab {
        position: absolute;
        left: 22px;
        top: 12px;
        font-size: 32px;
        font-weight: 700;
        color: white;
      }

      &__logout-tab {
        position: absolute;
        top: 22px;
        right: 22px;
        color: white;
        cursor: pointer;
      }
    }
  `

  return (
    <ChatsStyled>
      <div className='chats__nav-bar'>
        <div className='chats__nav-bar__logo-tab'>
          NOCONCEPT CHAT
        </div>
        <div className='chats__navbar__logout-tab' onClick={handleLogout}>
          Abmelden
        </div>
      </div>
      <ChatEngine
        height='calc(100vh - 66px)'
        projectID={process.env.REACT_APP_CHATENGINE_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </ChatsStyled>
  )
}

export default Chats
