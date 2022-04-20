import { Link } from 'react-router-dom'

//navigation bar built
const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user && authenticated) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.ownerEmail}!</h3>
        <Link to={`/portal/${user.id}`}>Home</Link>
        {/* <Link to='/createbusiness'>| CreateBusiness | </Link>
        <Link to='/createemployee'> CreateEmployee | </Link> */}
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
        <Link to="/update-businesses">UpdateBusiness</Link>
        <Link to="/update-employee-page">UpdateEmployee</Link>
        <Link to="/update-entry-page">UpdateEntry</Link>
        <Link to="/update-position-page">UpdatePosition</Link>
        {/* <Link to="/register">Create Account</Link> */}
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navbar">
      <div>
        {/* <Link to="/portal">Business Portal</Link> */}
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  )

  return (
    <header>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav
