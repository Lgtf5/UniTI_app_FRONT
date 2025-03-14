
import { useState } from 'react'
import './App.css'
import MainButton from './views/welcomeView/buttons/MainButton'
import LoginButton from './views/welcomeView/buttons/LoginButton'
import WelcomeView from './views/welcomeView/welcomeView'





function App() {
  

  return (
    <>
    <div>
      <MainButton/>
   
     {/*  <BrowserRouter>
        <Routes> */}
{/*           <Route path="/" element= {<WelcomeView/>}/>
        </Routes>
      </BrowserRouter> */}
      <WelcomeView/>
      <LoginButton/>

            <footer className='footer-line'>
              <p className='register-line'>
              Don’t have an Account? {' '} <a href="/register" className='ico-register'> Register</a>
              </p>
            </footer>
    </div>
    </>
  )
}

export default App
