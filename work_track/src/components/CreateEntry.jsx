import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//form for creating new entry into database
const CreateEntry = (props) => {
  let { businessId, userId } = useParams()

  const [formValue, setFormValue] = useState({
    dateMonth: '',
    dateDay: '',
    dateYear: '',
    employeeId: '',
    employeeHours: ''
  })

  const [employees, setEmployees] = useState([])

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
    const getEmployees = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/employees/${businessId}`
      )
      setEmployees(response.data)
    }
    getEmployees()
  }, [])

  const {  dateMonth, dateDay, dateYear, employeeHours } = formValue

  return (
    <div className="forms">
      <section className="input-section">
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            type="integer"
            name="dateMonth"
            placeholder="Month"
            value={dateMonth}
            onChange={handleChange}
          />
          <input
            className="form"
            type="integer"
            name="dateDay"
            placeholder="Day"
            value={dateDay}
            onChange={handleChange}
          />
          <input
            className="form"
            type="integer"
            name="dateYear"
            placeholder="Year"
            value={dateYear}
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
                `http://localhost:3001/api/entries/${props.logId}/`,
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
