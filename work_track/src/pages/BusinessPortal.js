import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CreateBusiness from '../components/CreateBusiness'
import BusinessRend from '../components/BusinessRend'
import UpdateBusiness from '../components/UpdateBusiness'
import axios from 'axios'

const BusinessPortal = ({ props, user, authenticated }) => {
  console.log(user)
  let { ownerId } = useParams()
  let navigate = useNavigate()

  const [businesses, setBusinesses] = useState([])

//   const getBusinesses = async () => {
//     const response = await axios.get(
//       `http://localhost:3001/api/owners/${ownerId}/businesses`
//     )
//     // console.log(response)
//     setBusinesses(response.data)
//     // console.log(businesses)
//   }

  useEffect(() => {

    const getBusinesses = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/owners/${ownerId}/businesses`
      )
      setBusinesses(response.data)
    }
    getBusinesses()

  }, [])

  const showBusiness = (businessId) => {
    navigate(`/users/${ownerId}/businesses/${businessId}`)
  }
  return user && authenticated ? (
    <div className="portal">
      <h1>Business Portal</h1>

      <div>
        <button onClick={() => getBusinesses()}>Show Businesses</button>
        {businesses.map((business) => (
          <BusinessRend
            key={business.id}
            businessName={business.businessName}
            image={business.businessImage}
            id={business.id}
            showBusiness={showBusiness}
          />
        ))}
      </div>
      <div className="links">
        {/* business listings; logs; reports; modal? */}
        <CreateBusiness ownerId={ownerId} />
        {/* <UpdateBusiness businessId={props.businessId} /> */}
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3> oops! you must be signed in to do that</h3>
      <button onClick={() => navigate('/')}>Sign In</button>
    </div>
  )
}

export default BusinessPortal
