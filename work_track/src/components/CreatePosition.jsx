import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//form for creating new positions into database
const CreatePosition = (props) => {
  let { businessId, userId } = useParams()

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
    navigate(`/users/${userId}/businesses/${businessId}`)
  }

  const { jobTitle, jobDescription } = formValue

  return (
    <div className="forms-wrapper">
      <h1>Create Position</h1>
      <div className="forms">
        <section className="input-section">
          <form className="create-position-form" onSubmit={handleSubmit}>
            <input
              className="create-position-form-job-title"
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={jobTitle}
              onChange={handleChange}
            />
            <input
              className="create-position-form-job-description"
              type="text"
              name="jobDescription"
              placeholder="Job Description"
              value={jobDescription}
              onChange={handleChange}
            />
            <button
              className="create-employee-button"
              onClick={async () =>
                await axios.post(
                  `https://worktrack-backend.herokuapp.com/api/jobs/${businessId}`,
                  formValue
                )
              }
            >
              Create Position
            </button>
            <button className="cancel-create-employee" type="submit">
              Cancel
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default CreatePosition
