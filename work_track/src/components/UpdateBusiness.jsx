import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//built for edits
const UpdateBusiness = (props) => {

  let {businessId} = useParams()

  const [formValue, setFormValue] = useState({
    businessName: props.businessName,
    businessAddress: props.businessAddress,
    businessCity: props.businessCity,
    businessState: props.businessState,
    businessImage: props.businessImage
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  const { businessAddress, businessCity, businessState, businessImage } =
    formValue

  let navigate = useNavigate()

  // handles update submit and navigates back
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(
      `http://localhost:3001/api/businesses/${businessId}`,
      formValue
    )
    navigate(`/users/${props.user.id}/businesses/${businessId}`)
  }

  // handles delete submit and navigates back
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    await axios.delete(
      `http://localhost:3001/api/businesses/${businessId}`)
    navigate(`/portal/${props.user.id}`)
  }

  // useEffect(() => {
  //   const getBusinesses = async () => {
  //     const response = await axios.get(
  //       `http://localhost:3001/api/businesses/${businessId}}`
  //     )
  //     setBusinesses(response.data)
  //   }
  //   getBusinesses()
  // }, [])

  return (
    <div className="info-wrapper">
      <form onSubmit={handleSubmit}>
        <select
          className="create-form-select"
          name="businessId"
          onChange={handleChange}
        >
          {props.businesses.map((business) => (
            <option value={business.id}>{business.businessName}</option>
          ))}
        </select>
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
  )
}

export default UpdateBusiness
