import SignIn from './SignIn'

const Home = ({ setUser, toggleAuthenticated, user, authenticated }) => {
  return (
    <div className="home-wrapper">
      <div className="site-title-wrapper">
        <div className="site-title">
          W <i className="fa-solid fa-clock"></i> r k T r a c k
        </div>
        <div className="site-slogan">The daily work log, redefined</div>
      </div>
      <div className="left-side">
        <div className="login-form-wrapper">
          <SignIn
            setUser={setUser}
            user={user}
            toggleAuthenticated={toggleAuthenticated}
            authenticated={authenticated}
          />
        </div>
      </div>
      <div className="right-side">
        <div className="site-info-wrapper">
          <p>Welcome to WorkTrack</p>
          <p>A simple time management app</p>
        </div>
      </div>
    </div>
  )
}

export default Home
