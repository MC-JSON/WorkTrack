import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CreateEmployee from '../components/CreateEmployee'
import CreatePosition from '../components/CreatePosition'
import EmployeeInfo from '../components/EmployeeInfo'
import Entries from './Entries'
import CreateEntry from '../components/CreateEntry'
import UpdateEmployee from '../components/UpdateEmployee'
import UpdatePosition from '../components/UpdatePosition'
import axios from 'axios'

const BusinessView = ({
  user,
  authenticated,
  todayDay,
  todayMonth,
  todayYear
}) => {
  let navigate = useNavigate()
  let { ownerId, businessId, employeeId, jobId } = useParams()
  const [logId, setLogId] = useState()
  const [jobs, setJobs] = useState([])
  const [employees, setEmployees] = useState([])
  const [businessName, setBusinessName] = useState('')
  const [startDate, setStartDate] = useState(
    `${todayMonth}/${todayDay - 7}/${todayYear}`
  )
  const [endDate, setEndDate] = useState(
    `${todayMonth}/${todayDay}/${todayYear}`
  )

  useEffect(() => {
    const getLog = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/logs/${businessId}`
      )
      setLogId(response.data[0].id)
    }
    const getEmployees = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/employees/${businessId}`
      )
      setEmployees(response.data)
    }
    const getJobs = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/jobs/${businessId}`
      )
      setJobs(response.data)
    }
    const getBusinessName = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/businesses/${businessId}`
      )
      setBusinessName(response.data.businessName)
    }
    getLog()
    getEmployees()
    getJobs()
    getBusinessName()
  }, [])

  const showLastMonth = () => {
    setStartDate(`${todayMonth - 1}/${todayDay}/${todayYear}`)
    setEndDate(`${todayMonth}/${todayDay}/${todayYear}`)
  }

  const showYesterday = () => {
    setStartDate(`${todayMonth}/${todayDay - 1}/${todayYear}`)
    setEndDate(`${todayMonth}/${todayDay - 1}/${todayYear}`)
  }

  const showLastWeek = () => {
    setStartDate(`${todayMonth}/${todayDay - 7}/${todayYear}`)
    setEndDate(`${todayMonth}/${todayDay}/${todayYear}`)
  }
  return user && authenticated && logId ? (
    <div className="business-page-wrapper">
      <div className="business-info-wrapper">
        <h1>{`${businessName}`} Homepage</h1>
      </div>

      <div className="crud-wrapper">
        <div className="crud-functions">
          {/* dropdown menu with modal pop-up?; logs; reports */}
          <CreateEmployee ownerId={ownerId} businessId={businessId} />
          <CreatePosition ownerId={ownerId} businessId={businessId} />
          <CreateEntry
            ownerId={ownerId}
            businessId={businessId}
            logId={logId}
          />
        </div>
      </div>
      <Entries
        logId={logId}
        employees={employees}
        startDate={startDate}
        endDate={endDate}
        showLastMonth={showLastMonth}
        showYesterday={showYesterday}
        showLastWeek={showLastWeek}
      />

      <div className="employee-wrapper">
        <div className="employee-list-headings">Employees & Position:</div>
        <br />
        <div className="employee-list">
          {employees.map((employee) => (
            <EmployeeInfo
              key={employee.id}
              name={employee.employeeName}
              job={employee.jobId}
              jobList={jobs}
              employeeId={employee.id}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3> oops! you must be signed in to do that</h3>
      <button onClick={() => navigate('/')}>Sign In</button>
    </div>
  )
}

export default BusinessView
