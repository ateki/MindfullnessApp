import {Routes, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 


import Header from './components/Header'

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
library.add(fab, faFacebookF);



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
      <Route path="/quotes" element={<Quotes/>} />



      </Routes>
    
    </>
  );
}

export default App;
