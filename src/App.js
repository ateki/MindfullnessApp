import {Routes, Route} from 'react-router-dom';


import Header from './components/Header'

import Landing from './pages/Landing'
import Menu from './pages/Menu'
import Garden from './pages/Garden'
import About from './pages/About'
import Contact from './pages/Contact'


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



      </Routes>
    
    </>
  );
}

export default App;
