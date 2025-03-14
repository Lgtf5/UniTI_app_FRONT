
import { useState } from 'react'
import './App.css'

import LoginView from './views/LoginView/LoginView'
import HeaderApp from './components/headerApp/HeaderApp'




function App() {
  

  return (
    <>
      <HeaderApp/>
      <LoginView/>

      <div>
        <footer className='footer-line'>
          <p className='register-line'>Don’t have an Account? 
            <a className='ico-register'> Register</a>
          </p>
          </footer>
      </div>
      
    </>
  )
}

export default App
