import { useNavigate, useParams } from 'react-router-dom'
import CreateBusiness from '../components/CreateBusiness'

const BusinessPortal = ({ user, authenticated }) => {
  let { ownerId } = useParams()
  let navigate = useNavigate()

  return user && authenticated ? (
    <div className="portal">
      <h1>Business Portal</h1>
      <div className="links">
        {/* business listings; logs; reports; modal? */}
        <CreateBusiness ownerId={ownerId} />
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3> oops! you must be signed in to do that</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default BusinessPortal
