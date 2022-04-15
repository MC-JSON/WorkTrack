import { useState } from 'react'
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
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
