import { useEffect, useState } from 'react'

const EmployeeInfo = ({ name, job, jobList }) => {
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
      <div className="employee-info-wrapper">
        <div className="employee-name">{name}</div>
        <div className="employee-job">{jobTitle}</div>
      </div>
    )
  )
}

export default EmployeeInfo
