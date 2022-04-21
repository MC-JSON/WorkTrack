import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//built for edits
const UpdatePosition = ({jobs, user}) => {
  let { jobId, businessId } = useParams()

  const [formValue, setFormValue] = useState({
    jobTitle: jobs.jobTitle,
    jobDescription: jobs.jobDescription
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
    await axios.delete(
      `http://localhost:3001/api/jobs/${jobId}`
    )
    navigate(`/users/${user.id}/businesses/${businessId}`)
  }

  const { jobTitle, jobDescription } = formValue

  return (
      <div className="info-wrapper">
        <form onSubmit={handleSubmit}>
          <select
            className="create-form-select"
            name="jobId"
            type="number"
            onChange={handleChange}
          >
            <option value='' disabled selected hidden>Select Job</option>
            {jobs.map((job) => (
            <option value={parseInt(job.id)}>{job.jobTitle}</option>
          ))}
          </select>
          {/* <input
            className="form"
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={jobTitle}
            onChange={handleChange}
          /> */}
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
    )
}

export default UpdatePosition
