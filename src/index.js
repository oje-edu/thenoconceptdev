import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import App from './App'
import GlobalStyle from './styles/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
)
