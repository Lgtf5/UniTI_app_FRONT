
import { useState } from 'react'
import './App.css'

import LoginView from './views/LoginView/LoginView'
import HeaderApp from './components/headerApp/HeaderApp'
import FooterApp from './components/FooterApp/FooterApp'



function App() {
  

  return (
    <>
    <div>
      <HeaderApp/>
      <LoginView/>
      <FooterApp/>
      
      </div>
    </>
  )
}

export default App
