import { Link } from 'react-router-dom'

//navigation bar built
const Nav = (props) => {
  return (
    <header>
      <nav className='navbar'>
        <div>
          {/* <Link to="/portal">Business Portal</Link> */}
          {/* <Link to="/signin">Login</Link> */}
          <Link to="/register">Create Account</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav