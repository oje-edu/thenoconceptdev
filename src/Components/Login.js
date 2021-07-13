import React from 'react'
import { GoogleOutlined } from '@ant-design/icons'
import firebase from 'firebase/app'

import { auth } from '../firebase'

import styled from 'styled-components'

const LoginStyled = styled.div`
  background-image: linear-gradient(#40a9ff, #096dd9);
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`
const LoginCardStyled = styled.div`
  position: relative;
  top: calc(50vh - 144px);
  left: calc(50vw - 210px);
  padding-top: 36px;
  padding-bottom: 66px;
  width: 420px;
  text-align: center;
  background-color: white;
  border-radius: 22px;
`

const Login = () => {
  return (
    <LoginStyled>
      <LoginCardStyled>
        <h2>YO zum Chat</h2>
        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Mit Google anmelden
        </div>
        {/* <br /> <br />
        <div className='login-button facebook'>
          <FacebookOutlined /> Mit Facebook anmelden
        </div> */}
      </LoginCardStyled>
    </LoginStyled>
  )
}

export default Login
