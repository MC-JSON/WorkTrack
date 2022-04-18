import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CreateEmployee from '../components/CreateEmployee'
import CreatePosition from '../components/CreatePosition'
import EmployeeInfo from '../components/EmployeeInfo'
import Entries from './Entries'
import CreateEntry from '../components/CreateEntry'
import axios from 'axios'

const BusinessView = ({ props, user, authenticated }) => {
  let navigate = useNavigate()
  let { ownerId, businessId } = useParams()
  const [logId, setLogId] = useState()
  const [jobs, setJobs] = useState([])
  const [employees, setEmployees] = useState([])

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
    getLog()
    getEmployees()
    getJobs()
  }, [])

  return user && authenticated && logId ? (
    <div>
      <h1>Business Homepage</h1>

      <div className="employee-list-headings">Employees & Position:</div>
      <br />
      <div className="employee-list">
        {employees.map((employee) => (
          <EmployeeInfo
            key={employee.id}
            name={employee.employeeName}
            job={employee.jobId}
            jobList={jobs}
          />
        ))}
      </div>
      <Entries logId={logId} />
      <div>
        {/* dropdown menu with modal pop-up?; logs; reports */}
        <CreateEmployee ownerId={ownerId} businessId={businessId} />
        <CreatePosition ownerId={ownerId} businessId={businessId} />
        <CreateEntry ownerId={ownerId} businessId={businessId} logId={logId} />
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
