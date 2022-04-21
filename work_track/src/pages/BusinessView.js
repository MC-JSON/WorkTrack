import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CreateEmployee from '../components/CreateEmployee'
import CreatePosition from '../components/CreatePosition'
import EmployeeInfo from '../components/EmployeeInfo'
import Entries from './Entries'
import CreateEntry from '../components/CreateEntry'
import UpdateEmployee from '../components/UpdateEmployee'
import UpdatePosition from '../components/UpdatePosition'
import UpdateBusiness from '../components/UpdateBusiness'
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
  setBusinessId(businessId)

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
          <button onClick={() => navigate(`/update-businesses/${businessId}`)}>
            Update Business
          </button>
          <button onClick={() => navigate(`/create-employee/${businessId}`)}>
            Create Employees
          </button>
          <button onClick={() => navigate(`/create-job/${businessId}`)}>
            Create Jobs
          </button>
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
        setEntry={setEntry}
        ownerId={ownerId}
        businessId={businessId}
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
