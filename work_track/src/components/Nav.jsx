import { Link } from 'react-router-dom'

//navigation bar built
const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user, authenticated) {
    authenticatedOptions = (
      <nav>
        <h3>welcome {user.email}!</h3>
        <Link to='/portal/:employee_id'>| Home </Link>
        {/* <Link to='/createbusiness'>| CreateBusiness | </Link>
        <Link to='/createemployee'> CreateEmployee | </Link> */}
        <Link onClick={handleLogOut} to='/'>Sign Out |</Link>
        {/* <Link to="/register">Create Account</Link> */}

      </nav>
    )
  }


  const publicOptions = (

    <nav className='navbar'>
      <div>
        {/* <Link to="/portal">Business Portal</Link> */}
        <Link to="/signin">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>

  )

  return (
    <header>
      <Link to='/'>
        <Link to="/register">Register</Link>

        <div>
          div
    </div>
      </Link>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav