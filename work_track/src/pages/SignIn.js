import { useEffect, useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = ({ setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    ownerEmail: '',
    ownerPassword: ''
  })
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
    setUser(payload)
    //toggleAuthenticated(true)
    ownerList.forEach((owner) => {
      if (payload.email === owner.ownerEmail) {
        navigate(`/portal/${owner.id}`)
      }
      setFormValues({ ownerEmail: '', ownerPassword: '' })
    })
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              onChange={handleChange}
              name="ownerEmail"
              type="email"
              placeholder="youremail@example.com"
              value={formValues.ownerEmail}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="ownerPassword"
              value={formValues.ownerPassword}
              required
            />
          </div>
          <button
            disabled={!formValues.ownerEmail || !formValues.ownerPassword}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
