import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//built for edits
const UpdatePosition = (props) => {
  let { businessId } = useParams()

  const [position, setPosition] = useState({})

  const [formValue, setFormValue] = useState({
    jobTitle: props.jobTitle,
    jobDescription: props.jobDescription
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  let navigate = useNavigate()

  // handles update submit and navigates back
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/jobs/${props.jobId}`, formValue)
    navigate('/')
  }

  // handles delete submit and navigates back
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    await axios.delete(
      `http://localhost:3001/api/jobs/${props.jobId}`,
      formValue
    )
    navigate('/')
  }

  useEffect(() => {
    const getPositions = async () => {
      const response = await axios.get(`http://localhost:3001/api/jobs/${businessId}}`)
      setPosition(response.data)
      console.log('POSITIPON', response.data)
    }
    getPositions()
  }, [])
  console.log('876543', position)

  const { jobTitle, jobDescription } = formValue

  return (
    // console.log('999999', position)
    (
      <div className="info-wrapper">
        <form onSubmit={handleSubmit}>
          <select
            className="create-form-select"
            name="jobId"
            onChange={handleChange}
          >
            {/* {position.map((position) => (
            <option value={position.id}>{position.jobTitle}</option>
          ))} */}
          </select>
          <input
            className="form"
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={jobTitle}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="jobDescription"
            placeholder="Job Description"
            value={jobDescription}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Update</button>
          <button onClick={handleSubmit2}>Delete</button>
        </form>
      </div>
    )
  )
}

export default UpdatePosition
