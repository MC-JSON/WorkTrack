import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import './styles/App.css'
import Nav from './components/Nav'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)






  return (
    <div className="App">
      {/* <Nav/ > */}
      <main>
        <Routes></Routes>
      </main>
    </div>
  )
}

export default App
