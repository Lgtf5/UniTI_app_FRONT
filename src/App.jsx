
import { useState } from 'react'
import './App.css'
import MainButton from './views/welcomeView/buttons/MainButton'
import LoginButton from './views/welcomeView/buttons/LoginButton'
import WelcomeView from './views/welcomeView/welcomeView'




function App() {
  

  return (
    <>
      <MainButton/>
      <WelcomeView/>
      <LoginButton/>
      <div>
        <p className='register-line'>
        Don’t have an Account? <a className='ico-register'> Register</a>
        </p>
       
      </div>
      
    </>
  )
}

export default App
