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

  const handleSubmit2 = (e) => {
    e.preventDefault()
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
    <div className="forms-wrapper">
      <h1>Create Employee</h1>
      <div className="forms">
        <section className="input-section">
          <form className="create-employee-form" onSubmit={handleSubmit}>
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
            <button
              className="cancel-create-employee-button"
              onClick={handleSubmit2}
            >
              Cancel
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default CreateEmployee
