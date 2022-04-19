import BusinessPortal from './pages/BusinessPortal'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import './styles/App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Register from './pages/Register'
import BusinessView from './pages/BusinessView'
import Entries from './pages/Entries'
import { CheckSession } from './services/Auth'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    console.log('test')
    const user = await CheckSession()
    console.log(user)
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)

    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setUser={setUser}
                user={user}
                authenticated={authenticated}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/users/:userId/businesses/:businessId"
            element={<BusinessView user={user} authenticated={authenticated} />}
          />
          <Route
            path="/portal/:ownerId"
            element={
              <BusinessPortal user={user} authenticated={authenticated} />
            }
          />
          <Route
            path="/users/:userId/businesses/:businessId/log"
            element={<Entries user={user} authenticated={authenticated} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
