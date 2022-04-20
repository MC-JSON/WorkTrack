import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import EntryInfo from '../components/EntryInfo'

const Entries = ({
  logId,
  startDate,
  endDate,
  employees,
  showLastMonth,
  showYesterday,
  showLastWeek
}) => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const getEntriesByDateRange = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/Entries/${logId}/date-range-search/?startDate=${startDate}&endDate=${endDate}`
      )
      console.log('entries: ', response.data)
      setEntries(response.data)
    }
    getEntriesByDateRange()
  }, [startDate, endDate])

  return (
    entries && (
      <div className="log-wrapper">
        <div className="quick-view-buttons">
          <button name="last-month" onClick={() => showLastMonth()}>
            Last Month
          </button>
          <button name="last-week" onClick={() => showLastWeek()}>
            Last week
          </button>
          <button name="yesterday" onClick={() => showYesterday()}>
            Yesterday
          </button>
        </div>
        <div className="entries-list">
          {entries.map((entry) => (
            <EntryInfo
              key={entry.id}
              date={entry.date}
              hours={entry.employeeHours}
              employee={entry.employeeId}
              employeeList={employees}
            />
          ))}
        </div>
      </div>
    )
  )
}

export default Entries
