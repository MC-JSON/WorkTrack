import BusinessPortal from './pages/BusinessPortal'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import './styles/App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import BusinessView from './pages/BusinessView'
import CreateBusiness from './pages/CreateBusiness'
import CreateEmployee from './pages/CreateEmployee'
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
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav 
      authenticated={authenticated}
      user={user}
      handleLogOut={handleLogOut}/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" 
          element={<SignIn setUser={setUser} 
          toggleAuthenticated={toggleAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view" element={<BusinessView 
          user={user} 
          authenticated={authenticated}/>} />
          <Route path="/createbusiness" element={<CreateBusiness
          user={user}
          authenticated={authenticated} />} />
          <Route path="/createemployee" element={<CreateEmployee 
          user={user}
          authenticated={authenticated}/>} />
          <Route path="/portal" element={<BusinessPortal />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
