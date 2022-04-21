import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CreateBusiness from '../components/CreateBusiness'
import BusinessRend from '../components/BusinessRend'
import axios from 'axios'

const BusinessPortal = ({
  props,
  user,
  authenticated,
  setBusinesses,
  businesses,
  setBusinessName
}) => {
  let { ownerId, businessId } = useParams()
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
    <div className="business-portal-wrapper">
      <div className="business-portal-info-wrapper">
        <h1>Business Portal</h1>
      </div>
      <div className="business-map">
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
      <h3>Business & Log Creation Form</h3>
      <div className="links">
        <CreateBusiness ownerId={ownerId} />
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
