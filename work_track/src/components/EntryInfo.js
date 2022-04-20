import { useEffect, useState } from 'react'

const EntryInfo = ({
  date,
  employee,
  hours,
  employeeList,
  updateEntry,
  entryId
}) => {
  const [employeeName, setEmployeeName] = useState()

  useEffect(() => {
    const getEmployeeName = () => {
      employeeList.forEach((employeeListName) => {
        if (employeeListName.id === employee) {
          setEmployeeName(employeeListName.employeeName)
        }
      })
    }
    getEmployeeName()
  })

  return (
    <div className="entry-wrapper">
      <div className="entry-date-and-options">
        <div className="entry-date">{date}</div>
        <button
          name="update-entry-button"
          onClick={() =>
            updateEntry(entryId, {
              date: date,
              employeeId: employee,
              employeeHours: hours,
              employeeName: employeeName
            })
          }
        >
          Update
        </button>
      </div>
      <div className="entry-employee-info">
        <div className="entry-employee">{employeeName}</div>
        <div className="employee-hours">{hours}</div>
      </div>
    </div>
  )
}

export default EntryInfo
