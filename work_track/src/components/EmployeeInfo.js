import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UpdateEmployee from './UpdateEmployee'
import axios from 'axios'
// let navigate = useNavigate
const EmployeeInfo = ({
  employeeId,
  name,
  job,
  jobList,
  updateEmployee,
  deleteEmployee
}) => {
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

  const handleSubmit2 = () => {
    deleteEmployee(employeeId)
  }

  return (
    jobTitle && (
      <div className="employee">
        <div className="employee-info-wrapper">
          <div className="employee-name">{name}</div>
          <div className="employee-job">{jobTitle}</div>
        </div>

        <div className="employee-update-buttons">
          <button
            name="update-employee-button"
            onClick={() =>
              updateEmployee(employeeId, {
                employeeName: name,
                jobTitle: jobTitle,
                jobId: job
              })
            }
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </div>
    )
  )
}

export default EmployeeInfo

// <button
//   name="delete-employee-button"
//   onClick={() => {
//     window.confirm('Are you sure you want to delete this employee?')
//       ? handleSubmit2()
//       : console.log('cancel')
//   }}
// >
//   <i className="fa-solid fa-trash-can"></i>
// </button>
