import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CreateBusiness from '../components/CreateBusiness'
import BusinessRend from '../components/BusinessRend'
import UpdateBusiness from '../components/UpdateBusiness'
import axios from 'axios'

const BusinessPortal = ({
  props,
  user,
  authenticated,
  setBusinesses,
  businesses,
  setBusinessName
}) => {
  console.log(user)
  let { ownerId } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const getBusinesses = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/owners/${ownerId}/businesses`
      )
      setBusinesses(response.data)
    }
    getBusinesses()
  }, [])

  const showBusiness = (businessId, businessName) => {
    setBusinessName(businessName)
    navigate(`/users/${ownerId}/businesses/${businessId}`)
  }
  return user && authenticated ? (
    <div className="portal">
      <h1>Business Portal</h1>

      <div>
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
        <button onClick={() => navigate('/update-businesses')}>
          update businesses
        </button>
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
