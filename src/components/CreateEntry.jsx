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
    <div className="create-entry-form">
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
            defaultValue={'Select Employee'}
            onChange={handleChange}
          >
            <option disabled hidden>
              Select Employee
            </option>
            {employees.map((employee) => (
              <option value={parseInt(employee.id)} key={employee.id}>
                {employee.employeeName}
              </option>
            ))}
          </select>
          <input
            className="new-entry-hours-worked"
            type="number"
            name="employeeHours"
            placeholder="Hours Worked"
            min="0"
            value={employeeHours}
            onChange={handleChange}
          />
          <button className="create-entry-button" type="submit">
            Create Entry
          </button>
        </form>
      </section>
    </div>
  )
}

export default CreateEntry
