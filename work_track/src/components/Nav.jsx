import { Link } from 'react-router-dom'

//navigation bar built
const Nav = (authenticated, user, userName, handleLogOut) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>welcome {`${userName}`}!</h3>
        <Link to="/portal/:employee_id">Home</Link>
        <Link to="/createbusiness">CreateBusiness</Link>
        <Link to="/createemployee">CreateEmployee</Link>
        <Link to="/" onClick={() => handleLogOut}>
          Sign Out
        </Link>
        <Link to="/register">Create Account</Link>
      </nav>
    )
  }

  const publicOptions = (
    <header>
      <nav>
        <h3>Welcome!</h3>
        {/* <Link to="/portal">Business Portal</Link> */}
        {<Link to="/signin">Login</Link>}
        {<Link to="/register">Create Account</Link>}
      </nav>
    </header>
  )
  return (
    <div>{authenticated && user ? authenticatedOptions : publicOptions}</div>
  )
}

export default Nav
