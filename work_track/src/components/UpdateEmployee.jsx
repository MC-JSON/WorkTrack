import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


//built for edits
const UpdateEmployee = ({ user, employees }) => {
  // console.log(employees)
  // console.log(props)

  // let { businessId } = useParams()

  // const [employees, setEmployees] = useState([])
  console.log('77777', employees)

  // const [user, setUser] = useState([])

  const [formValue, setFormValue] = useState({
    employeeName: employees.employeeName,
    jobId: employees.jobId
  })

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  // const { employeeName } = formValue

  let navigate = useNavigate()

  // handles update submit and navigates back 
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/employees/${employees.id}`, formValue)
    navigate('/')
  }

  // handles delete submit and navigates back 
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:3001/api/employees/${employees.id}`, formValue)
    navigate('/')
  }
  // useEffect(() => {
  //   console.log('00000', user)
  //   const getEmployees = async () => {
  //     const response = await axios.get(
  //       `http://localhost:3001/api/employees/${user.id}}`

  //     )
  //     // console.log("employees: ", props.employeeId)
  //     setEmployees(response.data)
  //     // console.log('55555', user)
  //     console.log('emp. 11111', employees)
  //   }
  //   getEmployees()
  // }, [])


  return (
    // console.log('33333', employees) >
    < div className="info-wrapper" >
      <form onSubmit={handleSubmit}>
        <select className="create-form-select" name="employeeId" onChange={handleChange}>
          {employees.map((employee) => (
            <option value={employee.id}>{employee.businessTitle}</option>
          ))}
        </select>
        <input
          className="form"
          type="text"
          name="employeeName"
          placeholder="Name"
          value={employees.employeeName}
          onChange={handleChange}
        />
        <br />
        <button type='submit'>Update</button>
        <button onClick={handleSubmit2}>Delete</button>
      </form>
    </div >
  )
}

export default UpdateEmployee