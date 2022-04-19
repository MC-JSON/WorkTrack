import { useEffect, useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setUser, toggleAuthenticated, user }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    ownerEmail: '',
    ownerPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ ownerEmail: '', ownerPassword: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate(`/portal/${payload.id}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="email-input">
          <input
            onChange={handleChange}
            name="ownerEmail"
            type="email"
            placeholder="Email Address"
            value={formValues.ownerEmail}
            required
          />
        </div>
        <div className="password-input">
          <input
            onChange={handleChange}
            type="password"
            name="ownerPassword"
            placeholder="Password"
            value={formValues.ownerPassword}
            required
          />
        </div>
        <div className="sign-in-button">
          <button
            disabled={!formValues.ownerEmail || !formValues.ownerPassword}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
