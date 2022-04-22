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

  const { jobId, jobDescription } = formValue

  return (
    <div className="forms-wrapper">
      <h1>Update Position</h1>
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <select
            className="create-form-select"
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
            className="form"
            type="text"
            name="jobDescription"
            placeholder="Job Description"
            value={jobDescription}
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

export default UpdatePosition
