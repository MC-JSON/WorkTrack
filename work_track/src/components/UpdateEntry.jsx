import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


//built for edits
const InformationHolding = (props) => {

  let { entryId, logId } = useParams()
  
  const [entries, setEntries] = useState()

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

  // handles update submit and navigates back 
  const handleSubmit = async (e) => {
    e.preventDefault()
      await axios.put(`http://localhost:3001/api/entries/${entryId}`, formValue)
      navigate('/')
  }

// handles delete submit and navigates back 
  const handleSubmit2 = async (e) => {
    e.preventDefault()
      await axios.delete(`http://localhost:3001/api/entries/${entryId}`, formValue)
      navigate('/')
  }

  useEffect(() => {
    const getEntries = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/entries/${logId}}`
      )
      setEntries(response.data)
    }
    getEntries()
  }, [])


  return (
    <div className="info-wrapper">
      <form onSubmit={handleSubmit}>
        {/* <input
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
        /> */}
        <br />
        <button type='submit'>Update</button>
      <button onClick={handleSubmit2}>Delete</button>
      </form>
    </div>
  )
}

export default InformationHolding