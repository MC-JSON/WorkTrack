import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import EmployeeInfo from '../components/EmployeeInfo'
import Entries from './Entries'
import axios from 'axios'

const BusinessView = ({
  user,
  authenticated,
  todayDay,
  todayMonth,
  todayYear,
  businessName,
  setEntry,
  employees,
  setEmployees,
  setJobs,
  jobs,
  setEmployee,
  setBusinessId
}) => {
  let navigate = useNavigate()
  let { ownerId, businessId } = useParams()
  const [logId, setLogId] = useState()
  const [thisBusinessName, setBusinessName] = useState(businessName)
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
    setBusinessId(businessId)
    getLog()
    getEmployees()
    getJobs()
  }, [])

  const showLastMonth = () => {
    if (todayMonth === 0) {
      setStartDate(`12/${todayDay}/${todayYear - 1}`)
      setEndDate(`${todayMonth}/${todayDay}/${todayYear}`)
    } else {
      setStartDate(`${todayMonth - 1}/${todayDay}/${todayYear}`)
      setEndDate(`${todayMonth}/${todayDay}/${todayYear}`)
    }
  }

  const showYesterday = () => {
    setStartDate(`${todayMonth}/${todayDay - 1}/${todayYear}`)
    setEndDate(`${todayMonth}/${todayDay - 1}/${todayYear}`)
  }

  const showLastWeek = () => {
    setStartDate(`${todayMonth}/${todayDay - 7}/${todayYear}`)
    setEndDate(`${todayMonth}/${todayDay}/${todayYear}`)
  }

  const showCustomDateSearch = (searchStartDate, searchEndDate) => {
    setStartDate(searchStartDate)
    setEndDate(searchEndDate)
  }
  const updateEmployee = (employeeId, employee) => {
    setEmployee(employee)
    navigate(`/update-employee-page/${employeeId}`)
  }
  return user && authenticated && logId ? (
    <div className="business-page-wrapper">
      <div className="business-info-wrapper">
        <h1>{`${thisBusinessName}`} Homepage</h1>
      </div>

      <div className="crud-wrapper">
        <div className="crud-functions">
          <Link to={`/update-position-page/${businessId}`}>Update Jobs</Link>
          <Link to={`/update-businesses/${businessId}`}>Update Business</Link>
          <Link to={`/create-employee/${businessId}`}>Create Employees</Link>
          <Link to={`/create-job/${businessId}`}>Create Jobs</Link>
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
        showCustomDateSearch={showCustomDateSearch}
        setEntry={setEntry}
        ownerId={ownerId}
        businessId={businessId}
      />

      <div className="employee-wrapper">
        <div className="employee-list-headings">Employees & Position:</div>
        <div className="employee-list">
          {employees.map((employee) => (
            <EmployeeInfo
              key={employee.id}
              name={employee.employeeName}
              job={employee.jobId}
              jobList={jobs}
              employeeId={employee.id}
              updateEmployee={updateEmployee}
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
