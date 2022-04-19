import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import EntryInfo from '../components/EntryInfo'

const Entries = (props) => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const getEntries = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/Entries/${props.logId}`
      )
      console.log('entries: ', response.data)
      setEntries(response.data)
    }
    getEntries()
  }, [])

  return (
    entries && (
      <div className="entries-list">
        {entries.map((entry) => (
          <EntryInfo
            key={entry.id}
            dateMonth={entry.dateMonth}
            dateDay={entry.dateDay}
            dateYear={entry.dateYear}
            employee={entry.employeeId}
            hours={entry.employeeHours}
          />
        ))}
      </div>
    )
  )
}

export default Entries
