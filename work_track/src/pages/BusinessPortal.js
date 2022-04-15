import { Link } from 'react-router-dom'

const BusinessPortal = (props) => {
  return (
    <div>
      <h1>Business Portal</h1>
      <div>
        <Link to="/createbusiness">Create Business</Link>
        <Link to="/createemployee">Create Employee</Link>
      </div>
    </div>
  )
}

export default BusinessPortal
