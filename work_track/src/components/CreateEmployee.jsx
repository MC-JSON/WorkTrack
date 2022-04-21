import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//form for creating new employee into database
const CreateEmployee = (props) => {
  let { businessId, userId } = useParams()

  const [jobs, setJobs] = useState([])

  const [formValue, setFormValue] = useState({
    employeeName: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(
      `http://localhost:3001/api/employees/${businessId}/`,
      formValue
    )
    navigate(`/users/${userId}/businesses/${businessId}`)
  }

  useEffect(() => {
    const getJobs = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/jobs/${businessId}`
      )
      setJobs(response.data)
    }
    getJobs()
  }, [])

  const { employeeName } = formValue

  return (
    <div className="create-employee-page">
      <h1>Create Employee</h1>
      <section className="input-section">
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            type="text"
            name="employeeName"
            placeholder="Name"
            value={employeeName}
            onChange={handleChange}
          />
          <select
            className="create-form-select"
            name="jobId"
            onChange={handleChange}
          >
            <option value="" disabled selected hidden>
              Select Job
            </option>
            {jobs.map((job) => (
              <option value={job.id}>{job.jobTitle}</option>
            ))}
          </select>
          <button type="submit">Create Employee</button>
        </form>
      </section>
    </div>
  )
}

export default CreateEmployee
