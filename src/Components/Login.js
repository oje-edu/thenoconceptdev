import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth } from '../firebase'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilPic, setProfilPic] = useState('')

  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password).then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.photoURL
      }))
    }).catch(error => alert(error))
  }
  const register = () => {
    if (!name) {
      return alert('Bitte Vor und Nachname (Vollname) eingeben.')
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoUrl: profilPic
      }).then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilPic
        }))
      })
    }).catch(error => alert(error))
  }

  return (
    <div className='linkedin__login'>
      <img src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks' alt='LinkedIn Bild' />
      <form>
        <input type='text' placeholder='VollName (zur Registrierung benötigt)' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder='Profilbild URL (optional)' value={profilPic} onChange={(e) => setProfilPic(e.target.value)} />
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Passwort' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' onClick={loginToApp}>Anmelden</button>
      </form>
      <p>Noch kein Konto?{' '}<span className='linkedin__login__register' onClick={register}>Jetzt Registrieren</span></p>
    </div>
  )
}

export default Login
