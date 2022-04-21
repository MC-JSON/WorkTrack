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
    <div className="portal">
      <h1>Business Portal</h1>
      <div className='business-portal-create-business'>
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
      <div className="links">
        {/* business listings; logs; reports; modal? */}
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
