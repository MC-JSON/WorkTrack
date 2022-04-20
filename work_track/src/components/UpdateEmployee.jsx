import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


//built for edits
const UpdateEmployee = ({employees}) => {

  let { employeeId } = useParams()
  
  // const [employees, setEmployees] = useState()

  const [formValue, setFormValue] = useState({
    employeeName: employees.employeeName,
    jobId: employees.jobId
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  const { employeeName } = formValue

  let navigate = useNavigate()

  // handles update submit and navigates back 
  const handleSubmit = async (e) => {
    e.preventDefault()
      await axios.put(`http://localhost:3001/api/employees/${employeeId}`, formValue)
      navigate('/')
  }

// handles delete submit and navigates back 
  const handleSubmit2 = async (e) => {
    e.preventDefault()
      await axios.delete(`http://localhost:3001/api/employees/${employeeId}`, formValue)
      navigate('/')
  }

  // useEffect(() => {
  //   const getEmployees = async () => {
  //     const response = await axios.get(
  //       `http://localhost:3001/api/employees/${businessId}}`
  //     )
  //     console.log("employees: ", props.employeeId)
  //     setEmployees(response.data)
  //   }
  //   getEmployees()
  // }, [])

  return (
    <div className="info-wrapper">
      <form onSubmit={handleSubmit}>
      <select className="create-form-select" name="employeeId" onChange={handleChange}>
            {employees.map((employee) => (
            <option value={employee.id}>{employee.employeeName}</option>
            ))}
            </select>
            <input
            className="form"
            type="text"
            name="employeeName"
            placeholder="Name"
            value={employeeName}
            onChange={handleChange}
          />
        <br />
        <button type='submit'>Update</button>
      <button onClick={handleSubmit2}>Delete</button>
      </form>
    </div>
  )
}

export default UpdateEmployee