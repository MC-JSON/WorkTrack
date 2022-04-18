import { useEffect, useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import SignIn from './SignIn'

const Home = ({ setUser, toggleAuthenticated, user }) => {
  let navigate = useNavigate()

  // const handleChange = (e) => {
  //   setFormValues({ ...formValues, [e.target.name]: e.target.value })
  // }

  // useEffect(() => {
  //   const getOwners = async () => {
  //     const res = await axios.get('http://localhost:3001/api/owners/')
  //     setOwnerList(res.data)
  //   }
  //   getOwners()
  // }, [])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const payload = await SignInUser(formValues)
  //   setFormValues({ email: '', password: '' })
  //   setUser(payload)
  //   //toggleAuthenticated(true)
  //   ownerList.forEach((owner) => {
  //     if (payload.email === owner.ownerEmail) {
  //       navigate(`/portal/${owner.id}`)
  //     }
  //   })
  // }

  return (
    <div>
      <div className="site-title-wrapper">
        <div className="site-title">
          W <i className="fa-solid fa-clock"></i> r k T r a c k
        </div>
        <div className="site-slogan">The daily work log, redefined</div>
      </div>

      <div className="login-form-wrapper">
        <SignIn setUser={setUser} user={user} />
      </div>
    </div>
  )
}

export default Home

// <form className="login-form" onSubmit={handleSubmit}>
//   <div className="email-input">
//     <label>Email:</label>
//     <input
//       onChange={handleChange}
//       name="email"
//       type="email"
//       placeholder="your_email@example.com"
//       value={formValues.email}
//       required
//     />
//   </div>
//   <div className="password-input">
//     <label>Password:</label>
//     <input
//       onChange={handleChange}
//       type="password"
//       name="password"
//       value={formValues.password}
//       required
//     />
//   </div>
//   <button
//     disabled={!formValues.email || !formValues.password}
//     className="login-button"
//   >
//     Sign In
//   </button>
// </form>
