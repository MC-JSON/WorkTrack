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
  const [today, setToday] = useState(new Date())
  const [todayDay, setTodayDay] = useState(today.getDate())
  const [todayMonth, setTodayMonth] = useState(today.getMonth() + 1)
  const [todayYear, setTodayYear] = useState(today.getFullYear())

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
    let today = new Date()
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
            path="/users/:userId/businesses/:businessId/"
            element={
              <BusinessView
                user={user}
                authenticated={authenticated}
                todayDay={todayDay}
                todayMonth={todayMonth}
                todayYear={todayYear}
              />
            }
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
