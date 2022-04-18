import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//form for creating new positions into database
const CreatePosition = (props) => {
  let { businessId } = useParams()

  const [formValue, setFormValue] = useState({
    jobTitle: '',
    jobDescription: ''
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
    navigate(`/view/${businessId}`)
  }

  const { jobTitle, jobDescription } = formValue

  return (
    <div className="forms">
      <section className="input-section">
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={jobTitle}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="jobDescription"
            placeholder="Job Description"
            value={jobDescription}
            onChange={handleChange}
          />
          <button
            onClick={async () =>
              await axios.post(
                `http://localhost:3001/api/jobs/${businessId}`,
                formValue
              )
            }
          >
            Create Position
          </button>
        </form>
      </section>
    </div>
  )
}

export default CreatePosition
