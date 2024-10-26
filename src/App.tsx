import './App.css'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Stocks from './pages/Stocks/Stocks'
import { UserProvider } from './components/userContext/UserContext'
import Register from './pages/userPages/Register'
import Login from './pages/userPages/Login'
import Wallet from './pages/Wallet/Wallet'

function App() {
  return (
    <>
      <UserProvider>
        <NavBar />
        <div className="flex h-auto bg-blue-400">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </UserProvider>
    </>
  )
}

export default App
