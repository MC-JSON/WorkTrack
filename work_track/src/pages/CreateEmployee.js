import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//form for creating new employee into database
const CreateEmployee = (props) => {
  const [formValue, setFormValue] = useState({
    name: '',
    job: ''
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
    navigate('/view')
  }

  const { name, job } = formValue

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
            name="job"
            placeholder="Job"
            value={job}
            onChange={handleChange}
          />
          <button
            onClick={async () =>
              await axios.post(
                'http://localhost:3001/createemployee',
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

export default CreateEmployee
