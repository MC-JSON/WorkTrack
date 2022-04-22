import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      ownerName: formValues.name,
      ownerEmail: formValues.email,
      ownerPassword: formValues.password
    })
    setFormValues({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/')
  }

  return (
    <div className="forms-wrapper">
      <h1>Registration</h1>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Your Name"
            value={formValues.name}
            required
          />
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Your Login Email"
            value={formValues.email}
            required
          />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Your Password"
            value={formValues.password}
            required
          />
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            required
          />
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
