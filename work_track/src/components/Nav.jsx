import { Link } from 'react-router-dom'

//navigation bar built
const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user && authenticated) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.ownerEmail}!</h3>
        <Link to={`/portal/${user.id}`}>Home</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
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
