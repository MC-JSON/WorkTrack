import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const BusinessPortal = ({ user, authenticated }) => {
  let navigate = useNavigate()

  return user && authenticated ? (
    <div className="portal">
      <h1>Business Portal</h1>
      <div className="links">
        {/* business listings; logs; reports; modal? */}
        <Link to="/createbusiness">Create Business</Link>
        <Link to="/createemployee">Create Employee</Link>
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
