import { useEffect, useState } from 'react'

const EntryInfo = ({ date, employee, hours, employeeList }) => {
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
      <div className="entry-date">{date}</div>
      <div className="entry-employee">{employeeName}</div>
      <div className="employee-hours">{hours}</div>
    </div>
  )
}

export default EntryInfo
