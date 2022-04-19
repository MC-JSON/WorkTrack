import { useEffect, useState } from 'react'

const EntryInfo = ({ dateMonth, dateDay, dateYear, employee, hours }) => {
  return (
    <div className="entry-wrapper">
      <div className="entry-date">
        {dateMonth}/{dateDay}/{dateYear}
      </div>
      <div className="entry-employee">{employee}</div>
      <div className="employee-hours">{hours}</div>
    </div>
  )
}

export default EntryInfo
