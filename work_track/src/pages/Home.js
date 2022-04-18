import { useEffect, useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = ({ setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const [ownerList, setOwnerList] = useState([])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const getOwners = async () => {
      const res = await axios.get('http://localhost:3001/api/owners/')
      setOwnerList(res.data.owners)
    }
    getOwners()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    //toggleAuthenticated(true)
    ownerList.forEach((owner) => {
      if (payload.email === owner.ownerEmail) {
        navigate(`/portal/${owner.id}`)
      }
    })
  }

  return (
    <div>
      <h1>WorkTrack</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="youremail@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home
