import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

//form for creating new business into database
const CreateBusiness = (props) => {
  let { ownerId } = useParams()

  const [businessId, setBusinessId] = useState()
  const [disable, setDisable] = useState(true)
  const [disabled, setDisabled] = useState(false)

  const [formValue, setFormValue] = useState({
    businessName: '',
    businessAddress: '',
    businessCity: '',
    businessState: '',
    businessImage: ''
  })

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(
      `http://localhost:3001/api/businesses/${ownerId}`,
      formValue
    )
    setDisable(false)
    setDisabled(true)
    console.log('business', response.data.id)
    setBusinessId(response.data.id)
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault()
    const log = await axios.post(`http://localhost:3001/api/logs/${businessId}`)
    setDisable(true)
    setDisabled(false)
    props.getBusinesses()
  }

  const {
    businessName,
    businessAddress,
    businessCity,
    businessState,
    businessImage
  } = formValue

  return (
    <div className="business-form">
      <section className="input-section">
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            type="text"
            name="businessName"
            placeholder="Name"
            value={businessName}
            onChange={handleChange}
          />
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
          <button disabled={disabled} type="submit">
            Create Business
          </button>
          <button disabled={disable} onClick={handleSubmit2}>
            Create Log
          </button>
        </form>
      </section>
    </div>
  )
}

export default CreateBusiness
