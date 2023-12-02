import logo from './logo.svg';
import './App.css';
import About from './pages/about'
import Home from './pages/home';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Skills from './pages/skills';
import Navbar from './components/navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      app
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>


      </Routes>
    </div>
    </Router>
  );
}

export default App;
