import { useEffect, useState } from 'react'

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
