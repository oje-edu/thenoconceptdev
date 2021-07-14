import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
>>>>>>> testing
import App from './App'
import GlobalStyle from './styles/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
>>>>>>> testing

  </React.StrictMode>,
  document.getElementById('root')
)
