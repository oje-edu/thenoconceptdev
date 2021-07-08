import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Feed from '../Components/Feed'
import Header from '../Components/Header'
import Login from '../Components/Login'
import Sidebar from '../Components/Sidebar'
import { login, logout } from '../features/userSlice'
import { auth } from '../firebase'

function Linkedin () {
  const user = useSelector(state => state.state)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL

        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

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
