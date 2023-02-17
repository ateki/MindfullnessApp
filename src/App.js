import {Routes, Route} from 'react-router-dom';


import Header from './components/Header'

import Landing from './pages/Landing'
import Menu from './pages/Menu'
import Garden from './pages/Garden'
import About from './pages/About'
import Contact from './pages/Contact'
import Breathing from './pages/Breathing'
import Pomodoro from './pages/Pomodoro'
import Meditations from './pages/Meditations'
import Sounds from './pages/Sounds'


function App() {
  return (
    <>
    <Header />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/garden" element={<Garden/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      
      <Route path="/breathing" element={<Breathing/>} />
      <Route path="/pomodoro" element={<Pomodoro/>} />
      <Route path="/meditations" element={<Meditations/>} />
      <Route path="/sounds" element={<Sounds/>} />



      </Routes>
    
    </>
  );
}

export default App;
