import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBusinessPage = ({
  setBusinesses,
  businesses,
  user,
  authenticated
}) => {
  //on-click navigate to that business page -- page with form to update or delete business selected

  const [businessId, setBusinessId] = useState()

  let navigate = useNavigate()

  // handles update submit and navigates back
  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate(`/updated-businesses/${businessId}`)
  }

  const handleChange = (event) => {
    setBusinessId({
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <h1>Which business would you like to update?</h1>
      <form onSubmit={handleSubmit}>
        <select
          className="create-form-select"
          name="businessId"
          onChange={handleChange}
        >
          {businesses.map((business) => (
            <option value={business.id}>{business.businessName}</option>
          ))}
        </select>
        <button>Choose Business</button>
      </form>
    </div>
  )
}

export default UpdateBusinessPage
