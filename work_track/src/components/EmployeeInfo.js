import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UpdateEmployee from './UpdateEmployee'
import axios from 'axios'
// let navigate = useNavigate
const EmployeeInfo = ({ employeeId, name, job, jobList, updateEmployee }) => {
  console.log(employeeId)
  let navigate = useNavigate()
  const [jobTitle, setJobTitle] = useState('')
  useEffect(() => {
    const getJobName = () => {
      jobList.forEach((jobListJob) => {
        if (jobListJob.id === job) {
          setJobTitle(jobListJob.jobTitle)
        }
      })
    }
    getJobName()
  })

  const handleSubmit2 = async (e) => {
    // e.preventDefault()
    await axios.delete(`http://localhost:3001/api/employees/${employeeId}`)
    navigate('/')
  }

  return (
    jobTitle && (
      <div className="employee-info-wrapper">

        <div className="employee-name">{name}</div>
        <div className="employee-job">{jobTitle}</div>
        <button
          name='update-employee-button'
          onClick={() =>
            updateEmployee(employeeId, { employeeName: name, jobTitle: jobTitle, jobId: job }
            )}>Update</button>
        <button
          name='delete-employee-button'
          onClick={() =>
            handleSubmit2()
          }>Delete</button>
      </div>

    )
  )
}

export default EmployeeInfo
