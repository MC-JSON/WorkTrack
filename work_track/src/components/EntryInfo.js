import { useEffect, useState } from 'react'
import axios from 'axios'

const EntryInfo = ({
  date,
  employee,
  hours,
  employeeList,
  updateEntry,
  entryId,
  deleteEntry
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
        <div className="option-buttons">
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
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            name="delete-entry-button"
            onClick={() => {
              window.confirm('Are you sure you want to delete this entry?')
                ? deleteEntry(entryId)
                : console.log('cancel')
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
      <div className="entry-employee-info">
        <div className="entry-employee">Employee: {employeeName}</div>
        <div className="employee-hours">Hours: {hours}</div>
      </div>
    </div>
  )
}

export default EntryInfo
