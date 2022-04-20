import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//built for edits
const UpdateEntry = ({ entry, employees }) => {
  let { entryId } = useParams()

  const [formValue, setFormValue] = useState({
    entryDate: entry.date,
    employeeId: entry.employeeId,
    employeeHours: entry.employeeHours
  })

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  const { entryDate, employeeHours } = formValue

  let navigate = useNavigate()

  // handles update submit and navigates back
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/entries/${entryId}`, formValue)
    navigate('/')
  }

  // handles delete submit and navigates back
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    await axios.delete(
      `http://localhost:3001/api/entries/${entryId}`,
      formValue
    )
    navigate('/')
  }

  return (
    <div className="update-entry-wrapper">
      <form className="update-entry-form" onSubmit={handleSubmit}>
        <input
          className="form"
          type="text"
          name="entryDate"
          placeholder="MM/DD/YYYY"
          value={entryDate}
          onChange={handleChange}
        />
        <select
          className="employee-select"
          name="employee"
          onChange={handleChange}
        >
          {employees.map((employee) => (
            <option value={employee.id}>{employee.employeeName}</option>
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
        <button onClick={() => handleSubmit2}>Delete</button>
      </form>
    </div>
  )
}

export default UpdateEntry
