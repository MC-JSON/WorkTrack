import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import EntryInfo from '../components/EntryInfo'

const Entries = ({
  logId,
  firstMonth,
  firstDay,
  firstYear,
  lastMonth,
  lastDay,
  lastYear,
  employees,
  showLastMonth,
  showYesterday,
  showLastWeek
}) => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const getEntriesByDateRange = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/Entries/${logId}/date-range-search/?firstMonth=${firstMonth}&firstDay=${firstDay}&firstYear=${firstYear}&lastMonth=${lastMonth}&lastDay=${lastDay}&lastYear=${lastYear}`
      )
      console.log('entries: ', response.data)
      setEntries(response.data)
    }
    getEntriesByDateRange()
  }, [firstMonth, firstDay, firstYear])

  return (
    entries && (
      <div className="log-wrapper">
        <div className="quick-view-buttons">
          <button
            name="last-month"
            onClick={() => showLastMonth(lastMonth, lastDay, lastYear)}
          >
            Last Month
          </button>
          <button
            name="last-week"
            onClick={() => showLastWeek(lastMonth, lastDay, lastYear)}
          >
            Last week
          </button>
          <button
            name="yesterday"
            onClick={() => showYesterday(lastMonth, lastDay, lastYear)}
          >
            Yesterday
          </button>
        </div>
        <div className="entries-list">
          {entries.map((entry) => (
            <EntryInfo
              key={entry.id}
              dateMonth={entry.dateMonth}
              dateDay={entry.dateDay}
              dateYear={entry.dateYear}
              employee={entry.employeeId}
              hours={entry.employeeHours}
              employeeList={employees}
            />
          ))}
        </div>
      </div>
    )
  )
}

export default Entries
