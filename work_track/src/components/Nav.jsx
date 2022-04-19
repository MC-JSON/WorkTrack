import { Link } from 'react-router-dom'

//navigation bar built
const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user, authenticated) {
    console.log('DFGHJKL', user)
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.ownerEmail}!</h3>
        <Link to={`/portal/${user.id}`}>Home</Link>
        {/* <Link to='/createbusiness'>| CreateBusiness | </Link>
        <Link to='/createemployee'> CreateEmployee | </Link> */}
        <Link onClick={handleLogOut} to='/'>Sign Out</Link>
        <Link to='/updatebusinesspage'>UpdateBusiness</Link>
        <Link to='/updateemployeepage'>UpdateEmployee</Link>
        <Link to='/updateentrypage'>UpdateEntry</Link>
        <Link to='/updatepositionpage'>UpdatePosition</Link>
        {/* <Link to="/register">Create Account</Link> */}

      </nav>
    )
  }

  const publicOptions = (

    <nav className='navbar'>
      <div>
        {/* <Link to="/portal">Business Portal</Link> */}
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>

  )

  return (
    <header>
      <Link to='/'>
        <Link to="/register"></Link>

        <div>

        </div>
      </Link>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav
