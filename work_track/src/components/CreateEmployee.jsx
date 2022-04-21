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
      [name]: value,
    })
  }

  let navigate = useNavigate()

  const handleSubmit = (e) => {
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
    <div className="forms">
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
            <option value='' disabled selected hidden>Select Job</option>
            {jobs.map((job) => (
              <option value={job.id}>{job.jobTitle}</option>
            ))}
          </select>
          <button
            onClick={async () =>
              await axios.post(
                `http://localhost:3001/api/employees/${businessId}/`,
                formValue
              )
            }
          >
            Create Employee
          </button>
        </form>
      </section>
    </div>
  )
}

export default CreateEmployee
