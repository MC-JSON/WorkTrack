import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//built for edits
const UpdateEntry = ({ entry, employees, user, businessId }) => {
  let { entryId } = useParams()
  let navigate = useNavigate()

  const [formValue, setFormValue] = useState({
    date: entry.date,
    employeeId: entry.employeeId,
    employeeHours: entry.employeeHours
  })
  const { date, employeeHours } = formValue

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  // handles update submit and navigates back
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/entries/${entryId}`, formValue)
    navigate(`/users/${user.id}/businesses/${businessId}`)
  }

  return (
    <div className="update-entry-wrapper" >
      <h1>Update Entry</h1>
      <div className="forms">
      <form onSubmit={handleSubmit}>
        <input
          className="form"
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
        />
        <select
          className="employee-select"
          name="employeeId"
          type="number"
          onChange={handleChange}
        >
          {employees.map((employee) => (
            <option value={parseInt(employee.id)}>
              {employee.employeeName}
            </option>
          ))}
        </select>
        <input
          className="form"
          type="number"
          name="employeeHours"
          placeholder="Employee Hours"
          value={employeeHours}
          onChange={handleChange}
        />{' '}
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
    </div>
  )
}

export default UpdateEntry
