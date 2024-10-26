import './App.css'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import About from './pages/About/About'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <NavBar />
      <div className="flex h-auto bg-blue-400">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/NavBar" element={<NavBar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
