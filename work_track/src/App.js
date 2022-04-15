import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import BusinessView from './pages/BusinessView'
import CreateBusiness from './pages/CreateBusiness'
import CreateEmployee from './pages/CreateEmployee'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view" element={<BusinessView />} />
          <Route path="/createbusiness" element={<CreateBusiness />} />
          <Route path="/createemployee" element={<CreateEmployee />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
