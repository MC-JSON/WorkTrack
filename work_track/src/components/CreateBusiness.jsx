import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//form for creating new business into database
const CreateBusiness = (props) => {
  let { ownerId } = useParams()

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

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/portal/${ownerId}`)
  }

  const {
    businessName,
    businessAddress,
    businessCity,
    businessState,
    businessImage
  } = formValue

  return (
    <div className="forms">
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
          <button
            onClick={async () =>
              await axios.post(
                `http://localhost:3001/api/businesses/${ownerId}`,
                formValue
              )
            }
          >
            Create Business
          </button>
        </form>
      </section>
    </div>
  )
}

export default CreateBusiness
