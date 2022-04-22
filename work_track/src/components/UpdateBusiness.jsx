import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//built for edits
const UpdateBusiness = ({
  businessName,
  businessAddress,
  businessCity,
  businessState,
  businessImage,
  user,
  authenticated
}) => {
  let { businessId } = useParams()

  const [formValue, setFormValue] = useState({
    businessAddress: businessAddress,
    businessCity: businessCity,
    businessState: businessState,
    businessImage: businessImage
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  let navigate = useNavigate()

  // handles update submit and navigates back
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(
      `http://localhost:3001/api/businesses/${businessId}`,
      formValue
    )
    navigate(`/users/${user.id}/businesses/${businessId}`)
  }

  // handles delete submit and navigates back
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:3001/api/businesses/${businessId}`)
    navigate(`/portal/${user.id}`)
  }

  return (
    <div className="forms-wrapper">
      <h1>{businessName}</h1>
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            type="text"
            name="businessAddress"
            placeholder="Address"
            value={businessAddress}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="businessCity"
            placeholder="City"
            value={businessCity}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="businessState"
            placeholder="State"
            value={businessState}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="businessImage"
            placeholder="Image"
            value={businessImage}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Update</button>
          <button onClick={handleSubmit2}>Delete</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateBusiness
