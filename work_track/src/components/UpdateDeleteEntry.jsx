import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


//built for edits
const InformationHolding = (props) => {

  let { entryId } = useParams()
  
  const [formValue, setFormValue] = useState({
    entryDate: props.entryDate,
    employeeId: props.employeeId,
    employeeHours: props.employeeHours
  })

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  const { entryDate, employeeId, employeeHours } = formValue

  let navigate = useNavigate()

  //handles update submit and navigates back 
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //     await axios.put(`http://localhost:3001/api/entries/${entryId}`, formValue)
  //     navigate('/')
  // }

//handles delete submit and navigates back to types
  // const handleSubmit2 = async (e) => {
  //   e.preventDefault()
  //     await axios.delete(`http://localhost:3001/api/entries/${entryId}`, formValue)
  //     navigate('/')
  // }


  //edit button left in for when user authentication is ready to deploy
  return (
    <div className="info-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          className="form"
          type="text"
          name="entryDate"
          placeholder="Date"
          value={entryDate}
          onChange={handleChange}
        />
        <input
          className="form"
          type="integer"
          name="employeeId"
          placeholder="Employee ID"
          value={employeeId}
          onChange={handleChange}
        />
        <input
          className="form"
          type="text"
          name="employeeHours"
          placeholder="Employee Hours"
          value={employeeHours}
          onChange={handleChange}
        />
        <br />
        <button type='submit'>Update</button>
      <button onClick={handleSubmit2}>Delete</button>
      </form>
    </div>
  )
}

export default InformationHolding