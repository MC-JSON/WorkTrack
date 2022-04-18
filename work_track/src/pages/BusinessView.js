import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CreateEmployee from '../components/CreateEmployee'
import CreatePosition from '../components/CreatePosition'
import BusinessRend from '../components/BusinessRend'
import axios from 'axios'

const BusinessView = ({ props, user, authenticated }) => {
  let navigate = useNavigate()
  let { ownerId, businessId, jobId } = useParams()

  return user && authenticated ? (
    <div>
      <h1>Business Homepage</h1>
      <div>
        {/* dropdown menu with modal pop-up?; logs; reports */}
        <CreateEmployee
          ownerId={ownerId}
          businessId={businessId}
          jobId={jobId}
        />
        <CreatePosition ownerId={ownerId} businessId={businessId} />
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3> oops! you must be signed in to do that</h3>
      <button onClick={() => navigate('/')}>Sign In</button>
    </div>
  )
}

export default BusinessView
