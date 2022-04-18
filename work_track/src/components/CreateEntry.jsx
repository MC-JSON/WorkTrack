import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//form for creating new entry into database
const CreateEntry = (props) => {
  let { businessId, logId } = useParams()

  const [formValue, setFormValue] = useState({
    entryDate: '',
    employeeId: '',
    employeeHours: ''
  })

  const [employees, setEmployees] = useState([])

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

  useEffect(() => {
    const getEmployees = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/employees/${businessId}`
      )
      setEmployees(response.data)
    }
    getEmployees()
  }, [])

  const {  entryDate, employeeId, employeeHours } = formValue

  return (
    <div className="forms">
      <section className="input-section">
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            type="text"
            name="entryDate"
            placeholder="Date"
            value={entryDate}
            onChange={handleChange}
          />
          <select className="create-form-select" name="employeeId" onChange={handleChange}>
            {employees.map((employee) => (
            <option value={employee.id}>{employee.employeeName}</option>
            ))}
            </select>
          <input
            className="form"
            type="integer"
            name="employeeHours"
            placeholder="Hours Worked"
            value={employeeHours}
            onChange={handleChange}
          />
          <button
            onClick={async () =>
              await axios.post(
                `http://localhost:3001/api/entries/${logId}/`,
                formValue
              )
            }
          >
            Create Entry
          </button>
        </form>
      </section>
    </div>
  )
}

export default CreateEntry
