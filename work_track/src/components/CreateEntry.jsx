import { useState } from 'react'

//form for creating new entry into database
const CreateEntry = ({ createNewEntry, employees }) => {
  const [formValue, setFormValue] = useState({
    date: '',
    employeeId: '',
    employeeHours: ''
  })
  const { date, employeeHours } = formValue

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    createNewEntry(formValue)
  }
  return (
    <div className="forms">
      <section className="input-section">
        <form className="create-new-entry-form" onSubmit={handleSubmit}>
          <input
            className="new-entry-date"
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
          />
          <select
            className="new-entry-employee-select"
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
            placeholder="Hours Worked"
            value={employeeHours}
            onChange={handleChange}
          />
          <button type="submit">Create Entry</button>
        </form>
      </section>
    </div>
  )
}

export default CreateEntry
