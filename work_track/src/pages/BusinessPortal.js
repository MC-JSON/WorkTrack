import { Link } from 'react-router-dom'

const BusinessPortal = (props) => {
  return (
    <div className="portal">
      <h1>Business Portal</h1>
      <div className="links">
        {/* business listings; logs; reports; modal? */}
        <Link to="/createbusiness">Create Business</Link>
        <Link to="/createemployee">Create Employee</Link>
      </div>
    </div>
  )
}

export default BusinessPortal
