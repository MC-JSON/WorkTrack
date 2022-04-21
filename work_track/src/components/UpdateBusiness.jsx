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

  // const { businessAddress, businessCity, businessState, businessImage } =
  // formValue

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
    <div className="update-business-info-wrapper">
      <h1>Update Business</h1>
      <div className="update-business-name">{businessName}</div>
      <form onSubmit={handleSubmit}>
        <input
          className="form"
          type="text"
          name="businessAddress"
          placeholder={businessAddress}
          value={businessAddress}
          onChange={handleChange}
        />
        <input
          className="form"
          type="text"
          name="businessCity"
          placeholder={businessCity}
          value={businessCity}
          onChange={handleChange}
        />
        <input
          className="form"
          type="text"
          name="businessState"
          placeholder={businessState}
          value={businessState}
          onChange={handleChange}
        />
        <input
          className="form"
          type="text"
          name="businessImage"
          placeholder={businessImage}
          value={businessImage}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Update</button>
        <button onClick={handleSubmit2}>Delete</button>
      </form>
    </div>
  )
}

export default UpdateBusiness
