import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//form for creating new employee into database
const CreateEmployee = (props) => {
  let { businessId } = useParams()

  const [formValue, setFormValue] = useState({
    employeeName: '',
    jobId: ''
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

  const { employeeName, jobId } = formValue

  return (
    <div className="forms">
      <section className="input-section">
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            type="integer"
            name="employeeName"
            placeholder="Name"
            value={employeeName}
            onChange={handleChange}
          />
          <input
            className="form"
            type="integer"
            name="jobId"
            placeholder="Job"
            value={jobId}
            onChange={handleChange}
          />
          <button
            onClick={async () =>
              await axios.post(
                `http://localhost:3001/employees/${businessId}/`,
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
