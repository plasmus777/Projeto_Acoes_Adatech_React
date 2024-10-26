import './App.css'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Stocks from './pages/Stocks/Stocks'

function App() {
  return (
    <>
      <NavBar />
      <div className="flex h-auto bg-blue-400">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks" element={<Stocks />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
