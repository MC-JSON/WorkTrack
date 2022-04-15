import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const BusinessView = ({ user, authenticated }) => {
  let navigate = useNavigate()
  


  return (user && authenticated) ? (


    <div>
      <h1>Business Homepage</h1>
      <div>
        <Link to="/createemployee">Create Employee</Link>
      </div>
    </div>


  
  ) : (
    <div className='protected'>
      <h3> oops! you must be signed in to do that</h3>
      <button onClick={()=> navigate('/signin')}>Sign In</button>
    </div>
  )
  
  }

export default BusinessView
