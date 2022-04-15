import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    //toggleAuthenticated(true)
    navigate('/view')
  }

  return (
    <div>
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

export default SignIn
