

import './App.css'
import LoginView from './views/LoginView/LoginView'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import LoginView from './views/LoginView/LoginView';
import RegisterView from './views/RegisterView/RegisterView'
import WelcomeView from '././views/WelcomeView/WelcomeView';
import SectionsView from './views/SectionsView/SectionsView';






function App() {
  

  return (
    <>
    <WelcomeView/>
      {/*  <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/sections" element={<SectionsView />} />
        <Route path="/resources" element={<ResourcesView />} />
      </Routes>
    </BrowserRouter>  */}
    </>
  )
}

export default App
