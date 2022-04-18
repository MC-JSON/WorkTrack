import { useState } from 'react'
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

<<<<<<< HEAD
  // useEffect(() => {
  //   const getOwners = async () => {
  //     const res = await axios.get('http://localhost:3001/api/owners/')
  //     setOwnerList(res.data.owners)
  //   }
  //   getOwners()
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
=======
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    await setUser(payload)
>>>>>>> ad281d9b531b65e80fc2a5f766266a41700c569f
    setFormValues({ ownerEmail: '', ownerPassword: '' })
    setUser(payload)
    toggleAuthenticated(true)
<<<<<<< HEAD
    // ownerList.forEach((owner) => {
    //   if (owner.ownerEmail === owner.ownerEmail) {
=======
>>>>>>> ad281d9b531b65e80fc2a5f766266a41700c569f
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
