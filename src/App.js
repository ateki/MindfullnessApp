import {Routes, Route} from 'react-router-dom';


import Header from './components/Header'
import BurgerMenu from "./components/BurgerHeader"

import Landing from './pages/Landing'
import Menu from './pages/Menu'
import Garden from './pages/Garden'
import About from './pages/About'
import Contact from './pages/Contact'

import Breathing from './sub-pages/Breathing'
import Pomodoro from './sub-pages/Pomodoro'
import Meditations from './sub-pages/Meditations'
import Sounds from './sub-pages/Sounds'
import Quotes from './sub-pages/Quotes'


function App() {
  return (
    <>
    <Header />
<BurgerMenu />
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
      <Route path="/quotes" element={<Quotes/>} />



      </Routes>
    
    </>
  );
}

export default App;
