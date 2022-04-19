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
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="email-input">
          <label>Email</label>
          <input
            onChange={handleChange}
            name="ownerEmail"
            type="email"
            placeholder="your_email@example.com"
            value={formValues.ownerEmail}
            required
          />
        </div>
        <div className="password-input">
          <label>Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="ownerPassword"
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