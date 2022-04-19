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

  // useEffect(() => {
  //   const getOwners = async () => {
  //     const res = await axios.get('http://localhost:3001/api/owners/')
  //     setOwnerList(res.data)
  //   }
  //   getOwners()
  // }, [])

  const handleSubmit = async (e) => {

    e.preventDefault()
    const payload = await SignInUser(formValues)
    setUser(payload)
    setFormValues({ ownerEmail: '', ownerPassword: '' })
    toggleAuthenticated(true)
    // ownerList.forEach((owner) => {
    //   if (owner.ownerEmail === owner.ownerEmail) {
    //  navigate(`/portal/${user.id}`)
    // console.log(payload)
    // console.log(user.id)
    navigate(`/portal/${payload.id}`)
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
              placeholder="your_email@example.com"
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