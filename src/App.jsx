import './App.css'
import Apifetch from './components/Apifetch'
import Cards from './components/Card'
import Navbar from './components/Navbar'
import Theme from './components/Theme'
import About from './pages/About'
import Home from './pages/Home'
import { Routes, Route, Link } from "react-router-dom";
import Team from './pages/Team'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './pages/ProductDetails'




function App() {
  return (
  <>
    <Navbar/>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/contact">Team</Link>
        <Link to='/apifetch'>ApiFetch</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Team />} />
        <Route path="/apifetch" element={<Apifetch />} />
<Route path="/product/:id" element={<Home />} />      </Routes>
    </>
  )
}

export default App
