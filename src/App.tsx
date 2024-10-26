import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import About from './pages/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="flex h-auto bg-gradient-to-b from-blue-400 to-blue-300">
        <Routes>
          <Route path="/" element={
            <>
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
            </>
          } />
          <Route path="/NavBar" element={<NavBar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
