import BusinessPortal from './pages/BusinessPortal'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import './styles/App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Register from './pages/Register'
import BusinessView from './pages/BusinessView'
import UpdateBusiness from './components/UpdateBusiness'
import UpdateEmployeePage from './pages/UpdateEmployeePage'
import UpdateEntryPage from './pages/UpdateEntryPage'
import UpdatePositionPage from './pages/UpdatePositionPage'
import CreateEmployee from './components/CreateEmployee'
import CreatePosition from './components/CreatePosition'
import CreateEntry from './components/CreateEntry'
import CreateBusiness from './components/CreateBusiness'
import Entries from './pages/Entries'
import { CheckSession } from './services/Auth'
import axios from 'axios'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState('')
  const [todayDate, setTodayDate] = useState(new Date())
  const [todayDay, setTodayDay] = useState(todayDate.getDate())
  const [todayMonth, setTodayMonth] = useState(todayDate.getMonth() + 1)
  const [todayYear, setTodayYear] = useState(todayDate.getFullYear())
  const [businesses, setBusinesses] = useState([])
  const [businessName, setBusinessName] = useState()
  const [businessId, setBusinessId] = useState()
  const [employees, setEmployees] = useState([])
  const [employee, setEmployee] = useState()
  const [entry, setEntry] = useState()
  const [jobs, setJobs] = useState([])
  const [logs, setLogs] = useState([])
  const [businessAddress, setBusinessAddress] = useState([])
  const [businessCity, setBusinessCity] = useState([])
  const [businessState, setBusinessState] = useState([])
  const [businessImage, setBusinessImage] = useState([])

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

  const getUserName = async () => {
    const userInfo = await axios.get(
      `https://worktrack-backend.herokuapp.com/api/owners/${user.id}`
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
            path="/users/:userId/businesses/:businessId/"
            element={
              <BusinessView
                user={user}
                authenticated={authenticated}
                todayMonth={todayMonth}
                todayDay={todayDay}
                todayYear={todayYear}
                businessName={businessName}
                setEntry={setEntry}
                employees={employees}
                setEmployees={setEmployees}
                setJobs={setJobs}
                jobs={jobs}
                setEmployee={setEmployee}
                setBusinessId={setBusinessId}
              />
            }
          />
          <Route
            path="/portal/:ownerId"
            element={
              <BusinessPortal
                user={user}
                authenticated={authenticated}
                setBusinesses={setBusinesses}
                businesses={businesses}
                setBusinessName={setBusinessName}
                setBusinessAddress={setBusinessAddress}
                setBusinessCity={setBusinessCity}
                setBusinessState={setBusinessState}
                setBusinessImage={setBusinessImage}
              />
            }
          />
          <Route
            path="/users/:userId/businesses/:businessId/log"
            element={<Entries user={user} authenticated={authenticated} />}
          />
          <Route
            path="/update-businesses/:businessId"
            element={
              <UpdateBusiness
                user={user}
                authenticated={authenticated}
                businessName={businessName}
                businessAddress={businessAddress}
                businessCity={businessCity}
                businessState={businessState}
                businessImage={businessImage}
              />
            }
          />
          <Route
            path="/update-employee-page/:employeeId"
            element={
              <UpdateEmployeePage
                businessId={businessId}
                employee={employee}
                jobs={jobs}
                user={user}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/update-entry-page/:entryId"
            element={
              <UpdateEntryPage
                user={user}
                authenticated={authenticated}
                entry={entry}
                employees={employees}
                businessId={businessId}
              />
            }
          />
          <Route
            path="/update-position-page/:businessId"
            element={
              <UpdatePositionPage
                user={user}
                authenticated={authenticated}
                jobs={jobs}
                businessId={businessId}
              />
            }
          />
          <Route
            path="/create-employee/:businessId"
            element={
              <CreateEmployee user={user} businesses={businesses} jobs={jobs} />
            }
          />
          <Route
            path="/create-job/:businessId"
            element={<CreatePosition user={user} businesses={businesses} />}
          />
          <Route
            path="/create-business/:ownerId"
            element={<CreateBusiness user={user} businesses={businesses} />}
          />
          <Route
            path="/create-entry"
            element={
              <CreateEntry user={user} businesses={businesses} logs={logs} />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
