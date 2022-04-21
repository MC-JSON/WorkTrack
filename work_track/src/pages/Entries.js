import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import EntryInfo from '../components/EntryInfo'
import CreateEntry from '../components/CreateEntry'

const Entries = ({
  logId,
  startDate,
  endDate,
  employees,
  showLastMonth,
  showYesterday,
  showLastWeek,
  showCustomDateSearch,
  setEntry
}) => {
  const [entries, setEntries] = useState([])
  const [totalHoursWorked, setTotalHoursWorked] = useState()
  const [formValue, setFormValue] = useState({})
  const { searchStartDate, searchEndDate } = formValue
  let navigate = useNavigate()

  const getEntriesByDateRange = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/Entries/${logId}/date-range-search/?startDate=${startDate}&endDate=${endDate}`
    )
    setEntries(response.data.entries)
    setTotalHoursWorked(response.data.sum)
  }
  useEffect(() => {
    getEntriesByDateRange()
  }, [startDate, endDate])

  const createNewEntry = async (data) => {
    await axios.post(`http://localhost:3001/api/entries/${logId}`, data)
    getEntriesByDateRange()
  }

  const updateEntry = (entryId, entry) => {
    setEntry(entry)
    navigate(`/update-entry-page/${entryId}`)
  }

  const deleteEntry = async (entryId) => {
    await axios.delete(`http://localhost:3001/api/entries/${entryId}`)
    getEntriesByDateRange()
  }

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    showCustomDateSearch(formValue.searchStartDate, formValue.searchEndDate)
  }
  return (
    entries && (
      <div className="log-wrapper">
        <div className="create-entry">
          <CreateEntry
            logId={logId}
            createNewEntry={createNewEntry}
            employees={employees}
          />
        </div>
        <div className="quick-view-buttons">
          <div className="preset-searches">
            <button name="last-month" onClick={() => showLastMonth()}>
              Last 30 Days
            </button>
            <button name="last-week" onClick={() => showLastWeek()}>
              Last 7 Days
            </button>
            <button name="yesterday" onClick={() => showYesterday()}>
              Yesterday
            </button>
          </div>
          <div className="custom-date-search">
            <form className="date-range-search-form" onSubmit={handleSubmit}>
              <label>Start Date:</label>
              <input
                className="start-date-range-search"
                type="date"
                name="searchStartDate"
                value={searchStartDate}
                onChange={handleChange}
              />
              <label>End Date:</label>
              <input
                className="end-date-range-search"
                type="date"
                name="searchEndDate"
                value={searchEndDate}
                onChange={handleChange}
              />
              <button type="submit">Search Entries</button>
            </form>
          </div>
        </div>
        <div className="total-hours-worked">
          Total hours worked this period: {totalHoursWorked}
        </div>
        <div className="entries-list">
          {entries.map((entry) => (
            <EntryInfo
              key={entry.id}
              date={entry.date}
              hours={entry.employeeHours}
              employee={entry.employeeId}
              employeeList={employees}
              updateEntry={updateEntry}
              deleteEntry={deleteEntry}
              entryId={entry.id}
            />
          ))}
        </div>
      </div>
    )
  )
}

export default Entries
