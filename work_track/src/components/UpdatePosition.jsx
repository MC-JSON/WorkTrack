import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//built for edits
const UpdatePosition = ({ jobs, user }) => {
  let { businessId } = useParams()

  const [formValue, setFormValue] = useState({
    jobTitle: jobs.jobTitle,
    jobDescription: jobs.jobDescription,
    jobId: ''
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
    await axios.put(`http://localhost:3001/api/jobs/${jobId}`, formValue)
    navigate(`/users/${user.id}/businesses/${businessId}`)
  }

  // handles delete submit and navigates back
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:3001/api/jobs/${jobId}`)
    navigate(`/users/${user.id}/businesses/${businessId}`)
  }

  const handleSubmit3 = (e) => {
    e.preventDefault()
    navigate(`/users/${user.id}/businesses/${businessId}`)
  }
  const { jobId, jobDescription } = formValue

  return (
    <div className="forms-wrapper">
      <h1>Update Position</h1>
      <div className="update-position-form-wrapper">
        <form className="update-position-form" onSubmit={handleSubmit}>
          <select
            className="update-job-select"
            name="jobId"
            type="number"
            onChange={handleChange}
          >
            <option value={0} disabled selected hidden>
              Select Job
            </option>
            {jobs.map((job) => (
              <option value={parseInt(job.id)}>{job.jobTitle}</option>
            ))}
          </select>
          <input
            className="update-job-description"
            type="text"
            name="jobDescription"
            placeholder="Job Description"
            value={jobDescription}
            onChange={handleChange}
          />
          <br />
          <button className="update-position-button" type="submit">
            Update
          </button>
          <button className="delete-position-button" onClick={handleSubmit2}>
            Delete
          </button>
          <button
            className="cancel-update-position-button"
            onClick={handleSubmit3}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePosition
