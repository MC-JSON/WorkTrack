import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CreateBusiness from '../components/CreateBusiness'
import BusinessRend from '../components/BusinessRend'
import axios from 'axios'

const BusinessPortal = ({
  props,
  user,
  authenticated,
  setBusinesses,
  businesses,
  setBusinessName,
  setBusinessAddress,
  setBusinessCity,
  setBusinessState,
  setBusinessImage
}) => {
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

  const showBusiness = (
    businessId,
    businessName,
    businessAddress,
    businessCity,
    businessState,
    businessImage
  ) => {
    setBusinessName(businessName)
    setBusinessAddress(businessAddress)
    setBusinessCity(businessCity)
    setBusinessState(businessState)
    setBusinessImage(businessImage)
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
            businessAddress={business.businessAddress}
            businessCity={business.businessCity}
            businessState={business.businessState}
            businessImage={business.businessImage}
            id={business.id}
            showBusiness={showBusiness}
          />
        ))}
      </div>
      <h3>Business & Log Creation Form</h3>
      <div className="links">
        <CreateBusiness ownerId={ownerId} user={user} />
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
