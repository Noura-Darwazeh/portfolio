import logo from './logo.svg';
import './App.scss';
import About from './pages/about'
import Home from './pages/home';
import Contact from './pages/contact';
import Navbar from './components/navBar';
import Particles from 'react-tsparticles';
import particles from './utils/particles';
import { loadFull } from 'tsparticles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/projects';

function App() {
  const handleInit = async (main) => {
    await loadFull(main)
  }
  return (
    <Router>
      <div className="App">
        <Particles id='particals' options={particles} init={handleInit} />

        <Navbar />

        <div className='App__main-page-content'>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
