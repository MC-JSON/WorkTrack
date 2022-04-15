import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//form for creating new business into database
const CreateBusiness = (props) => {
  const [formValue, setFormValue] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    image: ''
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
    navigate('/portal')
  }

  const { name, address, city, state } = formValue

  return (
    <div className="forms">
      <section className="input-section">
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="address"
            placeholder="address"
            value={address}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="city"
            placeholder="city"
            value={city}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="state"
            placeholder="state"
            value={state}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="image"
            placeholder="image"
            value={'image'}
            onChange={handleChange}
          />
          <button
            onClick={async () =>
              await axios.post(
                'http://localhost:3001/:ownerId/create-business',
                formValue
              )
            }
          >
            Create
          </button>
        </form>
      </section>
    </div>
  )
}

export default CreateBusiness
