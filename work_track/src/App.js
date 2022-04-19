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
import axios from 'axios'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState('')

  const handleLogOut = () => {
    console.log(user)
    setUser(null)
    console.log('user', user)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  const getUserName = async () => {
    const userInfo = await axios.get(
      `http://localhost:3001/api/owners/${user.id}`
    )
    console.log('userInfo: ', userInfo)
    setUserName(userInfo.data.ownerName)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    if (user) {
      getUserName()
    }
  }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        userName={userName}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home
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
