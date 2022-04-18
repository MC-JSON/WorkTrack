import { useEffect } from 'react'

const EmployeeInfo = ({ key, name, job, jobList }) => {
  useEffect(() => {
    const getJobName = () => {
      jobList.forEach(job)
    }
  })

  return (
    <div className="employee-info-wrapper">
      <div className="employee-name">{name}</div>
      <div className="employee-job"></div>
    </div>
  )
}

export default EmployeeInfo
