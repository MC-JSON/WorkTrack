import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


//built for edits
const UpdateEmployee = ({ employee, jobs, user, businessId }) => {
  let { employeeId } = useParams()
  // console.log('77777', employees)

  // const [user, setUser] = useState([])

  const [formValue, setFormValue] = useState({
    employeeName: employee.employeeName,
    jobId: employee.jobId
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  // const { employeeName } = formValue

  let navigate = useNavigate()

  // handles update submit and navigates back 
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/employees/${employeeId}`, formValue)
    navigate(`/users/${user.id}/businesses/${businessId}`)
  }

  // handles delete submit and navigates back 
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:3001/api/employees/${employeeId}`)
    navigate('/')
  }


  return (
    // console.log('33333', employees) >
    < div className="forms-wrapper" >
      <h1>Update Employee</h1>
      <div className="forms">
      <form onSubmit={handleSubmit}>
        <select className="create-form-select" name="jobId" onChange={handleChange}>
          {jobs.map((job) => (
            <option value={job.id}>{job.jobTitle}</option>
          ))}
        </select>
        <input
          className="form"
          type="text"
          name="employeeName"
          placeholder="Name"
          value={employee.employeeName}
          onChange={handleChange}
        />
        <br />
        <button type='submit'>Update</button>
        <button onClick={handleSubmit2}>Delete</button>
      </form>
    </div >
    </div>
  )
}

export default UpdateEmployee