import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  //Navbar for Authenticated User
  if (user && authenticated) {
    authenticatedOptions = (
      <nav className="navbar">
        <h3>Welcome {user.ownerEmail}!</h3>
        <Link className="click-login" to={`/portal/${user.id}`}>
          Home
        </Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }
  //Navbar for Non-Authenticated User
  const publicOptions = <nav className="navbar"></nav>

  return (
    <header>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav
